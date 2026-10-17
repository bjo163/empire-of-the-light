
/**
 * Empire of the Light local Fastify host.
 * IMPORTANT: not an authorized second public API for MoonWitness Gen2.
 * Run on loopback until approved integration/cutover ADR.
 */
import Fastify from "fastify";
import cors from "@fastify/cors";
import { readFile } from "node:fs/promises";
import { createRemoteJWKSet, jwtVerify } from "jose";
import pg from "pg";
import { resolveModules, planEnabled } from "@empire/module-kit";
import type { ModuleManifest } from "@empire/module-kit";

const moduleIds=["kernel","research","scripture","journey","mission","governance","ziil"];
const parse=async (path:string)=>JSON.parse(await readFile(new URL(path,import.meta.url),"utf8"));
const manifests=await Promise.all(moduleIds.map(async id=>await parse("../../../modules/"+id+"/manifest.json"))) as ModuleManifest[];
const activation=await parse("../../../config/modules.json") as {approvedEnabled:string[]};
const catalog=resolveModules(manifests) as readonly ModuleManifest[];
const enabled=planEnabled(manifests,activation.approvedEnabled) as readonly ModuleManifest[];
const app=Fastify({logger:{redact:["req.headers.authorization","req.headers.cookie"]}});
const origins=(process.env.CORS_ORIGINS||"http://localhost:5173,http://127.0.0.1:5173").split(",").map(x=>x.trim()).filter(Boolean);
await app.register(cors,{origin:origins,credentials:false});
const port=Number(process.env.API_PORT || 3301);
const host=process.env.API_HOST || "127.0.0.1";
const dbUrl=process.env.DATABASE_URL;
const pool=dbUrl ? new pg.Pool({connectionString:dbUrl,connectionTimeoutMillis:3000}) : undefined;
const oidc=[process.env.OIDC_ISSUER,process.env.OIDC_AUDIENCE,process.env.OIDC_JWKS_URL];
const oidcConfigured=oidc.every(Boolean);
if(oidc.some(Boolean) && !oidcConfigured) throw new Error("OIDC must set issuer, audience and JWKS URL together");
const jwks=oidcConfigured ? createRemoteJWKSet(new URL(process.env.OIDC_JWKS_URL!)) : undefined;
const auth=async(request:any,reply:any)=>{
  if(!jwks){reply.code(503).send({error:"IDENTITY_NOT_CONFIGURED"});return;}
  const raw=request.headers.authorization;
  if(typeof raw!=="string"||!raw.startsWith("Bearer ")){reply.code(401).send({error:"AUTHENTICATION_REQUIRED"});return;}
  try {
    const result=await jwtVerify(raw.slice(7),jwks,{issuer:process.env.OIDC_ISSUER,audience:process.env.OIDC_AUDIENCE});
    const roles=Array.isArray(result.payload.roles)?result.payload.roles:[];
    if(!roles.includes("operator")&&!roles.includes("admin")){
      reply.code(403).send({error:"OPERATOR_ROLE_REQUIRED"});return;
    }
    request.operator={id:result.payload.sub};
  }catch{reply.code(401).send({error:"INVALID_ACCESS_TOKEN"});}
};
app.get("/v1/health",async()=>({status:"ok",service:"empire-api-local"}));
app.get("/v1/readiness",async(_request,reply)=>{
  let dbReady=false;
  if(pool)try{await pool.query("SELECT 1");dbReady=true;}catch{dbReady=false;}
  const ready=dbReady && oidcConfigured;
  return reply.code(ready?200:503).send({status:ready?"ok":"degraded",checks:{database:dbReady?"ok":pool?"unavailable":"unconfigured",identity:oidcConfigured?"configured":"unconfigured"}});
});
app.get("/v1/metadata/capabilities",async()=>({capabilities:enabled.flatMap(m=>m.capabilities),environment:"LOCAL_SCAFFOLD"}));
app.get("/v1/modules",async()=>({items:catalog.map(m=>({id:m.id,title:m.title,version:m.version,state:m.state,enabled:enabled.some(e=>e.id===m.id)}))}));
app.get("/v1/operator/modules",{preHandler:auth},async()=>({items:catalog}));
app.addHook("onClose",async()=>{await pool?.end();});
app.setNotFoundHandler((_req,reply)=>reply.code(404).send({error:"NOT_FOUND"}));
await app.listen({host,port});

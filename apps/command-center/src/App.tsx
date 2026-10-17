
import {useEffect,useState} from "react";
type Signal="checking"|"ok"|"degraded"|"unavailable";
type Module={id:string;title:string;version:string;state:string;enabled:boolean};
type Snapshot={health:Signal;readiness:Signal;modules:Module[];capabilities:string[];error?:string;checkedAt?:string};
const api=(import.meta.env.VITE_API_ORIGIN || "http://127.0.0.1:3301").replace(/\/$/,"");
const empty:Snapshot={health:"checking",readiness:"checking",modules:[],capabilities:[]};
async function fetchJson(path:string) {
 const response=await fetch(api+path,{headers:{accept:"application/json"},signal:AbortSignal.timeout(7000)});
 const body=await response.json().catch(()=>null) as Record<string,unknown>|null;
 return {status:response.status,body};
}
export function App(){
 const [snap,setSnap]=useState<Snapshot>(empty);
 const [loading,setLoading]=useState(false);
 async function refresh(){
  setLoading(true);
  const [health,readiness,modules,capabilities]=await Promise.allSettled([
    fetchJson("/v1/health"),fetchJson("/v1/readiness"),fetchJson("/v1/modules"),fetchJson("/v1/metadata/capabilities")
  ]);
  const status=(x:PromiseSettledResult<{status:number;body:Record<string,unknown>|null}>):Signal=>x.status==="fulfilled"&&x.value.status===200&&x.value.body?.status==="ok"?"ok":x.status==="fulfilled"&&x.value.body?.status==="degraded"?"degraded":"unavailable";
  const moduleItems=modules.status==="fulfilled"&&modules.value.status===200&&Array.isArray(modules.value.body?.items)?modules.value.body.items as Module[]:[];
  const capItems=capabilities.status==="fulfilled"&&capabilities.value.status===200&&Array.isArray(capabilities.value.body?.capabilities)?capabilities.value.body.capabilities as string[]:[];
  setSnap({health:status(health),readiness:status(readiness),modules:moduleItems,capabilities:capItems,
   error:[health,readiness,modules,capabilities].some(x=>x.status==="rejected")?"Some API resources are unreachable. This scaffold is not an authenticated production console.":undefined,
   checkedAt:new Date().toISOString()});
  setLoading(false);
 }
 useEffect(()=>{void refresh();},[]);
 return <div className="shell"><aside><div className="logo">◐ <strong>100CENTER</strong></div><small>EMPIRE OF THE LIGHT</small>
   <nav aria-label="Admin navigation"><a href="#overview">Overview</a><a href="#modules">Modules</a><a href="#releases">Release Gates</a></nav>
   <div className="sidebar-foot">GENESIS / MONOREPO V4<br/>Public operational metadata only</div>
 </aside><main><header><span className="eyebrow">A-L-L-A-H COMMAND CENTER · ARSY TECHNOLOGY</span><h1>Operational Foundation</h1><p>Source-grounded mission infrastructure. Real status only; no invented impact, religious rankings or unsupported access.</p></header>
 <section id="overview"><div className="section-head"><h2>API Boundary</h2><button disabled={loading} onClick={()=>void refresh()}>{loading?"Checking…":"Refresh status"}</button></div>
 <div className="metrics"><article><small>PROCESS HEALTH</small><strong data-state={snap.health}>{snap.health}</strong></article><article><small>DEPENDENCY READINESS</small><strong data-state={snap.readiness}>{snap.readiness}</strong></article><article><small>LAST CHECKED</small><strong className="time">{snap.checkedAt?new Date(snap.checkedAt).toLocaleString():"Not checked"}</strong></article></div>
 {snap.error&&<p role="status" className="notice">{snap.error}</p>}
 </section>
 <section id="modules"><div className="section-head"><h2>Module Registry</h2><span className="eyebrow">FIRST-PARTY · READ ONLY</span></div>
 <div className="module-list">{snap.modules.length?snap.modules.map(m=><article key={m.id}><div><strong>{m.title}</strong><small>{m.id} · {m.version}</small></div><span className={m.enabled?"state active":"state"}>{m.enabled?"BOOTSTRAP":"SCAFFOLD"}</span></article>):<p className="notice">Module catalog unavailable. This does not mean zero installed modules.</p>}</div>
 <p className="muted">Reported capabilities: {snap.capabilities.length?snap.capabilities.join(" · "):"Unavailable"}. Install/upgrade controls are intentionally disabled until authorization and persistence exist.</p>
 </section>
 <section id="releases"><h2>Next gates</h2><p>OIDC sign-in, tenant isolation, verified PostgreSQL migrations, one persisted ResearchRun→Evidence lifecycle, API contract review, audit and tested production deployment.</p>
 <p><a href="https://github.com/bjo163/empire-of-the-light/blob/main/docs/OPERATIONS_RELEASE_GATES.md">View release checklist →</a></p></section>
 <footer>ONE VOCABULARY · HUMAN APPROVAL · EVERY JOURNEY MATTERS</footer></main></div>;
}


import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {resolveModules,planEnabled} from "../packages/module-kit/src/index.mjs";
const read=p=>JSON.parse(readFileSync(new URL("../"+p,import.meta.url),"utf8"));
const ids=["kernel","research","scripture","journey","mission","governance","ziil"];
const manifests=ids.map(id=>read("modules/"+id+"/manifest.json"));
const ordered=resolveModules(manifests);
assert.equal(manifests.length,7);
assert.equal(new Set(ordered.map(m=>m.id)).size,7);
assert.equal(ordered[0].id,"kernel");
const config=read("config/modules.json");
assert.deepEqual(planEnabled(manifests,config.approvedEnabled).map(x=>x.id),["kernel"]);
const work=read("package.json");
assert.ok(work.scripts.validate.includes("validate-monorepo.mjs"));
assert.equal(work.private,true);
for(const pkg of ["apps/api","apps/command-center","apps/portal","packages/db","packages/module-kit"]){
 const item=read(pkg+"/package.json");
 assert.equal(item.private,true);
}
console.log("PASS: seven first-party module manifests, dependency order, kernel allowlist, workspace packages.");

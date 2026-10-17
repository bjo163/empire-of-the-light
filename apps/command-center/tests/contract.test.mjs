
import assert from "node:assert/strict";import {test} from "node:test";import {readFile} from "node:fs/promises";
test("Vite admin renders real API statuses, no demo religious scoring",async()=>{
 const s=await readFile(new URL("../src/App.tsx",import.meta.url),"utf8");
 assert.match(s,/\/v1\/health/);assert.match(s,/\/v1\/readiness/);
 assert.match(s,/\/v1\/modules/);assert.match(s,/Module Registry/);
 assert.doesNotMatch(s,/BELIEF-TRUTH ALIGNMENT ANALYSIS|98\.7%|8,142/);
});

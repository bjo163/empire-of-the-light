import {test} from "node:test";import assert from "node:assert/strict";import {readFile} from "node:fs/promises";
test("public site truthfully labels aspirational capabilities and provides three usable routes",async()=>{
 const home=await readFile(new URL("../app/page.tsx",import.meta.url),"utf8");
 const system=await readFile(new URL("../app/systems/page.tsx",import.meta.url),"utf8");
 const road=await readFile(new URL("../app/roadmap/page.tsx",import.meta.url),"utf8");
 assert.match(home,/DESIGN & RESEARCH VISION/);
 assert.match(home,/HELIOGRID/);
 assert.match(home,/Q-REALM/);
 assert.match(home,/MATERIAL FORGE/);
 assert.match(system,/MONOREPO/);
 assert.match(road,/NOT INSTALLED/);
 assert.match(home,/href="\/systems"/);
 assert.match(home,/href="\/roadmap"/);
 assert.doesNotMatch(home,/98\.7%|BELIEF-TRUTH ALIGNMENT/);
});
test("world traditions do not claim theological authority or fully ingested texts",async()=>{
 const src=await readFile(new URL("../components/Explorer.tsx",import.meta.url),"utf8");
 assert.match(src,/Daoist and Shinto/);
 assert.match(src,/not a live physical device/);
 assert.match(src,/No invented quantum advantage|no invented quantum advantage/i);
});


import {test} from "node:test";import assert from "node:assert/strict";import {readFile} from "node:fs/promises";
test("Next public portal does not claim production readiness",async()=>{
 const page=await readFile(new URL("../app/page.tsx",import.meta.url),"utf8");
 assert.match(page,/FOUNDATION, NOT PRODUCTION CERTIFIED/);
 assert.match(page,/source boundaries/);
 assert.doesNotMatch(page,/98\.7%/);
});

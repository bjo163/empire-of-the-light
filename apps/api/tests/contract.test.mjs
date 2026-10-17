
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
test("API stays local by default and private routes require server-side OIDC", async()=>{
  const source=await readFile(new URL("../src/server.ts",import.meta.url),"utf8");
  assert.match(source,/process.env.API_HOST \|\| "127.0.0.1"/);
  assert.match(source,/IDENTITY_NOT_CONFIGURED/);
  assert.match(source,/jwtVerify/);
  assert.match(source,/\/v1\/readiness/);
  assert.doesNotMatch(source,/role="god"/);
});

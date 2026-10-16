
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const read = (path) => JSON.parse(readFileSync(new URL('../' + path, import.meta.url), 'utf8'));
const registry = read('data/unilex/terms.v0.1.json');
const entries = registry.entries;
const ids = new Set(entries.map(x=>x.id));
assert.equal(entries.length,71,'Expected 71 UNILEX seed concepts');
assert.equal(ids.size,entries.length,'Duplicate UNILEX IDs');
const counts={};
for (const e of entries) {
  assert.match(e.id,/^[USTP][0-9]{3}$/);
  assert.equal(e.domain,({U:'UNIVERSAL',S:'SCRIPTURE',T:'TEXT_SOURCE',P:'PROJECT'})[e.id[0]]);
  assert.ok(e.preferredLabel.en?.trim() && e.preferredLabel.id?.trim() && e.definition.id?.trim());
  counts[e.domain]=(counts[e.domain]||0)+1;
  for(const r of e.relations){
    assert.ok(ids.has(r.targetId), e.id + ' references missing ' + r.targetId);
    assert.ok(registry.relationTypes.includes(r.type), 'Unrecognized relation');
    assert.notEqual(e.id,r.targetId,'Self-reference not allowed');
  }
}
assert.deepEqual(counts,{UNIVERSAL:25,SCRIPTURE:13,TEXT_SOURCE:4,PROJECT:29});
for(const [a,b] of [['S009','P002'],['S012','T003']]){
  assert.ok(ids.has(a)&&ids.has(b));
}
const source=read('data/scripture/source-families.v0.1.json');
assert.equal(source.families.length,4);
assert.deepEqual(source.families.map(x=>x.familyId),['SRC-TOR','SRC-ZAB','SRC-INJ','SRC-QUR']);
for(const fam of source.families) {
 assert.ok(ids.has(fam.referentConceptId)&&ids.has(fam.textConceptId));
 assert.equal(fam.status,'METADATA_ONLY');
 assert.notEqual(fam.referentConceptId,fam.textConceptId);
}
const pillars=read('data/organization/pillars.json');
assert.deepEqual(pillars.pillars.map(x=>x.id),['PATHFINDING','TRUTH_GUIDANCE','RENEWAL','PROTECTION']);
const god=read('data/organization/god99.json');
assert.equal(god.personnel.length,99);
assert.equal(new Set(god.personnel.map(x=>x.id)).size,99);
assert.equal(god.departments.length,9);
for(const dept of god.departments) assert.equal(god.personnel.filter(x=>x.departmentId===dept.id).length,11);
const wings=read('data/organization/wings10.json');
assert.equal(wings.wings.length,10);
assert.equal(new Set(wings.wings.map(x=>x.wingId)).size,10);
for(const wing of wings.wings){
 assert.ok(god.personnel.some(x=>x.id===wing.proposedLeadPersonaSlot));
 assert.ok(pillars.pillars.some(x=>x.id===wing.primaryPillar));
}

const ages=read('data/organization/age-code.v1.json');
assert.equal(ages.standardId,'AGE_CODE');
assert.equal(ages.minimumIndependentOperatorAgeYears,18);
assert.equal(ages.categories.length,5);
assert.deepEqual(ages.categories.map(c=>c.code),['AGE-HUMAN','AGE-VISUAL','AGE-TENURE','AGE-THEOLOGY','AGE-SYSTEM']);
const bands=ages.humanAgeBands;
assert.equal(bands[0].minInclusive,0);
for(let i=1;i<bands.length;i++) assert.equal(bands[i-1].maxExclusive,bands[i].minInclusive,'Non-contiguous age bands');
assert.equal(bands.at(-1).maxExclusive,null);
assert.equal(ages.roleFamilies.length,5);
for(const role of ages.roleFamilies){
 assert.ok(role.realOperatorMinimumAgeYears>=18);
 assert.equal(role.roleAgeUpperLimitYears,null);
}
assert.ok(ages.roleFamilies.some(r=>r.id==='GOD99' && r.fictionalApparentAgeYears.min===18));
assert.ok(ages.roleFamilies.some(r=>r.id==='WINGS10' && r.fictionalApparentAgeYears.min===25));
assert.equal(ages.youthPolicy.ageBelowYears,18);
assert.equal(ages.youthPolicy.independentCriticalApproval,false);
assert.equal(ages.scriptureAge.chronologicalAgeYears,null);
assert.equal(ages.scriptureAge.evidenceStatus,'NOT_SPECIFIED_AS_NUMERIC_AGE_IN_QURAN');
assert.equal(ages.privacy.storeExactBirthdateByDefault,false);
console.log('PASS: AGE CODE 5 dimensions, 6 age bands, G.O.D./WINGS role separation, youth restrictions, unknown scriptural angel ages.');
console.log('PASS: 71 UNILEX (25/13/4/29), 4 source families, 4 pillars, 99 personas in 9x11 departments, 10 WINGS, referential integrity.');

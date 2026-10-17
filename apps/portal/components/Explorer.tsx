"use client";
import { useState } from "react";
const items=[
 {id:"arsy",code:"SYS 01",name:"ARSY HYPERCOMPUTE",kind:"Intelligence & orchestration",stage:"DESIGN",description:"A governed tool router combining classical compute, local AI, retrieval, scientific simulation and human review. Not a single omnipotent AI.",inputs:["Authorized mission","Source-aware data","Available CPU/GPU"],outputs:["Traceable analysis","Recommended next steps","Audit trail"],accent:"#82ebe0"},
 {id:"heliogrid",code:"SYS 02",name:"HELIOGRID ENERGY OS",kind:"Power & measurement",stage:"DESIGN",description:"A proposed digital twin for monitoring real grid, solar, battery and server power. Protonic fuel-cell studies are research, not free-energy generation.",inputs:["Certified meters","Grid / solar telemetry","Battery status"],outputs:["Energy budget","Measured kWh","Safety alerts"],accent:"#f3c57b"},
 {id:"qrealm",code:"SYS 03",name:"Q-REALM",kind:"Quantum research",stage:"RESEARCH",description:"Reproducible quantum circuit simulation and optional external QPU benchmarks against classical methods. Hardware is not owned or deployed by this project.",inputs:["Problem definition","Classical baseline","Approved provider"],outputs:["Circuit metrics","Accuracy comparison","Experiment evidence"],accent:"#c7a5ff"},
 {id:"forge",code:"SYS 04",name:"MATERIAL FORGE",kind:"Material discovery",stage:"DESIGN",description:"A materials research pipeline: data licensing, DFT/simulation, candidate screening, professional bench testing and independent replication.",inputs:["Scientific datasets","Material structures","Lab safety plan"],outputs:["Simulation results","Candidate registry","Reviewable experiments"],accent:"#ffacb1"},
 {id:"knowledge",code:"SYS 05",name:"UNIVERSAL COSMOS",kind:"Knowledge & comparisons",stage:"METADATA",description:"UNILEX, Qur'an/Torah/Psalms/Gospels source families, plus proposed Daoist and Shinto studies with distinct editions, provenance and interpretations.",inputs:["Edition metadata","Licensed texts","Expert review"],outputs:["Contextual search","Term comparison","Source citations"],accent:"#a1e7b6"},
 {id:"ziil",code:"SYS 06",name:"ZIIL GOVERNANCE",kind:"Rights, review & safety",stage:"FOUNDATION",description:"Human governance, consent, risk assessment, privacy, appeals and bounded AI actions. The software does not grant religious or divine authority.",inputs:["Operator mandate","Risk evidence","Policy constraints"],outputs:["Review status","Safeguards","Audit records"],accent:"#8fbeff"}
] as const;
export function Explorer(){
 const [active,setActive]=useState<(typeof items)[number]["id"]>("arsy");
 const item=items.find(i=>i.id===active)??items[0];
 return <div className="explorer">
   <div className="explorer-menu" role="tablist" aria-label="System explorers">{items.map(x=><button key={x.id} role="tab" id={"tab-"+x.id} aria-controls="explorer-panel" aria-selected={active===x.id} onClick={()=>setActive(x.id)} className={active===x.id?"is-active":""}><span>{x.code}</span><strong>{x.name}</strong><i aria-hidden="true">↗</i></button>)}</div>
   <section id="explorer-panel" role="tabpanel" aria-labelledby={"tab-"+item.id} className="explorer-detail" style={{"--system-color":item.accent} as React.CSSProperties}>
     <div className="explorer-detail-top"><span className="panel-label">{item.kind}</span><span className="stage-pill">{item.stage}</span></div>
     <div className="explorer-visual" aria-hidden="true"><span className="explore-ring explore-ring-1"/><span className="explore-ring explore-ring-2"/><span className="explore-ring explore-ring-3"/><span className="explore-core">{item.code}</span></div>
     <h3>{item.name}</h3><p className="explorer-description">{item.description}</p>
     <div className="explorer-io"><div><span className="panel-label">INPUTS</span>{item.inputs.map(x=><p key={x}>↳ {x}</p>)}</div><div><span className="panel-label">EXPECTED OUTPUTS</span>{item.outputs.map(x=><p key={x}>↗ {x}</p>)}</div></div>
     <p className="explorer-note">Architecture preview. Status reflects repository planning, not a live physical device.</p>
   </section>
 </div>;
}

import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Roadmap & Real-World Readiness",description:"See what is implemented and what remains research in the Empire of the Light ecosystem."};
const phases=[
 {step:"00",title:"Architecture & registry foundation",status:"FOUNDATION",note:"V5 proposal, first-party manifests, ontology metadata and CI; not proof that science hardware exists."},
 {step:"01",title:"100CENTER operational proof",status:"NEXT",note:"Real OIDC identity, Drizzle migrations, verified PostgreSQL, authorized ResearchRun → Job → Evidence, audit and restart recovery."},
 {step:"02",title:"HELIOGRID energy pilot",status:"PLANNED",note:"Read-only calibrated meters, measured watts/kWh and safe energy simulation before any physical control."},
 {step:"03",title:"Material Forge simulation",status:"PLANNED",note:"Reproducible classical material simulation and provenance; qualified laboratory partnerships for samples."},
 {step:"04",title:"Quantum / proton / photon benchmarks",status:"RESEARCH",note:"Optional QPU, optical and protonic laboratory work with classical baselines, whole-system power and measured precision."},
 {step:"05",title:"Comparative Cosmos Corpus",status:"PLANNED",note:"Licensed Daoist, Shinto and other sources, expert context, explicit non-equivalence of scientific and religious terms."},
 {step:"06",title:"Secure ecosystem operations",status:"FUTURE",note:"Independent safety review, backup/restore, authorization tests, monitored deployment and documented rollback."}
];
const status=[
 ["Monorepo scaffold","CODE EXISTS"],
 ["Seven module manifests","VALIDATED"],
 ["Universal vocabulary","REGISTRY EXISTS"],
 ["Neon Free database","CONNECTION VERIFIED"],
 ["100CENTER full operator identity","NOT CERTIFIED"],
 ["Physical solar / proton systems","NOT INSTALLED"],
 ["Owned quantum hardware","NOT INSTALLED"],
 ["New material synthesized","NOT CLAIMED"]
];
export default function RoadmapPage(){
 return <div className="container inner-page">
 <div className="page-breadcrumb"><Link href="/">← EMPIRE</Link><span>/</span> ROADMAP <span>/</span> READINESS</div>
 <div className="page-hero"><p className="eyebrow">BUILD WHAT CAN BE VERIFIED</p><h1>VISIONARY BY DESIGN.<br/><em>HONEST BY DEFAULT.</em></h1><p>The roadmap deliberately separates code, scientific literature, physical hardware and operational certification. A concept is not a deployment — and a successful build is not a real-world experiment.</p></div>
 <section className="roadmap-page-grid"><div><p className="eyebrow">IMPLEMENTATION HORIZON</p><h2>FROM BLUEPRINT<br/>TO REALITY.</h2><div className="timeline">{phases.map((p,i)=><div key={p.step} className="timeline-step"><span className="timeline-index">{p.step}</span><div><span className={"timeline-tag "+(i===0?"timeline-first":"")}>{p.status}</span><h3>{p.title}</h3><p>{p.note}</p></div></div>)}</div></div><aside className="readiness-board"><span className="panel-label">REPOSITORY TRUTH TABLE</span><h3>WHAT IS REAL NOW?</h3>{status.map(([k,v])=><div className="readiness-row" key={k}><span>{k}</span><strong>{v}</strong></div>)}<p>These labels describe the audited baseline at the time of this portal design, not an automatically updated operations monitor.</p></aside></section>
 <section className="cta-panel"><div><p className="eyebrow">WORK IN THE OPEN</p><h2>ONE REPO. TRACEABLE DECISIONS.</h2><p>Review the engineering and research proposal, then follow changes through GitHub. Real deployments and scientific results require their own evidence.</p></div><a className="btn btn-primary" href="https://github.com/bjo163/empire-of-the-light" target="_blank" rel="noopener noreferrer">Explore GitHub ↗</a></section>
 </div>;
}

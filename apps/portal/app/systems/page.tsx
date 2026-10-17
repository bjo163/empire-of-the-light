import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata={title:"System Atlas",description:"Detailed overview of all seven Empire of the Light architecture planes and technology maturity."};
const planes=[
 ["01","HUMAN & OPERATIONS","Human-led command center","100CENTER","Operator access, consent, mission scope, SELF/COMMUNITY/GLOBAL journeys and responsibility. Real authority requires verified authentication and a reviewed mandate."],
 ["02","INTELLIGENCE & ORCHESTRATION","The ARSY engine","ARSY","Local language models, tools, source retrieval, scientific simulations, measured evaluations, result provenance and bounded actions."],
 ["03","HYPERCOMPUTE","Different computation, one broker","Q-REALM","CPU/GPU classical baselines first, with optional HPC/QPU, photon and proton computing research if independently justified."],
 ["04","ENERGY & PHYSICAL WORLD","Measure before controlling","HELIOGRID","Grid electricity, solar photons, battery storage, UPS, telemetry, thermal limits and optional certified hydrogen electrochemistry research."],
 ["05","DISCOVERY & MATERIALS","Physics to reproducible evidence","MATERIAL FORGE","Licensed data, computational screening, sample preparation, measurement, replication and expert review. Candidates ≠ discoveries."],
 ["06","KNOWLEDGE & COSMOS","Many sources, preserved context","UNILEX / SIDRA","Four initial scripture families and separately classified Taoist, Shinto and wider comparative knowledge alongside empirical physics."],
 ["07","PROTECTION & GOVERNANCE","Limits are part of intelligence","ZIIL / MUNTAHA","Privacy, security, human approval, uncertainty reporting, risk assessment, auditing, incident response and recovery."]
] as const;
const modules=["Kernel","Research","Scripture","Journey","Mission","Governance","ZIIL"];
export default function SystemsPage(){
return <div className="container inner-page">
  <div className="page-breadcrumb"><Link href="/">← EMPIRE</Link><span>/</span> SYSTEM ATLAS <span>/</span> GENESIS 05</div>
  <div className="page-hero"><p className="eyebrow">THE COMPLETE SYSTEM MAP</p><h1>EVERY LAYER.<br/><em>ONE PURPOSE.</em></h1><p>Not seven separate kingdoms of software. Seven architecture planes coordinating human needs, scientific work, energy infrastructure and evidence-based decisions.</p></div>
  <div className="atlas-list">{planes.map(([num,name,subtitle,system,desc])=><article className="atlas-item" key={num}><span className="atlas-num">{num}</span><div><p className="panel-label">{subtitle}</p><h2>{name}</h2><p>{desc}</p></div><span className="atlas-system">{system}</span></article>)}</div>
  <section className="atlas-base"><div><p className="eyebrow">THE CODE BASE</p><h2>ONE MODULAR <em>MONOREPO.</em></h2><p>React + Vite for 100CENTER, Next.js for this portal, Fastify for the controlled backend host and PostgreSQL + Drizzle for structured persistence. New research packs stay proposals until contracts and ownership are approved.</p><Link className="btn btn-primary" href="/roadmap">Review readiness ↗</Link></div><div className="module-grid">{modules.map((m,i)=><div key={m}><span>{String(i+1).padStart(2,"0")}</span>{m}<small>{i===0?"BOOTSTRAP":"SCAFFOLD"}</small></div>)}</div></section>
  <p className="source-line">Full architecture: <a href="https://github.com/bjo163/empire-of-the-light/blob/main/docs/BLUEPRINT_V5_QUANTUM_PROTON_BEYOND_AI.md" target="_blank" rel="noopener noreferrer">GENESIS v5 Master Blueprint ↗</a></p>
</div>;
}

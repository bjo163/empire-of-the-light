import Link from "next/link";
import { Explorer } from "../components/Explorer";

const markers = [
  {number:"07",label:"System planes"},
  {number:"12",label:"Research capabilities"},
  {number:"04",label:"Original source families"},
  {number:"01",label:"Governed mission"}
];

const layers = [
  {code:"P01",label:"HUMAN & MISSION",detail:"People, community, journeys and accountable decision-making"},
  {code:"P02",label:"ARSY INTELLIGENCE",detail:"Retrieval, local AI, constrained orchestration and evaluation"},
  {code:"P03",label:"HYPERCOMPUTE",detail:"CPU/GPU, Q-REALM research, photonic and protonic exploration"},
  {code:"P04",label:"HELIOGRID ENERGY",detail:"Grid, solar, batteries, metering and safe energy models"},
  {code:"P05",label:"MATERIAL FORGE",detail:"Simulation, candidate materials and reproducible experiments"},
  {code:"P06",label:"COSMOS KNOWLEDGE",detail:"Scriptural sources, world traditions, physics and ontology"},
  {code:"P07",label:"GOVERNANCE & ZIIL",detail:"Consent, evidence, safety, review and continuity"}
];

const cards=[
  {index:"01",name:"HELIOGRID",descriptor:"Energy operating system",tag:"DESIGN",color:"amber",summary:"The physics of powering intelligence. Solar photons, utility grid, storage and real metering — with proton/hydrogen research kept distinct.",chips:["Solar PV","LFP / UPS","Digital twin","PEM research"]},
  {index:"02",name:"Q-REALM",descriptor:"Quantum research",tag:"RESEARCH",color:"violet",summary:"Quantum circuits, simulators, optional QPU experiments and measurable classical comparisons. No invented quantum advantage.",chips:["QPU","Simulation","Benchmark","PQC"]},
  {index:"03",name:"MATERIAL FORGE",descriptor:"Scientific discovery",tag:"DESIGN",color:"rose",summary:"An evidence-first materials pipeline from licensed papers and physics simulations to independent laboratory verification.",chips:["DFT","Perovskites","Protonics","Replication"]},
  {index:"04",name:"UNIVERSAL COSMOS",descriptor:"Knowledge & meaning",tag:"METADATA",color:"mint",summary:"UNILEX and independently sourced texts: Qur'an, Torah, Psalms, Gospels, plus Daoist and Shinto comparative libraries.",chips:["UNILEX","Four sources","Daoism","Shinto"]}
];

export default function Home(){
return <>
  <section className="hero container" aria-label="Introduction">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-bar"/> GENESIS 05 <span className="slash">/</span> THE NEXT ERA OF RESEARCH SYSTEMS</p>
      <h1>BEYOND <span className="outline-word">AI.</span><br/>BEYOND <em>LIMITS.</em></h1>
      <p className="hero-lede">A future-facing ecosystem where <strong>intelligence, energy, matter and knowledge</strong> come together through one accountable human command center.</p>
      <div className="hero-buttons"><Link className="btn btn-primary" href="#ecosystem">Explore the ecosystem <span>↗</span></Link><Link className="btn btn-ghost" href="/roadmap">See what&apos;s real <span>→</span></Link></div>
      <p className="hero-clarity"><span className="pulse-dot"/> DESIGN & RESEARCH VISION <span className="dot-sep">·</span> NOT A DEPLOYED QUANTUM OR ENERGY LAB</p>
    </div>
    <div className="hero-visual" aria-label="Illustration of a seven-layer research ecosystem">
      <div className="visual-stars"/>
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
      <div className="orbital-axis"/>
      <div className="core-halo"/>
      <div className="visual-core"><div className="core-symbol">A</div><span>A-L-L-A-H</span><small>COMMAND CORE</small></div>
      <div className="satellite satellite-a"><span className="sat-point"/> ARSY <small>INTELLIGENCE</small></div>
      <div className="satellite satellite-b"><span className="sat-point"/> HELIOGRID <small>ENERGY</small></div>
      <div className="satellite satellite-c"><span className="sat-point"/> Q-REALM <small>COMPUTE</small></div>
      <div className="satellite satellite-d"><span className="sat-point"/> COSMOS <small>KNOWLEDGE</small></div>
      <div className="visual-coordinates">SYS.01 / EOTL // RESEARCH ECOSYSTEM<br/>COORDINATED BY HUMAN REVIEW</div>
      <div className="visual-floor"/>
    </div>
    <div className="hero-watermark" aria-hidden="true">EOTL<span>05</span></div>
  </section>

  <section className="stat-band" aria-label="Blueprint summary">
    <div className="container stat-grid">{markers.map(m=><div className="stat-item" key={m.label}><strong>{m.number}</strong><span>{m.label}</span></div>)}</div>
  </section>

  <section className="section container" id="mission">
    <div className="section-intro"><p className="eyebrow">01 / A DIFFERENT KIND OF COMMAND CENTER</p><h2>FROM KNOWLEDGE <span className="muted-arrow">→</span> TO <em>REAL-WORLD IMPACT.</em></h2><p>Empire of the Light is designed to connect people and carefully sourced knowledge to controlled scientific research, measurable energy systems and actionable, human-reviewed missions.</p></div>
    <div className="identity-row">
      <div className="identity-main"><span className="panel-label">THE PLATFORM</span><h3>A-L-L-A-H</h3><p><b>Accountable Life, Learning & Action Hub.</b></p><p>A platform name for responsible work — not a claim of divine authority. People remain responsible for real decisions.</p></div>
      <div className="identity-side"><span className="panel-label">THE INTELLIGENCE</span><h3>ARSY</h3><p>Governed AI and workflow orchestration. Source retrieval, planning, simulation, tools and human review.</p></div>
      <div className="identity-side"><span className="panel-label">THE OPERATIONS</span><h3>100CENTER</h3><p>The operator cockpit for real work: missions, research runs, evidence, readiness, approvals and audits.</p></div>
    </div>
  </section>

  <section className="section section-alt" id="ecosystem">
    <div className="container">
      <div className="section-head"><div><p className="eyebrow">02 / THE SYSTEMS BEHIND THE FUTURE</p><h2>ONE ECOSYSTEM. <em>MANY FRONTIERS.</em></h2></div><Link className="text-link" href="/systems">View the full system atlas ↗</Link></div>
      <div className="frontier-grid">{cards.map(c=><article className={"frontier-card theme-"+c.color} key={c.name}>
        <div className="frontier-top"><span className="card-index">/ {c.index}</span><span className="stage-pill">{c.tag}</span></div>
        <div className="frontier-graphic" aria-hidden="true"><span className="shape-a"/><span className="shape-b"/><span className="shape-c"/></div>
        <div className="frontier-content"><p className="panel-label">{c.descriptor}</p><h3>{c.name}</h3><p>{c.summary}</p><div className="chip-row">{c.chips.map(ch=><span key={ch}>{ch}</span>)}</div></div>
      </article>)}</div>
    </div>
  </section>

  <section className="section container" id="architecture">
    <div className="section-head"><div><p className="eyebrow">03 / ENGINEERED AS ONE SYSTEM</p><h2>THE <em>SEVEN PLANES.</em></h2></div><p className="head-aside">Seven connected responsibilities.<br/>One governed architecture.</p></div>
    <div className="plane-layout">
      <div className="plane-list">{layers.map((l,i)=><div className="plane-row" key={l.code}><span>{l.code}</span><strong>{l.label}</strong><p>{l.detail}</p><b aria-hidden="true">{String(i+1).padStart(2,"0")}</b></div>)}</div>
      <div className="plane-aside"><div className="stacks-orbit"><div className="stack-ring ring-large"/><div className="stack-ring ring-mid"/><div className="stack-ring ring-small"/><div className="stack-kernel">ARSY<small>ORCHESTRATION</small></div></div><p>Different compute paradigms, source traditions and physical systems stay distinct — connected through provenance, safety and review.</p><Link href="/systems">Explore architecture <span>↗</span></Link></div>
    </div>
  </section>

  <section className="section section-alt" id="explore">
    <div className="container">
      <div className="section-head"><div><p className="eyebrow">04 / INTERACTIVE SYSTEM EXPLORER</p><h2>ENTER THE <em>ARSY NETWORK.</em></h2></div><p className="head-aside">Select a domain to inspect the design,<br/>input/output, and actual maturity.</p></div>
      <Explorer/>
    </div>
  </section>

  <section className="section container">
    <div className="section-head"><div><p className="eyebrow">05 / BUILD REALITY, NOT HYPE</p><h2>THE FUTURE HAS <em>CHECKPOINTS.</em></h2></div></div>
    <div className="roadmap-teaser">
      <div><span className="checkpoint-number">01</span><span className="checkpoint-stage">CURRENT PRIORITY</span><h3>MAKE THE COMMAND CENTER REAL.</h3><p>Secure operator login, reviewed database migrations, evidence-linked research missions and verified deployment before experimental hardware.</p><Link className="btn btn-primary" href="/roadmap">View delivery roadmap ↗</Link></div>
      <div className="roadmap-rungs">{["100CENTER OPERATIONAL","HELIOGRID TELEMETRY","MATERIALS & QUANTUM RESEARCH","COMPARATIVE KNOWLEDGE","INDEPENDENT VALIDATION"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong><small>{i===0?"P0 · NEXT ENGINEERING GATE":"PLANNED / RESEARCH"}</small></div>)}</div>
    </div>
  </section>

  <section className="closing-section"><div className="container"><p className="eyebrow">A NEW HORIZON • AN ACCOUNTABLE PATH</p><h2>IMAGINE <em>FARTHER.</em><br/>BUILD <span>WITH EVIDENCE.</span></h2><p>Extraordinary ideas deserve extraordinary verification. The Empire is a blueprint for human-led research, learning and service — never a claim of completed supernatural technology.</p><div className="closing-actions"><Link className="btn btn-primary" href="/systems">Discover the systems ↗</Link><a className="btn btn-ghost" target="_blank" rel="noopener noreferrer" href="https://github.com/bjo163/empire-of-the-light">View source on GitHub ↗</a></div></div></section>
</>;
}

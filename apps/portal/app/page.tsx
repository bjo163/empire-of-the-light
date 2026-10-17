
const branches=[
  {name:"UNILEX",detail:"71 stable concept IDs, separated senses and source history"},
  {name:"UNIVERSAL CORPUS",detail:"Four source families; edition provenance required before ingestion"},
  {name:"MISSION RESEARCH",detail:"Human-owned investigation and evidence workflows"},
  {name:"ZIIL GOVERNANCE",detail:"Rights, consent, human review and protection"}
];
export default function Home(){
 return <main><div className="top"><span>◐ EMPIRE OF THE LIGHT</span><span>PUBLIC KNOWLEDGE PORTAL</span></div>
  <header><p className="eyebrow">A-L-L-A-H COMMAND CENTER · POWERED BY ARSY</p>
   <h1>Build with light.<em>Verify with evidence.</em></h1>
   <p>Research, learning and human service through a coherent vocabulary and transparent source boundaries.</p>
   <div className="status">GENESIS V4.0 — FOUNDATION, NOT PRODUCTION CERTIFIED</div>
  </header>
  <section className="grid">{branches.map(b=><article key={b.name}><h2>{b.name}</h2><p>{b.detail}</p></article>)}</section>
  <footer><p>Inspired by values across traditions. No software authority to declare revelation, spiritual rank or divine judgment.</p>
   <a href="https://github.com/bjo163/empire-of-the-light">Architecture and source registries ↗</a></footer>
 </main>;
}

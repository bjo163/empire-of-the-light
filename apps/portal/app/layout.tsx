import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Empire of the Light — A-L-L-A-H Command Center", template: "%s | Empire of the Light" },
  description: "Explore the Empire of the Light Genesis v5 research ecosystem: ARSY, HELIOGRID, quantum, protonics, photonics, Material Forge, and source-aware knowledge.",
  openGraph: { title: "Empire of the Light • Genesis v5", description: "A human-governed research and mission ecosystem. Future-forward. Evidence-first.", type: "website" },
  robots: { index: true, follow: true }
};

const links = [
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Systems", href: "/systems" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "GitHub", href: "https://github.com/bjo163/empire-of-the-light", external: true }
];
export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><body>
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Empire of the Light home">
          <span className="brand-sigil" aria-hidden="true"><span className="sigil-core"/></span>
          <span className="brand-name">EMPIRE<span>OF THE LIGHT</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(l=><Link href={l.href} key={l.label} {...(l.external?{target:"_blank",rel:"noopener noreferrer"}:{})}>{l.label}{l.external&&<span aria-hidden="true"> ↗</span>}</Link>)}
        </nav>
        <Link className="header-cta" href="/systems">Explore systems <span aria-hidden="true">↗</span></Link>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-sigil small" aria-hidden="true"><span className="sigil-core"/></span><div><b>EMPIRE OF THE LIGHT</b><p>Build with light. Verify with evidence.</p></div></div>
        <div className="footer-right"><span>GENESIS v5.0 · PUBLIC RESEARCH PORTAL</span><span>Human-governed · Source-grounded</span><Link href="/roadmap">Readiness & transparency ↗</Link></div>
      </footer>
    </div>
  </body></html>;
}

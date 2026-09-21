import Image from "next/image";
import { ExperienceTabs } from "./components/experience-tabs";
import { about, experiences, featuredProject, proofPoints, site } from "./content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function SignalGraphic() {
  return (
    <svg className="signal-graphic" viewBox="0 0 620 430" role="img" aria-label="A signal path moving through build, verify, and ship">
      <defs>
        <linearGradient id="signal-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2057d4" />
          <stop offset="1" stopColor="#e46a2a" />
        </linearGradient>
      </defs>
      <path className="signal-line signal-line-muted" d="M-15 335 C92 335 97 120 214 120 S319 292 407 292 S492 67 635 67" />
      <path className="signal-line" d="M-15 318 C90 318 104 92 217 92 S310 266 412 266 S502 44 635 44" />
      <g className="signal-nodes">
        <circle cx="217" cy="92" r="13" /><circle cx="412" cy="266" r="13" /><circle cx="544" cy="76" r="13" />
      </g>
      <g className="signal-labels">
        <text x="36" y="377">INPUT</text><text x="188" y="55">BUILD</text><text x="383" y="319">VERIFY</text><text x="520" y="40">SHIP</text>
      </g>
    </svg>
  );
}

function ProjectVisual() {
  return (
    <div className="project-visual" role="img" aria-label="Abstract system diagram for the Glove Controlled Car">
      <div className="project-visual-grid" aria-hidden="true" />
      <div className="project-code" aria-hidden="true"><span>01</span><span>10</span><span>11</span><span>00</span><span>10</span><span>01</span></div>
      <div className="project-device" aria-hidden="true">
        <span className="device-sensor">MPU</span>
        <span className="device-connector connector-one" />
        <span className="device-connector connector-two" />
        <span className="device-board">CAR</span>
      </div>
      <span className="visual-label visual-label-top">MOTION / INPUT</span>
      <span className="visual-label visual-label-bottom">SIGNAL / RESPONSE</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{site.descriptor}</p>
            <h1 id="hero-title">{site.title}</h1>
            <p className="hero-intro">{site.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View work <span aria-hidden="true">↓</span></a>
              <a className="button button-quiet" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-note"><span className="note-dot" aria-hidden="true" /> Build. Verify. Ship.</div>
          </div>
          <div className="hero-art">
            <SignalGraphic />
            <div className="portrait-frame">
              <Image src={`${basePath}/assets/binary-portrait.png`} alt="Binary collage portrait of Swapnil Thapa" width={760} height={960} priority />
              <span className="portrait-caption">/ signal_profile_01</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected proof points">
        <div className="container proof-grid">
          {proofPoints.map((point, index) => (
            <div className="proof-item" key={point.label}>
              <span className="proof-index">0{index + 1}</span>
              <div><p>{point.label}</p><strong>{point.value}</strong><span>{point.detail}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="section-marker"><span>{about.eyebrow}</span><span className="marker-line" /></div>
          <div className="about-copy"><p className="eyebrow">Engineer + builder</p><h2 id="about-title">{about.title}</h2><p>{about.body}</p><p className="about-principle">{about.principle}</p></div>
          <div className="about-aside"><span className="aside-kicker">Focus</span><div className="layer"><span>01</span><strong>Product</strong></div><div className="layer"><span>02</span><strong>Automation</strong></div><div className="layer"><span>03</span><strong>Delivery</strong></div></div>
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="container">
          <div className="section-heading section-heading-dark"><div><p className="eyebrow eyebrow-light">02 / Experience</p><h2 id="experience-title">A focused record of making systems more dependable.</h2></div><p className="heading-aside">Select an employer to follow the signal. Keyboard arrows and touch work the same way.</p></div>
          <ExperienceTabs experiences={experiences} />
        </div>
      </section>

      <section className="section project-section" id="projects" aria-labelledby="project-title">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">03 / Selected work</p><h2 id="project-title">Built to move.</h2></div><p className="heading-aside">Hardware. Software. Motion.</p></div>
          <article className="project-card">
            <ProjectVisual />
            <div className="project-copy"><p className="eyebrow">{featuredProject.eyebrow}</p><h3>{featuredProject.title}</h3><p>{featuredProject.description}</p><div className="project-story">{featuredProject.story.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div><div className="tag-list" aria-label="Technologies used">{featuredProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={featuredProject.github} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></div>
          </article>
        </div>
      </section>

      <section className="contact-band" id="contact" aria-labelledby="contact-title">
        <div className="container contact-inner"><div><p className="eyebrow eyebrow-light">Get in touch</p><h2 id="contact-title">Let&apos;s build something dependable.</h2></div><div className="contact-links"><a className="contact-link" href={site.links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a><a className="contact-link" href={site.links.github} target="_blank" rel="noreferrer"><span>GitHub</span><span aria-hidden="true">↗</span></a></div></div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><span>© {site.name}</span><span>Signal &amp; Substance</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}

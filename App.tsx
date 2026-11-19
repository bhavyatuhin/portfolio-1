import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import Shell from "./components/Shell";
import { profile, projects, highlights, publications } from "./content";

function Home() {
  return (
    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">A personal portfolio <span>·</span> 2026</p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            Ideas worth<br /><em>sharing.</em>
          </motion.h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button-dark" href="/projects">Explore my work <MoveUpRight size={16} /></a>
            <a className="text-link" href="/about">A little about me <ArrowDown size={15} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Portrait placeholder">
          <div className="portrait-frame">
            <div className="portrait-placeholder"><span>Portrait</span><small>Add an approved photograph</small></div>
            <div className="portrait-caption">Curiosity in motion <span>01 / 05</span></div>
          </div>
          <div className="side-note">SPEAK · CREATE · EXPLORE</div>
        </div>
        <div className="hero-bottom"><span>BASED IN INDIA</span><span>SCROLL TO DISCOVER ↓</span></div>
      </section>
      <section className="intro-band">
        <div className="section-wrap intro-grid">
          <p className="eyebrow">01 / THE PERSON</p>
          <div><h2>Finding my voice.<br /><em>Building my perspective.</em></h2><p>{profile.about}</p><a className="under-link" href="/about">More about Bhavya <ArrowUpRight size={15}/></a></div>
        </div>
      </section>
      <section className="section-wrap feature-section">
        <div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Projects with<br /><em>a purpose.</em></h2></div><a className="under-link" href="/projects">All projects <ArrowUpRight size={15}/></a></div>
        <div className="project-list">
          {projects.slice(0,2).map(p => <article className="project-row" key={p.number}><span className="project-no">{p.number}</span><div><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p>{p.description}</p></div><a href="/projects" aria-label={`Explore ${p.title}`}><ArrowUpRight/></a></article>)}
        </div>
      </section>
      <section className="quote-band"><p className="eyebrow">A NOTE TO SELF</p><h2>Stay curious.<br /><em>Keep becoming.</em></h2></section>
    </main>
  );
}

function PageIntro({ number, title, desc }: {number:string; title:string; desc:string}) {
  return <div className="page-intro section-wrap"><p className="eyebrow">{number} / PORTFOLIO</p><h1>{title}</h1><p>{desc}</p></div>;
}
function About() {
  return <main><PageIntro number="01" title="A little about me." desc={profile.about}/><section className="section-wrap detail-grid"><p className="eyebrow">WHAT I BRING</p><div className="highlight-grid">{highlights.map((h,i)=><article key={h.label}><span>0{i+1}</span><h3>{h.label}</h3><p>{h.detail}</p></article>)}</div></section></main>;
}
function Projects() {
  return <main><PageIntro number="02" title="Work & projects." desc="A growing collection of collaborations, experiments, and ideas brought into the world."/><section className="section-wrap project-list page-projects">{projects.map(p=><article className="project-row" key={p.number}><span className="project-no">{p.number}</span><div><p className="eyebrow">{p.category} · {p.year}</p><h3>{p.title}</h3><p>{p.description}</p><p className="contribution"><strong>Contribution:</strong> {p.contribution}</p></div><span className="project-arrow"><ArrowUpRight/></span></article>)}</section></main>;
}
function Recognition() {
  return <main><PageIntro number="03" title="Recognition." desc="Awards, placements, participation, and certificates — each recorded with its proper context."/><section className="section-wrap empty-state"><p className="eyebrow">IN PROGRESS</p><h2>Every milestone<br/><em>has its own story.</em></h2><p>Verified awards and certificates will appear here once the details and documents are added. Participation will never be presented as a win.</p></section></main>;
}
function Creative() {
  return <main><PageIntro number="04" title="Beyond the page." desc="A space for music, writing, speaking, and creative experiments."/><section className="section-wrap creative-grid"><article><span>01 / VOICE</span><h2>Speaking</h2><p>Debate, public speaking, and the art of making an idea understood.</p></article><article><span>02 / MUSIC</span><h2>Sound</h2><p>Singing and guitar — creative practice through music.</p></article><article><span>03 / WORDS</span><h2>Writing</h2><p>{publications[0].title}: {publications[0].detail}</p></article></section></main>;
}
function Contact() {
  return <main><PageIntro number="05" title="Let's connect." desc="For thoughtful conversations, collaborations, and opportunities."/><section className="section-wrap contact-panel"><p className="eyebrow">CONTACT</p>{profile.email ? <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight/></a> : <p className="muted">Email address will be added after approval.</p>}<div className="social-list">{profile.socials.map(s=><a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label} <ArrowUpRight size={15}/></a>)}</div></section></main>;
}
export default function App() {
  return <Routes><Route element={<Shell/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="projects" element={<Projects/>}/><Route path="recognition" element={<Recognition/>}/><Route path="creative" element={<Creative/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<main className="section-wrap not-found"><p className="eyebrow">404 / NOT FOUND</p><h1>This page isn't here.</h1><a className="button-dark" href="/">Return home <ArrowUpRight size={16}/></a></main>}/></Route></Routes>;
}

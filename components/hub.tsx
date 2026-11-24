import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { projects, workUrl, type Project } from '@/lib/projects';
import { OrbitalVisual, ProjectVisual } from './visuals';

export function Header() {
  return <header className="site-header"><nav className="container navigation" aria-label="Main navigation">
    <a className="monogram" href="#" aria-label="Etienne Fourie home">ef<span>.</span></a>
    <div className="nav-links"><a href="#projects">Projects</a><a href="#about">About</a><a href={workUrl}>Work <ArrowUpRight size={14} aria-hidden="true"/></a></div>
  </nav></header>;
}

export function Hero() {
  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy">
      <h1 id="hero-title">Trying to solve problems</h1>
      <p className="hero-description">This is where I keep the things I build, explore and ideate on.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDown size={16} aria-hidden="true"/></a><a className="text-link" href="#about">About me <ArrowRight size={16} aria-hidden="true"/></a></div>
    </div><OrbitalVisual/>
  </section>;
}

export function ProjectCard({ project }: { project: Project }) {
  return <a className={`project-card ${project.theme}`} href={project.href}>
    <div className="card-topline"><span className="eyebrow">{project.category}</span></div>
    <ProjectVisual theme={project.theme}/>
    <div className="card-content"><h3>{project.name}</h3><p>{project.description}</p></div>
  </a>;
}

export function ProjectSection() {
  return <section className="projects-section container section" id="projects" aria-labelledby="projects-title">
    <div className="section-intro"><h2 id="projects-title">Personal Projects</h2></div>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.name} project={project}/>)}</div>
  </section>;
}

export function WorkSection() {
  return <section className="work-section container" aria-labelledby="work-title"><div className="work-panel"><div className="work-icon"><BriefcaseBusiness size={24} strokeWidth={1.3} aria-hidden="true"/></div><div className="work-copy"><h2 id="work-title">Work projects live somewhere else.</h2><p>I keep professional projects, internal tools and work-related builds separate from my personal projects.</p></div><a className="button button-outline" href={workUrl}>Visit work.imber.me <ArrowUpRight size={16} aria-hidden="true"/></a></div></section>;
}

export function AboutSection() {
  return <section className="about-section container section" id="about" aria-labelledby="about-title"><div><p className="eyebrow">About</p><h2 id="about-title">Curious about systems, technology and how things work.</h2></div><div className="about-copy"><p>Graduate of Economics with a passion for technology, nature, gardening, golf, automation and making life simpler and easier while tracking every possible metric I can.</p><p>One thing I’ve learnt over the last 40 years is that data is king, you never know when something might be useful. Better store everything.</p><span className="about-signature">Etienne Fourie<span className="signature-line"/></span></div></section>;
}

export function Footer() {
  return <footer className="container footer"><div className="footer-identity"><span>Etienne Fourie</span><a href="https://imber.me">imber.me</a></div><nav aria-label="Project links">{projects.map(project => <a key={project.name} href={project.href}>{project.name}<ArrowUpRight size={13} aria-hidden="true"/></a>)}<a href={workUrl}>Work<ArrowUpRight size={13} aria-hidden="true"/></a></nav></footer>;
}

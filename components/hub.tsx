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
    <div className="hero-copy"><p className="eyebrow"><span className="light-point"/>Etienne Fourie</p>
      <h1 id="hero-title">I build useful things for <span>complicated</span> problems.</h1>
      <p className="hero-description">Economics, technology, software and the occasional idea that turns into a project. This is where I keep the things I build, explore and work on.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDown size={16} aria-hidden="true"/></a><a className="text-link" href="#about">About me <ArrowRight size={16} aria-hidden="true"/></a></div>
    </div><OrbitalVisual/>
    <div className="hero-footnote"><span>A personal corner of the internet</span><span className="footnote-line"/><span>Always a work in progress</span></div>
  </section>;
}

export function ProjectCard({ project }: { project: Project }) {
  return <a className={`project-card ${project.theme}`} href={project.href}>
    <div className="card-topline"><span className="eyebrow">{project.category}</span><span className="project-number">/{project.number}</span></div>
    <ProjectVisual theme={project.theme}/>
    <div className="card-content"><h3>{project.name}</h3><p>{project.description}</p><span className="card-link">Explore {project.name}<ArrowUpRight size={18} aria-hidden="true"/></span></div>
  </a>;
}

export function ProjectSection() {
  return <section className="projects-section container section" id="projects" aria-labelledby="projects-title">
    <div className="section-intro"><div><p className="eyebrow">Personal projects</p><h2 id="projects-title">Things I’m building<span className="accent-dot">.</span></h2></div><p className="section-description">Some are useful. Some are experiments. Usually they start because I wanted something that didn’t quite exist yet.</p></div>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.name} project={project}/>)}</div>
  </section>;
}

export function WorkSection() {
  return <section className="work-section container" aria-labelledby="work-title"><div className="work-panel"><div className="work-icon"><BriefcaseBusiness size={24} strokeWidth={1.3} aria-hidden="true"/></div><div className="work-copy"><p className="eyebrow">Work</p><h2 id="work-title">Work projects live somewhere else.</h2><p>I keep professional projects, internal tools and work-related builds separate from my personal projects.</p></div><a className="button button-outline" href={workUrl}>Visit work.imber.me <ArrowUpRight size={16} aria-hidden="true"/></a></div></section>;
}

export function AboutSection() {
  return <section className="about-section container section" id="about" aria-labelledby="about-title"><div><p className="eyebrow">About</p><h2 id="about-title">Curious about systems, technology and how things work.</h2></div><div className="about-copy"><p>My background is in Economics, but my interests have always extended well beyond one discipline. I like understanding systems, finding friction and building practical ways to improve them.</p><p>That usually leads me somewhere between economics, technology, software, data, finance and whatever problem has caught my attention at the time.</p><span className="about-signature">Etienne Fourie<span className="signature-line"/></span></div></section>;
}

export function Footer() {
  return <footer className="container footer"><div className="footer-identity"><span>Etienne Fourie</span><a href="https://imber.me">imber.me</a></div><nav aria-label="Project links">{projects.map(project => <a key={project.name} href={project.href}>{project.name}<ArrowUpRight size={13} aria-hidden="true"/></a>)}<a href={workUrl}>Work<ArrowUpRight size={13} aria-hidden="true"/></a></nav></footer>;
}

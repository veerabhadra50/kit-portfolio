import { useState } from 'react'

export function Navbar({ name, onThemeToggle, theme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Education', '#education'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Highlights', '#highlights'],
  ]

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar page-wrap" aria-label="Main navigation">
        <a className="wordmark" href="#about" onClick={closeMenu} aria-label={`${name}, home`}>
          <span className="wordmark-mark">a.</span>
          <span>{name.split(' ')[0]}<span className="wordmark-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
            <span className="theme-label">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
          </button>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Say hello <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  )
}

export function Hero({ student }) {
  return (
    <section className="hero page-wrap" id="about">
      <div className="hero-copy">
        <p className="eyebrow"><span className="availability-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</p>
        <h1>Hi, I’m <span>{student.name.split(' ')[0]}.</span><br />{student.tagline}</h1>
        <p className="hero-intro">{student.introduction}</p>
        <p className="hero-objective">{student.objective}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href={`mailto:${student.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta">
          <span><span aria-hidden="true">⌖</span> {student.location}</span>
          {student.social.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span className="social-short">{link.short}</span>{link.label}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img src={student.photo} alt={`${student.name}, student and aspiring frontend developer`} />
          <span className="portrait-scribble" aria-hidden="true">✳</span>
        </div>
        <div className="portrait-caption"><span>BASED IN</span><strong>{student.location}</strong></div>
        <div className="hero-note"><span className="note-star" aria-hidden="true">✳</span><span>Currently learning<br /><strong>the art of good UI</strong></span></div>
      </div>
      <a className="scroll-cue" href="#education"><span className="scroll-line" /> A LITTLE ABOUT ME</a>
    </section>
  )
}

export function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

export function Education({ entries }) {
  return (
    <div className="education-list">
      {entries.map((entry) => (
        <article className="education-card" key={entry.college}>
          <div className="education-marker" aria-hidden="true"><span /></div>
          <div className="education-main">
            <p className="education-period">{entry.period}</p>
            <h3>{entry.course}</h3>
            <p className="education-college">{entry.college} <span>·</span> {entry.school}</p>
            <p className="education-detail">{entry.detail}</p>
            <span className="achievement-tag">✳ {entry.achievement}</span>
          </div>
          <div className="grade-pill">{entry.grade}</div>
        </article>
      ))}
    </div>
  )
}

export function Skills({ groups }) {
  return (
    <div className="skills-grid">
      {groups.map((group, index) => (
        <article className="skill-card" key={group.title}>
          <span className={`skill-number skill-number-${index + 1}`}>0{index + 1}</span>
          <p className="skill-note">{group.note}</p>
          <h3>{group.title}</h3>
          <div className="skill-tags">
            {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </div>
  )
}

export function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <a className={`project-image ${project.accent}`} href={project.demo || project.repository} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project-number">{number}</span>
        <span className="image-arrow" aria-hidden="true">↗</span>
      </a>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-links">
          <a href={project.repository} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </article>
  )
}

export function Projects({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} number={String(index + 1).padStart(2, '0')} />
      ))}
    </div>
  )
}

export function Contact({ student }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    if (feedback.message) setFeedback({ type: '', message: '' })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const values = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()]),
    )

    if (Object.values(values).some((value) => !value)) {
      setFeedback({ type: 'error', message: 'Please fill in every field before sending.' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setFeedback({
      type: 'success',
      message: 'Thanks for reaching out! This demo does not send messages yet. Connect a backend or form service to receive submissions.',
    })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-grid">
      <div className="contact-aside">
        <p className="contact-intro">I’m always happy to meet curious people, talk about ideas, or find a new problem to solve together.</p>
        <a className="contact-email" href={`mailto:${student.email}`}>{student.email}<span aria-hidden="true">↗</span></a>
        <div className="contact-details">
          <span><span aria-hidden="true">⌖</span> {student.location}</span>
          <a href={`tel:${student.phone.replace(/[^\d+]/g, '')}`}><span aria-hidden="true">↗</span> {student.phone}</a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="contact-name">Your name
            <input id="contact-name" name="name" autoComplete="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
          </label>
          <label htmlFor="contact-email">Email address
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} required />
          </label>
        </div>
        <label htmlFor="contact-subject">Subject
          <input id="contact-subject" name="subject" placeholder="What would you like to discuss?" value={form.subject} onChange={handleChange} required />
        </label>
        <label htmlFor="contact-message">Your message
          <textarea id="contact-message" name="message" rows="4" placeholder="A little context goes a long way..." value={form.message} onChange={handleChange} required />
        </label>
        {feedback.message && (
          <p className={`form-feedback ${feedback.type}`} role="status">{feedback.message}</p>
        )}
        <button className="button button-dark submit-button" type="submit">Send a message <span aria-hidden="true">↗</span></button>
        <p className="form-note">Demo form · Connect a backend or form service to receive messages.</p>
      </form>
    </div>
  )
}

export function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-content">
        <a className="wordmark footer-wordmark" href="#about"><span className="wordmark-mark">a.</span><span>{name}<span className="wordmark-dot">.</span></span></a>
        <p>Made with curiosity, coffee & React.</p>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  )
}

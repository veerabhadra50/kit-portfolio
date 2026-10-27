import { useState } from 'react'
import { portfolio } from './data/portfolio.js'
import {
  Contact,
  Education,
  Footer,
  Hero,
  Navbar,
  Projects,
  SectionTitle,
  Skills,
} from './components/PortfolioSections.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="portfolio" data-theme={theme}>
      <Navbar name={portfolio.name} onThemeToggle={toggleTheme} theme={theme} />
      <main>
        <Hero student={portfolio} />
        <section className="section" id="education">
          <SectionTitle eyebrow="THE LEARNING SO FAR" title="Education" />
          <Education entries={portfolio.education} />
        </section>
        <section className="section section-tinted" id="skills">
          <SectionTitle eyebrow="WHAT I BRING" title="Skills & strengths" />
          <Skills groups={portfolio.skills} />
        </section>
        <section className="section" id="projects">
          <SectionTitle eyebrow="A FEW THINGS I’VE MADE" title="Selected projects" />
          <Projects projects={portfolio.projects} />
        </section>
        <section className="section section-tinted" id="highlights">
          <SectionTitle eyebrow="MILESTONES & MOMENTS" title="Beyond the classroom" />
          <div className="highlights-grid">
            {portfolio.highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <span className="highlight-icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="highlight-kind">{item.kind}</p>
                  <h3>{item.title}</h3>
                  <p className="highlight-detail">{item.detail}</p>
                  <span className="highlight-date">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section contact-section" id="contact">
          <SectionTitle eyebrow="HAVE A PROJECT IN MIND?" title="Let’s talk." />
          <Contact student={portfolio} />
        </section>
      </main>
      <Footer name={portfolio.name} />
    </div>
  )
}

export default App

import portrait from './assets/portfolio.png'
import { profile, links, projects, smaller } from './data.js'


const heroLine = 'I build mobile apps, backends and machine learning pipelines.'

const stackTicker = [
  'React Native',
  'Expo',
  'React',
  'Django',
  'FastAPI',
  'PostgreSQL',
  'PyTorch',
  'LangChain',
  'Hugging Face',
  'Tailwind CSS',
  'CodeCarbon',
]

function Hero() {
  const ticker = [...stackTicker, ...stackTicker]
  return (
    <header className="hero" id="top">
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#top">
          Sara Razeen
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-main">
        <div className="hero-text">
          <p className="pill">
            <span className="dot" aria-hidden="true" />
            Open to junior software roles
          </p>

          <h1 className="name" aria-label={profile.name.join(' ')}>
            {profile.name.map((part, n) => (
              <span className="name-line" key={part} aria-hidden="true">
                <span style={{ animationDelay: `${0.15 + n * 0.14}s` }}>{part}</span>
              </span>
            ))}
          </h1>

          <p className="intro">{heroLine}</p>

          <div className="cta">
            <a className="btn btn-fill" href="#work">
              See my work
            </a>
            <a className="btn btn-line" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="visual">
          <div className="arch-line" aria-hidden="true" />
          <figure className="arch">
            <img src={portrait} alt="Portrait of Sara Razeen" />
          </figure>
          <span className="chip chip-a">React Native</span>
          <span className="chip chip-b">Python and ML</span>
          <div className="card">
            <strong>Paper accepted</strong>
            <span>IEEE ICEEET 2026</span>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <ul className="track">
          {ticker.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function Work() {
  return (
    <section className="section paper" id="work">
      <div className="wrap">
        <h2 className="section-title">Selected work</h2>
        <ul className="index">
          {projects.map((p) => (
            <li className="row" key={p.title}>
              <div className="row-head">
                <h3>{p.title}</h3>
                <p className="kind">{p.kind}</p>
              </div>
              <div className="row-body">
                <p>{p.text}</p>
                {p.note && <p className="note">{p.note}</p>}
              </div>
              <ul className="stack" aria-label="Technologies">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="smaller">
          <h3>Smaller builds</h3>
          <ul>
            {smaller.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <p className="more">
          More on{' '}
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section paper about" id="about">
      <div className="wrap about-grid">
        <h2 className="section-title">About</h2>
        <div className="about-text">
          {profile.about.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <h2 className="contact-title">Let’s talk.</h2>
        <ul className="contact-links">
          {links.email && (
            <li>
              <a href={`mailto:${links.email}`}>{links.email}</a>
            </li>
          )}
          {links.linkedin && (
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          )}
          <li>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <p className="foot">Sara Razeen, 2026</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Work />
        <About />
      </main>
      <Contact />
    </>
  )
}

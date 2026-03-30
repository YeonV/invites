import { useState, useEffect } from 'react'
import './App.css'
import Demo from './Demo'

const PASSWORD = 'Xeon2026'
const WHATSAPP = import.meta.env.VITE_WHATSAPP_URL
const BASE = import.meta.env.BASE_URL

function Briefing({ onClose }) {
  return (
    <div className="briefing-overlay">
      <div className="briefing-scroll">

        <div className="briefing-header">
          <div className="briefing-logo" style={{ backgroundImage: `url(${BASE}logo-full.svg)` }} />
          <div className="briefing-subtitle">EDITION 2026</div>
          <p className="briefing-tagline">Lies es. Versteh es. Mach dich bereit.</p>
        </div>

        <section className="briefing-section">
          <div className="stat-row">
            <div className="stat-card"><span className="stat-num">1</span><span className="stat-label">Abend</span></div>
            <div className="stat-card"><span className="stat-num">9</span><span className="stat-label">Spiele</span></div>
            <div className="stat-card"><span className="stat-num">1</span><span className="stat-label">Gewinner</span></div>
          </div>
          <p>Einzel- und Teamrunden im Wechsel. Teams werden jedes Mal neu ausgelost. Am Ende zählt nur dein Punktestand.</p>
          <p>Für Essen, Drinks und Alkohol ist gesorgt. Ein verdammt guter Abend mit Freunden — bei dem es sich lohnt, alles zu geben.</p>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <div className="section-heading"><span className="section-icon">🏆</span><h2>Der Wanderpokal</h2></div>
          <p>Der Gewinner erhält den Pokal — und behält ihn ein ganzes Jahr. Bis zur nächsten Edition.</p>
          <p className="briefing-accent">Dein Name. Auf dem Pokal. Für immer.</p>
        </section>

        <section className="briefing-section">
          <h2>Was wird verlangt?</h2>
          <div className="skill-grid">
            <div className="skill-card"><span className="skill-icon">🧠</span><strong>Kopf</strong><span>Logik, Mathe, Kombinieren</span></div>
            <div className="skill-card"><span className="skill-icon">📚</span><strong>Wissen</strong><span>Allgemeinbildung, Wissenschaft, Geschichte</span></div>
            <div className="skill-card"><span className="skill-icon">🤲</span><strong>Hände</strong><span>Geschicklichkeit, Bauen unter Druck</span></div>
            <div className="skill-card"><span className="skill-icon">⚡</span><strong>Körper</strong><span>Reaktion, Timing, Körpergefühl</span></div>
            <div className="skill-card"><span className="skill-icon">🎯</span><strong>Intuition</strong><span>Schätzen, Bauchgefühl</span></div>
            <div className="skill-card"><span className="skill-icon">🤝</span><strong>Team</strong><span>Kommunikation, Strategie</span></div>
          </div>
          <p style={{textAlign: 'center', marginTop: '1rem'}}>Wer in einer Sache gut ist, hat Chancen.<br/>Wer in vielen gut ist, gewinnt.</p>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <div className="section-heading"><span className="section-icon">📊</span><h2>Scoring</h2></div>
          <div className="info-cards">
            <div className="info-card">
              <strong>Einzelspiel</strong>
              <span>Punkte direkt auf dein Konto</span>
            </div>
            <div className="info-card">
              <strong>Teamspiel</strong>
              <span>Teampunkte für jedes Mitglied</span>
            </div>
          </div>
          <p><strong>Kein Spiel entscheidet allein.</strong> Konsistenz wird belohnt — aber Aufholjagden sind möglich.</p>
        </section>

        <section className="briefing-section">
          <div className="section-heading"><span className="section-icon">⚖️</span><h2>3 Regeln</h2></div>
          <div className="rule-list">
            <div className="rule-card">
              <span className="rule-num">1</span>
              <div><strong>Spielleiter haben recht.</strong><br/>Immer. Keine Diskussion.</div>
            </div>
            <div className="rule-card">
              <span className="rule-num">2</span>
              <div><strong>Fair spielen.</strong><br/>Kein Schummeln. Bei Graubereichen: fragen.</div>
            </div>
            <div className="rule-card">
              <span className="rule-num">3</span>
              <div><strong>Alles geben.</strong><br/>Halbherzig ist das Einzige, was nicht geht.</div>
            </div>
          </div>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <div className="section-heading"><span className="section-icon">🔮</span><h2>Vorbereitung?</h2></div>
          <p>Geht nicht — und das ist Absicht. Kein Spezialwissen rettet euch.</p>
          <p>Was hilft: breiter Horizont, schnelles Denken, ruhige Hände.</p>
          <p className="briefing-accent">Es wird kein Spiel geben, das ihr schon kennt.</p>
        </section>

        <section className="briefing-section">
          <h2>Der Abend</h2>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-dot" /><strong>Ankommen</strong><span>Drinks, Essen, Einstimmen</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Show</strong><span>~2,5h · 9 Spiele · eine Pause</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Finale</strong><span>Siegerehrung & Pokal</span></div>
            <div className="timeline-item"><span className="timeline-dot" /><strong>Danach</strong><span>Feiern, oder über Punkte ärgern</span></div>
          </div>
        </section>

        <section className="briefing-section briefing-section--final">
          <p className="briefing-accent">Kommt ausgeruht.<br/>Kommt hungrig auf den Sieg.</p>
          <p>Und unterschätzt niemanden.</p>
          <div className="briefing-footer">Xeon — Edition 2026</div>
        </section>

        <button className="briefing-close" onClick={onClose}>Zurück</button>
      </div>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 1)
    setTimeout(() => window.scrollTo(0, 1), 100)
  }, [])

  const params = new URLSearchParams(window.location.search)
  const code = params.get('id')
  const [pw, setPw] = useState('')
  const [phase, setPhase] = useState('locked')
  const [shake, setShake] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [showBriefing, setShowBriefing] = useState(false)

  useEffect(() => {
    if (!code || phase === 'locked') return
    fetch(`${BASE}data/${code}.json`)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(setData)
      .catch(() => setError(true))
  }, [code, phase])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pw === PASSWORD) {
      document.activeElement?.blur()
      setTimeout(() => {
        setPhase('animating')
        setTimeout(() => setPhase('revealed'), 900)
      }, 400)
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  if (!code) {
    return (
      <div className="app no-scroll">
        <img src={`${BASE}logo-full.svg`} alt="Logo" className="logo" />
      </div>
    )
  }

  if (code === 'logo') {
    return <Demo />
  }

  const logoClass = phase === 'locked' ? 'invite-logo' : phase === 'animating' ? 'invite-logo invite-logo--shrink' : 'invite-logo invite-logo--bar'
  const avatar = data ? `${BASE}data/${code}.png` : null

  return (
    <div className="app">
      <img src={`${BASE}logo-full.svg`} alt="Logo" className={logoClass} />

      {phase === 'locked' && (
        <form className={`pw-form${shake ? ' pw-shake' : ''}`} onSubmit={handleSubmit}>
          <input
            type="password"
            className="pw-input"
            placeholder="Enter password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            autoFocus
          />
          <button type="submit" className="pw-btn">→</button>
        </form>
      )}

      {phase === 'revealed' && error && (
        <p className="invite-error">Invite not found</p>
      )}

      {phase === 'revealed' && data && (
        <>
          {avatar && <img src={avatar} alt={data.name} className="invite-avatar invite-card--enter" />}
          <h1 className="invite-name">{data.name}</h1>
          <div className="invite-card invite-card--enter">
            <p className="invite-text">You are invited!</p>
          </div>
          <div className="bottom-spacer" />
          <div className="bottom-dock invite-card--enter">
            <button className="dock-btn dock-btn--intro" onClick={() => setShowBriefing(true)}>
              Introduction
            </button>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="dock-btn dock-btn--join">
              Join Group
            </a>
          </div>
        </>
      )}

      {showBriefing && <Briefing onClose={() => setShowBriefing(false)} />}
    </div>
  )
}

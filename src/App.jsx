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
          <div className="briefing-title">XEON</div>
          <div className="briefing-subtitle">EDITION 2026</div>
          <p className="briefing-tagline">Das offizielle Spieler-Briefing<br/>von Yeon und Leon</p>
          <p className="briefing-tagline">Lies es. Versteh es. Mach dich bereit.</p>
        </div>

        <section className="briefing-section briefing-section--highlight">
          <h2>Wann &amp; Wo</h2>
          <p>[DATUM] – [UHRZEIT]<br/>Am Damm 24, 50996 Köln</p>
          <p>Alles Weitere erfahrt ihr rechtzeitig. Merkt euch den Termin, der Rest ist unsere Sache.</p>
        </section>

        <section className="briefing-section">
          <h2>Was ist Xeon?</h2>
          <p>Xeon ist eine jährliche Game Show – ein Abend, an dem ihr euch in verschiedenen Disziplinen miteinander messt. Eine echte Show mit Buzzern, Bildschirm, Zeitdruck und einem finalen Gewinner.</p>
          <p>Ihr werdet individuell und in wechselnden Teams gegeneinander antreten. Die Teams werden vor jedem Teamspiel zufällig neu zusammengewürfelt, damit es fair bleibt. Am Ende zählt nur euer individueller Punktestand.</p>
          <p>Die Game Show ist das Herzstück des Abends, aber nicht alles: Für Essen, Getränke und Alkohol ist gesorgt. Davor, danach und in den Pausen wird gefeiert, getrunken und gelacht. Betrachtet es als einen Abend mit Freunden, bei dem es einen verdammt guten Grund gibt, sein Bestes zu geben.</p>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Was gibt es zu gewinnen?</h2>
          <p>Der Gewinner von Xeon erhält den offiziellen Xeon-Wanderpokal – und behält ihn ein ganzes Jahr lang. Bis zur nächsten Edition, wenn er verteidigt oder abgegeben werden muss. Der Pokal steht bei dir zuhause. Bis jemand ihn dir wegnimmt.</p>
          <p>Dazu kommt die Xeon Hall of Fame – ein permanentes Denkmal für jeden Gewinner. Wer gewinnt, geht in die Geschichte ein. Der Pokal wandert, aber die Hall of Fame bleibt.</p>
          <p className="briefing-accent">Die Frage ist: Wer eröffnet sie?</p>
        </section>

        <section className="briefing-section">
          <h2>Was erwartet euch?</h2>
          <p>Jeder von euch bekommt einen eigenen Buzzer. 9 Spiele. Einzel und Team im Wechsel. Kein Spiel, das ihr schon kennt.</p>
          <div className="skill-grid">
            <div className="skill-card"><span className="skill-icon">🧠</span><strong>Logik</strong><span>Mathematik &amp; Kombinieren</span></div>
            <div className="skill-card"><span className="skill-icon">📚</span><strong>Wissen</strong><span>Anwenden &amp; Kombinieren</span></div>
            <div className="skill-card"><span className="skill-icon">🤲</span><strong>Geschick</strong><span>Präzision unter Druck</span></div>
            <div className="skill-card"><span className="skill-icon">⚡</span><strong>Reaktion</strong><span>Timing &amp; Schnellsein</span></div>
            <div className="skill-card"><span className="skill-icon">🎯</span><strong>Intuition</strong><span>Schätzen &amp; Bauchgefühl</span></div>
            <div className="skill-card"><span className="skill-icon">🤝</span><strong>Team</strong><span>Kommunikation &amp; Strategie</span></div>
          </div>
          <p style={{textAlign: 'center', marginTop: '1rem'}}>Wer in nur einer Disziplin stark ist, hat gute Chancen. Wer in vielen stark ist, gewinnt.</p>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Wie funktioniert das Scoring?</h2>
          <p>Jedes Spiel bringt Punkte. Bei Einzelspielen bekommt ihr eure Punkte direkt. Bei Teamspielen bekommt jedes Teammitglied die Teampunkte auf sein individuelles Konto.</p>
          <p>Die genaue Punktevergabe variiert je nach Spiel – manchmal zählt Geschwindigkeit, manchmal Präzision, manchmal reines Ranking. Die Regeln werden vor jedem Spiel erklärt.</p>
          <p>Zur Halbzeit erfahrt ihr, wer vorne liegt. Das vollständige Ranking aller Spieler gibt es erst ganz am Ende.</p>
          <p><strong>Wichtig:</strong> Kein einzelnes Spiel entscheidet über den Sieg. Konstante Leistung wird belohnt. Aber auch das letzte Spiel kann noch alles auf den Kopf stellen – gebt also nie auf.</p>
        </section>

        <section className="briefing-section">
          <h2>Die Regeln</h2>
          <div className="rule-list">
            <div className="rule-card"><span className="rule-num">1</span><div><strong>Die Spielleiter haben immer recht.</strong><br/>Entscheidungen von Yeon und Leon sind endgültig.</div></div>
            <div className="rule-card"><span className="rule-num">2</span><div><strong>Spielt fair.</strong><br/>Kein Schummeln oder Regelbeugung – bei Unsicherheit: fragt.</div></div>
            <div className="rule-card"><span className="rule-num">3</span><div><strong>Gebt alles.</strong><br/>Halbherziges Mitmachen ist nicht erlaubt.</div></div>
          </div>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Was muss ich mitbringen?</h2>
          <p>Nichts. Alles, was ihr braucht, ist vor Ort – inklusive Essen, Getränke und Alkohol. Bringt nur euch selbst, gute Laune und den Willen, den Pokal mit nach Hause zu nehmen mit.</p>
        </section>

        <section className="briefing-section">
          <h2>Was sollte ich vorher wissen?</h2>
          <p>Ihr könnt euch nicht gezielt vorbereiten – und das ist Absicht. Die Spiele decken so unterschiedliche Fähigkeiten ab, dass kein Spezialwissen euch rettet. Was hilft: ein breiter Horizont, schnelles Denken und ruhige Hände unter Druck.</p>
          <p>Erwartet das Unerwartete. Manche Spiele erfordern stilles Nachdenken. Andere verlangen blitzschnelle Reaktionen. Wieder andere werden euch zum Lachen bringen – auch über euch selbst.</p>
        </section>

        <section className="briefing-section">
          <h2>Ablauf des Abends</h2>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-dot" /><strong>Ankommen</strong><span>Drinks, Essen – Zeit zum Einstimmen</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Game Show</strong><span>ca. 2,5 Stunden · 9 Spiele · eine Pause</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Siegerehrung</strong><span>Pokalübergabe &amp; Hall of Fame</span></div>
            <div className="timeline-item"><span className="timeline-dot" /><strong>Danach</strong><span>Feiern, Drinks, Revue passieren lassen</span></div>
          </div>
        </section>

        <section className="briefing-section briefing-section--final">
          <p className="briefing-accent">Wir sehen uns am Spieltag.<br/>Kommt ausgeruht. Kommt hungrig auf den Sieg.<br/>Und unterschätzt niemanden.</p>
          <div className="briefing-footer">Xeon – Edition 2026</div>
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

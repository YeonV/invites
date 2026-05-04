import { useState, useEffect } from 'react'
import './App.css'
import Demo from './Demo'

const PASSWORD = 'Xeon2026'
const WHATSAPP = import.meta.env.VITE_WHATSAPP_URL
const BASE = import.meta.env.BASE_URL

function PlayerBriefing({ onClose }) {
  return (
    <div className="briefing-overlay">
      <div className="briefing-scroll">

        <div className="briefing-header">
          <div className="briefing-logo" style={{ backgroundImage: `url(${BASE}logo-full.svg)` }} />
          <div className="briefing-subtitle">EDITION 2026</div>
          <p className="briefing-tagline">Das offizielle Spieler-Briefing<br/>von Yeon und Leon</p>
        </div>

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
          <p>Die genaue Punktevergabe variiert je nach Spiel&nbsp;– manchmal zählt Geschwindigkeit, manchmal Präzision, manchmal reines Ranking. Die Regeln werden vor jedem Spiel erklärt.</p>
          <p>Zur Halbzeit erfahrt ihr, wer vorne liegt. Das vollständige Ranking aller Spieler gibt es erst ganz am Ende.</p>
          <p><strong>Wichtig:</strong> Kein einzelnes Spiel entscheidet über den Sieg. Konstante Leistung wird belohnt. Aber auch das letzte Spiel kann noch alles auf den Kopf stellen&nbsp;– gebt also nie auf.</p>
        </section>

        <section className="briefing-section">
          <h2>Die Regeln</h2>
          <div className="rule-list">
            <div className="rule-card"><span className="rule-num">1</span><div><strong>Die Spielleiter haben immer recht.</strong><br/>Bei Regelfragen, Grenzfällen und Interpretationsspielräumen sind die Entscheidungen von Yeon und Leon endgültig.</div></div>
            <div className="rule-card"><span className="rule-num">2</span><div><strong>Spielt fair.</strong><br/>Kein Schummeln, kein Spähen, kein Vorteil durch Regelbeugung&nbsp;– bei Unsicherheit: fragt.</div></div>
            <div className="rule-card"><span className="rule-num">3</span><div><strong>Gebt alles.</strong><br/>Das ist ein Wettbewerb. Es gibt einen Pokal, eine Hall of Fame und Leute, die gewinnen wollen. Halbherziges Mitmachen ist nicht erlaubt.</div></div>
          </div>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Was muss ich mitbringen?</h2>
          <p>Nichts. Alles, was ihr braucht, ist vor Ort&nbsp;– inklusive Essen, Getränke und Alkohol. Bringt nur euch selbst, gute Laune und den Willen, den Pokal mit nach Hause zu nehmen mit.</p>
        </section>

        <section className="briefing-section">
          <h2>Was sollte ich vorher wissen?</h2>
          <p>Ihr könnt euch nicht gezielt vorbereiten&nbsp;– und das ist Absicht. Die Spiele decken so unterschiedliche Fähigkeiten ab, dass kein Spezialwissen euch rettet. Was hilft: ein breiter Horizont, schnelles Denken und ruhige Hände unter Druck.</p>
          <p>Erwartet das Unerwartete. Manche Spiele erfordern stilles Nachdenken. Andere verlangen blitzschnelle Reaktionen. Wieder andere werden euch zum Lachen bringen&nbsp;– auch über euch selbst.</p>
        </section>

        <section className="briefing-section">
          <h2>Ablauf des Abends</h2>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-dot" /><strong>Ankommen</strong><span>Zeit zum Einstimmen</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Game Show</strong><span>ca. 2,5 Stunden · 9 Spiele · eine Pause</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Siegerehrung</strong></div>
            <div className="timeline-item"><span className="timeline-dot" /><strong>Hausfest</strong><span>Feiern, Drinks, Essen, Tanzen,...</span></div>
          </div>
        </section>

        
        <section className="briefing-section briefing-section--final">
          <div className="briefing-masters" aria-label="Game Masters">
            <figure className="briefing-master">
              <img src={`${BASE}Yeon.png`} alt="Game Master Yeon" className="briefing-master-img" />
            </figure>
            <figure className="briefing-master">
              <img src={`${BASE}Leon.png`} alt="Game Master Leon" className="briefing-master-img" />
            </figure>
          </div>
            

          <div className="briefing-footer"><p className="briefing-accent">Wir freuen uns auf euch!</p>Xeon – Edition 2026</div>
        </section>

      </div>
      <button className="briefing-close" onClick={onClose}>Zurück</button>
    </div>
  )
}

function AnalystBriefing({ onClose }) {
  return (
    <div className="briefing-overlay">
      <div className="briefing-scroll">

        <div className="briefing-header">
          <div className="briefing-logo" style={{ backgroundImage: `url(${BASE}logo-full.svg)` }} />
          <div className="briefing-subtitle">EDITION 2026 · XEON ANALYST</div>
          <p className="briefing-tagline">Das offizielle Briefing für Analysten<br/>von Yeon und Leon</p>
        </div>

        <section className="briefing-section">
          <h2>Was ist Xeon?</h2>
          <p>Xeon ist eine jährliche Game Show – ein Abend, an dem sich unsere Freundesgruppe in verschiedenen Disziplinen miteinander misst. Eine echte Show mit Buzzern, Bildschirm, Zeitdruck und einem finalen Gewinner. Dazu Essen, Getränke, Alkohol und ein Abend, an dem garantiert viel gelacht wird.</p>
          <p>In der ersten Edition treten bis zu 16 <strong>Spieler</strong> in 9 Spielen gegeneinander an – einzeln und in wechselnden Teams. Daneben gibt es eine zweite, gleichwertige Rolle: <strong>Xeon Analyst</strong>. Eigene Wettbewerbe, eigene Preise, eigene Wege ins Spielerfeld.</p>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Zwei Rollen, ein Abend</h2>
          <p>Xeon hat 16 Spielerplätze. Buzzer-System, Teamgrößen, Materialmengen, Zeitplanung – alles ist auf diese Zahl ausgelegt. Mehr würden den Abend sprengen.</p>
          <p>Damit wir trotzdem alle dabeihaben, mit denen wir den Abend feiern wollen, hat die Show zwei Rollen, die nebeneinander laufen:</p>
          <p><strong>Spieler</strong> kämpfen in den 9 Spielen um den Wanderpokal und die Hall of Fame.<br/><strong>Analysten</strong> haben ihre eigenen Wettbewerbe, ihre eigenen Preise – und mehrere Wege, im Laufe des Abends ins Spielerfeld zu wechseln.</p>
          <p className="briefing-accent">Beide Rollen sind voll Teil des Abends. Die Aufteilung am Start ist nur das – ein Start. Sie kann sich im Laufe des Abends verschieben.</p>
        </section>

        <section className="briefing-section">
          <h2>Deine Rolle: Xeon Analyst</h2>
          <p>Analysten sind keine Zuschauer. Du hast eigene Aufgaben, eigene Wettbewerbe, eigene Preise – und wenn du willst, einen direkten Weg ins Hauptfeld.</p>
          <div className="rule-list">
            <div className="rule-card"><span className="rule-num">1</span><div><strong>Das Tipp-Spiel</strong><br/>Vor jedem Spiel gibst du eine Prognose ab: Wer gewinnt? Welches Team wird Erster? Wie hoch, wie schnell, wie nah dran? Du bekommst Punkte für richtige Einschätzungen – über den gesamten Abend hinweg. Am Ende wird der beste Analyst gekürt.<br/><br/><strong>Der Preis:</strong> Eine Wildcard für Xeon 2027. Heißt konkret: Du wirst beim nächsten Randomizer für Nicht-Stammspieler ausgenommen. Dein Spielerplatz im nächsten Jahr steht – kein Los, kein Zufall.</div></div>
            <div className="rule-card"><span className="rule-num">2</span><div><strong>Die Jury</strong><br/>Bei mindestens einem Spiel werden die Analysten zur offiziellen Jury. Eure Bewertung entscheidet mit über das Ranking der Spieler. Mehr verraten wir nicht – aber es wird lustig.</div></div>
            <div className="rule-card"><span className="rule-num">3</span><div><strong>Mitspielen</strong><br/>Bei einigen Spielen könnt ihr als Analysten direkt mitmachen – in eurem eigenen Analysten-Wettbewerb. Welche Spiele das sind, erfahrt ihr am Abend.</div></div>
            <div className="rule-card"><span className="rule-num">4</span><div><strong>Xeon Moment of the Night</strong><br/>Eure zweite Mission: Haltet die besten Momente des Abends mit der Handykamera fest – lustig, dramatisch, absurd. Ihr wisst, was gemeint ist. Am Ende des Abends wird das beste Foto gekürt. Handy geladen mitbringen.</div></div>
            <div className="rule-card"><span className="rule-num">5</span><div><strong>Die Analyst-Battle</strong><br/>Direkt zu Beginn des Abends gibt es die Analyst-Battle. Ausgewählte Analysten treten gegeneinander an – die Sieger werden zu vollwertigen Spielern befördert, mit allen Rechten, allen Punkten und der Chance auf den Pokal. Wer als Analyst startet, ist also nicht zwingend Analyst, wenn die Show losgeht.</div></div>
            <div className="rule-card"><span className="rule-num">6</span><div><strong>Rollen-Wechsel</strong><br/>Spieler dürfen sich bei Lampenfieber, plötzlichem Unwohlsein oder einfach aus eigenem Wunsch in den Analysten-Modus zurückziehen – und geben damit ihren Spielerplatz frei. Dieser Platz wird dann mit einem Analysten besetzt: voller Spielerstatus, alle Rechte, alle Punkte. Die Plätze sind nicht in Stein gemeißelt.</div></div>
          </div>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Der Abend</h2>
          <p>Xeon ist zuerst ein Abend mit Freunden. Essen, Getränke und Alkohol sind da. Die Game Show ist das Herzstück, aber davor, danach und in der Pause wird gefeiert, geredet und gelacht. Du bist den ganzen Abend mittendrin – beim Anfeuern, beim Mitfiebern, beim Kommentieren und beim Feiern danach.</p>
          <p className="briefing-accent">Und seien wir ehrlich: Zuzuschauen, wie Freunde unter Zeitdruck seltsame Dinge tun, ist mindestens genauso unterhaltsam wie es selbst zu tun.</p>
        </section>

        <section className="briefing-section">
          <h2>Ablauf des Abends</h2>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-dot" /><strong>Ankommen</strong><span>Drinks, Essen, Zeit zum Einstimmen</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Analyst-Battle</strong><span>Eröffnungsmatch – die Sieger rücken ins Spielerfeld</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Game Show</strong><span>ca. 2–2,5 Stunden · 9 Spiele · eine Pause · du bist als Analyst mit eigenen Aufgaben dabei</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Siegerehrung &amp; Analysten-Awards</strong><span>Der Moment der Wahrheit – für Spieler und Analysten</span></div>
            <div className="timeline-item"><span className="timeline-dot" /><strong>Hausfest</strong><span>Feiern, Drinks, den Abend Revue passieren lassen</span></div>
          </div>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Was muss ich mitbringen?</h2>
          <p>Nichts außer deinem Handy mit geladenem Akku. Alles andere ist vor Ort – inklusive Essen, Getränke und Alkohol. Bring dich selbst und gute Laune mit.</p>
        </section>

        <section className="briefing-section briefing-section--final">
          <div className="briefing-masters" aria-label="Game Masters">
            <figure className="briefing-master">
              <img src={`${BASE}Yeon.png`} alt="Game Master Yeon" className="briefing-master-img" />
            </figure>
            <figure className="briefing-master">
              <img src={`${BASE}Leon.png`} alt="Game Master Leon" className="briefing-master-img" />
            </figure>
          </div>

          <div className="briefing-footer"><p className="briefing-accent">Wir sehen uns am Spieltag.<br/>Komm hungrig. Nicht nur auf den Sieg.</p>Xeon – Edition 2026</div>
        </section>

      </div>
      <button className="briefing-close" onClick={onClose}>Zurück</button>
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
          <h1 className="invite-name invite-card--enter">{data.role === 'analyst' ? 'Analyst' : 'Player'} {data.name}</h1>
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

      {showBriefing && (data?.role === 'analyst'
        ? <AnalystBriefing onClose={() => setShowBriefing(false)} />
        : <PlayerBriefing onClose={() => setShowBriefing(false)} />)}
    </div>
  )
}

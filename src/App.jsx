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
          <p>Wir machen das zum ersten Mal, und es soll eine jährliche Tradition werden. In der ersten Edition spielen 12–16 Spieler in 9 Spielen gegeneinander – einzeln und in wechselnden Teams. Am Ende gibt es einen Wanderpokal und eine Hall of Fame.</p>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Ein Wort zur Spielerauswahl</h2>
          <p>Kurz und ehrlich: Einige Spiele funktionieren nur mit einer festen Obergrenze von 16 Spielern. Buzzer-System, Teamgrößen, Materialmengen, Zeitplanung – alles ist auf diese Zahl ausgelegt. Mehr Spieler würden den Abend sprengen.</p>
          <p>Weil wir aber mehr als 16 Leute sind, die wir dabeihaben wollen, mussten wir eine Auswahl treffen. Neben wenigen Stammspielern war diese Auswahl rein zufällig und wird es auch in zukünftigen Editionen sein. Es war keine Bewertung, wer es mehr verdient hat oder wer besser reinpasst.</p>
          <p className="briefing-accent">Das heißt für dich: Du bist als Xeon Analyst dabei. Eine eigene Rolle, eigene Aufgaben, ein eigener Wettbewerb mit eigenem Hauptpreis.</p>
        </section>

        <section className="briefing-section">
          <h2>Deine Rolle: Xeon Analyst</h2>
          <p>Analysten sind keine Zuschauer. Du hast eine eigene Rolle, eine eigene Wertung und einen eigenen Hauptpreis. Hier ist, was dich am Abend erwartet.</p>
          <div className="rule-list">
            <div className="rule-card"><span className="rule-num">1</span><div><strong>Was zu gewinnen ist: Wildcard 2027</strong><br/>Der beste Xeon Analyst gewinnt die Wildcard für die nächste Edition. Das bedeutet: Du sitzt 2027 garantiert mit am Tisch – kein Los, kein Zufall.<br/><br/>Aber die Wildcard ist mehr als nur ein Platz. Sie ist das <strong>Privileg der freien Wahl</strong>. Du allein entscheidest, ob du 2027 als Spieler antrittst – oder als Analyst zurückkehrst, wenn dir die Rolle gefallen hat. Niemand sonst hat diese Wahl. Bei allen anderen entscheidet der Zufall. Bei dir entscheidest du.</div></div>
            <div className="rule-card"><span className="rule-num">2</span><div><strong>Das Tipp-Spiel</strong><br/>Vor jedem Spiel gibst du eine Prognose ab: Du bekommst Punkte für richtige Einschätzungen – über den gesamten Abend hinweg. Am Ende wird der beste Analyst gekürt. Er gewinnt die Wildcard.</div></div>
            <div className="rule-card"><span className="rule-num">3</span><div><strong>Die Jury</strong><br/>Bei einem der Spiele werden Analysten zur Jury. Ihre Bewertung ist verbindlich – sie geht direkt in die Spielerwertung ein. Kein Veto, keine Korrektur. Welches Spiel das ist, sagen wir am Abend.</div></div>
            <div className="rule-card"><span className="rule-num">4</span><div><strong>Analyst Insight</strong><br/>Vor jedem Spiel hast du die Option, deinen Tipp, dein Bauchgefühl, deine These zu verkünden. Du musst nicht – aber wer etwas zu sagen hat, soll es sagen. Das hier ist auch deine Bühne.</div></div>
            <div className="rule-card"><span className="rule-num">5</span><div><strong>Xeon Moment of the Night</strong><br/>Halte die besten Momente des Abends mit der Handykamera fest – lustig, dramatisch, absurd. Du weißt, was gemeint ist. Am Ende des Abends wird das beste Foto gekürt: der Xeon Moment of the Night. Handy geladen mitbringen.</div></div>
          </div>
        </section>

        <section className="briefing-section briefing-section--highlight">
          <h2>Analysten-Battle &amp; Lead Analyst</h2>
          <p>Bevor die Show startet, treten die Analysten in einem eigenen, kurzen Wettbewerb gegeneinander an: dem Analysten-Battle. Es entscheidet zwei Dinge.</p>
          <p><strong>Erstens:</strong> Falls am Spieltag ein Platz frei wird, ist die Reihenfolge, wer ihn übernimmt, nicht zufällig. Sie wird im Battle erspielt.</p>
          <p><strong>Zweitens:</strong> Den <strong>Lead Analyst</strong> des Abends. Wer das Battle gewinnt – sofern er nicht selbst auf einen Spielerplatz wechselt – ist der Lead-Analyst. Bei Jury-Entscheidungen mit Patt-Stand entscheidet er.</p>
          <p className="briefing-accent">Was das Battle ist, erfährst du am Spieltag.</p>
        </section>

        <section className="briefing-section">
          <h2>Wenn der Spielerplatz frei wird</h2>
          <p>Falls ein Spieler kurzfristig absagt, am Spieltag verhindert ist – oder sich kurz vor Showbeginn doch nicht im Spielfeld sieht – übernimmt einer der Analysten den Platz. Die Reihenfolge dafür hat das Battle bestimmt.</p>
          <p>Das ist nicht Plan B des Abends, sondern Teil des Plans A: Die Show funktioniert nur, wenn jemand mit voller Überzeugung einsteigt – ohne Anlauf, ohne Ausrede. Wer übernimmt, übernimmt mit allen Rechten und allen Chancen: Punkte ab dem ersten Spiel, Pokal in Reichweite, Hall of Fame in Reichweite.</p>
        </section>

        <section className="briefing-section">
          <h2>Der Abend</h2>
          <p>Xeon ist zuerst ein Abend mit Freunden. Essen, Getränke und Alkohol sind da. Die Game Show ist das Herzstück, aber davor, danach und in der Pause wird gefeiert, geredet und gelacht. Du bist den ganzen Abend mittendrin – beim Tippen, Bewerten, Anfeuern, Kommentieren und Feiern.</p>
        </section>

        <section className="briefing-section">
          <h2>Ablauf des Abends</h2>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-dot" /><strong>Ankommen, Drinks, Essen</strong><span>Zeit zum Ankommen und Einstimmen</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Analysten-Battle</strong><span>Reihenfolge und Lead Analyst</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Game Show</strong><span>ca. 3 Stunden · 9 Spiele · eine Pause dazwischen</span></div>
            <div className="timeline-item"><span className="timeline-dot timeline-dot--accent" /><strong>Siegerehrung</strong><span>Der Moment der Wahrheit – für Spieler und Analysten</span></div>
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

          <div className="briefing-footer"><p className="briefing-accent">Wir freuen uns auf euch!</p>Xeon – Edition 2026</div>
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

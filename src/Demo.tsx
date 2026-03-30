import * as React from "react";
import Logo from "./Logo";

type VariantRenderProps = {
  active: boolean;
  hovered: boolean;
  playKey: number;
};

type Variant = {
  id: string;
  name: string;
  description: string;
  render: (props: VariantRenderProps) => React.ReactNode;
};

const LOGO_SIZE = 540;
const MOBILE_EFFECT_SCALE = 0.94;

const appStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "#070707",
  color: "#ffffff",
  padding: 32,
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const shellStyle: React.CSSProperties = {
  maxWidth: 1380,
  margin: "0 auto",
  display: "grid",
  gap: 20,
};

const panelStyle: React.CSSProperties = {
  position: "relative",
  minHeight: 680,
  borderRadius: 28,
  overflow: "hidden",
  boxShadow:
    "0 24px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.06)",
};

const panelInnerStyle: React.CSSProperties = {
  position: "relative",
  minHeight: 680,
};

const logoCenterStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const controlButtonBase: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.14)",
  padding: "12px 16px",
  borderRadius: 14,
  cursor: "pointer",
  fontSize: 14,
  transition:
    "transform 180ms ease, background 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease",
};

function Scene({
  background,
  children,
  overlay,
}: {
  background: string;
  children: React.ReactNode;
  overlay?: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 28,
        background,
      }}
    >
      {overlay}
      <div style={logoCenterStyle}>{children}</div>
    </div>
  );
}

function LogoView({
  hovered,
  style,
  size = LOGO_SIZE,
  ...props
}: React.ComponentProps<typeof Logo> & { hovered?: boolean }) {
  return (
    <Logo
      size={size}
      style={{
        position: "relative",
        transform: hovered ? "translateY(-3px) scale(1.015)" : "translateY(0) scale(1)",
        transition:
          "transform 320ms cubic-bezier(.2,.8,.2,1), filter 320ms cubic-bezier(.2,.8,.2,1)",
        ...style,
      }}
      {...props}
    />
  );
}

export default function Demo() {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const effectLogoSize = isMobile ? Math.round(LOGO_SIZE * MOBILE_EFFECT_SCALE) : LOGO_SIZE;

  const variants = React.useMemo<Variant[]>(
    () => [
      {
        id: "default-white",
        name: "01 — Default White",
        description: "Clean, stark, and static. The baseline reference.",
        render: ({ hovered }) => (
          <Scene
            background={
              "radial-gradient(circle at 50% 35%, #202020 0%, #101010 44%, #050505 100%)"
            }
          >
            <LogoView
              hovered={hovered}
              xRedLight="#FFFFFF"
              xRedDark="#FFFFFF"
              xGreenLight="#FFFFFF"
              xGreenDark="#FFFFFF"
              wordColor="#FFFFFF"
              style={{ filter: "drop-shadow(0 14px 30px rgba(255,255,255,0.08))" }}
            />
          </Scene>
        ),
      },
      {
        id: "ember-core",
        name: "02 — Ember Core",
        description: "Furnace energy. Warm, cinematic, and hardware-heavy.",
        render: ({ hovered }) => (
          <Scene
            background={`
              radial-gradient(circle at 50% 42%, rgba(255,130,54,0.22) 0%, rgba(255,92,35,0.10) 20%, transparent 42%),
              radial-gradient(circle at 18% 18%, rgba(255,185,92,0.18) 0%, transparent 30%),
              linear-gradient(180deg, #1a0d0a 0%, #120707 45%, #040404 100%)
            `}
          >
            <LogoView
              hovered={hovered}
              xRedLight="#D14B2A"
              xRedDark="#6B130C"
              xGreenLight="#728F3A"
              xGreenDark="#2C3B13"
              wordColor="#FFE8D2"
              style={{
                filter:
                  "drop-shadow(0 0 12px rgba(255,120,60,0.26)) drop-shadow(0 18px 44px rgba(0,0,0,0.45))",
              }}
            />
          </Scene>
        ),
      },
      {
        id: "arctic-hologram",
        name: "03 — Arctic Hologram",
        description: "Cold, crisp, and premium. Feels like a flagship control interface.",
        render: ({ hovered }) => (
          <Scene
            background={`
              radial-gradient(circle at 70% 20%, rgba(118,191,255,0.20) 0%, transparent 28%),
              radial-gradient(circle at 20% 80%, rgba(131,255,236,0.14) 0%, transparent 26%),
              linear-gradient(135deg, #06131f 0%, #0b2030 45%, #091017 100%)
            `}
          >
            <LogoView
              hovered={hovered}
              xRedLight="#8FD7FF"
              xRedDark="#3B7EA6"
              xGreenLight="#98FFF0"
              xGreenDark="#267D77"
              wordColor="#EAF8FF"
              style={{
                filter:
                  "drop-shadow(0 0 18px rgba(118,191,255,0.20)) drop-shadow(0 18px 48px rgba(0,0,0,0.46))",
              }}
            />
          </Scene>
        ),
      },
      {
        id: "black-gold",
        name: "04 — Black Gold",
        description: "Luxury treatment. Less sci-fi, more prestige product line.",
        render: ({ hovered }) => (
          <Scene
            background={`
              radial-gradient(circle at 50% 24%, rgba(255,214,102,0.10) 0%, transparent 30%),
              linear-gradient(180deg, #19140d 0%, #0b0907 100%)
            `}
          >
            <LogoView
              hovered={hovered}
              xRedLight="#F0D27A"
              xRedDark="#9E7A29"
              xGreenLight="#D8B85A"
              xGreenDark="#7A5A17"
              wordColor="#FFF2C8"
              style={{
                filter:
                  "drop-shadow(0 0 10px rgba(255,220,120,0.18)) drop-shadow(0 18px 40px rgba(0,0,0,0.42))",
              }}
            />
          </Scene>
        ),
      },
      {
        id: "glitch-stack",
        name: "05 — Glitch Stack",
        description: "Deliberately extra. Layered RGB offset for a loud digital mood.",
        render: ({ hovered }) => (
          <Scene
            background={`
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 24%),
              linear-gradient(180deg, #080808 0%, #000000 100%)
            `}
          >
            <div style={{ ...logoCenterStyle, position: "relative" }}>
              <LogoView
                hovered={hovered}
                size={effectLogoSize}
                xRedLight="#00E5FF"
                xRedDark="#00E5FF"
                xGreenLight="#00E5FF"
                xGreenDark="#00E5FF"
                wordColor="#00E5FF"
                style={{
                  position: "absolute",
                  transform: `${hovered ? "translate(-10px, -3px) scale(1.015)" : "translate(-8px, 0px) scale(1)"}`,
                  opacity: 0.72,
                  mixBlendMode: "screen",
                  filter: "blur(0.2px)",
                }}
              />
              <LogoView
                hovered={hovered}
                size={effectLogoSize}
                xRedLight="#FF3FA4"
                xRedDark="#FF3FA4"
                xGreenLight="#FF3FA4"
                xGreenDark="#FF3FA4"
                wordColor="#FF3FA4"
                style={{
                  position: "absolute",
                  transform: `${hovered ? "translate(10px, -3px) scale(1.015)" : "translate(8px, 0px) scale(1)"}`,
                  opacity: 0.72,
                  mixBlendMode: "screen",
                  filter: "blur(0.2px)",
                }}
              />
              <LogoView
                hovered={hovered}
                xRedLight="#FFFFFF"
                xRedDark="#FFFFFF"
                xGreenLight="#FFFFFF"
                xGreenDark="#FFFFFF"
                wordColor="#FFFFFF"
                style={{
                  position: "relative",
                  filter: "drop-shadow(0 0 18px rgba(255,255,255,0.12))",
                }}
              />
            </div>
          </Scene>
        ),
      },
      {
        id: "aurora-glass",
        name: "06 — Aurora Glass",
        description: "Soft neon haze behind a crisp mark. More brand-world than spec sheet.",
        render: ({ hovered }) => (
          <Scene
            background={`
              radial-gradient(circle at 18% 22%, rgba(255,72,154,0.28) 0%, transparent 26%),
              radial-gradient(circle at 82% 20%, rgba(68,255,214,0.24) 0%, transparent 28%),
              radial-gradient(circle at 50% 80%, rgba(93,128,255,0.24) 0%, transparent 30%),
              linear-gradient(135deg, #0a1020 0%, #111827 40%, #0a0f18 100%)
            `}
            overlay={
              <div
                style={{
                  position: "absolute",
                  inset: 18,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            }
          >
            <LogoView
              hovered={hovered}
              xRedLight="#FF86B7"
              xRedDark="#C13974"
              xGreenLight="#87FFE4"
              xGreenDark="#1E8B73"
              wordColor="#F8FBFF"
              style={{
                filter:
                  "drop-shadow(0 0 24px rgba(255,255,255,0.12)) drop-shadow(0 18px 48px rgba(0,0,0,0.45))",
              }}
            />
          </Scene>
        ),
      },
      {
        id: "outline-surge",
        name: "07 — Outline Surge",
        description:
          "A one-shot outline burst that snaps into a crisp mark. CSS-driven and intentionally flashy.",
        render: ({ hovered, playKey }) => (
          <Scene
            background={`
              radial-gradient(circle at 50% 38%, rgba(85,255,245,0.10) 0%, transparent 26%),
              linear-gradient(180deg, #020508 0%, #071018 50%, #030506 100%)
            `}
          >
            <div key={`outline-${playKey}`} style={{ ...logoCenterStyle, position: "relative" }}>
              {[
                { x: -3, y: 0 },
                { x: 3, y: 0 },
                { x: 0, y: -3 },
                { x: 0, y: 3 },
                { x: -2, y: -2 },
                { x: 2, y: -2 },
                { x: -2, y: 2 },
                { x: 2, y: 2 },
              ].map((offset, index) => (
                <LogoView
                  key={index}
                  hovered={hovered}
                  size={effectLogoSize}
                  xRedLight="#63FFF0"
                  xRedDark="#63FFF0"
                  xGreenLight="#63FFF0"
                  xGreenDark="#63FFF0"
                  wordColor="#63FFF0"
                  style={{
                    position: "absolute",
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(1)`,
                    opacity: 0.85,
                    filter: "blur(0.5px)",
                    animation: `outlineSurge 1000ms cubic-bezier(.2,.8,.2,1) ${index * 20}ms 1 both`,
                  }}
                />
              ))}
              <LogoView
                hovered={hovered}
                xRedLight="#FFFFFF"
                xRedDark="#FFFFFF"
                xGreenLight="#FFFFFF"
                xGreenDark="#FFFFFF"
                wordColor="#FFFFFF"
                style={{
                  position: "relative",
                  animation: "settleIn 950ms cubic-bezier(.16,1,.3,1) 1 both",
                  filter:
                    "drop-shadow(0 0 28px rgba(99,255,240,0.18)) drop-shadow(0 18px 44px rgba(0,0,0,0.42))",
                }}
              />
            </div>
          </Scene>
        ),
      },
      {
        id: "scanner-sweep",
        name: "08 — Scanner Sweep",
        description:
          "A single luminous scan passes over the logo, like a startup diagnostic sweep.",
        render: ({ hovered, playKey }) => (
          <Scene
            background={`
              radial-gradient(circle at 50% 50%, rgba(86,180,255,0.06) 0%, transparent 24%),
              linear-gradient(180deg, #04070d 0%, #070d16 50%, #030406 100%)
            `}
          >
            <div key={`scan-${playKey}`} style={{ ...logoCenterStyle, position: "relative", overflow: "hidden" }}>
              <LogoView
                hovered={hovered}
                xRedLight="#D8F5FF"
                xRedDark="#C4E8FF"
                xGreenLight="#D8F5FF"
                xGreenDark="#C4E8FF"
                wordColor="#F2FAFF"
                style={{
                  position: "relative",
                  filter:
                    "drop-shadow(0 0 18px rgba(130,200,255,0.14)) drop-shadow(0 18px 44px rgba(0,0,0,0.42))",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "12% 8%",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(120,220,255,0.0) 35%, rgba(120,220,255,0.70) 50%, rgba(120,220,255,0.0) 65%, transparent 100%)",
                  mixBlendMode: "screen",
                  transform: "translateX(-120%) skewX(-12deg)",
                  animation: "scanSweep 1200ms cubic-bezier(.2,.7,.2,1) 1 both",
                  pointerEvents: "none",
                }}
              />
            </div>
          </Scene>
        ),
      },
      {
        id: "chroma-snap",
        name: "09 — Chroma Snap",
        description:
          "An RGB split snaps into alignment once, then rests as a clean bright mark.",
        render: ({ hovered, playKey }) => (
          <Scene
            background={`
              radial-gradient(circle at 50% 45%, rgba(255,255,255,0.03) 0%, transparent 22%),
              linear-gradient(180deg, #050505 0%, #0a0a0a 100%)
            `}
          >
            <div key={`snap-${playKey}`} style={{ ...logoCenterStyle, position: "relative" }}>
              <LogoView
                hovered={hovered}
                size={effectLogoSize}
                xRedLight="#00E5FF"
                xRedDark="#00E5FF"
                xGreenLight="#00E5FF"
                xGreenDark="#00E5FF"
                wordColor="#00E5FF"
                style={{
                  position: "absolute",
                  opacity: 0.65,
                  mixBlendMode: "screen",
                  animation: "chromaLeft 900ms cubic-bezier(.16,1,.3,1) 1 both",
                }}
              />
              <LogoView
                hovered={hovered}
                size={effectLogoSize}
                xRedLight="#FF3FA4"
                xRedDark="#FF3FA4"
                xGreenLight="#FF3FA4"
                xGreenDark="#FF3FA4"
                wordColor="#FF3FA4"
                style={{
                  position: "absolute",
                  opacity: 0.65,
                  mixBlendMode: "screen",
                  animation: "chromaRight 900ms cubic-bezier(.16,1,.3,1) 1 both",
                }}
              />
              <LogoView
                hovered={hovered}
                xRedLight="#FFFFFF"
                xRedDark="#FFFFFF"
                xGreenLight="#FFFFFF"
                xGreenDark="#FFFFFF"
                wordColor="#FFFFFF"
                style={{
                  position: "relative",
                  animation: "settleIn 980ms cubic-bezier(.16,1,.3,1) 1 both",
                  filter:
                    "drop-shadow(0 0 18px rgba(255,255,255,0.10)) drop-shadow(0 18px 44px rgba(0,0,0,0.42))",
                }}
              />
            </div>
          </Scene>
        ),
      },
      {
        id: "stagger-assembly",
        name: "10 — Stagger Assembly",
        description:
          "Each letter-part assembles in sequence, then a scan sweep passes over the finished mark.",
        render: ({ hovered, playKey }) => (
          <Scene
            background={`
              radial-gradient(circle at 50% 38%, rgba(255,255,255,0.05) 0%, transparent 26%),
              radial-gradient(circle at 20% 18%, rgba(130,200,255,0.08) 0%, transparent 24%),
              linear-gradient(180deg, #050607 0%, #0a0d10 52%, #040505 100%)
            `}
          >
            <div
              key={`stagger-${playKey}`}
              className="stagger-parts stagger-with-scan"
              style={{ ...logoCenterStyle, position: "relative", overflow: "hidden" }}
            >
              <LogoView
                hovered={hovered}
                xRedLight="#FFFFFF"
                xRedDark="#FFFFFF"
                xGreenLight="#FFFFFF"
                xGreenDark="#FFFFFF"
                wordColor="#FFFFFF"
                style={{
                  position: "relative",
                  filter:
                    "drop-shadow(0 0 12px rgba(255,255,255,0.08)) drop-shadow(0 18px 44px rgba(0,0,0,0.42))",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "12% 8%",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(120,220,255,0.0) 35%, rgba(120,220,255,0.70) 50%, rgba(120,220,255,0.0) 65%, transparent 100%)",
                  mixBlendMode: "screen",
                  transform: "translateX(-120%) skewX(-12deg)",
                  animation: "scanSweep 1200ms cubic-bezier(.2,.7,.2,1) 1720ms 1 both",
                  pointerEvents: "none",
                }}
              />
            </div>
          </Scene>
        ),
      },
    ],
    [effectLogoSize]
  );

  const [index, setIndex] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  const [playCounts, setPlayCounts] = React.useState<number[]>(() =>
    Array.from({ length: variants.length }, (_, i) => (i === 0 ? 1 : 0))
  );
  const [backHover, setBackHover] = React.useState(false);
  const [nextHover, setNextHover] = React.useState(false);

  React.useEffect(() => {
    setPlayCounts((current) =>
      current.map((value, i) => (i === index ? value + 1 : value))
    );
  }, [index]);

  const previous = React.useCallback(() => {
    setIndex((current) => (current - 1 + variants.length) % variants.length);
  }, [variants.length]);

  const next = React.useCallback(() => {
    setIndex((current) => (current + 1) % variants.length);
  }, [variants.length]);

  const currentVariant = variants[index];

  return (
    <div style={appStyle}>
      <style>{`
        @keyframes outlineSurge {
          0% { opacity: 0; transform: scale(0.985); filter: blur(3px); }
          40% { opacity: 0.95; transform: scale(1.012); filter: blur(1.2px); }
          100% { opacity: 0.18; transform: scale(1); filter: blur(0.4px); }
        }

        @keyframes settleIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.985); }
          55% { opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes scanSweep {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          10% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
        }

        @keyframes chromaLeft {
          0% { transform: translate(-22px, 0px); opacity: 0; }
          35% { opacity: 0.8; }
          100% { transform: translate(0px, 0px); opacity: 0.12; }
        }

        @keyframes chromaRight {
          0% { transform: translate(22px, 0px); opacity: 0; }
          35% { opacity: 0.8; }
          100% { transform: translate(0px, 0px); opacity: 0.12; }
        }

        @keyframes partAssemble {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.94);
            filter: blur(4px);
          }
          55% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .stagger-parts .part {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: partAssemble 700ms cubic-bezier(.16,1,.3,1) 1 both;
          will-change: transform, opacity, filter;
        }

        .stagger-parts .x-main-light { animation-delay: 0ms; }
        .stagger-parts .x-main-dark { animation-delay: 70ms; }
        .stagger-parts .x-top-left-outer { animation-delay: 140ms; }
        .stagger-parts .x-top-left-inner { animation-delay: 210ms; }
        .stagger-parts .x-bottom-right-inner { animation-delay: 280ms; }
        .stagger-parts .x-bottom-right-outer { animation-delay: 350ms; }

        .stagger-parts .e-top { animation-delay: 430ms; }
        .stagger-parts .e-upper-slash { animation-delay: 500ms; }
        .stagger-parts .e-middle { animation-delay: 570ms; }
        .stagger-parts .e-lower-backslash { animation-delay: 640ms; }
        .stagger-parts .e-bottom { animation-delay: 710ms; }

        .stagger-parts .o-body { animation-delay: 800ms; }

        .stagger-parts .n-left { animation-delay: 900ms; }
        .stagger-parts .n-diagonal { animation-delay: 980ms; }
        .stagger-parts .n-right { animation-delay: 1060ms; }
      `}</style>

      <div style={shellStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                opacity: 0.65,
                marginBottom: 8,
              }}
            >
              XEON Variant Explorer
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: 28,
                lineHeight: 1.1,
              }}
            >
              {currentVariant.name}
            </h1>
            <p
              style={{
                margin: "8px 0 0",
                opacity: 0.72,
                maxWidth: 760,
                lineHeight: 1.45,
              }}
            >
              {currentVariant.description}
            </p>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={previous}
              onMouseEnter={() => setBackHover(true)}
              onMouseLeave={() => setBackHover(false)}
              style={{
                ...controlButtonBase,
                background: backHover ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
                color: "#fff",
                transform: backHover ? "translateY(-1px)" : "translateY(0)",
                boxShadow: backHover
                  ? "0 10px 22px rgba(0,0,0,0.22)"
                  : "0 0 0 rgba(0,0,0,0)",
              }}
            >
              ← Back
            </button>
            <button
              onClick={next}
              onMouseEnter={() => setNextHover(true)}
              onMouseLeave={() => setNextHover(false)}
              style={{
                ...controlButtonBase,
                background: nextHover ? "#f0f0f0" : "#ffffff",
                color: "#000",
                fontWeight: 600,
                transform: nextHover ? "translateY(-1px)" : "translateY(0)",
                boxShadow: nextHover
                  ? "0 10px 22px rgba(255,255,255,0.12)"
                  : "0 0 0 rgba(0,0,0,0)",
              }}
            >
              Forward →
            </button>
          </div>
        </div>

        <div
          style={{
            ...panelStyle,
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
            transition: "transform 260ms cubic-bezier(.2,.8,.2,1)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={panelInnerStyle}>
            {variants.map((variant, variantIndex) => {
              const active = variantIndex === index;
              return (
                <div
                  key={variant.id}
                  aria-hidden={!active}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: active ? 1 : 0,
                    transform: active
                      ? hovered
                        ? "scale(1.006)"
                        : "scale(1)"
                      : "scale(0.985)",
                    transformOrigin: "50% 50%",
                    transition:
                      "opacity 520ms cubic-bezier(.16,1,.3,1), transform 620ms cubic-bezier(.16,1,.3,1)",
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  {variant.render({
                    active,
                    hovered,
                    playKey: playCounts[variantIndex],
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {variants.map((variant, variantIndex) => {
            const active = variantIndex === index;
            return (
              <button
                key={variant.id}
                onClick={() => setIndex(variantIndex)}
                title={variant.name}
                style={{
                  width: active ? 34 : 12,
                  height: 12,
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 180ms ease",
                  background: active ? "#ffffff" : "rgba(255,255,255,0.24)",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

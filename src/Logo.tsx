import * as React from "react";

export type LogoProps = Omit<React.SVGProps<SVGSVGElement>, "color"> & {
  size?: number | string;
  xRedLight?: string;
  xRedDark?: string;
  xGreenLight?: string;
  xGreenDark?: string;
  wordColor?: string;
  title?: string;
};

/**
 * XEON geometric logo.
 *
 * Notes:
 * - The X is intentionally multi-part and color-split.
 * - E/O/N are grouped separately so they can be recolored or animated later.
 * - Colors are implemented with CSS variables for easy theming in React.
 */
export default function Logo({
  size = 2260,
  xRedLight = "#7A1E1E",
  xRedDark = "#561313",
  xGreenLight = "#1F4D3A",
  xGreenDark = "#143528",
  wordColor = "#111111",
  title = "XEON geometric logo",
  style,
  ...svgProps
}: LogoProps) {
  const cssVars = {
    "--x-red-light": xRedLight,
    "--x-red-dark": xRedDark,
    "--x-green-light": xGreenLight,
    "--x-green-dark": xGreenDark,
    "--word-color": wordColor,
  } as React.CSSProperties;

  return (
    <svg
      width={size}
      height="auto"
      viewBox="0 0 2260 730"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      style={{ display: "block", ...cssVars, ...style }}
      {...svgProps}
    >
      <g transform="translate(-220 -70)">
        <g className="letter letter-x">
          <polygon
            className="part x-main-light"
            points="233,781 324.5,781 845.5,80 754,80"
            fill="var(--x-red-light)"
            stroke="var(--x-red-light)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part x-main-dark"
            points="324.5,781 416,781 937,80 845.5,80"
            fill="var(--x-red-dark)"
            stroke="var(--x-red-dark)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />

          <polygon
            className="part x-top-left-outer"
            points="233,80 324.5,80 504.36,322 458.61,383.56"
            fill="var(--x-red-light)"
            stroke="var(--x-red-light)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part x-top-left-inner"
            points="324.5,80 416,80 550.11,260.44 504.36,322"
            fill="var(--x-green-light)"
            stroke="var(--x-green-light)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />

          <polygon
            className="part x-bottom-right-inner"
            points="711.39,477.44 838.15,648 1033.12,648 1082.56,714.5 796.075,714.5 665.64,539"
            fill="var(--x-green-light)"
            stroke="var(--x-green-light)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part x-bottom-right-outer"
            points="665.64,539 796.075,714.5 1082.56,714.5 1132,781 754,781 619.89,600.56"
            fill="var(--x-green-dark)"
            stroke="var(--x-green-dark)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
        </g>

        <g className="letter letter-e" transform="translate(28 0)">
          <polygon
            className="part e-top"
            points="1050,80 1310,80 1241.62,172 981.62,172"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part e-upper-slash"
            points="981.62,172 1101.62,172 1006.49,300 886.49,300"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part e-middle"
            points="886.49,300 1166.49,300 1098.11,392 818.11,392"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part e-lower-backslash"
            points="818.11,392 958.11,392 1068.11,540 928.11,540"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part e-bottom"
            points="899.84,502 1249.84,502 1321.19,598 971.19,598"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
        </g>

        <g className="letter letter-o" transform="translate(28 0)">
          <path
            className="part o-body"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1459.6 80
               H1700.4
               L1886.24 339
               L1700.4 598
               H1459.6
               L1273.76 339
               Z

               M1511.04 155
               H1648.96
               L1782.1 339
               L1655.36 514
               H1504.64
               L1377.9 339
               Z"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
        </g>

        <g className="letter letter-n" transform="translate(28 0)">
          <polygon
            className="part n-left"
            points="1933,80 2043,80 2043,598 1933,598"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part n-diagonal"
            points="1933,80 2043,80 2428,598 2318,598"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
          <polygon
            className="part n-right"
            points="2318,80 2428,80 2428,598 2318,598"
            fill="var(--word-color)"
            stroke="var(--word-color)"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            paintOrder="stroke fill"
          />
        </g>
      </g>
    </svg>
  );
}

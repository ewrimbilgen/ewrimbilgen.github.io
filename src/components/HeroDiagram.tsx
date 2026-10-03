import type { ReactNode } from "react";

export const DEFAULT_CAPTION = "Modular RAG, and the product call I make at each stage. Hover a module.";

export const D: Record<string, string> = {
  src: "EMIS: 2M+ research PDFs; natural-language queries across them cut analyst research time 40%. Client work: 500K+ internal documents.",
  chunk: "Tables and multi-column layouts break first in report PDFs. My test for chunking: can the answer cite the exact passage?",
  embed: "Embedding model choice trades cost, latency and quality. Choose it on real user questions, not a public leaderboard.",
  index: "Keyword search wins on company names and exact terms; vectors win on meaning. Research users need both.",
  q: "At EMIS I clustered query logs to see where the long tail broke. 30% of churned trials named search.",
  plan: "The agent in the research assistant I led: break a complex question into search, retrieval and synthesis steps, then decide what to call next.",
  retr: "At EMIS I sequenced the fixes: Elasticsearch, caching, then pagination. Zero-result queries fell 34%, P95 latency 18%.",
  rerank: "Fewer, better passages beat more context: cheaper, faster, fewer wrong citations. The cut-off is a quality-versus-latency call.",
  gen: "The model writes only from retrieved evidence. When it is thin, better to search again, or say so, than guess.",
  mcp: "Same lesson as my OpenAPI SDK generator: one standard interface beats one-off integrations. MCP applies it to the agent's live data.",
  ans: "Citations back every answer in the research assistant I led, now an MVP with 3 clients. No source, no claim.",
  eval: "I pair model scores (RAGAS, Langfuse traces) with product KPIs like query success rate and time-to-insight. Together they pick the next fix.",
};

type Props = { active: string | null; onActive: (k: string | null) => void };

function M({ k, a, on, children }: { k: string; a: string | null; on: (k: string | null) => void; children: ReactNode }) {
  return (
    <g
      className={`m${a === k ? " on" : ""}`}
      data-k={k}
      tabIndex={0}
      onMouseEnter={() => on(k)}
      onClick={() => on(k)}
      onFocus={() => on(k)}
      onMouseLeave={() => on(null)}
      onBlur={() => on(null)}
    >
      {children}
    </g>
  );
}

export function HeroDiagram({ active, onActive }: Props) {
  const ah = "url(#ah2)";
  return (
    <svg
      viewBox="0 0 640 470"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Modular RAG architecture"
      className={`hero-diagram${active ? " dim" : ""}`}
      width="100%"
      height="100%"
    >
      <defs>
        <marker id="ah2" viewBox="0 0 10 10" refX={8.5} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
          <path d="M1 1L9 5L1 9z" fill="#6B7390" />
        </marker>
        <linearGradient id="gSand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F3EBDA" /><stop offset="1" stopColor="#E2D5B8" /></linearGradient>
        <linearGradient id="gCard" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFEFB" /><stop offset="1" stopColor="#F6F1E6" /></linearGradient>
        <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E6F0F9" /><stop offset="1" stopColor="#C6DAEE" /></linearGradient>
        <linearGradient id="gBlush" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FAE7E0" /><stop offset="1" stopColor="#EECBBF" /></linearGradient>
        <linearGradient id="gSage" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#DFEEE3" /><stop offset="1" stopColor="#BFDAC6" /></linearGradient>
        <linearGradient id="gNavy" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#33406C" /><stop offset="1" stopColor="#1A2340" /></linearGradient>
        <linearGradient id="gLane1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#FFFFFF" stopOpacity=".75" /><stop offset="1" stopColor="#FFFFFF" stopOpacity=".25" /></linearGradient>
        <linearGradient id="gLane2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#E3EBF5" stopOpacity=".7" /><stop offset="1" stopColor="#E3EBF5" stopOpacity=".2" /></linearGradient>
        <filter id="sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#1C2540" floodOpacity=".11" /></filter>
        <filter id="glow" x="-30%" y="-40%" width="160%" height="200%"><feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#1C2540" floodOpacity=".38" /></filter>
      </defs>

      {/* lanes */}
      <rect x="4" y="12" width="632" height="106" rx="20" fill="url(#gLane1)" />
      <rect x="4" y="126" width="632" height="208" rx="20" fill="url(#gLane2)" />
      <circle cx="21" cy="31" r="3" fill="#6B7390" /><text className="lane" x="30" y="34.5">INDEXING · OFFLINE</text>
      <circle cx="21" cy="145" r="3" fill="#1C2540" /><text className="lane" x="30" y="148.5">QUERY · ONLINE</text>

      {/* lines */}
      <path className="ln" d="M132 73H160" markerEnd={ah} />
      <path className="ln" d="M284 73H312" markerEnd={ah} />
      <path className="ln" d="M262 48C262 30 510 30 510 46" markerEnd={ah} /><text className="sub" x="386" y="30" textAnchor="middle">text · keywords</text>
      <path className="ln" d="M436 73H464" markerEnd={ah} />
      <path className="ln" d="M543 98C543 135 371 128 371 162" markerEnd={ah} />
      <path className="ln" d="M116 191H144" markerEnd={ah} />
      <path className="ln" d="M276 191H304" markerEnd={ah} />
      <path className="ln" d="M436 191H464" markerEnd={ah} />
      <path className="ln" d="M543 218V260" markerEnd={ah} />
      <path className="ln" d="M466 289H442" markerEnd={ah} />
      <path className="ln dash" d="M490 262C490 246 478 240 460 240H262C251 240 246 234 246 224" markerEnd={ah} />
      <text className="sub" x="355" y="254" textAnchor="middle" style={{ fontStyle: "italic" }}>needs more evidence</text>
      <path className="ln" d="M360 316V370" markerEnd={ah} />
      <path className="ln dash" d="M200 372V222" markerEnd={ah} />
      <path className="ln dash" d="M30 372V340H10V122H223V101" markerEnd={ah} />

      <path id="flowQ" d="M68 191H543V289H360" fill="none" />
      <path id="flowI" d="M76 73H543" fill="none" />
      <circle r="9" fill="#1C2540" opacity=".12"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#flowQ" /></animateMotion></circle>
      <circle r="4.5" fill="#1C2540"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#flowQ" /></animateMotion></circle>
      <circle r="7" fill="#6B7390" opacity=".15"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#flowI" /></animateMotion></circle>
      <circle r="3.5" fill="#6B7390"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#flowI" /></animateMotion></circle>

      {/* indexing */}
      <M a={active} on={onActive} k="src">
        <rect className="bx" x="20" y="48" width="112" height="50" rx="13" fill="url(#gSand)" filter="url(#sh)" /><text className="lbl" x="76" y="70" textAnchor="middle">SOURCES</text><text className="sub" x="76" y="86" textAnchor="middle">PDFs · reports · docs</text>
        <g className="ic" transform="translate(30 48)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.85)" d="M-3.5-5H1.5L3.5-3V5H-3.5Z M-1.5 0H1.5 M-1.5 2.5H1.5" /></g>
      </M>
      <M a={active} on={onActive} k="chunk">
        <rect className="bx" x="162" y="48" width="122" height="50" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="lbl" x="223" y="70" textAnchor="middle">PARSE &amp; CHUNK</text><text className="sub" x="223" y="86" textAnchor="middle">layout · metadata</text>
        <g className="ic" transform="translate(172 48)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.85)" d="M0-4.5L5-2L0 .5L-5-2Z M-5 1.2L0 3.7L5 1.2" /></g>
      </M>
      <M a={active} on={onActive} k="embed">
        <rect className="bx" x="314" y="48" width="122" height="50" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="lbl" x="375" y="70" textAnchor="middle">EMBED</text><text className="sub" x="375" y="86" textAnchor="middle">dense vectors</text>
        <g className="ic" transform="translate(324 48)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.85)" d="M-5 0C-3-5-2-5 0 0S3 5 5 0" /></g>
      </M>
      <M a={active} on={onActive} k="index">
        <rect className="bx" x="466" y="48" width="154" height="50" rx="13" fill="url(#gSky)" filter="url(#sh)" /><text className="lbl" x="543" y="70" textAnchor="middle">INDEX</text><text className="sub" x="543" y="86" textAnchor="middle">keyword + vector</text>
        <g className="ic" transform="translate(476 48)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><g transform="scale(.85)"><ellipse className="g" cx="0" cy="-3" rx="4" ry="1.8" /><path d="M-4-3V3C-4 4.6 4 4.6 4 3V-3M-4 0C-4 1.6 4 1.6 4 0" /></g></g>
      </M>

      {/* query */}
      <M a={active} on={onActive} k="q">
        <rect className="bx" x="20" y="164" width="96" height="54" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="lbl" x="68" y="188" textAnchor="middle">QUESTION</text><text className="sub" x="68" y="204" textAnchor="middle">user intent</text>
        <g className="ic" transform="translate(30 164)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.85)" d="M-5-3.5H5V2H-1L-3.5 4.5V2H-5Z" /></g>
      </M>
      <M a={active} on={onActive} k="plan">
        <rect className="bx" x="146" y="164" width="130" height="54" rx="13" fill="url(#gBlush)" filter="url(#sh)" /><text className="lbl" x="211" y="188" textAnchor="middle">AGENT · PLANNER</text><text className="sub" x="211" y="204" textAnchor="middle">plan · route · call tools</text>
        <g className="ic" transform="translate(156 164)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><g transform="scale(.85)"><path d="M-4 3C-4-2 2 3 4-3" /><circle className="g" cx="-4" cy="3" r="1.3" /><circle className="g" cx="4" cy="-3" r="1.3" /></g></g>
      </M>
      <M a={active} on={onActive} k="retr">
        <rect className="bx" x="306" y="164" width="130" height="54" rx="13" fill="url(#gNavy)" filter="url(#glow)" style={{ stroke: "#1C2540" }} /><text className="lbl" x="371" y="188" textAnchor="middle" style={{ fill: "#F7F3EA" }}>RETRIEVAL</text><text className="sub" x="371" y="204" textAnchor="middle" style={{ fill: "#C4CADD" }}>hybrid search</text>
        <g className="ic" transform="translate(316 164)"><circle r="9" fill="#F7F3EA" stroke="rgba(247,243,234,.4)" /><g transform="scale(.85)"><circle className="g" cx="-1" cy="-1" r="3.5" /><path d="M1.6 1.6L4.5 4.5" /></g></g>
      </M>
      <M a={active} on={onActive} k="rerank">
        <rect className="bx" x="466" y="164" width="154" height="54" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="lbl" x="543" y="188" textAnchor="middle">RE-RANK &amp; FILTER</text><text className="sub" x="543" y="204" textAnchor="middle">best evidence · permissions</text>
        <g className="ic" transform="translate(476 164)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.85)" d="M-5-4H5L1 .5V4.5L-1 3.5V.5Z" /></g>
      </M>
      <M a={active} on={onActive} k="gen">
        <rect className="bx" x="466" y="262" width="154" height="54" rx="13" fill="url(#gSage)" filter="url(#sh)" /><text className="lbl" x="543" y="286" textAnchor="middle">SYNTHESIS</text><text className="sub" x="543" y="302" textAnchor="middle">grounded in evidence</text>
        <g className="ic" transform="translate(476 262)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.8)" d="M0-5L1.2-1.2L5 0L1.2 1.2L0 5L-1.2 1.2L-5 0L-1.2-1.2Z" /></g>
      </M>
      <M a={active} on={onActive} k="ans">
        <rect className="bx" x="280" y="262" width="160" height="54" rx="13" fill="url(#gSky)" filter="url(#sh)" /><text className="lbl" x="360" y="286" textAnchor="middle">ANSWER + CITATIONS</text><text className="sub" x="360" y="302" textAnchor="middle">every claim sourced</text>
        <g className="ic" transform="translate(290 262)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.8)" d="M-3.5-5H3.5V5L0 2.5L-3.5 5Z" /></g>
      </M>

      <path className="ln" d="M165 222C165 245 80 238 80 260" markerStart={ah} markerEnd={ah} />
      <M a={active} on={onActive} k="mcp">
        <rect className="bx" x="20" y="262" width="120" height="54" rx="13" fill="url(#gSand)" filter="url(#sh)" /><text className="lbl" x="80" y="286" textAnchor="middle">TOOLS · MCP</text><text className="sub" x="80" y="302" textAnchor="middle">APIs · DBs · apps</text>
        <g className="ic" transform="translate(30 262)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.8)" d="M-2-5V-1M2-5V-1M-4-1H4V1Q4 4 0 4T-4 1ZM0 4V5.5" /></g>
      </M>

      {/* eval */}
      <M a={active} on={onActive} k="eval">
        <rect className="bx" x="20" y="372" width="600" height="70" rx="16" fill="#F4EEDF" fillOpacity=".85" style={{ stroke: "#6B7390", strokeDasharray: "5 5" }} />
        <text className="lbl" x="48" y="401">EVALUATION &amp; FEEDBACK</text><text className="sub" x="48" y="419">Langfuse · RAGAS · query logs</text>
        <rect x="252" y="394" width="92" height="26" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="sub" x="298" y="411" textAnchor="middle">query success</text>
        <rect x="352" y="394" width="72" height="26" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="sub" x="388" y="411" textAnchor="middle">recall@k</text>
        <rect x="432" y="394" width="86" height="26" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="sub" x="475" y="411" textAnchor="middle">faithfulness</text>
        <rect x="526" y="394" width="72" height="26" rx="13" fill="url(#gCard)" filter="url(#sh)" /><text className="sub" x="562" y="411" textAnchor="middle">latency</text>
        <g className="ic" transform="translate(30 372)"><circle r="9" fill="#FFFEFB" stroke="rgba(28,37,64,.14)" /><path transform="scale(.8)" d="M-5 0H-2L-1-4L1 4L2 0H5" /></g>
      </M>
    </svg>
  );
}

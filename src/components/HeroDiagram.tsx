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
  const ah = "url(#ah)";
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
        <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#8A91AA" />
        </marker>
      </defs>

      <text className="lane" x="20" y="34">INDEXING · OFFLINE</text>
      <text className="lane" x="20" y="152">QUERY · ONLINE</text>

      <path className="ln" d="M132 73H160" markerEnd={ah} />
      <path className="ln" d="M284 73H312" markerEnd={ah} />
      <path className="ln" d="M262 48C262 30 510 30 510 46" markerEnd={ah} />
      <text className="sub" x="386" y="30" textAnchor="middle">text · keywords</text>
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
      <circle r="4.5" fill="#1C2540">
        <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#flowQ" /></animateMotion>
      </circle>
      <circle r="3.5" fill="#8A91AA">
        <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#flowI" /></animateMotion>
      </circle>

      <M a={active} on={onActive} k="src"><rect x="20" y="48" width="112" height="50" rx="12" fill="#E9DFCB" /><text className="lbl" x="76" y="70" textAnchor="middle">SOURCES</text><text className="sub" x="76" y="86" textAnchor="middle">PDFs · reports · docs</text></M>
      <M a={active} on={onActive} k="chunk"><rect x="162" y="48" width="122" height="50" rx="12" fill="#FCFAF4" /><text className="lbl" x="223" y="70" textAnchor="middle">PARSE &amp; CHUNK</text><text className="sub" x="223" y="86" textAnchor="middle">layout · metadata</text></M>
      <M a={active} on={onActive} k="embed"><rect x="314" y="48" width="122" height="50" rx="12" fill="#FCFAF4" /><text className="lbl" x="375" y="70" textAnchor="middle">EMBED</text><text className="sub" x="375" y="86" textAnchor="middle">dense vectors</text></M>
      <M a={active} on={onActive} k="index"><rect x="466" y="48" width="154" height="50" rx="12" fill="#D3E2F0" /><text className="lbl" x="543" y="70" textAnchor="middle">INDEX</text><text className="sub" x="543" y="86" textAnchor="middle">keyword + vector</text></M>

      <M a={active} on={onActive} k="q"><rect x="20" y="164" width="96" height="54" rx="12" fill="#FCFAF4" /><text className="lbl" x="68" y="188" textAnchor="middle">QUESTION</text><text className="sub" x="68" y="204" textAnchor="middle">user intent</text></M>
      <M a={active} on={onActive} k="plan"><rect x="146" y="164" width="130" height="54" rx="12" fill="#F3D9D0" /><text className="lbl" x="211" y="188" textAnchor="middle">AGENT · PLANNER</text><text className="sub" x="211" y="204" textAnchor="middle">plan · route · call tools</text></M>
      <M a={active} on={onActive} k="retr"><rect x="306" y="164" width="130" height="54" rx="12" fill="#1C2540" style={{ stroke: "#1C2540" }} /><text className="lbl" x="371" y="188" textAnchor="middle" style={{ fill: "#F7F3EA" }}>RETRIEVAL</text><text className="sub" x="371" y="204" textAnchor="middle" style={{ fill: "#C4CADD" }}>hybrid search</text></M>
      <M a={active} on={onActive} k="rerank"><rect x="466" y="164" width="154" height="54" rx="12" fill="#FCFAF4" /><text className="lbl" x="543" y="188" textAnchor="middle">RE-RANK &amp; FILTER</text><text className="sub" x="543" y="204" textAnchor="middle">best evidence · permissions</text></M>
      <M a={active} on={onActive} k="gen"><rect x="466" y="262" width="154" height="54" rx="12" fill="#CFE3D4" /><text className="lbl" x="543" y="286" textAnchor="middle">SYNTHESIS</text><text className="sub" x="543" y="302" textAnchor="middle">grounded in evidence</text></M>
      <M a={active} on={onActive} k="ans"><rect x="280" y="262" width="160" height="54" rx="12" fill="#D3E2F0" /><text className="lbl" x="360" y="286" textAnchor="middle">ANSWER + CITATIONS</text><text className="sub" x="360" y="302" textAnchor="middle">every claim sourced</text></M>

      <path className="ln" d="M165 222C165 245 80 238 80 260" markerStart={ah} markerEnd={ah} />
      <M a={active} on={onActive} k="mcp"><rect x="20" y="262" width="120" height="54" rx="12" fill="#E9DFCB" /><text className="lbl" x="80" y="286" textAnchor="middle">TOOLS · MCP</text><text className="sub" x="80" y="302" textAnchor="middle">APIs · DBs · apps</text></M>

      <M a={active} on={onActive} k="eval">
        <rect x="20" y="372" width="600" height="70" rx="14" fill="#F7F3EA" style={{ stroke: "#8A91AA", strokeDasharray: "5 5" }} />
        <text className="lbl" x="44" y="401">EVALUATION &amp; FEEDBACK</text><text className="sub" x="44" y="419">Langfuse · RAGAS · query logs</text>
        <rect x="252" y="394" width="92" height="26" rx="13" fill="#FCFAF4" /><text className="sub" x="298" y="411" textAnchor="middle">query success</text>
        <rect x="352" y="394" width="72" height="26" rx="13" fill="#FCFAF4" /><text className="sub" x="388" y="411" textAnchor="middle">recall@k</text>
        <rect x="432" y="394" width="86" height="26" rx="13" fill="#FCFAF4" /><text className="sub" x="475" y="411" textAnchor="middle">faithfulness</text>
        <rect x="526" y="394" width="72" height="26" rx="13" fill="#FCFAF4" /><text className="sub" x="562" y="411" textAnchor="middle">latency</text>
      </M>
    </svg>
  );
}

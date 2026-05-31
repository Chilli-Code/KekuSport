import { a2 as createAstro, a3 as createComponent, ab as maybeRenderHead, $ as addAttribute, am as renderTemplate, ae as renderComponent } from '../../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                   */
import { $ as $$Layout } from '../../chunks/Layout_DVjlXbPa.mjs';
import { C as COMBATS } from '../../chunks/combats_ugStZPMA.mjs';
import { T as TEAMS } from '../../chunks/teams_C073Wyrp.mjs';
import { P as PLAYERS } from '../../chunks/fighters_DQHz57_0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://la-velada-clone.vercel.app/");
const $$Heroevent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Heroevent;
  const {
    date = "26 DE JULIO",
    venue = "ESTADIO LA CARTUJA \xB7 SEVILLA",
    eventName = "LA VELADA",
    edition = "V",
    platform = "TWITCH.TV/IBAI",
    teamA = {
      id: "team-a",
      name: "LOS VIKINGOS",
      color: "#00ff88",
      players: [
        { id: "p1", name: "PEEREIRA7", isCaptain: true },
        { id: "p2", name: "PERXITAA" },
        { id: "p3", name: "ABBY" },
        { id: "p4", name: "ANDONI" },
        { id: "p5", name: "ALANA" }
      ]
    },
    teamB = {
      id: "team-b",
      name: "LOS GUERREROS",
      color: "#f59e0b",
      players: [
        { id: "p6", name: "THEGREFG", isCaptain: true },
        { id: "p7", name: "WESTCOL" },
        { id: "p8", name: "VIRUZZ" },
        { id: "p9", name: "T. MAZZA" },
        { id: "p10", name: "ARIGELI" }
      ]
    }
  } = Astro2.props;
  const colorA = teamA.color ?? "#00ff88";
  const colorB = teamB.color ?? "#f59e0b";
  return renderTemplate`${maybeRenderHead()}<section class="vs-root"${addAttribute(`${teamA.name} vs ${teamB.name}`, "aria-label")} data-astro-cid-tv3pfvhx> <!-- ═══ FONDO ═══ --> <div class="vs-bg" aria-hidden="true" data-astro-cid-tv3pfvhx> <div class="vs-bg-base" data-astro-cid-tv3pfvhx></div> <div class="vs-rays" data-astro-cid-tv3pfvhx></div> <div class="vs-glow-a"${addAttribute(`background:radial-gradient(ellipse,${colorA}22 0%,transparent 70%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-glow-b"${addAttribute(`background:radial-gradient(ellipse,${colorB}22 0%,transparent 70%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-glow-top" data-astro-cid-tv3pfvhx></div> <div class="vs-stars" data-astro-cid-tv3pfvhx></div> <div class="vs-field-arc" data-astro-cid-tv3pfvhx></div> <div class="vs-center-line" data-astro-cid-tv3pfvhx></div> </div> <!-- ═══ EQUIPO A ═══ --> <div class="vs-side vs-side--a" data-astro-cid-tv3pfvhx> <div class="vs-side-glow"${addAttribute(`background:radial-gradient(ellipse at 80% 60%,${colorA}18 0%,transparent 65%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-team-header vs-team-header--a" data-astro-cid-tv3pfvhx> <div class="vs-team-logo-wrap" data-astro-cid-tv3pfvhx> <img${addAttribute(teamA.logo ?? "/images/Logo_Default.png", "src")}${addAttribute(teamA.name, "alt")} class="vs-team-logo" data-astro-cid-tv3pfvhx> </div> <div class="vs-team-namebar"${addAttribute(`border-color:${colorA}44;background:${colorA}0f`, "style")} data-astro-cid-tv3pfvhx> <span${addAttribute(`color:${colorA}`, "style")} data-astro-cid-tv3pfvhx>${teamA.name}</span> </div> </div> <div class="vs-players vs-players--a" data-astro-cid-tv3pfvhx> ${teamA.players.map((p, i) => renderTemplate`<div${addAttribute(`vs-player vs-player--a ${p.isCaptain ? "vs-player--captain" : ""}`, "class")}${addAttribute(i, "data-index")}${addAttribute(`--i:${i};--color:${colorA};animation-delay:${i * 0.08}s`, "style")} data-astro-cid-tv3pfvhx> <div class="vs-player-img-wrap" data-astro-cid-tv3pfvhx> ${p.img ? renderTemplate`<img${addAttribute(p.img, "src")}${addAttribute(p.name, "alt")} class="vs-player-img" loading="eager" data-astro-cid-tv3pfvhx>` : renderTemplate`<img${addAttribute(`/images/fighters/big/jugador_mistery.webp`, "src")}${addAttribute(p.name, "alt")} class="vs-player-img" loading="eager" data-astro-cid-tv3pfvhx>`} ${p.isCaptain && renderTemplate`<div class="vs-captain-ring"${addAttribute(`border-color:${colorA};box-shadow:0 0 16px ${colorA}88`, "style")} data-astro-cid-tv3pfvhx></div>`} <div class="vs-player-fade vs-player-fade--a" data-astro-cid-tv3pfvhx></div> </div> <span class="vs-player-name"${addAttribute(`color:${p.isCaptain ? colorA : "var(--cream)"}`, "style")} data-astro-cid-tv3pfvhx>${p.name}</span> </div>`)} </div> <!-- 
    <div class="vs-team-name vs-team-name--a" style={\`color:\${colorA};text-shadow:0 0 30px \${colorA}88\`}>
      {teamA.name}
    </div> --> </div> <!-- ═══ CENTRO ═══ --> <div class="vs-center" data-astro-cid-tv3pfvhx> <p class="vs-date" data-astro-cid-tv3pfvhx>${date}</p> <div class="vs-event-wrap" data-astro-cid-tv3pfvhx> <span class="vs-spark vs-spark--tl" data-astro-cid-tv3pfvhx></span> <span class="vs-spark vs-spark--tr" data-astro-cid-tv3pfvhx></span> <span class="vs-spark vs-spark--bl" data-astro-cid-tv3pfvhx></span> <span class="vs-spark vs-spark--br" data-astro-cid-tv3pfvhx></span> <div class="vs-event-name" data-astro-cid-tv3pfvhx> <span class="vs-event-small" data-astro-cid-tv3pfvhx>${eventName}</span> <span class="vs-event-edition" data-astro-cid-tv3pfvhx>${edition}</span> </div> </div> <div class="vs-badge" data-astro-cid-tv3pfvhx> <div class="vs-badge-ring" data-astro-cid-tv3pfvhx></div> <span class="vs-badge-text" data-astro-cid-tv3pfvhx>VS</span> </div> <div class="vs-meta" data-astro-cid-tv3pfvhx> <span class="vs-meta-venue" data-astro-cid-tv3pfvhx>${venue}</span> <span class="vs-meta-platform" data-astro-cid-tv3pfvhx>${platform}</span> </div> </div> <!-- ═══ EQUIPO B ═══ --> <div class="vs-side vs-side--b" data-astro-cid-tv3pfvhx> <div class="vs-side-glow"${addAttribute(`background:radial-gradient(ellipse at 20% 60%,${colorB}18 0%,transparent 65%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-team-header vs-team-header--b" data-astro-cid-tv3pfvhx> <div class="vs-team-logo-wrap" data-astro-cid-tv3pfvhx> <img${addAttribute(teamB.logo ?? "/images/Logo_Default.png", "src")}${addAttribute(teamB.name, "alt")} class="vs-team-logo" data-astro-cid-tv3pfvhx> </div> <div class="vs-team-namebar"${addAttribute(`border-color:${colorB}44;background:${colorB}0f`, "style")} data-astro-cid-tv3pfvhx> <span${addAttribute(`color:${colorB}`, "style")} data-astro-cid-tv3pfvhx>${teamB.name}</span> </div> </div> <div class="vs-players vs-players--b" data-astro-cid-tv3pfvhx> ${teamB.players.map((p, i) => renderTemplate`<div${addAttribute(`vs-player vs-player--b ${p.isCaptain ? "vs-player--captain" : ""}`, "class")}${addAttribute(i, "data-index")}${addAttribute(`--i:${i};--color:${colorB};animation-delay:${i * 0.08 + 0.1}s`, "style")} data-astro-cid-tv3pfvhx> <div class="vs-player-img-wrap" data-astro-cid-tv3pfvhx> ${p.img ? renderTemplate`<img${addAttribute(p.img, "src")}${addAttribute(p.name, "alt")} class="vs-player-img vs-player-img--flip" loading="eager" data-astro-cid-tv3pfvhx>` : renderTemplate`<img${addAttribute(`/images/fighters/big/jugador_mistery.webp`, "src")}${addAttribute(p.name, "alt")} class="vs-player-img" loading="eager" data-astro-cid-tv3pfvhx>`} ${p.isCaptain && renderTemplate`<div class="vs-captain-ring"${addAttribute(`border-color:${colorB};box-shadow:0 0 16px ${colorB}88`, "style")} data-astro-cid-tv3pfvhx></div>`} <div class="vs-player-fade vs-player-fade--b" data-astro-cid-tv3pfvhx></div> </div> <span class="vs-player-name"${addAttribute(`color:${p.isCaptain ? colorB : "var(--cream)"}`, "style")} data-astro-cid-tv3pfvhx>${p.name}</span> </div>`)} </div> <!-- 
    <div class="vs-team-name vs-team-name--b" style={\`color:\${colorB};text-shadow:0 0 30px \${colorB}88\`}>
      {teamB.name}
    </div> --> </div> </section> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Heroevent.astro", void 0);

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$Matchstats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Matchstats;
  const {
    teamA = { name: "LOS VIKINGOS", color: "#00ff88" },
    teamB = { name: "LOS GUERREROS", color: "#f59e0b" },
    score = [2, 1],
    minute = 67,
    isLive = true,
    stats = [
      { label: "Posesi\xF3n", valueA: "58%", valueB: "42%", type: "bar", highlight: true },
      { label: "Remates", valueA: 14, valueB: 8, type: "bar", highlight: true },
      { label: "Remates al arco", valueA: 6, valueB: 3, type: "bar", highlight: true },
      { label: "Pases", valueA: 312, valueB: 224, type: "bar", highlight: true },
      { label: "Precisi\xF3n de pase", valueA: "84%", valueB: "71%", type: "bar", highlight: true },
      { label: "Faltas cometidas", valueA: 8, valueB: 12, type: "bar", highlight: false },
      { label: "Tarjetas amarillas", valueA: 2, valueB: 3, type: "cards" },
      { label: "Tarjetas rojas", valueA: 0, valueB: 1, type: "cards" },
      { label: "Fuera de juego", valueA: 3, valueB: 1, type: "number" },
      { label: "Tiros de esquina", valueA: 5, valueB: 4, type: "number" },
      { label: "Salvadas", valueA: 2, valueB: 4, type: "number" },
      { label: "Cambios realizados", valueA: 2, valueB: 3, type: "number" }
    ],
    events = [
      { minute: 12, team: "A", type: "goal", player: "Peereira" },
      { minute: 23, team: "B", type: "yellow", player: "Westcol" },
      { minute: 38, team: "A", type: "yellow", player: "Abby" },
      { minute: 45, team: "B", type: "goal", player: "TheGrefg" },
      { minute: 52, team: "B", type: "red", player: "T.Mazza" },
      { minute: 58, team: "A", type: "goal", player: "Viruzz" },
      { minute: 61, team: "A", type: "sub", player: "Perxitaa", player2: "Andoni" },
      { minute: 65, team: "B", type: "sub", player: "Rubius", player2: "Arigeli" }
    ]
  } = Astro2.props;
  const cA = teamA.color ?? "#00ff88";
  const cB = teamB.color ?? "#f59e0b";
  function toNum(v) {
    if (typeof v === "number") return v;
    return parseFloat(v.replace("%", ""));
  }
  function barA(a, b) {
    const na = toNum(a), nb = toNum(b);
    const total = na + nb;
    return total === 0 ? 50 : Math.round(na / total * 100);
  }
  const eventIcons = {
    goal: "\u26BD",
    yellow: "\u{1F7E8}",
    red: "\u{1F7E5}",
    sub: "\u{1F504}",
    var: "\u{1F4FA}"
  };
  events.filter((e) => e.team === "A");
  events.filter((e) => e.team === "B");
  return renderTemplate`${maybeRenderHead()}<div class="ms-root !my-20 mx-2 sm:mx-6 lg:mx-10" data-astro-cid-wylikfui> <!-- ══ FONDO ══ --> <div class="ms-bg " aria-hidden="true" data-astro-cid-wylikfui> <div class="ms-bg-glow-a"${addAttribute(`background:radial-gradient(ellipse,${cA}14 0%,transparent 65%)`, "style")} data-astro-cid-wylikfui></div> <div class="ms-bg-glow-b"${addAttribute(`background:radial-gradient(ellipse,${cB}14 0%,transparent 65%)`, "style")} data-astro-cid-wylikfui></div> <div class="ms-stars" data-astro-cid-wylikfui></div> <div class="ms-scanlines" data-astro-cid-wylikfui></div> </div> <!-- ══ MARCADOR HEADER ══ --> <header class="ms-header flex items-center justify-center" data-astro-cid-wylikfui> <!-- Marcador central --> <div class="ms-scoreboard" data-astro-cid-wylikfui> <div class="ms-score-wrap" data-astro-cid-wylikfui> <span class="ms-score"${addAttribute(`color:${cA};text-shadow:0 0 24px ${cA}88`, "style")} data-astro-cid-wylikfui>${score[0]}</span> <div class="ms-score-divider" data-astro-cid-wylikfui> ${isLive && renderTemplate`<div class="ms-live-dot-wrap" data-astro-cid-wylikfui> <span class="ms-live-dot" data-astro-cid-wylikfui></span> <span class="ms-live-label" data-astro-cid-wylikfui>EN VIVO</span> </div>`} <span class="ms-score-sep" data-astro-cid-wylikfui>—</span> <div class="ms-minute-badge" data-astro-cid-wylikfui> <span class="ms-minute-num" data-astro-cid-wylikfui>${minute}'</span> </div> </div> <span class="ms-score"${addAttribute(`color:${cB};text-shadow:0 0 24px ${cB}88`, "style")} data-astro-cid-wylikfui>${score[1]}</span> </div> <!-- Barra de tiempo --> <div class="ms-time-bar" data-astro-cid-wylikfui> <div class="ms-time-fill"${addAttribute(`width:${Math.min(minute / 90 * 100, 100)}%`, "style")} data-astro-cid-wylikfui></div> <div class="ms-time-dot"${addAttribute(`left:${Math.min(minute / 90 * 100, 100)}%`, "style")} data-astro-cid-wylikfui></div> </div> <div class="ms-time-labels" data-astro-cid-wylikfui> <span data-astro-cid-wylikfui>0'</span><span data-astro-cid-wylikfui>45'</span><span data-astro-cid-wylikfui>90'</span> </div> </div> </header> <!-- ══ EVENTOS DEL PARTIDO (línea de tiempo) ══ --> <div class="ms-events-wrap" data-astro-cid-wylikfui> <div class="ms-events-title" data-astro-cid-wylikfui> <span class="ms-section-diamond" data-astro-cid-wylikfui></span> <span data-astro-cid-wylikfui>EVENTOS DEL PARTIDO</span> <span class="ms-section-diamond" data-astro-cid-wylikfui></span> </div> <div class="ms-events-timeline" data-astro-cid-wylikfui> <!-- Línea central --> <div class="ms-timeline-line" data-astro-cid-wylikfui></div> ${events.sort((a, b) => a.minute - b.minute).map((ev) => renderTemplate`<div${addAttribute(`ms-event ms-event--${ev.team.toLowerCase()}`, "class")} data-astro-cid-wylikfui> <!-- Lado A --> <div class="ms-event-side ms-event-side--a" data-astro-cid-wylikfui> ${ev.team === "A" && renderTemplate`<div class="ms-event-content ms-event-content--a" data-astro-cid-wylikfui> <span class="ms-event-player" data-astro-cid-wylikfui>${ev.player}</span> ${ev.type === "sub" && ev.player2 && renderTemplate`<span class="ms-event-sub" data-astro-cid-wylikfui>↑ ${ev.player2}</span>`} </div>`} </div> <!-- Centro: minuto + icono --> <div class="ms-event-mid" data-astro-cid-wylikfui> <span class="ms-event-min" data-astro-cid-wylikfui>${ev.minute}'</span> <div${addAttribute(`ms-event-icon ms-event-icon--${ev.type}`, "class")} data-astro-cid-wylikfui> ${eventIcons[ev.type]} </div> </div> <!-- Lado B --> <div class="ms-event-side ms-event-side--b" data-astro-cid-wylikfui> ${ev.team === "B" && renderTemplate`<div class="ms-event-content ms-event-content--b" data-astro-cid-wylikfui> <span class="ms-event-player" data-astro-cid-wylikfui>${ev.player}</span> ${ev.type === "sub" && ev.player2 && renderTemplate`<span class="ms-event-sub" data-astro-cid-wylikfui>↑ ${ev.player2}</span>`} </div>`} </div> </div>`)} </div> </div> <!-- ══ ESTADÍSTICAS ══ --> <div class="ms-stats-wrap" data-astro-cid-wylikfui> <div class="ms-events-title" data-astro-cid-wylikfui> <span class="ms-section-diamond" data-astro-cid-wylikfui></span> <span data-astro-cid-wylikfui>ESTADÍSTICAS</span> <span class="ms-section-diamond" data-astro-cid-wylikfui></span> </div> <div class="ms-stats-list" data-astro-cid-wylikfui> ${stats.map((row) => {
    const pctA = barA(row.valueA, row.valueB);
    const pctB = 100 - pctA;
    const aWins = toNum(row.valueA) > toNum(row.valueB);
    const bWins = toNum(row.valueB) > toNum(row.valueA);
    return renderTemplate`<div${addAttribute(`ms-stat-row ${row.type === "cards" ? "ms-stat-row--cards" : ""}`, "class")} data-astro-cid-wylikfui> <!-- Valor A --> <div class="ms-stat-val ms-stat-val--a" data-astro-cid-wylikfui> ${row.type === "cards" ? renderTemplate`<div class="ms-cards" data-astro-cid-wylikfui> ${Array.from({ length: toNum(row.valueA) }, () => renderTemplate`<span${addAttribute(`ms-card ${row.label.includes("roja") ? "ms-card--red" : "ms-card--yellow"}`, "class")} data-astro-cid-wylikfui></span>`)} ${toNum(row.valueA) === 0 && renderTemplate`<span class="ms-cards-zero" data-astro-cid-wylikfui>—</span>`} </div>` : renderTemplate`<span${addAttribute(`ms-val-text ${aWins && row.highlight ? "ms-val--win" : ""}`, "class")}${addAttribute(aWins && row.highlight ? `color:${cA};text-shadow:0 0 12px ${cA}66` : "", "style")} data-astro-cid-wylikfui> ${row.valueA} </span>`} </div> <!-- Etiqueta + barra --> <div class="ms-stat-center" data-astro-cid-wylikfui> <span class="ms-stat-label" data-astro-cid-wylikfui>${row.label}</span> ${row.type === "bar" && renderTemplate`<div class="ms-bar" data-astro-cid-wylikfui> <div class="ms-bar-a"${addAttribute(`width:${pctA}%;background:${aWins ? cA : cA + "88"}`, "style")} data-astro-cid-wylikfui></div> <div class="ms-bar-b"${addAttribute(`width:${pctB}%;background:${bWins ? cB : cB + "88"}`, "style")} data-astro-cid-wylikfui></div> </div>`} </div> <!-- Valor B --> <div class="ms-stat-val ms-stat-val--b" data-astro-cid-wylikfui> ${row.type === "cards" ? renderTemplate`<div class="ms-cards ms-cards--b" data-astro-cid-wylikfui> ${Array.from({ length: toNum(row.valueB) }, () => renderTemplate`<span${addAttribute(`ms-card ${row.label.includes("roja") ? "ms-card--red" : "ms-card--yellow"}`, "class")} data-astro-cid-wylikfui></span>`)} ${toNum(row.valueB) === 0 && renderTemplate`<span class="ms-cards-zero" data-astro-cid-wylikfui>—</span>`} </div>` : renderTemplate`<span${addAttribute(`ms-val-text ${bWins && row.highlight ? "ms-val--win" : ""}`, "class")}${addAttribute(bWins && row.highlight ? `color:${cB};text-shadow:0 0 12px ${cB}66` : "", "style")} data-astro-cid-wylikfui> ${row.valueB} </span>`} </div> </div>`;
  })} </div> </div> </div> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Matchstats.astro", void 0);

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const combat = COMBATS.find((c) => c.id === id);
  if (!combat) return Astro2.redirect("/combates");
  const [team1Id, team2Id] = combat.fighters;
  const team1Data = TEAMS.find((t) => t.id === team1Id);
  const team2Data = TEAMS.find((t) => t.id === team2Id);
  if (!team1Data || !team2Data) return Astro2.redirect("/combates");
  const team1Players = PLAYERS.filter((p) => p.team === team1Id).map((p) => ({ id: p.id, name: p.name }));
  const team2Players = PLAYERS.filter((p) => p.team === team2Id).map((p) => ({ id: p.id, name: p.name }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroEvent", $$Heroevent, { "teamA": { id: team1Data.id, name: team1Data.name, players: team1Players }, "teamB": { id: team2Data.id, name: team2Data.name, players: team2Players }, "date": "S\xC1B 12 JUL", "venue": "CANCHA LA 93 \xB7 BARRANQUILLA", "eventName": "TORNEO JUGADORES", "edition": "PRESENCIAL", "platform": "BARRANQUILLA \xB7 COLOMBIA" })} ${renderComponent($$result2, "Matchstats", $$Matchstats, { "teamA": { name: "LOS VIKINGOS", color: "#00ff88", logo: "/images/logo-a.png" }, "teamB": { name: "LOS GUERREROS", color: "#f59e0b", logo: "/images/logo-b.png" }, "score": [2, 1], "minute": 67, "isLive": true, "events": [
    { minute: 12, team: "A", type: "goal", player: "Peereira" },
    { minute: 23, team: "B", type: "yellow", player: "Westcol" },
    { minute: 52, team: "B", type: "red", player: "T.Mazza" },
    { minute: 61, team: "A", type: "sub", player: "Perxitaa", player2: "Andoni" }
  ] })} ` })}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/combate/[id].astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/combate/[id].astro";
const $$url = "/combate/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

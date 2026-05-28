import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as addAttribute, e as renderScript, f as renderTransition } from '../../chunks/astro/server_CQLHzLBK.mjs';
import 'kleur/colors';
import { P as PLAYERS } from '../../chunks/fighters_Cyp_aquJ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_uZwaYLoU.mjs';
import { c as createSvgComponent } from '../../chunks/instagram_Dexa1W1e.mjs';
import { T as TEAMS } from '../../chunks/teams_C073Wyrp.mjs';
/* empty css                                   */
import 'clsx';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const fixedTitle = "La Velada del Año V Web Oficial - Evento de boxeo de Ibai Llanos con creadores de contenido";

const Logo = createSvgComponent({"meta":{"src":"/_astro/logo.XLvJhKKz.svg","width":206,"height":224,"format":"svg"},"attributes":{"viewBox":"0 0 206 224","fill":"currentColor"},"children":"\r\n    <path d=\"m206 0-29 13-18 10c-12 9-23 21-32 35l-14 25-10-15-10 14-14-24a111 111 0 0 0-50-45L0 0l74 112L0 224l29-13 18-10c12-9 23-21 32-35l14-25 10 15 10-15 14 25a111 111 0 0 0 50 45l29 13-74-112L206 0zm-73 62a103 103 0 0 1 47-42l7-4-59 90-11-17 16-27zM19 16l7 4c6 2 12 5 17 9 12 8 22 19 30 33l16 27-11 17-59-90zm84 128-6-9 6-10 6 10-6 9zm84 64-7-4h-1l-16-9c-12-8-22-19-30-33l-16-27-11-19-3-5-2 5-12 19-16 27a103 103 0 0 1-47 42l-7 3 62-92 17-26 5-9 6 9 17 26 61 93z\" />\r\n    <style>\r\n        path {\r\n        fill: currentColor;\r\n        }\r\n    </style>\r\n"});

const $$Astro$2 = createAstro("https://la-velada-clone.vercel.app/");
const $$BoxerProfileCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BoxerProfileCard;
  const { player } = Astro2.props;
  const generateRandomBars = () => {
    const bars2 = [];
    for (let i = 0; i < 20; i++) {
      bars2.push(Math.floor(Math.random() * (2 - 1 + 1)) + 2);
    }
    return bars2;
  };
  const bars = generateRandomBars();
  const team = TEAMS.find((t) => t.id === player.team);
  return renderTemplate`${maybeRenderHead()}<article class="boxer-profile-card group relative
w-[92%]
sm:w-[88%]
md:w-full
lg:max-w-[450px]
overflow-hidden rounded-xl
bg-theme-midnight/70 backdrop-blur-xs
transition-all duration-500" data-astro-cid-pfraywpi> <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" data-astro-cid-pfraywpi></div> <main class="grid gap-0" data-astro-cid-pfraywpi> <div class="flex flex-wrap items-center gap-2 p-4 pb-0 animate-fade-in-up" data-astro-cid-pfraywpi> <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300" data-astro-cid-pfraywpi> ${player.neighborhood} </span> <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300" data-astro-cid-pfraywpi> ${player.position} </span> </div> <div class="flex flex-col p-4" data-astro-cid-pfraywpi> <div class="mb-3" data-astro-cid-pfraywpi> <div class="inline-block border-l-3 border-theme-gold pl-2" data-astro-cid-pfraywpi> <div class="h-auto w-auto" data-astro-cid-pfraywpi> <h3 class="boxer-detail-name text-5xl font-black uppercase tracking-wider relative z-10 sm:text-6xl md:text-7xl" data-astro-cid-pfraywpi> ${player.name} </h3> <div class="absolute inset-0 bg-theme-gold/40 blur-2xl -z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-xl" data-astro-cid-pfraywpi></div> </div> </div> </div> ${team && renderTemplate`<div class="flex items-center gap-2 mt-1 mb-2" data-astro-cid-pfraywpi> <span class="text-[0.55rem] font-bold tracking-[0.3em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi> ${team.name} </span> </div>`} <div class="flex w-full items-center gap-3 sm:gap-4 my-4" aria-hidden="true" data-astro-cid-pfraywpi> <span class="size-1 rotate-45 bg-theme-gold/70" data-astro-cid-pfraywpi></span> <span class="h-px flex-1 bg-linear-to-r from-theme-gold/45 to-transparent" data-astro-cid-pfraywpi></span> </div> <div class="grid grid-cols-3 gap-2 mt-2" data-astro-cid-pfraywpi> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Edad
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${player.age} <span class="text-xs font-normal text-theme-cream/60" data-astro-cid-pfraywpi>años</span> </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Dorsal
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi>
#${player.number} </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Posición
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${player.position} </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Barrio
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${player.neighborhood} </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Pie Hábil
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${player.preferredFoot} </p> </div> </div> <div class="mt-4 p-3 rounded-lg border border-theme-gold/15 bg-theme-midnight/50" data-astro-cid-pfraywpi> <p class="font-cinzel text-xs leading-relaxed tracking-wide text-theme-cream/80 italic" data-astro-cid-pfraywpi>
"${player.bio}"
</p> </div> </div> </main> <footer class="flex items-center flex-col justify-between border-t border-theme-gold/20 bg-theme-midnight/80 px-4 py-2" data-astro-cid-pfraywpi> <div class="w-full flex justify-between mt-2" data-astro-cid-pfraywpi> <div class="flex items-center gap-2" data-astro-cid-pfraywpi> <span class="font-cinzel text-xs font-bold uppercase tracking-wide text-theme-cream/80" data-astro-cid-pfraywpi> ${player.city} · ${player.neighborhood} </span> </div> <div class="flex items-center gap-2" data-astro-cid-pfraywpi> ${renderComponent($$result, "Logo", Logo, { "class": "h-5 w-auto text-theme-gold", "data-astro-cid-pfraywpi": true })} <div class="flex items-end bg-theme-cream/90 pl-0.5 py-0.5 rounded-sm" data-astro-cid-pfraywpi> ${bars.map((width, index) => renderTemplate`<span${addAttribute(index, "key")} class="bg-theme-midnight h-[20px] mr-0.5 transition-all duration-300 group-hover:bg-theme-gold"${addAttribute(`width: ${width}px;`, "style")} data-astro-cid-pfraywpi></span>`)} </div> </div> </div> </footer> </article> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/BoxerProfileCard.astro", void 0);

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$TournamentCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TournamentCards;
  const ITEMS_PER_PAGE = 6;
  const { tournaments = [], fighterId } = Astro2.props;
  const fixed = [
    [8, 4, 10, 7, 1, 2, 870, 2, 0, 8.2, 78, 74, 68, 80, 45, 70],
    [5, 3, 8, 5, 1, 2, 720, 1, 0, 7.6, 65, 60, 72, 68, 52, 65],
    [3, 1, 6, 3, 2, 1, 540, 0, 1, 7.1, 82, 55, 64, 76, 40, 68],
    [12, 7, 14, 10, 3, 1, 1200, 3, 0, 8.8, 71, 82, 75, 85, 48, 73],
    [6, 2, 9, 5, 3, 1, 810, 1, 0, 7.4, 88, 65, 70, 79, 55, 67],
    [9, 5, 11, 8, 2, 1, 990, 2, 1, 8, 74, 78, 66, 81, 42, 72],
    [4, 1, 5, 3, 1, 1, 450, 0, 0, 7.3, 69, 58, 62, 72, 38, 60],
    [7, 3, 8, 5, 2, 1, 720, 1, 0, 7.8, 80, 70, 71, 77, 50, 66],
    [11, 6, 13, 9, 3, 1, 1170, 2, 0, 8.5, 76, 79, 73, 83, 46, 74]
  ];
  const enriched = tournaments.map((t, i) => {
    const d = fixed[i % 9];
    return {
      ...t,
      stats: t.stats ?? {
        goals: d[0],
        assists: d[1],
        matches: d[2],
        wins: d[3],
        draws: d[4],
        losses: d[5],
        minutesPlayed: d[6],
        yellowCards: d[7],
        redCards: d[8],
        rating: d[9],
        pace: d[10],
        shooting: d[11],
        passing: d[12],
        dribbling: d[13],
        defending: d[14],
        physical: d[15]
      }
    };
  });
  const totalPages = Math.ceil(enriched.length / ITEMS_PER_PAGE);
  const getBadge = (pos) => {
    if (pos === 1) return { emoji: "\u{1F3C6}", label: "Campe\xF3n", cls: "badge--gold" };
    if (pos === 2) return { emoji: "\u{1F948}", label: "Subcampe\xF3n", cls: "badge--silver" };
    if (pos === 3) return { emoji: "\u{1F949}", label: "3er Puesto", cls: "badge--bronze" };
    return { emoji: "\u{1F3C5}", label: `${pos}\xBA Puesto`, cls: "badge--default" };
  };
  const getStatColor = (v) => v >= 80 ? "#00ff88" : v >= 65 ? "#fbbf24" : "#ef4444";
  const defaultId = enriched[0]?.id ?? "";
  return renderTemplate`${maybeRenderHead()}<section class="px-4 pb-12 pt-6" data-astro-cid-zymwgjru> <!-- Título --> <div class="flex items-center gap-3 mb-6" data-astro-cid-zymwgjru> <span class="tc-diamond" data-astro-cid-zymwgjru></span> <h2 class="tc-section-title" data-astro-cid-zymwgjru>TORNEOS DISPUTADOS</h2> <span class="tc-line" data-astro-cid-zymwgjru></span> ${totalPages > 1 && renderTemplate`<span class="font-mono text-[0.7rem] font-bold text-[color-mix(in_srgb,var(--color-theme-gold)_60%,transparent)] whitespace-nowrap shrink-0"${addAttribute(`tc-pi-${fighterId}`, "id")} data-astro-cid-zymwgjru>
1 / ${totalPages} </span>`} </div> <!-- GRID DE CARDS --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6"${addAttribute(`tc-grid-${fighterId}`, "id")} data-astro-cid-zymwgjru> ${enriched.map((t, i) => {
    const badge = getBadge(t.position);
    const uid = `tc-${fighterId}-${t.id}`;
    const page = Math.floor(i / ITEMS_PER_PAGE);
    return renderTemplate`<div class="tc-card"${addAttribute(uid, "data-uid")}${addAttribute(page, "data-page")}${addAttribute(t.id, "data-tid")}${addAttribute(t.id === defaultId ? "true" : "false", "data-active")}${addAttribute(`animation-delay:${i % ITEMS_PER_PAGE * 0.07}s; ${page === 0 ? "" : "display:none"}`, "style")} data-astro-cid-zymwgjru> <span class="tc-corner tc-corner--tl" data-astro-cid-zymwgjru></span> <span class="tc-corner tc-corner--tr" data-astro-cid-zymwgjru></span> <span class="tc-corner tc-corner--bl" data-astro-cid-zymwgjru></span> <span class="tc-corner tc-corner--br" data-astro-cid-zymwgjru></span> <div class="tc-glow" aria-hidden="true" data-astro-cid-zymwgjru></div> <button class="tc-trigger flex items-center gap-3 w-full p-4 bg-transparent border-0 cursor-pointer text-left relative z-10"${addAttribute(uid, "data-uid")}${addAttribute(t.id, "data-tid")}${addAttribute(`Ver estad\xEDsticas de ${t.name}`, "aria-label")} data-astro-cid-zymwgjru> <div class="tc-trophy shrink-0" data-astro-cid-zymwgjru> ${t.logo ? renderTemplate`<img${addAttribute(t.logo, "src")}${addAttribute(t.name, "alt")} class="w-full h-full object-contain" data-astro-cid-zymwgjru>` : renderTemplate`<span class="text-2xl leading-none" data-astro-cid-zymwgjru>${badge.emoji}</span>`} </div> <div class="flex-1 min-w-0" data-astro-cid-zymwgjru> <span class="tc-name block" data-astro-cid-zymwgjru>${t.name}</span> <div class="flex items-center gap-1.5 mt-1 flex-wrap" data-astro-cid-zymwgjru> <span${addAttribute(`tc-badge ${badge.cls}`, "class")} data-astro-cid-zymwgjru>${badge.label}</span> <span class="tc-year" data-astro-cid-zymwgjru>${t.year}</span> </div> ${t.location && renderTemplate`<span class="block mt-0.5 text-[0.52rem] tracking-wide truncate" style="color:color-mix(in srgb,var(--color-theme-cream) 40%,transparent)" data-astro-cid-zymwgjru>
📍 ${t.location} </span>`} </div> <div class="tc-active-dot shrink-0" data-astro-cid-zymwgjru></div> </button> </div>`;
  })} </div> <!-- Paginación --> ${totalPages > 1 && renderTemplate`<div class="flex items-center justify-center gap-4 mb-8" data-astro-cid-zymwgjru> <button class="tc-nav-btn"${addAttribute(`tc-prev-${fighterId}`, "id")} aria-label="Anterior" data-astro-cid-zymwgjru> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-astro-cid-zymwgjru> <path d="M10 13L5 8l5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zymwgjru></path> </svg> </button> <div class="flex items-center gap-1.5"${addAttribute(`tc-dots-${fighterId}`, "id")} data-astro-cid-zymwgjru> ${Array.from({ length: totalPages }, (_, p) => renderTemplate`<span${addAttribute(`tc-dot ${p === 0 ? "tc-dot--active" : ""}`, "class")}${addAttribute(p, "data-dot")} data-astro-cid-zymwgjru></span>`)} </div> <button class="tc-nav-btn"${addAttribute(`tc-next-${fighterId}`, "id")} aria-label="Siguiente" data-astro-cid-zymwgjru> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-astro-cid-zymwgjru> <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zymwgjru></path> </svg> </button> </div>`} <!-- PANEL PRINCIPAL --> <div class="flex" id="tc-panel-wrap" data-astro-cid-zymwgjru> ${enriched.map((t) => {
    const badge = getBadge(t.position);
    const s = t.stats;
    const rPct = Math.round((s.rating ?? 7) / 10 * 100);
    return renderTemplate`<div class="tc-outer"${addAttribute(t.id, "data-slide")}${addAttribute(t.id === defaultId ? "display:flex" : "display:none", "style")} data-astro-cid-zymwgjru> <!-- PANEL DE STATS --> <div class="tc-panel" data-astro-cid-zymwgjru> <div class="tc-scanlines" aria-hidden="true" data-astro-cid-zymwgjru></div> <div class="tc-panel-inner" data-astro-cid-zymwgjru> <!-- Rating --> <div class="tc-rating-block" data-astro-cid-zymwgjru> <div class="flex items-baseline gap-2 mb-1.5" data-astro-cid-zymwgjru> <span class="tc-rating-num"${addAttribute(`color:${getStatColor(rPct)}`, "style")} data-astro-cid-zymwgjru> ${s.rating?.toFixed(1)} </span> <span class="tc-gen-label" data-astro-cid-zymwgjru>VALORACIÓN</span> </div> <div class="tc-rating-bar-wrap" data-astro-cid-zymwgjru> <div class="tc-rating-bar"${addAttribute(`width:${rPct}%;background:${getStatColor(rPct)}`, "style")} data-astro-cid-zymwgjru></div> </div> </div> <div class="tc-panel-sep" data-astro-cid-zymwgjru></div> <!-- Resumen jugador --> <p class="tc-right-title" data-astro-cid-zymwgjru>RESUMEN DEL JUGADOR</p> <div class="space-y-2" data-astro-cid-zymwgjru> ${[
      { label: "Goles", val: s.goals ?? 0, max: 20, color: "#00ff88" },
      { label: "Asistencias", val: s.assists ?? 0, max: 15, color: "#a78bfa" },
      { label: "Partidos", val: s.matches ?? 0, max: 20, color: "#fbbf24" },
      { label: "Victorias", val: s.wins ?? 0, max: 15, color: "#22c55e" },
      { label: "Empates", val: s.draws ?? 0, max: 10, color: "#eab308" },
      { label: "Derrotas", val: s.losses ?? 0, max: 10, color: "#ef4444" }
    ].map((stat) => renderTemplate`<div class="flex items-center gap-2" data-astro-cid-zymwgjru> <span class="tc-attr-label" data-astro-cid-zymwgjru>${stat.label}</span> <div class="flex-1 h-1.5 rounded-full overflow-hidden" style="background:color-mix(in srgb,var(--color-theme-midnight) 80%,transparent);border:1px solid color-mix(in srgb,var(--color-theme-gold) 10%,transparent)" data-astro-cid-zymwgjru> <div class="h-full rounded-full transition-all duration-500"${addAttribute(`width:${Math.min(stat.val / stat.max * 100, 100)}%;background:${stat.color}`, "style")} data-astro-cid-zymwgjru></div> </div> <span class="tc-attr-val w-5 text-right"${addAttribute(`color:${stat.color}`, "style")} data-astro-cid-zymwgjru>${stat.val}</span> </div>`)} </div> <div class="tc-panel-sep tc-panel-sep--dim" data-astro-cid-zymwgjru></div> <!-- Atributos FIFA-style --> <p class="tc-right-title" data-astro-cid-zymwgjru>ATRIBUTOS</p> <div class="space-y-2 mb-4" data-astro-cid-zymwgjru> ${[
      { label: "Ritmo", val: s.pace ?? 0 },
      { label: "Disparo", val: s.shooting ?? 0 },
      { label: "Pase", val: s.passing ?? 0 },
      { label: "Regate", val: s.dribbling ?? 0 },
      { label: "Defensa", val: s.defending ?? 0 },
      { label: "F\xEDsico", val: s.physical ?? 0 }
    ].map((a) => renderTemplate`<div class="flex items-center gap-2" data-astro-cid-zymwgjru> <span class="tc-attr-label" data-astro-cid-zymwgjru>${a.label}</span> <div class="flex-1 h-1.5 rounded-full overflow-hidden" style="background:color-mix(in srgb,var(--color-theme-midnight) 80%,transparent);border:1px solid color-mix(in srgb,var(--color-theme-gold) 10%,transparent)" data-astro-cid-zymwgjru> <div class="h-full rounded-full transition-all duration-500"${addAttribute(`width:${a.val}%;background:${getStatColor(a.val)}`, "style")} data-astro-cid-zymwgjru></div> </div> <span class="tc-attr-val w-5 text-right"${addAttribute(`color:${getStatColor(a.val)}`, "style")} data-astro-cid-zymwgjru>${a.val}</span> </div>`)} </div> <div class="tc-panel-sep tc-panel-sep--dim" data-astro-cid-zymwgjru></div> <!-- Mini stats --> <div class="grid grid-cols-3 gap-2 mb-4" data-astro-cid-zymwgjru> ${[
      { emoji: "\u{1F7E8}", val: s.yellowCards ?? 0, label: "Amarillas" },
      { emoji: "\u{1F7E5}", val: s.redCards ?? 0, label: "Rojas" },
      { emoji: "\u23F1", val: `${s.minutesPlayed ?? 0}'`, label: "Minutos" }
    ].map((m) => renderTemplate`<div class="flex flex-col items-center py-2 px-1 rounded-lg text-center" style="background:color-mix(in srgb,var(--color-theme-midnight) 70%,transparent);border:1px solid color-mix(in srgb,var(--color-theme-gold) 12%,transparent)" data-astro-cid-zymwgjru> <span class="text-[0.8rem] mb-0.5" data-astro-cid-zymwgjru>${m.emoji}</span> <span class="font-bold text-[0.75rem]" style="color:var(--color-theme-cream)" data-astro-cid-zymwgjru>${m.val}</span> <span class="text-[0.42rem] uppercase tracking-widest" style="color:color-mix(in srgb,var(--color-theme-cream) 40%,transparent)" data-astro-cid-zymwgjru>${m.label}</span> </div>`)} </div> <!-- CTA --> <a${addAttribute(`/torneos/${t.id}`, "href")} class="tc-cta" data-astro-cid-zymwgjru>
Ver Torneo Completo
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" data-astro-cid-zymwgjru> <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zymwgjru></path> </svg> </a> </div> </div> <div class="tc-float" data-astro-cid-zymwgjru> <div class="tc-float-bg" aria-hidden="true" data-astro-cid-zymwgjru></div> <div class="tc-logo-wrap" data-astro-cid-zymwgjru> ${t.logo ? renderTemplate`<img${addAttribute(t.logo, "src")}${addAttribute(t.name, "alt")} class="w-full h-full object-contain rounded-[20px]" data-astro-cid-zymwgjru>` : renderTemplate`<span class="tc-logo-emoji" data-astro-cid-zymwgjru>${badge.emoji}</span>`} <div class="tc-logo-pulse" data-astro-cid-zymwgjru></div> </div> <span class="tc-float-name" data-astro-cid-zymwgjru>${t.name}</span> <span class="tc-float-year" data-astro-cid-zymwgjru>${t.year}</span> <span${addAttribute(`tc-badge tc-float-badge ${badge.cls}`, "class")} data-astro-cid-zymwgjru>${badge.emoji} ${badge.label}</span> ${(t.location || t.participants || t.record || t.prize) && renderTemplate`<div class="tc-float-meta" data-astro-cid-zymwgjru> ${t.location && renderTemplate`<div class="tc-meta-row" data-astro-cid-zymwgjru> <span class="tc-gen-label" data-astro-cid-zymwgjru>SEDE</span> <span class="tc-gen-val" data-astro-cid-zymwgjru>${t.location}</span> </div>`} ${t.participants && renderTemplate`<div class="tc-meta-row" data-astro-cid-zymwgjru> <span class="tc-gen-label" data-astro-cid-zymwgjru>EQUIPOS</span> <span class="tc-gen-val" data-astro-cid-zymwgjru>${t.participants}</span> </div>`} ${t.record && renderTemplate`<div class="tc-meta-row" data-astro-cid-zymwgjru> <span class="tc-gen-label" data-astro-cid-zymwgjru>RÉCORD</span> <span class="tc-gen-val font-mono" data-astro-cid-zymwgjru>${t.record}</span> </div>`} ${t.prize && renderTemplate`<div class="tc-meta-row" data-astro-cid-zymwgjru> <span class="tc-gen-label" data-astro-cid-zymwgjru>PREMIO</span> <span class="tc-gen-val tc-gen-val--gold" data-astro-cid-zymwgjru>${t.prize}</span> </div>`} </div>`} </div> </div>`;
  })} </div> </section> ${renderScript($$result, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/TournamentCards.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/TournamentCards.astro", void 0);

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const player = PLAYERS.find((p) => p.id === id);
  if (!player) {
    return Astro2.redirect("/404");
  }
  const simulatedTournaments = [
    {
      id: "champions-2025",
      name: "Champions League",
      year: "2025",
      location: "Sevilla, Espa\xF1a",
      participants: 32,
      position: 1,
      prize: "1.000.000\u20AC",
      record: "7-1-0"
    },
    {
      id: "liga-2024",
      name: "Liga Velada",
      year: "2024",
      location: "Madrid, Espa\xF1a",
      participants: 16,
      position: 2,
      prize: "500.000\u20AC",
      record: "6-2-1"
    },
    {
      id: "copa-2024",
      name: "Copa del Rey",
      year: "2024",
      location: "Barcelona, Espa\xF1a",
      participants: 64,
      position: 3,
      prize: "200.000\u20AC",
      record: "5-1-1"
    },
    {
      id: "euro-2023",
      name: "Eurocopa de Streamers",
      year: "2023",
      location: "Par\xEDs, Francia",
      participants: 24,
      position: 4,
      prize: "100.000\u20AC",
      record: "4-2-2"
    },
    {
      id: "mundial-2023",
      name: "Mundial de Creadores",
      year: "2023",
      location: "Doha, Qatar",
      participants: 32,
      position: 5,
      prize: "75.000\u20AC",
      record: "3-1-2"
    },
    {
      id: "supercopa-2025",
      name: "Supercopa de Espa\xF1a",
      year: "2025",
      location: "Riad, Arabia Saud\xED",
      participants: 4,
      position: 1,
      prize: "300.000\u20AC",
      record: "2-0-0"
    },
    {
      id: "iberoamericana-2024",
      name: "Copa Iberoamericana",
      year: "2024",
      location: "Buenos Aires, Argentina",
      participants: 16,
      position: 1,
      prize: "150.000\u20AC",
      record: "5-1-0"
    },
    {
      id: "intercontinental-2023",
      name: "Intercontinental Cup",
      year: "2023",
      location: "Tokio, Jap\xF3n",
      participants: 8,
      position: 3,
      prize: "80.000\u20AC",
      record: "3-1-1"
    },
    {
      id: "pretemporada-2026",
      name: "Pretemporada Velada",
      year: "2026",
      location: "Miami, EE.UU",
      participants: 12,
      position: 2,
      prize: "50.000\u20AC",
      record: "4-1-1"
    }
  ];
  const tournaments = simulatedTournaments;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${player.name} | ${fixedTitle}`, "data-astro-cid-gjv37z6d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative flex lg:min-h-screen w-full flex-col-reverse lg:flex-row" data-astro-cid-gjv37z6d> <!-- Contenido --> <div class="ssss" data-astro-cid-gjv37z6d> <div class="relative z-10 flex w-full flex-col items-center justify-center pl-0 pr-0 lg:pr-6 pt-24 lg:flex-row lg:items-start lg:pt-32" data-astro-cid-gjv37z6d> <!-- Imagen --> <div class="relative mt-8 px-6 lg:px-2 flex h-[60vh] w-full lg:min-w-sm items-center justify-center lg:mt-0 lg:h-[80vh] lg:w-1/2" data-astro-cid-gjv37z6d> <img${addAttribute(`/images/fighters/big/jugador_mistery.webp`, "src")}${addAttribute(`Retrato de ${player.name}`, "alt")} class="animate-fade-in mask-image-fade-bottom h-full w-full object-contain transition-all duration-700 hover:scale-105" data-astro-cid-gjv37z6d${addAttribute(renderTransition($$result2, "wg6oeinf", "", `image-${id}`), "data-astro-transition-scope")}> </div> <div class="w-[95%] md:w-full lg:w-1/2
          px-1
          sm:px-4
          md:px-8
          lg:px-0
          mx-auto
          flex flex-col items-center justify-center
          text-white" data-astro-cid-gjv37z6d> ${renderComponent($$result2, "BoxerProfileCard", $$BoxerProfileCard, { "player": player, "data-astro-cid-gjv37z6d": true })} </div> </div> </div> </section>  ${renderComponent($$result2, "TournamentCards", $$TournamentCards, { "fighterId": player.id, "tournaments": tournaments, "data-astro-cid-gjv37z6d": true })} ` })} `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/jugador/[id].astro", "self");

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/jugador/[id].astro";
const $$url = "/jugador/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

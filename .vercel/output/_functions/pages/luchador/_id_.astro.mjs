import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, g as renderScript, h as renderTransition } from '../../chunks/astro/server_B1RsrXwl.mjs';
import 'kleur/colors';
import { F as FIGHTERS } from '../../chunks/fighters_DUEOHtJ8.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DmoUUmud.mjs';
import { c as createSvgComponent } from '../../chunks/instagram_LPj4T-EE.mjs';
/* empty css                                   */
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const fixedTitle = "La Velada del Año V Web Oficial - Evento de boxeo de Ibai Llanos con creadores de contenido";

const Logo = createSvgComponent({"meta":{"src":"/_astro/logo.XLvJhKKz.svg","width":206,"height":224,"format":"svg"},"attributes":{"viewBox":"0 0 206 224","fill":"currentColor"},"children":"\r\n    <path d=\"m206 0-29 13-18 10c-12 9-23 21-32 35l-14 25-10-15-10 14-14-24a111 111 0 0 0-50-45L0 0l74 112L0 224l29-13 18-10c12-9 23-21 32-35l14-25 10 15 10-15 14 25a111 111 0 0 0 50 45l29 13-74-112L206 0zm-73 62a103 103 0 0 1 47-42l7-4-59 90-11-17 16-27zM19 16l7 4c6 2 12 5 17 9 12 8 22 19 30 33l16 27-11 17-59-90zm84 128-6-9 6-10 6 10-6 9zm84 64-7-4h-1l-16-9c-12-8-22-19-30-33l-16-27-11-19-3-5-2 5-12 19-16 27a103 103 0 0 1-47 42l-7 3 62-92 17-26 5-9 6 9 17 26 61 93z\" />\r\n    <style>\r\n        path {\r\n        fill: currentColor;\r\n        }\r\n    </style>\r\n"});

const $$Astro$2 = createAstro("https://la-velada-clone.vercel.app/");
const $$BoxerProfileCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BoxerProfileCard;
  const { fighter, birthDate, battle } = Astro2.props;
  const generateRandomBars = () => {
    const bars2 = [];
    for (let i = 0; i < 20; i++) {
      bars2.push(Math.floor(Math.random() * (2 - 1 + 1)) + 2);
    }
    return bars2;
  };
  const bars = generateRandomBars();
  const opponent = FIGHTERS.find((f) => f.id === fighter.versus);
  return renderTemplate`${maybeRenderHead()}<article class="boxer-profile-card group relative
w-[92%]
sm:w-[88%]
md:w-full
lg:max-w-[450px]
overflow-hidden rounded-xl
bg-theme-midnight/70 backdrop-blur-xs
transition-all duration-500" data-astro-cid-pfraywpi>  <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" data-astro-cid-pfraywpi></div> <main class="grid gap-0" data-astro-cid-pfraywpi>  <div class="flex flex-wrap items-center gap-2 p-4 pb-0 animate-fade-in-up" data-astro-cid-pfraywpi> ${battle && renderTemplate`<span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg" data-astro-cid-pfraywpi>
Combate · ${String(battle.number).padStart(2, "0")} </span>`} <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300" data-astro-cid-pfraywpi> <span aria-hidden="true" data-astro-cid-pfraywpi>${fighter.flag}</span> ${fighter.countryName} </span> <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300" data-astro-cid-pfraywpi> ${fighter.genderLabel} </span> </div>  <div class="flex flex-col p-4" data-astro-cid-pfraywpi>  <div class="mb-3" data-astro-cid-pfraywpi> <div class="inline-block border-l-3 border-theme-gold pl-2" data-astro-cid-pfraywpi> <div class="h-auto w-auto" data-astro-cid-pfraywpi> <h3 class="boxer-detail-name text-5xl font-black uppercase tracking-wider relative z-10 sm:text-6xl md:text-7xl" data-astro-cid-pfraywpi> ${fighter.name} </h3> <div class="absolute inset-0 bg-theme-gold/40 blur-2xl -z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-xl" data-astro-cid-pfraywpi></div> </div> </div> </div>  ${opponent && renderTemplate`<div class="flex w-full items-center justify-left gap-4 my-2" data-astro-cid-pfraywpi> <span class="text-theme-gold font-bold text-xl" data-astro-cid-pfraywpi>VS</span>  <a${addAttribute(`/luchador/${opponent.id}`, "href")} class="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500" data-astro-cid-pfraywpi> <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"${addAttribute(`/images/fighters/cards/${opponent.id}.webp`, "src")}${addAttribute(opponent.name, "alt")} data-astro-cid-pfraywpi>  <div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 hover:opacity-100" data-astro-cid-pfraywpi> <span class="text-purple-400 text-xs font-bold text-center px-1" data-astro-cid-pfraywpi>${opponent.name}</span> </div>  <div class="absolute inset-0 rounded-full border-2 border-purple-500/70 opacity-0 transition-opacity duration-300 hover:opacity-100" data-astro-cid-pfraywpi></div> </a> </div>`}  <div class="flex w-full items-center gap-3 sm:gap-4 my-4" aria-hidden="true" data-astro-cid-pfraywpi> <span class="size-1 rotate-45 bg-theme-gold/70" data-astro-cid-pfraywpi></span> <span class="h-px flex-1 bg-linear-to-r from-theme-gold/45 to-transparent" data-astro-cid-pfraywpi></span> </div> <p class="boxer-detail-coming-soon-eyebrow font-cinzel text-[0.55rem] font-bold tracking-[0.45em] text-theme-gold/80 sm:text-[0.65rem]" data-astro-cid-pfraywpi>
FICHA EN PREPARACIÓN
</p>  <div class="grid grid-cols-2 gap-3 mt-2" data-astro-cid-pfraywpi> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Edad
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${fighter.age} <span class="text-xs font-normal text-theme-cream/60" data-astro-cid-pfraywpi>años</span> </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Equipo Actual
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi>
BARCELONA
</p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Victorias
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi>
20 <span class="text-xs font-normal text-theme-cream/60" data-astro-cid-pfraywpi>V</span> </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Derrotas
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi>
10 <span class="text-xs font-normal text-theme-cream/60" data-astro-cid-pfraywpi>D</span> </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Empates
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi>
2 <span class="text-xs font-normal text-theme-cream/60" data-astro-cid-pfraywpi>E</span> </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Peso
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${fighter.weight} <span class="text-xs font-normal text-theme-cream/60" data-astro-cid-pfraywpi>kg</span> </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Nacimiento
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${birthDate} </p> </div> <div class="stat-item" data-astro-cid-pfraywpi> <span class="text-[0.5rem] font-bold tracking-[0.2em] text-theme-gold/70 uppercase" data-astro-cid-pfraywpi>
Altura
</span> <p class="font-cinzel text-base font-bold text-theme-cream" data-astro-cid-pfraywpi> ${fighter.height} <span class="text-xs font-normal text-theme-cream/60" data-astro-cid-pfraywpi>m</span> </p> </div> </div> </div> </main>  <footer class="flex items-center flex-col justify-between border-t border-theme-gold/20 bg-theme-midnight/80 px-4 py-2" data-astro-cid-pfraywpi> <div data-astro-cid-pfraywpi> <p class="boxer-detail-coming-soon-text mt-1 max-w-xl font-cinzel text-xs font-medium leading-relaxed tracking-[0.18em] text-theme-cream/70 sm:text-sm" data-astro-cid-pfraywpi>
Estamos puliendo la ficha completa de ${fighter.name}, entrenamientos y rivalidades. Vuelve pronto.</p> </div> <div class="w-full flex justify-between mt-2" data-astro-cid-pfraywpi> <div class="flex items-center gap-2" data-astro-cid-pfraywpi> <img class="h-5 w-auto rounded-full border border-theme-gold/30 object-cover"${addAttribute(`/images/flags/${fighter.country}.webp`, "src")}${addAttribute(`Pa\xEDs ${fighter.country}`, "alt")} decoding="async" loading="lazy" data-astro-cid-pfraywpi> <span class="font-cinzel text-xs font-bold uppercase tracking-wide text-theme-cream/80" data-astro-cid-pfraywpi> ${fighter.city} </span> </div> <div class="flex items-center gap-2" data-astro-cid-pfraywpi> ${renderComponent($$result, "Logo", Logo, { "class": "h-5 w-auto text-theme-gold", "data-astro-cid-pfraywpi": true })} <div class="flex items-end bg-theme-cream/90 pl-0.5 py-0.5 rounded-sm" data-astro-cid-pfraywpi> ${bars.map((width, index) => renderTemplate`<span${addAttribute(index, "key")} class="bg-theme-midnight h-[20px] mr-0.5 transition-all duration-300 group-hover:bg-theme-gold"${addAttribute(`width: ${width}px;`, "style")} data-astro-cid-pfraywpi></span>`)} </div> </div> </div> </footer> </article> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/BoxerProfileCard.astro", void 0);

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$TournamentCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TournamentCards;
  const ITEMS_PER_PAGE = 6;
  const {
    tournaments = [],
    fighterId
  } = Astro2.props;
  const enrichedTournaments = tournaments.map((t) => ({
    ...t,
    stats: t.stats ?? {
      goals: Math.floor(Math.random() * 15) + 1,
      assists: Math.floor(Math.random() * 10),
      matches: Math.floor(Math.random() * 12) + 4,
      wins: Math.floor(Math.random() * 8) + 2,
      losses: Math.floor(Math.random() * 4),
      draws: Math.floor(Math.random() * 3),
      yellowCards: Math.floor(Math.random() * 5),
      redCards: Math.floor(Math.random() * 2),
      minutesPlayed: Math.floor(Math.random() * 800) + 200,
      rating: parseFloat((Math.random() * 2 + 7).toFixed(1))
    }
  }));
  const totalPages = Math.ceil(enrichedTournaments.length / ITEMS_PER_PAGE);
  const getBadge = (pos) => {
    if (pos === 1) return { emoji: "\u{1F3C6}", label: "Campe\xF3n", cls: "badge--gold" };
    if (pos === 2) return { emoji: "\u{1F948}", label: "Subcampe\xF3n", cls: "badge--silver" };
    if (pos === 3) return { emoji: "\u{1F949}", label: "3er Puesto", cls: "badge--bronze" };
    return { emoji: "\u{1F3C5}", label: `${pos}\xBA Puesto`, cls: "badge--default" };
  };
  return renderTemplate`${maybeRenderHead()}<section class="tc-section" data-astro-cid-zymwgjru> <div class="flex items-center gap-3 mb-8" data-astro-cid-zymwgjru> <span class="tc-diamond" data-astro-cid-zymwgjru></span> <h2 class="tc-section-title" data-astro-cid-zymwgjru>TORNEOS DISPUTADOS</h2> <span class="tc-line" data-astro-cid-zymwgjru></span> ${totalPages > 1 && renderTemplate`<span class="tc-page-indicator"${addAttribute(`tc-page-indicator-${fighterId}`, "id")} data-astro-cid-zymwgjru>1 / ${totalPages}</span>`} </div> <div class="tc-slider-wrap"${addAttribute(`tc-slider-${fighterId}`, "id")} data-astro-cid-zymwgjru> <div class="tc-grid" data-astro-cid-zymwgjru> ${enrichedTournaments.map((t, i) => {
    const badge = getBadge(t.position);
    const uid = `tc-${fighterId}-${t.id}`;
    const page = Math.floor(i / ITEMS_PER_PAGE);
    return renderTemplate`<div${addAttribute(["tc-card", page === 0 ? "tc-card--visible" : ""], "class:list")}${addAttribute(uid, "data-uid")}${addAttribute(page, "data-page")}${addAttribute(`animation-delay:${i % ITEMS_PER_PAGE * 0.07}s`, "style")} data-astro-cid-zymwgjru> <span class="tc-corner tc-corner--tl" data-astro-cid-zymwgjru></span> <span class="tc-corner tc-corner--tr" data-astro-cid-zymwgjru></span> <span class="tc-corner tc-corner--bl" data-astro-cid-zymwgjru></span> <span class="tc-corner tc-corner--br" data-astro-cid-zymwgjru></span> <div class="tc-glow" aria-hidden="true" data-astro-cid-zymwgjru></div> <button class="tc-trigger" aria-expanded="false"${addAttribute(`stats-${uid}`, "aria-controls")} data-astro-cid-zymwgjru> <div class="tc-trophy" data-astro-cid-zymwgjru> <span class="tc-trophy-emoji" data-astro-cid-zymwgjru>${badge.emoji}</span> </div> <div class="tc-main-info" data-astro-cid-zymwgjru> <span class="tc-name" data-astro-cid-zymwgjru>${t.name}</span> <div class="flex items-center gap-2 mt-1" data-astro-cid-zymwgjru> <span${addAttribute(`tc-badge ${badge.cls}`, "class")} data-astro-cid-zymwgjru>${badge.label}</span> <span class="tc-year" data-astro-cid-zymwgjru>${t.year}</span> </div> ${t.location && renderTemplate`<span class="tc-location" data-astro-cid-zymwgjru>${t.location}</span>`} </div> <div class="tc-arrow-wrap" data-astro-cid-zymwgjru> <svg class="tc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" data-astro-cid-zymwgjru> <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zymwgjru></path> </svg> </div> </button> <div class="tc-stats-panel"${addAttribute(`stats-${uid}`, "id")} aria-hidden="true" data-astro-cid-zymwgjru> <div class="tc-stats-inner" data-astro-cid-zymwgjru> <div class="tc-separator" data-astro-cid-zymwgjru> <span class="tc-sep-line" data-astro-cid-zymwgjru></span> <span class="tc-sep-text" data-astro-cid-zymwgjru>ESTADÍSTICAS</span> <span class="tc-sep-line" data-astro-cid-zymwgjru></span> </div> <div class="tc-stats-grid" data-astro-cid-zymwgjru> <div class="tc-stat tc-stat--highlight" data-astro-cid-zymwgjru> <span class="tc-stat-value" data-astro-cid-zymwgjru>${t.stats?.goals ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Goles</span> </div> <div class="tc-stat tc-stat--highlight" data-astro-cid-zymwgjru> <span class="tc-stat-value" data-astro-cid-zymwgjru>${t.stats?.assists ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Asistencias</span> </div> <div class="tc-stat" data-astro-cid-zymwgjru> <span class="tc-stat-value" data-astro-cid-zymwgjru>${t.stats?.matches ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Partidos</span> </div> <div class="tc-stat tc-stat--green" data-astro-cid-zymwgjru> <span class="tc-stat-value" data-astro-cid-zymwgjru>${t.stats?.wins ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Victorias</span> </div> <div class="tc-stat tc-stat--draw" data-astro-cid-zymwgjru> <span class="tc-stat-value" data-astro-cid-zymwgjru>${t.stats?.draws ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Empates</span> </div> <div class="tc-stat tc-stat--red" data-astro-cid-zymwgjru> <span class="tc-stat-value" data-astro-cid-zymwgjru>${t.stats?.losses ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Derrotas</span> </div> <div class="tc-stat" data-astro-cid-zymwgjru> <span class="tc-stat-value tc-stat-value--sm" data-astro-cid-zymwgjru>${t.stats?.minutesPlayed ?? 0}'</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Minutos</span> </div> <div class="tc-stat" data-astro-cid-zymwgjru> <span class="tc-stat-value tc-stat-value--yellow" data-astro-cid-zymwgjru>🟨 ${t.stats?.yellowCards ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Amarillas</span> </div> <div class="tc-stat" data-astro-cid-zymwgjru> <span class="tc-stat-value tc-stat-value--red2" data-astro-cid-zymwgjru>🟥 ${t.stats?.redCards ?? 0}</span> <span class="tc-stat-label" data-astro-cid-zymwgjru>Rojas</span> </div> </div> <div class="tc-bottom-row" data-astro-cid-zymwgjru> <div class="tc-rating" data-astro-cid-zymwgjru> <span class="tc-rating-label" data-astro-cid-zymwgjru>VALORACIÓN MEDIA</span> <div class="tc-rating-bar-wrap" data-astro-cid-zymwgjru> <div class="tc-rating-bar"${addAttribute(`width:${(t.stats?.rating ?? 7) / 10 * 100}%`, "style")} data-astro-cid-zymwgjru></div> </div> <span class="tc-rating-value" data-astro-cid-zymwgjru>${t.stats?.rating ?? "\u2014"}</span> </div> ${t.record && renderTemplate`<div class="tc-record" data-astro-cid-zymwgjru> <span class="tc-record-label" data-astro-cid-zymwgjru>RÉCORD</span> <span class="tc-record-value" data-astro-cid-zymwgjru>${t.record}</span> </div>`} ${t.prize && renderTemplate`<div class="tc-prize" data-astro-cid-zymwgjru> <span class="tc-prize-label" data-astro-cid-zymwgjru>PREMIO</span> <span class="tc-prize-value" data-astro-cid-zymwgjru>${t.prize}</span> </div>`} </div> <a${addAttribute(`/torneos/${t.id}`, "href")} class="tc-cta" data-astro-cid-zymwgjru>
Ver Torneo Completo
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" data-astro-cid-zymwgjru> <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zymwgjru></path> </svg> </a> </div> </div> </div>`;
  })} </div> ${totalPages > 1 && renderTemplate`<div class="tc-nav"${addAttribute(`tc-nav-${fighterId}`, "id")} data-astro-cid-zymwgjru> <button class="tc-nav-btn"${addAttribute(`tc-prev-${fighterId}`, "id")} aria-label="Anterior" data-astro-cid-zymwgjru> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" data-astro-cid-zymwgjru> <path d="M12 15l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zymwgjru></path> </svg> </button> <div class="tc-dots"${addAttribute(`tc-dots-${fighterId}`, "id")} data-astro-cid-zymwgjru> ${Array.from({ length: totalPages }, (_, p) => renderTemplate`<span${addAttribute(p, "data-dot")}${addAttribute(["tc-dot", ["tc-dot", p === 0 ? "tc-dot--active" : ""]], "class:list")} data-astro-cid-zymwgjru></span>`)} </div> <button class="tc-nav-btn"${addAttribute(`tc-next-${fighterId}`, "id")} aria-label="Siguiente" data-astro-cid-zymwgjru> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" data-astro-cid-zymwgjru> <path d="M6 3l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zymwgjru></path> </svg> </button> </div>`} </div> </section> ${renderScript($$result, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/TournamentCards.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/TournamentCards.astro", void 0);

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const fighter = FIGHTERS.find((fighter2) => fighter2.id === id);
  if (!fighter) {
    return Astro2.redirect("/404");
  }
  const birthDate = fighter.birthDate.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
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
  const tournaments = fighter.tournaments ?? simulatedTournaments;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${fighter.name} | ${fixedTitle}`, "data-astro-cid-mffttbam": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative flex lg:min-h-screen w-full flex-col-reverse lg:flex-row" data-astro-cid-mffttbam> <!-- Fondo --> <div class="mask-fade-bottom absolute inset-0 w-full bg-[url('/images/herp.jpeg')] bg-cover bg-center opacity-50" data-astro-cid-mffttbam></div> <!-- Contenido --> <div class="ssss" data-astro-cid-mffttbam> <div class="relative z-10 flex w-full flex-col items-center justify-center pl-0 pr-0 lg:pr-6 pt-24 lg:flex-row lg:items-start lg:pt-32" data-astro-cid-mffttbam> <!-- Imagen --> <div class="relative mt-8 px-6 lg:px-2 flex h-[60vh] w-full lg:min-w-sm items-center justify-center lg:mt-0 lg:h-[80vh] lg:w-1/2" data-astro-cid-mffttbam> <img${addAttribute(`/images/fighters/big/${id}.webp`, "src")}${addAttribute(`Retrato de ${fighter.name}`, "alt")} class="animate-fade-in mask-image-fade-bottom h-full w-full object-contain transition-all duration-700 hover:scale-105" data-astro-cid-mffttbam${addAttribute(renderTransition($$result2, "xfeswitp", "", `image-${id}`), "data-astro-transition-scope")}> </div> <!-- Perfil --> <div class="w-[95%] md:w-full lg:w-1/2
          px-1
          sm:px-4
          md:px-8
          lg:px-0
          mx-auto
          flex flex-col items-center justify-center
          text-white" data-astro-cid-mffttbam> ${renderComponent($$result2, "BoxerProfileCard", $$BoxerProfileCard, { "fighter": fighter, "birthDate": birthDate, "data-astro-cid-mffttbam": true })} </div> </div> </div> </section>  ${renderComponent($$result2, "TournamentCards", $$TournamentCards, { "fighterId": fighter.id, "tournaments": tournaments, "data-astro-cid-mffttbam": true })}  <section class="py-6 px-4" data-astro-cid-mffttbam> <div class="flex items-center gap-3 mb-6" data-astro-cid-mffttbam> <span class="size-1.5 rotate-45 bg-theme-gold/70" data-astro-cid-mffttbam></span> <h2 class="font-cinzel text-xl sm:text-left font-black uppercase tracking-[0.2em] text-theme-gold/90 sm:text-2xl" data-astro-cid-mffttbam>
REDES SOCIALES
</h2> <span class="hidden sm:inline-block h-px w-12 bg-linear-to-r from-theme-gold/45 to-transparent" data-astro-cid-mffttbam></span> </div> <div class="flex flex-wrap justify-center gap-3" data-astro-cid-mffttbam> ${(fighter.socials || []).map(({ url, image, name, label, followers }) => renderTemplate`<a${addAttribute(url, "href")} target="_blank"${addAttribute(label ?? name, "aria-label")} class="group relative w-24 overflow-hidden rounded-xl bg-gradient-to-br from-theme-midnight/80 to-theme-midnight/60 backdrop-blur-sm border border-theme-gold/20 transition-all duration-300 hover:scale-110 hover:border-theme-gold/60 hover:shadow-xl" data-astro-cid-mffttbam> <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" data-astro-cid-mffttbam></div> <div class="absolute inset-0 opacity-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10 transition-opacity duration-300 group-hover:opacity-100" data-astro-cid-mffttbam></div> <div class="relative flex flex-col items-center justify-center p-3 text-center" data-astro-cid-mffttbam> <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-theme-gold/10 transition-all duration-300 group-hover:scale-110" data-astro-cid-mffttbam> ${renderComponent($$result2, "image.logo", image.logo, { "class": "h-5 w-5 text-theme-cream transition-all duration-300 group-hover:text-theme-gold", "aria-hidden": "true", "data-astro-cid-mffttbam": true })} </div> <span class="font-cinzel text-[0.6rem] font-bold uppercase tracking-wide text-theme-cream/70 transition-all duration-300 group-hover:text-theme-gold" data-astro-cid-mffttbam> ${name} </span> <div class="mt-1" data-astro-cid-mffttbam> <span class="font-mono text-sm font-black bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent" data-astro-cid-mffttbam> ${followers} </span> </div> </div> </a>`)} </div> </section>  <div class="flex justify-center pb-12" data-astro-cid-mffttbam> <a href="/boxeadores" class="boxer-detail-cta boxer-detail-cta-ghost" data-astro-cid-mffttbam>
Todos los boxeadores
</a> </div> ` })} `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/luchador/[id].astro", "self");

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/luchador/[id].astro";
const $$url = "/luchador/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

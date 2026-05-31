import { a2 as createAstro, a3 as createComponent, ab as maybeRenderHead, $ as addAttribute, am as renderTemplate, ae as renderComponent } from '../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DVjlXbPa.mjs';
import { C as COMBATS } from '../chunks/combats_ugStZPMA.mjs';
import 'clsx';
import { T as TEAMS } from '../chunks/teams_C073Wyrp.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$DuelCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DuelCard;
  const {
    id,
    team1Id,
    team2Id,
    hour = "20:00",
    date = "S\xC1B 12 JUL",
    venue = "CANCHA LA 93",
    stage = "FASE DE GRUPOS"
  } = Astro2.props;
  const t1 = TEAMS.find((t) => t.id === team1Id);
  const t2 = TEAMS.find((t) => t.id === team2Id);
  const teamLogo = "/images/Logo_Default.png";
  return renderTemplate`${maybeRenderHead()}<div class="duel-card group"> <div class="duel-inner"> <div class="duel-stage">${stage}</div> <div class="duel-teams"> <a${addAttribute(`/jugadores/${t1?.id || "#"}`, "href")} class="duel-side duel-side--left"> <div class="duel-avatar-wrap"> <div class="duel-avatar-bg"></div> <img class="duel-avatar"${addAttribute(teamLogo, "src")}${addAttribute(t1?.name || "Equipo", "alt")} loading="lazy"> </div> <span class="duel-name">${t1?.name || "???"}</span> </a> <div class="duel-vs" aria-hidden="true"> <span class="duel-vs-circle"> <span class="duel-vs-text">VS</span> </span> <div class="duel-vs-line"></div> </div> <a${addAttribute(`/jugadores/${t2?.id || "#"}`, "href")} class="duel-side duel-side--right"> <div class="duel-avatar-wrap"> <div class="duel-avatar-bg"></div> <img class="duel-avatar"${addAttribute(teamLogo, "src")}${addAttribute(t2?.name || "Equipo", "alt")} loading="lazy"> </div> <span class="duel-name">${t2?.name || "???"}</span> </a> </div> <div class="duel-meta"> <span class="duel-meta-item"> <svg class="duel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${date} · ${hour} </span> <span class="duel-meta-item"> <svg class="duel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${venue} </span> </div> <div class="duel-meta"> <a${addAttribute(`/combate/${id}`, "href")} class="boxer-detail-cta boxer-detail-cta-ghost relative z-10 mt-1">
VER DUELO
</a> </div> </div> </div> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/DuelCard.astro", void 0);

const $$Combates = createComponent(($$result, $$props, $$slots) => {
  const combats = COMBATS.sort((a, b) => a.number - b.number);
  const simulatedDetails = {
    "1-thunder-vs-blaze": { hour: "18:00", date: "S\xC1B 12 JUL", venue: "CANCHA LA 93", stage: "CUARTOS DE FINAL" },
    "2-shadow-vs-frost": { hour: "18:45", date: "S\xC1B 12 JUL", venue: "CANCHA LA 93", stage: "CUARTOS DE FINAL" },
    "3-iron-vs-storm": { hour: "19:30", date: "S\xC1B 12 JUL", venue: "CANCHA LA 93", stage: "CUARTOS DE FINAL" },
    "4-night-vs-golden": { hour: "20:15", date: "S\xC1B 12 JUL", venue: "CANCHA LA 93", stage: "CUARTOS DE FINAL" },
    "5-red-vs-dark": { hour: "21:00", date: "S\xC1B 12 JUL", venue: "CANCHA LA 93", stage: "SEMIFINALES" },
    "6-wild-vs-steel": { hour: "21:45", date: "S\xC1B 12 JUL", venue: "CANCHA LA 93", stage: "SEMIFINALES" }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-mofnzi2w": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="combates-root" data-astro-cid-mofnzi2w> <div class="combates-bg" aria-hidden="true" data-astro-cid-mofnzi2w> <div class="combates-glow combates-glow--green" data-astro-cid-mofnzi2w></div> <div class="combates-glow combates-glow--purple" data-astro-cid-mofnzi2w></div> <div class="combates-stars" data-astro-cid-mofnzi2w></div> </div> <div class="combates-content" data-astro-cid-mofnzi2w> <header class="combates-header" data-astro-cid-mofnzi2w> <div class="combates-ornament" data-astro-cid-mofnzi2w> <span class="combates-orn-line" data-astro-cid-mofnzi2w></span> <span class="combates-orn-diamond combates-orn-diamond--gold" data-astro-cid-mofnzi2w></span> <span class="combates-orn-diamond combates-orn-diamond--sm combates-orn-diamond--purple" data-astro-cid-mofnzi2w></span> <span class="combates-orn-diamond combates-orn-diamond--gold" data-astro-cid-mofnzi2w></span> <span class="combates-orn-line" data-astro-cid-mofnzi2w></span> </div> <h1 class="combates-h1" data-astro-cid-mofnzi2w>COMBATES</h1> <p class="combates-desc" data-astro-cid-mofnzi2w>${combats.length} DUELOS PROGRAMADOS</p> </header> <div class="combates-grid" data-astro-cid-mofnzi2w> ${combats.map((combat) => {
    const details = simulatedDetails[combat.id] || {};
    return renderTemplate`${renderComponent($$result2, "DuelCard", $$DuelCard, { "id": combat.id, "team1Id": combat.fighters[0], "team2Id": combat.fighters[1], "title": combat.title, "hour": details.hour, "date": details.date, "venue": details.venue, "stage": details.stage, "data-astro-cid-mofnzi2w": true })}`;
  })} </div> </div> </section> ` })} `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/combates.astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/combates.astro";
const $$url = "/combates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Combates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

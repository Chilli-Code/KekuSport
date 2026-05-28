import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_CQLHzLBK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
import { $ as $$Layout } from '../../chunks/Layout_uZwaYLoU.mjs';
import { C as COMBATS } from '../../chunks/combats_ugStZPMA.mjs';
import { T as TEAMS } from '../../chunks/teams_C073Wyrp.mjs';
import { P as PLAYERS } from '../../chunks/fighters_Cyp_aquJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$Heroevent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<section class="vs-root"${addAttribute(`${teamA.name} vs ${teamB.name}`, "aria-label")} data-astro-cid-tv3pfvhx> <!-- ═══ FONDO ═══ --> <div class="vs-bg" aria-hidden="true" data-astro-cid-tv3pfvhx> <div class="vs-bg-base" data-astro-cid-tv3pfvhx></div> <div class="vs-rays" data-astro-cid-tv3pfvhx></div> <div class="vs-glow-a"${addAttribute(`background:radial-gradient(ellipse,${colorA}22 0%,transparent 70%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-glow-b"${addAttribute(`background:radial-gradient(ellipse,${colorB}22 0%,transparent 70%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-glow-top" data-astro-cid-tv3pfvhx></div> <div class="vs-stars" data-astro-cid-tv3pfvhx></div> <div class="vs-field-arc" data-astro-cid-tv3pfvhx></div> <div class="vs-center-line" data-astro-cid-tv3pfvhx></div> </div> <!-- ═══ EQUIPO A ═══ --> <div class="vs-side vs-side--a" data-astro-cid-tv3pfvhx> <div class="vs-side-glow"${addAttribute(`background:radial-gradient(ellipse at 80% 60%,${colorA}18 0%,transparent 65%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-team-header vs-team-header--a" data-astro-cid-tv3pfvhx> <div class="vs-team-logo-wrap" data-astro-cid-tv3pfvhx> <img${addAttribute(teamA.logo ?? "/images/Logo_Default.png", "src")}${addAttribute(teamA.name, "alt")} class="vs-team-logo" data-astro-cid-tv3pfvhx> </div> <div class="vs-team-namebar"${addAttribute(`border-color:${colorA}44;background:${colorA}0f`, "style")} data-astro-cid-tv3pfvhx> <span${addAttribute(`color:${colorA}`, "style")} data-astro-cid-tv3pfvhx>${teamA.name}</span> </div> </div> <div class="vs-players vs-players--a" data-astro-cid-tv3pfvhx> ${teamA.players.map((p, i) => renderTemplate`<div${addAttribute(`vs-player vs-player--a ${p.isCaptain ? "vs-player--captain" : ""}`, "class")}${addAttribute(i, "data-index")}${addAttribute(`--i:${i};--color:${colorA};animation-delay:${i * 0.08}s`, "style")} data-astro-cid-tv3pfvhx> <div class="vs-player-img-wrap" data-astro-cid-tv3pfvhx> ${p.img ? renderTemplate`<img${addAttribute(p.img, "src")}${addAttribute(p.name, "alt")} class="vs-player-img" loading="eager" data-astro-cid-tv3pfvhx>` : renderTemplate`<img${addAttribute(`/images/fighters/big/jugador_mistery.webp`, "src")}${addAttribute(p.name, "alt")} class="vs-player-img" loading="eager" data-astro-cid-tv3pfvhx>`} ${p.isCaptain && renderTemplate`<div class="vs-captain-ring"${addAttribute(`border-color:${colorA};box-shadow:0 0 16px ${colorA}88`, "style")} data-astro-cid-tv3pfvhx></div>`} <div class="vs-player-fade vs-player-fade--a" data-astro-cid-tv3pfvhx></div> </div> <span class="vs-player-name"${addAttribute(`color:${p.isCaptain ? colorA : "var(--cream)"}`, "style")} data-astro-cid-tv3pfvhx>${p.name}</span> </div>`)} </div> <div class="vs-team-name vs-team-name--a"${addAttribute(`color:${colorA};text-shadow:0 0 30px ${colorA}88`, "style")} data-astro-cid-tv3pfvhx> ${teamA.name} </div> </div> <!-- ═══ CENTRO ═══ --> <div class="vs-center" data-astro-cid-tv3pfvhx> <p class="vs-date" data-astro-cid-tv3pfvhx>${date}</p> <div class="vs-event-wrap" data-astro-cid-tv3pfvhx> <span class="vs-spark vs-spark--tl" data-astro-cid-tv3pfvhx></span> <span class="vs-spark vs-spark--tr" data-astro-cid-tv3pfvhx></span> <span class="vs-spark vs-spark--bl" data-astro-cid-tv3pfvhx></span> <span class="vs-spark vs-spark--br" data-astro-cid-tv3pfvhx></span> <div class="vs-event-name" data-astro-cid-tv3pfvhx> <span class="vs-event-small" data-astro-cid-tv3pfvhx>${eventName}</span> <span class="vs-event-edition" data-astro-cid-tv3pfvhx>${edition}</span> </div> </div> <div class="vs-badge" data-astro-cid-tv3pfvhx> <div class="vs-badge-ring" data-astro-cid-tv3pfvhx></div> <span class="vs-badge-text" data-astro-cid-tv3pfvhx>VS</span> </div> <div class="vs-meta" data-astro-cid-tv3pfvhx> <span class="vs-meta-venue" data-astro-cid-tv3pfvhx>${venue}</span> <span class="vs-meta-platform" data-astro-cid-tv3pfvhx>${platform}</span> </div> </div> <!-- ═══ EQUIPO B ═══ --> <div class="vs-side vs-side--b" data-astro-cid-tv3pfvhx> <div class="vs-side-glow"${addAttribute(`background:radial-gradient(ellipse at 20% 60%,${colorB}18 0%,transparent 65%)`, "style")} data-astro-cid-tv3pfvhx></div> <div class="vs-team-header vs-team-header--b" data-astro-cid-tv3pfvhx> <div class="vs-team-logo-wrap" data-astro-cid-tv3pfvhx> <img${addAttribute(teamB.logo ?? "/images/Logo_Default.png", "src")}${addAttribute(teamB.name, "alt")} class="vs-team-logo" data-astro-cid-tv3pfvhx> </div> <div class="vs-team-namebar"${addAttribute(`border-color:${colorB}44;background:${colorB}0f`, "style")} data-astro-cid-tv3pfvhx> <span${addAttribute(`color:${colorB}`, "style")} data-astro-cid-tv3pfvhx>${teamB.name}</span> </div> </div> <div class="vs-players vs-players--b" data-astro-cid-tv3pfvhx> ${teamB.players.map((p, i) => renderTemplate`<div${addAttribute(`vs-player vs-player--b ${p.isCaptain ? "vs-player--captain" : ""}`, "class")}${addAttribute(i, "data-index")}${addAttribute(`--i:${i};--color:${colorB};animation-delay:${i * 0.08 + 0.1}s`, "style")} data-astro-cid-tv3pfvhx> <div class="vs-player-img-wrap" data-astro-cid-tv3pfvhx> ${p.img ? renderTemplate`<img${addAttribute(p.img, "src")}${addAttribute(p.name, "alt")} class="vs-player-img vs-player-img--flip" loading="eager" data-astro-cid-tv3pfvhx>` : renderTemplate`<img${addAttribute(`/images/fighters/big/jugador_mistery.webp`, "src")}${addAttribute(p.name, "alt")} class="vs-player-img" loading="eager" data-astro-cid-tv3pfvhx>`} ${p.isCaptain && renderTemplate`<div class="vs-captain-ring"${addAttribute(`border-color:${colorB};box-shadow:0 0 16px ${colorB}88`, "style")} data-astro-cid-tv3pfvhx></div>`} <div class="vs-player-fade vs-player-fade--b" data-astro-cid-tv3pfvhx></div> </div> <span class="vs-player-name"${addAttribute(`color:${p.isCaptain ? colorB : "var(--cream)"}`, "style")} data-astro-cid-tv3pfvhx>${p.name}</span> </div>`)} </div> <div class="vs-team-name vs-team-name--b"${addAttribute(`color:${colorB};text-shadow:0 0 30px ${colorB}88`, "style")} data-astro-cid-tv3pfvhx> ${teamB.name} </div> </div> </section> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Heroevent.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroEvent", $$Heroevent, { "teamA": { id: team1Data.id, name: team1Data.name, players: team1Players }, "teamB": { id: team2Data.id, name: team2Data.name, players: team2Players }, "date": "S\xC1B 12 JUL", "venue": "CANCHA LA 93 \xB7 BARRANQUILLA", "eventName": "TORNEO JUGADORES", "edition": "PRESENCIAL", "platform": "BARRANQUILLA \xB7 COLOMBIA" })} ` })}`;
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

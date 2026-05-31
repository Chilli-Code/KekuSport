import { a3 as createComponent, ae as renderComponent, am as renderTemplate, ab as maybeRenderHead, $ as addAttribute } from '../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import { P as PLAYERS } from '../chunks/fighters_DQHz57_0.mjs';
import { $ as $$Layout } from '../chunks/Layout_DVjlXbPa.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const totalBoxers = PLAYERS.length;
  const playerCards = PLAYERS.map((player) => ({
    id: player.id,
    name: player.name,
    neighborhood: player.neighborhood
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zb4ifng5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="players-root" data-astro-cid-zb4ifng5> <!-- Fondo espacial --> <div class="players-bg" aria-hidden="true" data-astro-cid-zb4ifng5> <div class="players-bg-glow players-bg-glow--green" data-astro-cid-zb4ifng5></div> <div class="players-bg-glow players-bg-glow--purple" data-astro-cid-zb4ifng5></div> <div class="players-stars" data-astro-cid-zb4ifng5></div> <!-- líneas de campo --> <div class="players-field-line players-field-line--left" data-astro-cid-zb4ifng5></div> <div class="players-field-line players-field-line--right" data-astro-cid-zb4ifng5></div> <div class="players-field-arc" data-astro-cid-zb4ifng5></div> </div> <div class="players-content" data-astro-cid-zb4ifng5> <!-- HEADER --> <header class="players-header" data-astro-cid-zb4ifng5> <div class="players-header-ornament" data-astro-cid-zb4ifng5> <span class="players-orn-line" data-astro-cid-zb4ifng5></span> <span class="players-orn-diamond players-orn-diamond--gold" data-astro-cid-zb4ifng5></span> <span class="players-orn-diamond players-orn-diamond--sm players-orn-diamond--purple" data-astro-cid-zb4ifng5></span> <span class="players-orn-diamond players-orn-diamond--gold" data-astro-cid-zb4ifng5></span> <span class="players-orn-line" data-astro-cid-zb4ifng5></span> </div> <h1 class="players-h1" data-astro-cid-zb4ifng5>JUGADORES</h1> <p class="players-desc" data-astro-cid-zb4ifng5>LOS ${totalBoxers} GUERREROS DEL TORNEO PES</p> </header> <!-- GRID --> <div class="players-grid" data-astro-cid-zb4ifng5> ${playerCards.map((player, i) => renderTemplate`<a${addAttribute(`/jugador/${player.id}`, "href")} class="pcard"${addAttribute(`animation-delay:${i * 0.04}s`, "style")} data-astro-cid-zb4ifng5> <span class="pcard-corner pcard-corner--tl" data-astro-cid-zb4ifng5></span> <span class="pcard-corner pcard-corner--tr" data-astro-cid-zb4ifng5></span> <span class="pcard-corner pcard-corner--bl" data-astro-cid-zb4ifng5></span> <span class="pcard-corner pcard-corner--br" data-astro-cid-zb4ifng5></span> <div class="pcard-img-wrap" data-astro-cid-zb4ifng5> <img${addAttribute(`/images/fighters/cards/jugador_mistery_card.png`, "src")}${addAttribute(`/images/fighters/cards/${player.id}.webp`, "src")}${addAttribute(player.name, "alt")} class="pcard-img" loading="lazy" data-astro-cid-zb4ifng5> <div class="pcard-overlay" data-astro-cid-zb4ifng5></div> <div class="pcard-lightning pcard-lightning--l" data-astro-cid-zb4ifng5></div> <div class="pcard-lightning pcard-lightning--r" data-astro-cid-zb4ifng5></div> </div> <div class="pcard-glow" aria-hidden="true" data-astro-cid-zb4ifng5></div> <div class="pcard-info" data-astro-cid-zb4ifng5> <div class="pcard-divider" data-astro-cid-zb4ifng5></div> <h2 class="pcard-name" data-astro-cid-zb4ifng5>${player.name}</h2> <div class="pcard-country" data-astro-cid-zb4ifng5> <span class="pcard-country-name" data-astro-cid-zb4ifng5>${player.neighborhood}</span> </div> </div> </a>`)} </div> </div> </div> ` })} `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/jugadores/index.astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/jugadores/index.astro";
const $$url = "/jugadores";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DpPHlMO2.mjs';
import 'kleur/colors';
import { F as FIGHTERS } from '../chunks/fighters_Cwhcckr7.mjs';
import { $ as $$Layout } from '../chunks/Layout_BFkBUtQq.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const totalBoxers = FIGHTERS.length;
  const countryNames = {
    es: "Espa\xF1a",
    mx: "M\xE9xico",
    ar: "Argentina",
    co: "Colombia",
    pe: "Per\xFA",
    cl: "Chile",
    us: "EE.UU"
  };
  const countryFlags = {
    es: "\u{1F1EA}\u{1F1F8}",
    mx: "\u{1F1F2}\u{1F1FD}",
    ar: "\u{1F1E6}\u{1F1F7}",
    co: "\u{1F1E8}\u{1F1F4}",
    pe: "\u{1F1F5}\u{1F1EA}",
    cl: "\u{1F1E8}\u{1F1F1}",
    us: "\u{1F1FA}\u{1F1F8}"
  };
  const boxerCards = FIGHTERS.map((fighter) => ({
    id: fighter.id,
    name: fighter.name,
    country: fighter.country,
    countryName: countryNames[fighter.country] || fighter.country,
    flag: countryFlags[fighter.country] || "\u{1F3F3}\uFE0F",
    gender: fighter.gender === "masculino" ? "M" : "F"
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zb4ifng5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="players-root" data-astro-cid-zb4ifng5> <!-- Fondo espacial --> <div class="players-bg" aria-hidden="true" data-astro-cid-zb4ifng5> <div class="players-bg-glow players-bg-glow--green" data-astro-cid-zb4ifng5></div> <div class="players-bg-glow players-bg-glow--purple" data-astro-cid-zb4ifng5></div> <div class="players-stars" data-astro-cid-zb4ifng5></div> <!-- líneas de campo --> <div class="players-field-line players-field-line--left" data-astro-cid-zb4ifng5></div> <div class="players-field-line players-field-line--right" data-astro-cid-zb4ifng5></div> <div class="players-field-arc" data-astro-cid-zb4ifng5></div> </div> <div class="players-content" data-astro-cid-zb4ifng5> <!-- HEADER --> <header class="players-header" data-astro-cid-zb4ifng5> <div class="players-header-ornament" data-astro-cid-zb4ifng5> <span class="players-orn-line" data-astro-cid-zb4ifng5></span> <span class="players-orn-diamond players-orn-diamond--gold" data-astro-cid-zb4ifng5></span> <span class="players-orn-diamond players-orn-diamond--sm players-orn-diamond--purple" data-astro-cid-zb4ifng5></span> <span class="players-orn-diamond players-orn-diamond--gold" data-astro-cid-zb4ifng5></span> <span class="players-orn-line" data-astro-cid-zb4ifng5></span> </div> <h1 class="players-h1" data-astro-cid-zb4ifng5>JUGADORES</h1> <p class="players-desc" data-astro-cid-zb4ifng5>LOS ${totalBoxers} GUERREROS DEL TORNEO PES</p> </header> <!-- GRID --> <div class="players-grid" data-astro-cid-zb4ifng5> ${boxerCards.map((fighter, i) => renderTemplate`<a${addAttribute(`/luchador/${fighter.id}`, "href")} class="pcard"${addAttribute(`animation-delay:${i * 0.04}s`, "style")} data-astro-cid-zb4ifng5> <span class="pcard-corner pcard-corner--tl" data-astro-cid-zb4ifng5></span> <span class="pcard-corner pcard-corner--tr" data-astro-cid-zb4ifng5></span> <span class="pcard-corner pcard-corner--bl" data-astro-cid-zb4ifng5></span> <span class="pcard-corner pcard-corner--br" data-astro-cid-zb4ifng5></span> <div class="pcard-img-wrap" data-astro-cid-zb4ifng5> <img${addAttribute(`/images/fighters/cards/${fighter.id}.webp`, "src")}${addAttribute(fighter.name, "alt")} class="pcard-img" loading="lazy" data-astro-cid-zb4ifng5> <div class="pcard-overlay" data-astro-cid-zb4ifng5></div> <!-- rayo lateral izquierdo --> <div class="pcard-lightning pcard-lightning--l" data-astro-cid-zb4ifng5></div> <div class="pcard-lightning pcard-lightning--r" data-astro-cid-zb4ifng5></div> </div> <div class="pcard-glow" aria-hidden="true" data-astro-cid-zb4ifng5></div> <div class="pcard-info" data-astro-cid-zb4ifng5> <div class="pcard-divider" data-astro-cid-zb4ifng5></div> <h2 class="pcard-name" data-astro-cid-zb4ifng5>${fighter.name}</h2> <div class="pcard-country" data-astro-cid-zb4ifng5> <span class="pcard-flag" data-astro-cid-zb4ifng5>${fighter.flag}</span> <span class="pcard-country-name" data-astro-cid-zb4ifng5>${fighter.countryName}</span> </div> </div> </a>`)} </div> </div> </div> ` })} `;
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

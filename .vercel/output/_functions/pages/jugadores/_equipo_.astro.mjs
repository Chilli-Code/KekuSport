import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, b as createAstro } from '../../chunks/astro/server_DpPHlMO2.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BFkBUtQq.mjs';
import { F as FIGHTERS } from '../../chunks/fighters_Cwhcckr7.mjs';
import { $ as $$FighterSelector, T as TEAMS } from '../../chunks/teams_B6XkBB_y.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const firstRow = FIGHTERS.slice(0, 6);
  const leftRow = firstRow.slice(0, 3);
  const rightRow = firstRow.slice(3);
  const secondRow = FIGHTERS.slice(6);
  const allFighters = FIGHTERS;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-screen w-full" data-astro-cid-bbe6dxrz> <div class="mask-fade-bottom absolute inset-0 w-full bg-[url('/images/herp.jpeg')] bg-cover bg-center" data-astro-cid-bbe6dxrz></div> <div class="group/hero relative flex w-full flex-col items-center p-2 md:p-8 text-center" data-astro-cid-bbe6dxrz> <div id="landing"${addAttribute([
    "absolute top-0 flex w-full flex-col items-center py-16",
    "group-has-[a[data-fighter-card]:hover]/hero:hidden group-has-[a[data-fighter-card]:focus]/hero:hidden group-has-[a[data-fighter-card]:focus-visible]/hero:hidden"
  ], "class:list")} data-astro-cid-bbe6dxrz> <h3 class="text-theme-seashell animate-fade-in animate-delay-300 mt-4 leading-[100%] font-light" data-astro-cid-bbe6dxrz> <strong data-astro-cid-bbe6dxrz>26</strong> DE <br data-astro-cid-bbe6dxrz><strong data-astro-cid-bbe6dxrz>JULIO</strong> </h3> <figure class="animate-fade-in relative mt-8" data-astro-cid-bbe6dxrz> <img class="relative z-20 h-auto w-64" src="/images/logobg.png" fetchpriority="high" alt="La Velada del Año V" decoding="async" data-astro-cid-bbe6dxrz> <div class="absolute top-0 z-0 size-64 bg-emerald-500/80 blur-2xl" data-astro-cid-bbe6dxrz></div> </figure> <div class="relative z-50" data-astro-cid-bbe6dxrz> <h3 class="text-theme-seashell animate-fade-in animate-delay-500 z-0 mt-4 leading-[100%] font-light" data-astro-cid-bbe6dxrz>
CASA<br data-astro-cid-bbe6dxrz>DEL <br data-astro-cid-bbe6dxrz><strong data-astro-cid-bbe6dxrz>BEYOND</strong> </h3> <div class="absolute -inset-2 -z-10 h-full w-full bg-pink-400/80 blur-2xl" data-astro-cid-bbe6dxrz></div> </div> </div> <!-- VERSIÓN DESKTOP (original) --> <div class="relative hidden h-full w-full max-w-6xl flex-col items-center justify-end gap-4 p-8 md:flex" data-astro-cid-bbe6dxrz> <div class="flex w-full flex-wrap justify-between px-4" data-astro-cid-bbe6dxrz> <div class="flex flex-wrap justify-start gap-4" data-astro-cid-bbe6dxrz> ${leftRow.map(({ id, name, versus }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "versus": versus, "boxerCardClass": "animate-fade-in-right animate-delay-500", "data-astro-cid-bbe6dxrz": true })}`)} </div> <div class="flex flex-wrap justify-end gap-4" data-astro-cid-bbe6dxrz> ${rightRow.map(({ id, name, versus }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "versus": versus, "boxerCardClass": "animate-fade-in-left animate-delay-500", "data-astro-cid-bbe6dxrz": true })}`)} </div> </div> <div class="flex flex-wrap justify-between gap-4" data-astro-cid-bbe6dxrz> ${secondRow.map(({ id, name, versus }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "versus": versus, "boxerCardClass": "animate-fade-in-up animate-delay-700", "data-astro-cid-bbe6dxrz": true })}`)} </div> </div> <!-- VERSIÓN MOBILE (una sola línea con scroll horizontal) --> <div class="relative flex h-full w-full flex-col items-center justify-end gap-4 p-4 md:hidden" data-astro-cid-bbe6dxrz> <div class="w-full overflow-x-auto overflow-y-visible pb-2" data-astro-cid-bbe6dxrz> <div class="flex min-w-max items-center justify-start gap-4 px-2" data-astro-cid-bbe6dxrz> ${allFighters.map(({ id, name, versus }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "versus": versus, "boxerCardClass": "flex-shrink-0", "data-astro-cid-bbe6dxrz": true })}`)} </div> </div> <!-- Indicador de scroll --> <div class="mt-0.5 flex items-center justify-center gap-2" data-astro-cid-bbe6dxrz> <svg class="h-3 w-3 text-theme-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-bbe6dxrz></path> </svg> <span class="text-[0.5rem] uppercase tracking-wider text-theme-gold/50" data-astro-cid-bbe6dxrz>Desliza</span> <svg class="h-3 w-3 text-theme-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-bbe6dxrz></path> </svg> </div> </div> </div> </section> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
async function getStaticPaths() {
  return TEAMS.map((team) => ({
    params: { equipo: team.id }
  }));
}
const $$equipo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$equipo;
  const { equipo } = Astro2.params;
  TEAMS.find((t) => t.id === equipo);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/jugadores/[equipo].astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/jugadores/[equipo].astro";
const $$url = "/jugadores/[equipo]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$equipo,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

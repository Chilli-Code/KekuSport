import { a2 as createAstro, a3 as createComponent, ab as maybeRenderHead, $ as addAttribute, am as renderTemplate, ae as renderComponent } from '../../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DVjlXbPa.mjs';
import { P as PLAYERS } from '../../chunks/fighters_DQHz57_0.mjs';
import { $ as $$FighterSelector } from '../../chunks/FighterSelector_Cp9MzP-1.mjs';
/* empty css                                       */
import { T as TEAMS } from '../../chunks/teams_C073Wyrp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hideLogo, teamLogo } = Astro2.props;
  const firstRow = PLAYERS.slice(0, 6);
  const leftRow = firstRow.slice(0, 3);
  const rightRow = firstRow.slice(3);
  const secondRow = PLAYERS.slice(6);
  const allPlayers = PLAYERS;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-screen w-full" data-astro-cid-bbe6dxrz> <div class="mask-fade-bottom absolute inset-0 w-full bg-[url('/images/fondo2.png')] bg-cover bg-center" data-astro-cid-bbe6dxrz></div> <div class="group/hero relative flex w-full flex-col items-center p-2 md:p-8 text-center" data-astro-cid-bbe6dxrz> <div id="landing"${addAttribute([
    "absolute top-0 flex w-full flex-col items-center py-16",
    "group-has-[a[data-fighter-card]:hover]/hero:hidden group-has-[a[data-fighter-card]:focus]/hero:hidden group-has-[a[data-fighter-card]:focus-visible]/hero:hidden"
  ], "class:list")} data-astro-cid-bbe6dxrz> <h3 class="text-theme-seashell animate-fade-in animate-delay-300 mt-4 leading-[100%] font-light" data-astro-cid-bbe6dxrz> <strong data-astro-cid-bbe6dxrz>26</strong> DE <br data-astro-cid-bbe6dxrz><strong data-astro-cid-bbe6dxrz>JULIO</strong> </h3> ${!hideLogo && renderTemplate`<figure class="animate-fade-in relative mt-8" data-astro-cid-bbe6dxrz> <img class="relative z-20 h-auto w-64"${addAttribute(teamLogo || "/images/logobg.png", "src")} fetchpriority="high"${addAttribute(teamLogo ? "Logo del equipo" : "La Velada del A\xF1o V", "alt")} decoding="async" data-astro-cid-bbe6dxrz> <div class="absolute top-0 z-0 size-64 bg-emerald-500/80 blur-2xl" data-astro-cid-bbe6dxrz></div> </figure>`} <div class="relative z-50" data-astro-cid-bbe6dxrz> <h3 class="text-theme-seashell animate-fade-in animate-delay-500 z-0 mt-4 leading-[100%] font-light" data-astro-cid-bbe6dxrz>
CASA<br data-astro-cid-bbe6dxrz>DEL <br data-astro-cid-bbe6dxrz><strong data-astro-cid-bbe6dxrz>BEYOND</strong> </h3> <div class="absolute -inset-2 -z-10 h-full w-full bg-pink-400/80 blur-2xl" data-astro-cid-bbe6dxrz></div> </div> </div> <!-- VERSIÓN DESKTOP (original) --> <div class="relative hidden h-full w-full max-w-6xl flex-col items-center justify-end gap-4 p-8 pb-2 md:flex" data-astro-cid-bbe6dxrz> <div class="flex w-full flex-wrap justify-between px-4" data-astro-cid-bbe6dxrz> <div class="flex flex-wrap justify-start gap-4" data-astro-cid-bbe6dxrz> ${leftRow.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "boxerCardClass": "animate-fade-in-right animate-delay-500", "data-astro-cid-bbe6dxrz": true })}`)} </div> <div class="flex flex-wrap justify-end gap-4" data-astro-cid-bbe6dxrz> ${rightRow.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "boxerCardClass": "animate-fade-in-left animate-delay-500", "data-astro-cid-bbe6dxrz": true })}`)} </div> </div> <div class="flex flex-wrap justify-between gap-4" data-astro-cid-bbe6dxrz> ${secondRow.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "boxerCardClass": "animate-fade-in-up animate-delay-700", "data-astro-cid-bbe6dxrz": true })}`)} </div> </div> <!-- VERSIÓN MOBILE (una sola línea con scroll horizontal) --> <div class="relative flex h-full w-full flex-col items-center justify-end gap-4 p-4 md:hidden" data-astro-cid-bbe6dxrz> <div class="w-full overflow-x-auto overflow-y-visible pb-2" data-astro-cid-bbe6dxrz> <div class="flex min-w-max items-center justify-start gap-4 px-2" data-astro-cid-bbe6dxrz> ${allPlayers.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "boxerCardClass": "flex-shrink-0", "data-astro-cid-bbe6dxrz": true })}`)} </div> </div> </div> <a href="/jugadores" class="boxer-detail-cta boxer-detail-cta-ghost relative z-10 mt-1" data-astro-cid-bbe6dxrz>
VER TODOS LOS JUGADORES
</a> </div> </section> `;
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
  const teamLogo = "/images/Logo_Default.png";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "teamLogo": teamLogo })} ` })}`;
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

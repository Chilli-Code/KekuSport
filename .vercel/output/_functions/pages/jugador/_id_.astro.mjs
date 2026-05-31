import { a2 as createAstro, a3 as createComponent, ab as maybeRenderHead, am as renderTemplate, ae as renderComponent, $ as addAttribute, an as renderTransition } from '../../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import { P as PLAYERS } from '../../chunks/fighters_DQHz57_0.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DVjlXbPa.mjs';
import { c as createSvgComponent } from '../../chunks/instagram_D-6-DkN7.mjs';
import { T as TEAMS } from '../../chunks/teams_C073Wyrp.mjs';
/* empty css                                   */
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const fixedTitle = "La Velada del Año V Web Oficial - Evento de boxeo de Ibai Llanos con creadores de contenido";

const Logo = createSvgComponent({"meta":{"src":"/_astro/logo.XLvJhKKz.svg","width":206,"height":224,"format":"svg"},"attributes":{"viewBox":"0 0 206 224","fill":"currentColor"},"children":"\r\n    <path d=\"m206 0-29 13-18 10c-12 9-23 21-32 35l-14 25-10-15-10 14-14-24a111 111 0 0 0-50-45L0 0l74 112L0 224l29-13 18-10c12-9 23-21 32-35l14-25 10 15 10-15 14 25a111 111 0 0 0 50 45l29 13-74-112L206 0zm-73 62a103 103 0 0 1 47-42l7-4-59 90-11-17 16-27zM19 16l7 4c6 2 12 5 17 9 12 8 22 19 30 33l16 27-11 17-59-90zm84 128-6-9 6-10 6 10-6 9zm84 64-7-4h-1l-16-9c-12-8-22-19-30-33l-16-27-11-19-3-5-2 5-12 19-16 27a103 103 0 0 1-47 42l-7 3 62-92 17-26 5-9 6 9 17 26 61 93z\" />\r\n    <style>\r\n        path {\r\n        fill: currentColor;\r\n        }\r\n    </style>\r\n"});

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$BoxerProfileCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const player = PLAYERS.find((p) => p.id === id);
  if (!player) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${player.name} | ${fixedTitle}`, "data-astro-cid-gjv37z6d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative flex lg:min-h-screen w-full flex-col-reverse lg:flex-row" data-astro-cid-gjv37z6d> <!-- Contenido --> <div class="ssss" data-astro-cid-gjv37z6d> <div class="relative z-10 flex w-full flex-col items-center justify-center pl-0 pr-0 lg:pr-6 pt-24 lg:flex-row lg:items-start lg:pt-32" data-astro-cid-gjv37z6d> <!-- Imagen --> <div class="relative mt-8 px-6 lg:px-2 flex h-[60vh] w-full lg:min-w-sm items-center justify-center lg:mt-0 lg:h-[80vh] lg:w-1/2" data-astro-cid-gjv37z6d> <img${addAttribute(`/images/fighters/big/jugador_mistery.webp`, "src")}${addAttribute(`Retrato de ${player.name}`, "alt")} class="animate-fade-in mask-image-fade-bottom h-full w-full object-contain transition-all duration-700 hover:scale-105" data-astro-cid-gjv37z6d${addAttribute(renderTransition($$result2, "wg6oeinf", "", `image-${id}`), "data-astro-transition-scope")}> </div> <div class="w-[95%] md:w-full lg:w-1/2
          px-1
          sm:px-4
          md:px-8
          lg:px-0
          mx-auto
          flex flex-col items-center justify-center
          text-white" data-astro-cid-gjv37z6d> ${renderComponent($$result2, "BoxerProfileCard", $$BoxerProfileCard, { "player": player, "data-astro-cid-gjv37z6d": true })} </div> </div> </div> </section>   ` })} `;
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

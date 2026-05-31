import { a2 as createAstro, a3 as createComponent, ab as maybeRenderHead, $ as addAttribute, aj as renderScript, am as renderTemplate, ae as renderComponent, an as renderTransition } from './astro/server_C_1lLQnq.mjs';
import 'piccolore';
import 'clsx';
/* empty css                            */
/* empty css                            */

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$BoxerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BoxerCard;
  const { id, name, class: extraClass, cardLink, cardImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`boxer-card ${extraClass} inline-block transition-all 
    w-20 sm:w-14 md:w-16 lg:w-24 xl:w-26 
    group relative rounded-lg duration-300 hover:scale-110 hover:shadow-lg hover:z-20`, "class")}${addAttribute(cardLink || `/jugador/${id}`, "href")}${addAttribute(id, "data-id")} data-astro-cid-pofwlrbn> <div class="relative overflow-hidden rounded-lg" data-astro-cid-pofwlrbn> <img class="via-40 aspect-[900/1200] h-full w-full bg-gradient-to-t from-gray-50/40 via-gray-50/20 to-transparent object-cover transition-transform duration-500 group-hover:scale-110"${addAttribute(cardImage || `/images/fighters/cards/jugador_mistery_card.png`, "src")}${addAttribute(`Tarjeta del boxeador ${name}`, "alt")} data-astro-cid-pofwlrbn> <div class="absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" data-astro-cid-pofwlrbn></div> <div class="border-theme-tickle-me-pink/70 group-hover:border-purple-500/70 absolute inset-0 rounded-lg border-0 opacity-0 transition-all duration-300 group-hover:border-2 group-hover:opacity-100" data-astro-cid-pofwlrbn></div> </div> <div class="absolute inset-0 flex translate-y-2 flex-col items-center justify-end rounded-lg bg-gradient-to-t from-pink-950/90 via-pink-950/40 to-transparent p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" data-astro-cid-pofwlrbn> <h3 class="text-theme-tickle-me-pink group-hover:text-purple-500 text-xs font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" data-astro-cid-pofwlrbn> ${name} </h3> </div> <div class="bg-theme-tickle-me-pink group-hover:bg-purple-500 absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 transform rounded-t-md transition-all duration-300 group-hover:w-2/3" data-astro-cid-pofwlrbn></div> </a>  ${renderScript($$result, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/BoxerCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/BoxerCard.astro", void 0);

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$FighterSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FighterSelector;
  const { id, name, boxerCardClass, cardLink, cardImage, bigImageSrc, hideHoverName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name, "class": `peer ${boxerCardClass}`, "cardLink": cardLink, "cardImage": cardImage })} <div id="fighter-container" class="pointer-events-none absolute inset-0 flex-col items-center hidden peer-hover:flex peer-focus:flex peer-focus-visible:flex"> <div class="relative top-96 mx-auto h-[4.5rem] flex w-full items-center justify-center z-1 animate-zoom-in"> <!-- <img
        data-id={\`hero-text-\${id}\`}
        src={\`/images/fighters/text/\${id}.png\`}
        alt={name}
        decoding='async'
        class='w-auto h-full absolute mask-fade-text'
        fetchpriority='low'
      /> --> ${!hideHoverName && renderTemplate`<div class="relative"> <h3 class="text-7xl font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-purple-500 to-emerald-500 bg-clip-text text-transparent relative z-10"> ${name} </h3> <div class="absolute inset-0 bg-emerald-500/80 blur-2xl -z-0 opacity-50 hover:opacity-100 transition-opacity"></div> </div>`} </div> <div class="mask-fade-bottom relative bottom-0 mx-auto h-[80vh] flex w-full items-center justify-center animate-slide-up-fade"> <img${addAttribute(`hero-image-${id}`, "data-id")}${addAttribute(bigImageSrc || `/images/fighters/big/jugador_mistery.webp`, "src")}${addAttribute(name, "alt")} decoding="async" class="w-auto h-full absolute" fetchpriority="low"${addAttribute(renderTransition($$result, "ohgji4nl", "", `image-${id}`), "data-astro-transition-scope")}> </div> </div> </div>`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/FighterSelector.astro", "self");

export { $$FighterSelector as $ };

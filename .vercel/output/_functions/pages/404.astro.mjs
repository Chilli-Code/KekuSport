import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CQLHzLBK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_uZwaYLoU.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - La Velada del A\xF1o V" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mask-fade-bottom flex min-h-screen w-full items-center justify-center bg-[url('/images/hero.avif')] bg-cover bg-center text-center"> <div class="w-full max-w-3xl items-center justify-center"> <h1 class="text-theme-raisin-black"> <span class="mb-12 block rotate-113 text-[120px] font-bold tracking-[.025em]" aria-hidden="true">
404
</span> <span class="mb-2 block text-4xl font-bold tracking-wider">¡FUERA DE COMBATE!</span> </h1> <p class="text-theme-raisin-black mb-6 text-xl tracking-wide">
vaya, parece que te han noqueado...
</p> <div class="flex min-h-4 items-center justify-center"> <a href="/" class="bg-theme-turquoise text-theme-raisin-black flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold tracking-widest transition-all duration-300 ease-out hover:rotate-[2deg] active:scale-90" aria-label="Botón para volver al inicio"> <span class="relative z-10 flex items-center gap-2 tracking-widest font-medium text-xs antialiased">
VOLVER AL RING
</span> </a> </div> </div> </section> ` })}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/404.astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

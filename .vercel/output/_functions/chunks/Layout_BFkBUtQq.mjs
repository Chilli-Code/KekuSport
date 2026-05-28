import { b as createAstro, c as createComponent, d as addAttribute, e as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, i as renderHead, j as renderSlot } from './astro/server_DpPHlMO2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { c as createSvgComponent, X, I as Instagram } from './instagram_DIK3IyMq.mjs';

const $$Astro$2 = createAstro("https://la-velada-clone.vercel.app/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const hideLogoRoutes = ["/"];
  const shouldShowLogo = !hideLogoRoutes.includes(pathname);
  const isActive = (path) => pathname === path;
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-8 right-8 z-[100] md:hidden" data-astro-cid-3ef6ksr2> <button id="menuButton" aria-expanded="false" aria-controls="menuMobileContent" class="hamburgerButton group relative flex h-[20px] w-6 cursor-pointer flex-col items-center justify-between transition duration-300 hover:scale-110 lg:hidden" aria-label="Abrir menú de navegación" data-astro-cid-3ef6ksr2> <span class="ease h-[2px] w-6 transform bg-gray-300 transition duration-300 group-[.open]:translate-y-2 group-[.open]:rotate-45" data-astro-cid-3ef6ksr2></span> <span class="ease h-[2px] w-6 transform bg-gray-300 transition duration-300 group-[.open]:opacity-0" data-astro-cid-3ef6ksr2></span> <span class="ease h-[2px] w-6 transform bg-gray-300 transition duration-300 group-[.open]:opacity-0" data-astro-cid-3ef6ksr2></span> <span class="ease h-[2px] w-6 transform bg-gray-300 transition duration-300 group-[.open]:-translate-y-[0.6rem] group-[.open]:-rotate-45" data-astro-cid-3ef6ksr2></span> </button> </div> <header class="fixed top-0 z-50 mx-auto flex h-20 w-full items-center text-white" data-astro-cid-3ef6ksr2> <div class="flex justify-between px-6 py-4 md:w-full" data-astro-cid-3ef6ksr2> <a href="/" class="cursor-pointer transition duration-300 hover:scale-110 md:hidden" data-astro-cid-3ef6ksr2> <img src="/images/logobg.png" alt="logo" class="h-auto w-14" data-astro-cid-3ef6ksr2> </a> <div id="overlay-menu" class="bg-theme-raisin-black/50 fixed inset-0 hidden h-screen" data-astro-cid-3ef6ksr2></div> <nav id="navContent" class="bg-theme-french-mauve/90 fixed top-0 right-0 mx-auto hidden h-screen max-w-6xl items-center justify-between space-y-2 px-6 pt-14 text-sm font-light backdrop-blur-2xl md:relative md:flex md:h-fit md:w-full md:space-y-0 md:bg-transparent md:py-4 md:backdrop-blur-none z-10 animate-fade-in-left md:animate-fade-in-down" data-astro-cid-3ef6ksr2> <div${addAttribute([
    "flex flex-col justify-start space-y-2 md:flex-row md:gap-8 md:space-y-0 z-10",
    shouldShowLogo ? "md:w-1/3" : "md:flex-grow"
  ], "class:list")} data-astro-cid-3ef6ksr2>  <a href="/jugadores" class="group relative inline-block w-fit py-1 leading-relaxed tracking-wider" data-astro-cid-3ef6ksr2> <span class="text-theme-seashell" data-astro-cid-3ef6ksr2>JUGADORES</span>  <div class="relative mt-1 h-[2px] w-full overflow-hidden" data-astro-cid-3ef6ksr2>  <div${addAttribute([
    "absolute bottom-0 left-0 h-full bg-[color:var(--color-theme-tickle-me-pink)] transition-all duration-250 ease-out",
    isActive("/jugadores") ? "w-[51%]" : "w-0 group-hover:w-[51%]"
  ], "class:list")} data-astro-cid-3ef6ksr2></div>  <div${addAttribute([
    "absolute right-0 bottom-0 h-full bg-[color:var(--color-theme-turquoise)] transition-all duration-250 ease-out",
    isActive("jugadores") ? "w-[51%]" : "w-0 group-hover:w-[51%]"
  ], "class:list")} data-astro-cid-3ef6ksr2></div> </div> </a>  <a href="/combates" class="group relative inline-block w-fit py-1 leading-relaxed tracking-wider" data-astro-cid-3ef6ksr2> <span class="text-theme-seashell" data-astro-cid-3ef6ksr2>VER COMBATES</span>  <div class="relative mt-1 h-[2px] w-full overflow-hidden" data-astro-cid-3ef6ksr2>  <div${addAttribute([
    "absolute bottom-0 left-0 h-full bg-[color:var(--color-theme-tickle-me-pink)] transition-all duration-300 ease-out",
    isActive("/combates") ? "w-[51%]" : "w-0 group-hover:w-[51%]"
  ], "class:list")} data-astro-cid-3ef6ksr2></div>  <div${addAttribute([
    "absolute right-0 bottom-0 h-full bg-[color:var(--color-theme-turquoise)] transition-all duration-300 ease-out",
    isActive("/combates") ? "w-[51%]" : "w-0 group-hover:w-[51%]"
  ], "class:list")} data-astro-cid-3ef6ksr2></div> </div> </a> </div> ${shouldShowLogo && renderTemplate`<a href="/" class="relative mx-auto hidden w-1/3 cursor-pointer duration-500 hover:scale-110 md:inline-block" data-astro-cid-3ef6ksr2> <img class="mx-auto h-auto w-30" src="/images/logobg.png" fetchpriority="high" alt="La Velada del Año V" decoding="async" data-astro-cid-3ef6ksr2> </a>`} <div${addAttribute([
    "flex-col items-end md:text-right",
    shouldShowLogo ? "md:w-1/3" : "md:flex-grow"
  ], "class:list")} data-astro-cid-3ef6ksr2> <span class="text-theme-seashell relative inline-block cursor-not-allowed py-1 leading-relaxed tracking-wider opacity-90" data-astro-cid-3ef6ksr2>REALIZA TUS APUESTAS
<span class="absolute inset-0 top-4 mt-1 text-center text-[10px] leading-normal tracking-wide text-yellow-500" data-astro-cid-3ef6ksr2>PRÓXIMAMENTE</span> </span> </div> </nav> </div> </header>  ${renderScript($$result, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Header.astro", void 0);

const Github = createSvgComponent({"meta":{"src":"/_astro/github.QMmyfR1B.svg","width":38,"height":38,"format":"svg"},"attributes":{"width":"38","height":"38","viewBox":"0 0 100 100","role":"img","aria-label":"Logotipo de Github"},"children":" <path fill=\"currentColor\" d=\"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z\"></path> "});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative h-[400px] pb-32"> <div class="absolute inset-0 bg-cover bg-bottom bg-[url('/images/footer.png')] mask-radial-from-green-950 [mask-image:linear-gradient(transparent, black_50%)]"></div> <div class="relative h-full flex flex-col justify-center items-center text-[#2a1f26]"> <div class="footer-content"> <p>2025 | Todos los derechos reservados.</p> </div> <div class="flex flex-row items-center justify-center gap-x-2 mt-4"> <a class="hover:scale-125 transition" href="https://twitter.com/infolavelada" target="_blank"> ${renderComponent($$result, "X", X, {})} </a> <a class="hover:scale-125 transition" href="https://instagram.com/infoLaVelada" target="_blank"> ${renderComponent($$result, "Instagram", Instagram, {})} </a> <a class="hover:scale-125 transition" href="https://github.com/midudev/la-velada-web-oficial" target="_blank"> ${renderComponent($$result, "Github", Github, {})} </a> </div> </div> </footer>`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>La Velada del Año 5 - Evento de Boxeo</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description" content="Evento de Boxeo de Streamer organizado por Ibai Llanos"><meta property="og:url" content="https://www.infolavelada.com"><meta property="og:type" content="website"><meta property="og:title" content="La Velada del Año V"><meta property="og:description" content="Evento de Boxeo de Streamer organizado por Ibai Llanos"><meta property="og:image" content="https://www.infolavelada.com/og.jpg"><meta property="og:locale" content="es_ES"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@alecb6"><meta name="twitter:creator" content="Alejandro"><meta name="twitter:title" content="La Velada del Año V"><meta name="twitter:description" content="Evento de Boxeo de Streamer organizado por Ibai Llanos">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <!-- ═══ FONDO ESPACIAL GLOBAL (una sola vez, para toda la app) ═══ --> <div class="space-bg" aria-hidden="true" data-astro-cid-sckkx6r4> <div class="space-glow space-glow--green" data-astro-cid-sckkx6r4></div> <div class="space-glow space-glow--purple" data-astro-cid-sckkx6r4></div> <div class="space-stars" data-astro-cid-sckkx6r4></div> <div class="space-line space-line--left" data-astro-cid-sckkx6r4></div> <div class="space-line space-line--right" data-astro-cid-sckkx6r4></div> <div class="space-arc" data-astro-cid-sckkx6r4></div> </div> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Analytics", $$Index, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

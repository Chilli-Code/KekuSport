import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C0TkLIFj.mjs';
import { manifest } from './manifest_B7N9FtNG.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/dashboard/crear-torneo.astro.mjs');
const _page3 = () => import('./pages/combate/_id_.astro.mjs');
const _page4 = () => import('./pages/combates.astro.mjs');
const _page5 = () => import('./pages/jugador/_id_.astro.mjs');
const _page6 = () => import('./pages/jugadores/_equipo_.astro.mjs');
const _page7 = () => import('./pages/jugadores.astro.mjs');
const _page8 = () => import('./pages/la-porra.astro.mjs');
const _page9 = () => import('./pages/login.astro.mjs');
const _page10 = () => import('./pages/referee.astro.mjs');
const _page11 = () => import('./pages/tecnico.astro.mjs');
const _page12 = () => import('./pages/torneos.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/dashboard/crear-torneo.astro", _page2],
    ["src/pages/combate/[id].astro", _page3],
    ["src/pages/combates.astro", _page4],
    ["src/pages/jugador/[id].astro", _page5],
    ["src/pages/jugadores/[equipo].astro", _page6],
    ["src/pages/jugadores/index.astro", _page7],
    ["src/pages/la-porra.astro", _page8],
    ["src/pages/login/index.astro", _page9],
    ["src/pages/referee/index.astro", _page10],
    ["src/pages/tecnico/index.astro", _page11],
    ["src/pages/torneos/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a7f3a8c4-1006-40bb-8108-4e816f30b0e4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

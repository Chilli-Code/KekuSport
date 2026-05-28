import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C1gaHCDJ.mjs';
import { manifest } from './manifest_DqrwVZSQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/combate/_id_.astro.mjs');
const _page3 = () => import('./pages/combates.astro.mjs');
const _page4 = () => import('./pages/jugador/_id_.astro.mjs');
const _page5 = () => import('./pages/jugadores/_equipo_.astro.mjs');
const _page6 = () => import('./pages/jugadores.astro.mjs');
const _page7 = () => import('./pages/la-porra.astro.mjs');
const _page8 = () => import('./pages/torneos.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/combate/[id].astro", _page2],
    ["src/pages/combates.astro", _page3],
    ["src/pages/jugador/[id].astro", _page4],
    ["src/pages/jugadores/[equipo].astro", _page5],
    ["src/pages/jugadores/index.astro", _page6],
    ["src/pages/la-porra.astro", _page7],
    ["src/pages/torneos/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "99d92ff9-7a6e-40d8-ad85-9223a73bc627",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

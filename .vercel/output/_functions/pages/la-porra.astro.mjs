import { a2 as createAstro, a3 as createComponent, am as renderTemplate } from '../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import 'clsx';
import { P as PLAYERS } from '../chunks/fighters_DQHz57_0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$LaPorra = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LaPorra;
  const { id } = Astro2.params;
  const player = PLAYERS.find((p) => p.id === id);
  if (!player) return Astro2.redirect("/404");
  return renderTemplate``;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/la-porra.astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/la-porra.astro";
const $$url = "/la-porra";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LaPorra,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

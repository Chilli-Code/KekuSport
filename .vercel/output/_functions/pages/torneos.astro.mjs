import { a3 as createComponent, ae as renderComponent, am as renderTemplate, ab as maybeRenderHead, $ as addAttribute } from '../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DVjlXbPa.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-dcfme3zy": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative flex min-h-svh w-full items-center justify-center overflow-hidden" data-astro-cid-dcfme3zy> <!-- Fondo imagen --> <div class="hero-bg-img absolute inset-0 w-full bg-[url('/images/hero_Landing.webp')] bg-cover bg-center" data-astro-cid-dcfme3zy></div> <!-- Glows espaciales --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-dcfme3zy> <div class="hero-glow-top absolute -top-20 left-1/2 -translate-x-1/2 w-[60%] h-[50%] rounded-full blur-[80px] opacity-30" style="background:radial-gradient(ellipse,#00ff88,transparent 70%)" data-astro-cid-dcfme3zy></div> <div class="absolute top-0 left-0 w-[40%] h-[70%] rounded-full blur-[100px] opacity-20" style="background:radial-gradient(ellipse,#00ff88,transparent 70%)" data-astro-cid-dcfme3zy></div> <div class="absolute top-0 right-0 w-[40%] h-[70%] rounded-full blur-[100px] opacity-15" style="background:radial-gradient(ellipse,#7c3aed,transparent 70%)" data-astro-cid-dcfme3zy></div> </div> <!-- Stars overlay --> <div class="hero-stars absolute inset-0 pointer-events-none opacity-50" data-astro-cid-dcfme3zy></div> <!-- Arco de campo decorativo --> <div class="absolute bottom-[-6vw] left-1/2 -translate-x-1/2 w-[55vw] h-[14vw] rounded-[50%_50%_0_0/100%_100%_0_0] border border-[rgba(0,255,136,.1)] pointer-events-none" data-astro-cid-dcfme3zy></div> <!-- Contenido --> <div class="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-32 text-center" data-astro-cid-dcfme3zy> <!-- Badge --> <span class="animate-fade-in mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-theme-gold)]/40 bg-[var(--color-theme-gold)]/5 px-5 py-1.5 text-[0.6rem] font-bold tracking-[0.25em] text-[var(--color-theme-gold)] backdrop-blur-sm" data-astro-cid-dcfme3zy> <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" data-astro-cid-dcfme3zy></span>
PLATAFORMA DEPORTIVA
</span> <!-- Título --> <h1 class="animate-fade-in hero-title font-cinzel text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl" data-astro-cid-dcfme3zy>
CREA TU<br data-astro-cid-dcfme3zy> <span class="hero-gold-text" data-astro-cid-dcfme3zy>TORNEO</span> </h1> <!-- Descripción --> <p class="animate-fade-in mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base" style="animation-delay:.2s" data-astro-cid-dcfme3zy>
Organiza torneos de fútbol <strong class="font-bold text-white/90" data-astro-cid-dcfme3zy>presenciales</strong> y
<strong class="font-bold text-white/90" data-astro-cid-dcfme3zy>virtuales</strong>. Gestiona equipos, sigue 
        estadísticas en vivo y activa apuestas entre participantes.
</p> <!-- CTAs --> <div class="mt-10 flex flex-wrap justify-center gap-4" style="animation-delay:.4s" data-astro-cid-dcfme3zy> <a href="#crear" class="cta-primary" data-astro-cid-dcfme3zy>
CREAR TORNEO GRATIS
</a> <a href="#como-funciona" class="cta-ghost" data-astro-cid-dcfme3zy>
CÓMO FUNCIONA
</a> </div> <!-- Stats rápidas --> <div class="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4" style="animation-delay:.6s" data-astro-cid-dcfme3zy> ${[
    { num: "10+", label: "Modalidades" },
    { num: "500+", label: "Torneos creados" },
    { num: "12K+", label: "Jugadores" },
    { num: "98%", label: "Satisfacci\xF3n" }
  ].map((s) => renderTemplate`<div class="flex flex-col items-center gap-1" data-astro-cid-dcfme3zy> <span class="font-cinzel text-3xl font-black text-[var(--color-theme-gold)]" data-astro-cid-dcfme3zy>${s.num}</span> <span class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/35" data-astro-cid-dcfme3zy>${s.label}</span> </div>`)} </div> </div> <!-- Degradado inferior --> <div class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style="background:linear-gradient(to top,var(--color-theme-midnight),transparent)" data-astro-cid-dcfme3zy></div> </section>  <section id="crear" class="relative px-4 py-28 overflow-hidden" data-astro-cid-dcfme3zy> <div class="absolute inset-0 pointer-events-none" data-astro-cid-dcfme3zy> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px]" style="background:linear-gradient(to right,transparent,rgba(0,255,136,.3),transparent)" data-astro-cid-dcfme3zy></div> </div> <div class="mx-auto max-w-6xl" data-astro-cid-dcfme3zy> <!-- Cabecera sección --> <div class="mb-16 text-center" data-astro-cid-dcfme3zy> <div class="section-label" data-astro-cid-dcfme3zy>MODALIDADES</div> <h2 class="section-title" data-astro-cid-dcfme3zy>PRESENCIAL O VIRTUAL</h2> <p class="section-desc" data-astro-cid-dcfme3zy>
Elige el formato que mejor se adapte a tu liga. Ambas modalidades incluyen 
          estadísticas, apuestas y soporte completo.
</p> </div> <div class="grid gap-6 md:grid-cols-2" data-astro-cid-dcfme3zy> <!-- Card Presencial --> <div class="feature-card group" data-astro-cid-dcfme3zy> <div class="feature-card-glow" style="background:radial-gradient(ellipse at 30% 30%,rgba(0,255,136,.07),transparent 65%)" data-astro-cid-dcfme3zy></div> <!-- Esquinas HUD --> <span class="hud-corner hud-corner--tl" data-astro-cid-dcfme3zy></span> <span class="hud-corner hud-corner--tr" data-astro-cid-dcfme3zy></span> <span class="hud-corner hud-corner--bl" data-astro-cid-dcfme3zy></span> <span class="hud-corner hud-corner--br" data-astro-cid-dcfme3zy></span> <div class="relative z-10" data-astro-cid-dcfme3zy> <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/10 text-2xl" data-astro-cid-dcfme3zy>🏟️</div> <h3 class="mb-1 font-cinzel text-xl font-black uppercase tracking-wide text-white" data-astro-cid-dcfme3zy>Torneo Presencial</h3> <p class="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/70" data-astro-cid-dcfme3zy>Para ligas en cancha real</p> <ul class="space-y-3" data-astro-cid-dcfme3zy> ${["Gesti\xF3n de sedes y horarios", "\xC1rbitros y reglamento oficial", "Estad\xEDsticas en tiempo real", "Apuestas entre equipos presentes"].map((item) => renderTemplate`<li class="flex items-start gap-2.5 text-sm text-white/55" data-astro-cid-dcfme3zy> <span class="mt-0.5 shrink-0 text-[#00ff88]" data-astro-cid-dcfme3zy>✓</span> ${item} </li>`)} </ul> <div class="mt-8" data-astro-cid-dcfme3zy> <a href="#" class="cta-ghost-sm" style="border-color:rgba(0,255,136,.35);color:rgba(0,255,136,.85)" data-astro-cid-dcfme3zy>
Crear presencial →
</a> </div> </div> </div> <!-- Card Virtual --> <div class="feature-card group" data-astro-cid-dcfme3zy> <div class="feature-card-glow" style="background:radial-gradient(ellipse at 70% 30%,rgba(124,58,237,.07),transparent 65%)" data-astro-cid-dcfme3zy></div> <span class="hud-corner hud-corner--tl" data-astro-cid-dcfme3zy></span> <span class="hud-corner hud-corner--tr" data-astro-cid-dcfme3zy></span> <span class="hud-corner hud-corner--bl" data-astro-cid-dcfme3zy></span> <span class="hud-corner hud-corner--br" data-astro-cid-dcfme3zy></span> <div class="relative z-10" data-astro-cid-dcfme3zy> <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-2xl" data-astro-cid-dcfme3zy>🖥️</div> <h3 class="mb-1 font-cinzel text-xl font-black uppercase tracking-wide text-white" data-astro-cid-dcfme3zy>Torneo Virtual</h3> <p class="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-purple-400/70" data-astro-cid-dcfme3zy>Para consola y PC</p> <ul class="space-y-3" data-astro-cid-dcfme3zy> ${["Partidos online multiplataforma", "Salas privadas y p\xFAblicas", "Streaming y retransmisi\xF3n", "Sistema de fair play"].map((item) => renderTemplate`<li class="flex items-start gap-2.5 text-sm text-white/55" data-astro-cid-dcfme3zy> <span class="mt-0.5 shrink-0 text-purple-400" data-astro-cid-dcfme3zy>✓</span> ${item} </li>`)} </ul> <div class="mt-8" data-astro-cid-dcfme3zy> <a href="#" class="cta-ghost-sm" style="border-color:rgba(168,85,247,.35);color:rgba(168,85,247,.85)" data-astro-cid-dcfme3zy>
Crear virtual →
</a> </div> </div> </div> </div> </div> </section>  <section id="apuestas" class="relative px-4 py-28 overflow-hidden" data-astro-cid-dcfme3zy> <!-- Separador top --> <div class="absolute top-0 left-0 right-0 h-px" style="background:linear-gradient(to right,transparent,rgba(0,255,136,.2),transparent)" data-astro-cid-dcfme3zy></div> <!-- Glow fondo --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-dcfme3zy> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] blur-[100px] opacity-15" style="background:radial-gradient(ellipse,var(--color-theme-gold),transparent 70%)" data-astro-cid-dcfme3zy></div> </div> <div class="mx-auto max-w-6xl" data-astro-cid-dcfme3zy> <div class="mb-16 text-center" data-astro-cid-dcfme3zy> <div class="section-label" data-astro-cid-dcfme3zy>APUESTAS</div> <h2 class="section-title" data-astro-cid-dcfme3zy>APUESTA ENTRE EQUIPOS</h2> <p class="section-desc" data-astro-cid-dcfme3zy>
Activa el módulo de apuestas para que los equipos compitan también fuera de la cancha.
</p> </div> <div class="grid gap-5 sm:grid-cols-3" data-astro-cid-dcfme3zy> ${[
    { icon: "\u{1F4B0}", title: "Apuesta Directa", color: "#00ff88", desc: "Los equipos apuestan directamente entre s\xED. El ganador se lleva el pozo completo." },
    { icon: "\u{1F4CA}", title: "Cuotas en Vivo", color: "#fbbf24", desc: "Las cuotas se actualizan en tiempo real seg\xFAn el rendimiento de cada equipo." },
    { icon: "\u{1F3C6}", title: "Torneo Entero", color: "#a78bfa", desc: "Apuesta por el campe\xF3n desde el d\xEDa uno y acumula ganancias a lo largo del torneo." }
  ].map((card) => renderTemplate`<div class="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 text-center transition-all duration-300 hover:border-[var(--color-theme-gold)]/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(199,168,107,.08)] overflow-hidden" data-astro-cid-dcfme3zy> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"${addAttribute(`background:radial-gradient(ellipse at 50% 0%,${card.color}0a,transparent 65%)`, "style")} data-astro-cid-dcfme3zy></div> <div class="relative z-10" data-astro-cid-dcfme3zy> <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl"${addAttribute(`background:${card.color}12;border:1px solid ${card.color}30`, "style")} data-astro-cid-dcfme3zy> ${card.icon} </div> <h4 class="mb-2 font-cinzel text-sm font-black uppercase tracking-wider text-white" data-astro-cid-dcfme3zy>${card.title}</h4> <p class="text-[0.62rem] leading-relaxed text-white/40" data-astro-cid-dcfme3zy>${card.desc}</p> </div> </div>`)} </div> </div> </section>  <section class="relative px-4 py-28 overflow-hidden" data-astro-cid-dcfme3zy> <div class="absolute top-0 left-0 right-0 h-px" style="background:linear-gradient(to right,transparent,rgba(0,255,136,.2),transparent)" data-astro-cid-dcfme3zy></div> <div class="mx-auto max-w-6xl" data-astro-cid-dcfme3zy> <div class="mb-16 text-center" data-astro-cid-dcfme3zy> <div class="section-label" data-astro-cid-dcfme3zy>ESTADÍSTICAS</div> <h2 class="section-title" data-astro-cid-dcfme3zy>DATOS EN TIEMPO REAL</h2> <p class="section-desc" data-astro-cid-dcfme3zy>
Cada partido, cada jugador, cada torneo. Toda la información que necesitas en un solo lugar.
</p> </div> <div class="grid gap-6 md:grid-cols-3" data-astro-cid-dcfme3zy> ${[
    {
      icon: "\u26BD",
      iconBg: "rgba(0,255,136,.1)",
      iconBorder: "rgba(0,255,136,.2)",
      title: "Partidos",
      rows: [
        ["Posesi\xF3n", "64% - 36%"],
        ["Remates", "12 - 5"],
        ["Pases completados", "342 - 198"],
        ["Faltas", "8 - 14"],
        ["Tarjetas", "1 - 3"]
      ]
    },
    {
      icon: "\u{1F464}",
      iconBg: "rgba(251,191,36,.08)",
      iconBorder: "rgba(251,191,36,.2)",
      title: "Jugadores",
      rows: [
        ["Goles", "7"],
        ["Asistencias", "4"],
        ["Min. jugados", "540'"],
        ["Efectividad", "83%"],
        ["Valoraci\xF3n", "8.4"]
      ]
    },
    {
      icon: "\u{1F3C6}",
      iconBg: "rgba(168,85,247,.1)",
      iconBorder: "rgba(168,85,247,.2)",
      title: "Torneo",
      rows: [
        ["Equipos", "16"],
        ["Partidos", "48"],
        ["Goles totales", "142"],
        ["Media goles", "2.96"],
        ["Jornada", "6 / 14"]
      ]
    }
  ].map((card) => renderTemplate`<div class="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-300 hover:border-[var(--color-theme-gold)]/25 hover:-translate-y-1 overflow-hidden" data-astro-cid-dcfme3zy> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"${addAttribute(`background:radial-gradient(ellipse at 50% 0%,${card.iconBg},transparent 60%)`, "style")} data-astro-cid-dcfme3zy></div> <div class="relative z-10" data-astro-cid-dcfme3zy> <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-lg"${addAttribute(`background:${card.iconBg};border:1px solid ${card.iconBorder}`, "style")} data-astro-cid-dcfme3zy> ${card.icon} </div> <h3 class="mb-5 font-cinzel text-base font-black uppercase tracking-wider text-white" data-astro-cid-dcfme3zy>${card.title}</h3> <ul class="space-y-2.5" data-astro-cid-dcfme3zy> ${card.rows.map(([label, val]) => renderTemplate`<li class="flex justify-between items-center gap-2" data-astro-cid-dcfme3zy> <span class="text-[0.62rem] font-medium uppercase tracking-wide text-white/40" data-astro-cid-dcfme3zy>${label}</span> <span class="font-cinzel text-xs font-bold text-white/80" data-astro-cid-dcfme3zy>${val}</span> </li>`)} </ul> </div> </div>`)} </div> </div> </section>  <section id="como-funciona" class="relative px-4 py-28 overflow-hidden" data-astro-cid-dcfme3zy> <div class="absolute top-0 left-0 right-0 h-px" style="background:linear-gradient(to right,transparent,rgba(0,255,136,.2),transparent)" data-astro-cid-dcfme3zy></div> <div class="mx-auto max-w-5xl" data-astro-cid-dcfme3zy> <div class="mb-16 text-center" data-astro-cid-dcfme3zy> <div class="section-label" data-astro-cid-dcfme3zy>GUÍA</div> <h2 class="section-title" data-astro-cid-dcfme3zy>CÓMO FUNCIONA</h2> </div> <div class="relative grid gap-0 md:grid-cols-4" data-astro-cid-dcfme3zy> <!-- Línea conectora desktop --> <div class="absolute top-6 left-[12%] right-[12%] h-px hidden md:block" style="background:linear-gradient(to right,rgba(0,255,136,.15),rgba(199,168,107,.3),rgba(0,255,136,.15))" data-astro-cid-dcfme3zy></div> ${[
    { n: "1", title: "Reg\xEDstrate", desc: "Crea tu cuenta gratuita en menos de 2 minutos sin tarjeta." },
    { n: "2", title: "Crea Torneo", desc: "Elige modalidad, n\xFAmero de equipos y reglas del torneo." },
    { n: "3", title: "Invita Equipos", desc: "Comparte el c\xF3digo y los equipos se unen autom\xE1ticamente." },
    { n: "4", title: "A Jugar", desc: "Sigue estad\xEDsticas, apuestas y resultados en vivo." }
  ].map((step, i) => renderTemplate`<div class="relative flex flex-col items-center gap-4 p-6 text-center" data-astro-cid-dcfme3zy> <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-cinzel text-base font-black transition-all duration-300"${addAttribute(`background:color-mix(in srgb,var(--color-theme-gold) 12%,transparent);border:1px solid color-mix(in srgb,var(--color-theme-gold) 30%,transparent);color:var(--color-theme-gold)`, "style")} data-astro-cid-dcfme3zy> ${step.n} </div> <div data-astro-cid-dcfme3zy> <h4 class="mb-1.5 font-cinzel text-sm font-black uppercase tracking-wider text-white" data-astro-cid-dcfme3zy>${step.title}</h4> <p class="text-[0.6rem] leading-relaxed text-white/40" data-astro-cid-dcfme3zy>${step.desc}</p> </div> </div>`)} </div> </div> </section>  <section class="relative px-4 py-32 overflow-hidden" data-astro-cid-dcfme3zy> <div class="absolute top-0 left-0 right-0 h-px" style="background:linear-gradient(to right,transparent,rgba(0,255,136,.25),transparent)" data-astro-cid-dcfme3zy></div> <!-- Glow central --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-dcfme3zy> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[55%] blur-[90px] opacity-20" style="background:radial-gradient(ellipse,#00ff88,transparent 70%)" data-astro-cid-dcfme3zy></div> </div> <!-- Estrellas --> <div class="hero-stars absolute inset-0 pointer-events-none opacity-30" data-astro-cid-dcfme3zy></div> <div class="relative z-10 mx-auto max-w-3xl text-center" data-astro-cid-dcfme3zy> <div class="section-label mb-4" data-astro-cid-dcfme3zy>EMPIEZA HOY</div> <h2 class="font-cinzel text-3xl font-black uppercase leading-tight text-white md:text-6xl" data-astro-cid-dcfme3zy>
¿LISTO PARA CREAR<br data-astro-cid-dcfme3zy> <span class="hero-gold-text" data-astro-cid-dcfme3zy>TU TORNEO?</span> </h2> <p class="mx-auto mt-5 max-w-lg text-sm text-white/45" data-astro-cid-dcfme3zy>
Únete a la comunidad de organizadores y lleva tu liga al siguiente nivel.
</p> <div class="mt-10 flex flex-wrap justify-center gap-4" data-astro-cid-dcfme3zy> <a href="#" class="cta-primary" data-astro-cid-dcfme3zy>
CREAR TORNEO AHORA
</a> <a href="#" class="cta-ghost" data-astro-cid-dcfme3zy>
VER DEMO
</a> </div> <!-- Garantía --> <p class="mt-8 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/25" data-astro-cid-dcfme3zy>
✓ Gratis para empezar &nbsp;·&nbsp; ✓ Sin tarjeta de crédito &nbsp;·&nbsp; ✓ Cancela cuando quieras
</p> </div> </section> ` })} `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/torneos/index.astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/torneos/index.astro";
const $$url = "/torneos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

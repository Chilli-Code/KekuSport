import { a3 as createComponent, ab as maybeRenderHead, $ as addAttribute, ae as renderComponent, am as renderTemplate, a2 as createAstro, aj as renderScript, l as Fragment } from '../chunks/astro/server_C_1lLQnq.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DVjlXbPa.mjs';
import { T as TEAMS } from '../chunks/teams_C073Wyrp.mjs';
import { $ as $$FighterSelector } from '../chunks/FighterSelector_Cp9MzP-1.mjs';
/* empty css                                 */
import 'clsx';
import { c as createSvgComponent } from '../chunks/instagram_D-6-DkN7.mjs';
export { renderers } from '../renderers.mjs';

const $$TeamsHero = createComponent(($$result, $$props, $$slots) => {
  const firstRow = TEAMS.slice(0, 4);
  const leftRow = firstRow.slice(0, 2);
  const rightRow = firstRow.slice(2);
  const secondRow = TEAMS.slice(4);
  const allTeams = TEAMS;
  const teamLogo = "/images/Logo_Default.png";
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-screen w-full" data-astro-cid-suuyupxo> <div class="mask-fade-bottom absolute inset-0 w-full bg-[url('/images/fondo2.png')] bg-cover bg-center" data-astro-cid-suuyupxo></div> <div class="group/hero relative flex w-full flex-col items-center p-2 md:p-8 text-center" data-astro-cid-suuyupxo> <div id="landing"${addAttribute([
    "absolute top-0 flex w-full flex-col items-center py-16",
    "group-has-[a[data-fighter-card]:hover]/hero:hidden group-has-[a[data-fighter-card]:focus]/hero:hidden group-has-[a[data-fighter-card]:focus-visible]/hero:hidden"
  ], "class:list")} data-astro-cid-suuyupxo> <h3 class="text-theme-seashell animate-fade-in animate-delay-300 mt-4 leading-[100%] font-light" data-astro-cid-suuyupxo> <strong data-astro-cid-suuyupxo>TORNEO</strong> DE <br data-astro-cid-suuyupxo><strong data-astro-cid-suuyupxo>EQUIPOS</strong> </h3> <figure class="animate-fade-in relative mt-8" data-astro-cid-suuyupxo> <img class="relative z-20 h-auto w-64" src="/images/logobg.png" fetchpriority="high" alt="La Velada del Año V" decoding="async" data-astro-cid-suuyupxo> <div class="absolute top-0 z-0 size-64 bg-emerald-500/80 blur-2xl" data-astro-cid-suuyupxo></div> </figure> <div class="relative z-50" data-astro-cid-suuyupxo> <h3 class="text-theme-seashell animate-fade-in animate-delay-500 z-0 mt-4 leading-[100%] font-light" data-astro-cid-suuyupxo>
SELECCIONA<br data-astro-cid-suuyupxo>TU <br data-astro-cid-suuyupxo><strong data-astro-cid-suuyupxo>EQUIPO</strong> </h3> <div class="absolute -inset-2 -z-10 h-full w-full bg-pink-400/80 blur-2xl" data-astro-cid-suuyupxo></div> </div> </div> <!-- VERSIÓN DESKTOP --> <div class="relative hidden h-full w-full max-w-6xl flex-col items-center justify-end gap-4 p-8 md:flex" data-astro-cid-suuyupxo> <div class="flex w-full flex-wrap justify-between px-4" data-astro-cid-suuyupxo> <div class="flex flex-wrap justify-start gap-4" data-astro-cid-suuyupxo> ${leftRow.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "cardLink": `/jugadores/${id}`, "cardImage": teamLogo, "bigImageSrc": teamLogo, "boxerCardClass": "animate-fade-in-right animate-delay-500", "hideHoverName": true, "data-astro-cid-suuyupxo": true })}`)} </div> <div class="flex flex-wrap justify-end gap-4" data-astro-cid-suuyupxo> ${rightRow.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "cardLink": `/jugadores/${id}`, "cardImage": teamLogo, "bigImageSrc": teamLogo, "boxerCardClass": "animate-fade-in-left animate-delay-500", "hideHoverName": true, "data-astro-cid-suuyupxo": true })}`)} </div> </div> <div class="flex flex-wrap justify-between gap-4" data-astro-cid-suuyupxo> ${secondRow.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "cardLink": `/jugadores/${id}`, "cardImage": teamLogo, "bigImageSrc": teamLogo, "boxerCardClass": "animate-fade-in-up animate-delay-700", "hideHoverName": true, "data-astro-cid-suuyupxo": true })}`)} </div> </div> <!-- VERSIÓN MOBILE --> <div class="relative flex h-full w-full flex-col items-center justify-end gap-4 p-4 md:hidden" data-astro-cid-suuyupxo> <div class="w-full overflow-x-auto overflow-y-visible pb-2" data-astro-cid-suuyupxo> <div class="flex min-w-max items-center justify-start gap-4 px-2" data-astro-cid-suuyupxo> ${allTeams.map(({ id, name }) => renderTemplate`${renderComponent($$result, "FighterSelector", $$FighterSelector, { "id": id, "name": name, "cardLink": `/jugadores/${id}`, "cardImage": teamLogo, "bigImageSrc": teamLogo, "boxerCardClass": "flex-shrink-0", "hideHoverName": true, "data-astro-cid-suuyupxo": true })}`)} </div> </div> <div class="mt-0.5 flex items-center justify-center gap-2" data-astro-cid-suuyupxo> <svg class="h-3 w-3 text-theme-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-suuyupxo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-suuyupxo></path> </svg> <span class="text-[0.5rem] uppercase tracking-wider text-theme-gold/50" data-astro-cid-suuyupxo>Desliza</span> <svg class="h-3 w-3 text-theme-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-suuyupxo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-suuyupxo></path> </svg> </div> </div> </div> </section> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/TeamsHero.astro", void 0);

const $$Astro$1 = createAstro("https://la-velada-clone.vercel.app/");
const $$StandingsTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StandingsTable;
  const {
    title = "TABLA DE POSICIONES",
    showQualificationHighlight = true,
    qualificationPositions = [1, 2, 3, 4]
  } = Astro2.props;
  const simulatedStandings = [
    {
      position: 1,
      team: {
        id: "alex",
        name: "\xC1lex",
        manager: "Alejandro Garc\xEDa",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 8,
      draws: 1,
      losses: 1,
      goalsFor: 24,
      goalsAgainst: 8,
      goalDifference: 16,
      points: 25,
      form: ["W", "W", "W", "D", "W"]
    },
    {
      position: 2,
      team: {
        id: "sofia",
        name: "Sof\xEDa",
        manager: "Sof\xEDa Ram\xEDrez",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 7,
      draws: 2,
      losses: 1,
      goalsFor: 19,
      goalsAgainst: 9,
      goalDifference: 10,
      points: 23,
      form: ["W", "D", "W", "W", "L"]
    },
    {
      position: 3,
      team: {
        id: "maria",
        name: "Mar\xEDa",
        manager: "Mar\xEDa F. Torres",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 6,
      draws: 1,
      losses: 3,
      goalsFor: 16,
      goalsAgainst: 11,
      goalDifference: 5,
      points: 19,
      form: ["L", "W", "W", "D", "W"]
    },
    {
      position: 4,
      team: {
        id: "ana",
        name: "Ana",
        manager: "Ana Bel\xE9n Castro",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 5,
      draws: 2,
      losses: 3,
      goalsFor: 14,
      goalsAgainst: 12,
      goalDifference: 2,
      points: 17,
      form: ["W", "D", "L", "W", "D"]
    },
    {
      position: 5,
      team: {
        id: "javier",
        name: "Javier",
        manager: "Javier Ruiz",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 4,
      draws: 1,
      losses: 5,
      goalsFor: 12,
      goalsAgainst: 15,
      goalDifference: -3,
      points: 13,
      form: ["L", "W", "L", "L", "W"]
    },
    {
      position: 6,
      team: {
        id: "laura",
        name: "Laura",
        manager: "Laura Mart\xEDnez",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 3,
      draws: 2,
      losses: 5,
      goalsFor: 10,
      goalsAgainst: 14,
      goalDifference: -4,
      points: 11,
      form: ["L", "D", "L", "W", "L"]
    },
    {
      position: 7,
      team: {
        id: "carlos",
        name: "Carlos",
        manager: "Carlos S\xE1nchez",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 2,
      draws: 2,
      losses: 6,
      goalsFor: 8,
      goalsAgainst: 18,
      goalDifference: -10,
      points: 8,
      form: ["L", "L", "D", "L", "W"]
    },
    {
      position: 8,
      team: {
        id: "pablo",
        name: "Pablo",
        manager: "Pablo Mart\xEDn",
        logo: "/images/Logo_Default.png"
      },
      played: 10,
      wins: 1,
      draws: 1,
      losses: 8,
      goalsFor: 6,
      goalsAgainst: 22,
      goalDifference: -16,
      points: 4,
      form: ["L", "L", "L", "L", "D"]
    }
  ];
  const standingsData = Astro2.props.standings && Astro2.props.standings.length > 0 ? Astro2.props.standings : simulatedStandings;
  const sortedStandings = [...standingsData].sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    return b.goalDifference - a.goalDifference;
  });
  const getFormColor = (result) => {
    switch (result) {
      case "W":
        return "bg-emerald-500/80 text-white";
      case "D":
        return "bg-amber-500/80 text-white";
      case "L":
        return "bg-purple-600/80 text-white";
    }
  };
  const getFormIcon = (result) => {
    switch (result) {
      case "W":
        return "\u2713";
      case "D":
        return "=";
      case "L":
        return "\u2717";
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="standings-container pt-10 w-full max-w-6xl mx-auto animate-fade-in-up" data-astro-cid-7hholuii>  <div class="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" data-astro-cid-7hholuii>  <div class="flex items-center gap-3 order-1 sm:order-1" data-astro-cid-7hholuii> <span class="size-1.5 rotate-45 bg-theme-gold/70" data-astro-cid-7hholuii></span> <h2 class="font-cinzel text-xl text-center sm:text-left font-black uppercase tracking-[0.2em] text-theme-gold/90 sm:text-2xl" data-astro-cid-7hholuii> ${title} </h2>  <span class="hidden sm:inline-block h-px w-12 bg-linear-to-r from-theme-gold/45 to-transparent" data-astro-cid-7hholuii></span> </div>  <div class="flex items-center gap-2 order-2 sm:order-2" data-astro-cid-7hholuii> <span class="text-[0.55rem] font-bold uppercase tracking-wider text-theme-cream/50" data-astro-cid-7hholuii>FORMA:</span> <div class="flex gap-1" data-astro-cid-7hholuii> <span class="rounded bg-emerald-500/80 px-1.5 py-0.5 text-[10px] font-bold text-white" data-astro-cid-7hholuii>✓</span> <span class="rounded bg-amber-500/80 px-1.5 py-0.5 text-[10px] font-bold text-white" data-astro-cid-7hholuii>=</span> <span class="rounded bg-purple-600/80 px-1.5 py-0.5 text-[10px] font-bold text-white" data-astro-cid-7hholuii>✗</span> </div> </div>  <div class="w-full flex sm:hidden order-3" data-astro-cid-7hholuii> <span class="h-px w-full bg-linear-to-r from-theme-gold/45 via-theme-gold/20 to-transparent" data-astro-cid-7hholuii></span> </div> </div>  <div class="mx-4 lg:mx-0 overflow-x-auto rounded-xl bg-theme-midnight/60 backdrop-blur-sm border border-theme-gold/20" data-astro-cid-7hholuii> <div class="min-w-[768px]" data-astro-cid-7hholuii>  <div class="grid grid-cols-12 gap-2 border-b border-theme-gold/20 bg-theme-midnight/80 px-4 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-theme-gold/70 sm:text-xs" data-astro-cid-7hholuii> <div class="col-span-1 text-center" data-astro-cid-7hholuii>#</div> <div class="col-span-4 sm:col-span-3" data-astro-cid-7hholuii>EQUIPO</div> <div class="col-span-1 text-center" data-astro-cid-7hholuii>PJ</div> <div class="col-span-1 text-center" data-astro-cid-7hholuii>G</div> <div class="col-span-1 text-center" data-astro-cid-7hholuii>E</div> <div class="col-span-1 text-center" data-astro-cid-7hholuii>P</div> <div class="col-span-2 hidden text-center sm:block" data-astro-cid-7hholuii>GF/GC</div> <div class="col-span-2 hidden text-center sm:block" data-astro-cid-7hholuii>DG</div> <div class="col-span-2 text-center sm:col-span-1" data-astro-cid-7hholuii>PTS</div> <div class="col-span-2 hidden text-center sm:col-span-2 sm:block" data-astro-cid-7hholuii>FORMA</div> </div>  ${sortedStandings.map((team) => {
    const isQualified = showQualificationHighlight && qualificationPositions.includes(team.position);
    return renderTemplate`<div${addAttribute(`
              group grid grid-cols-12 gap-2 border-b border-theme-gold/10 px-4 py-2 transition-all duration-300
              ${isQualified ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-theme-gold/5"}
            `, "class")} data-astro-cid-7hholuii>  <div${addAttribute(`
              col-span-1 flex items-center justify-center font-cinzel text-sm font-black
              ${team.position <= 3 ? "text-theme-gold" : "text-theme-cream/60"}
            `, "class")} data-astro-cid-7hholuii> ${team.position} </div>  <div class="col-span-4 sm:col-span-3 flex items-center gap-2" data-astro-cid-7hholuii>  ${team.team.logo && renderTemplate`<a${addAttribute(`/jugador/${team.team.id}`, "href")} class="flex-shrink-0 transition-transform duration-300 hover:scale-110" data-astro-cid-7hholuii> <img${addAttribute(team.team.logo, "src")}${addAttribute(team.team.name, "alt")} class="h-10 w-10 rounded-full object-cover border border-theme-gold/30 bg-theme-midnight/80" loading="lazy" data-astro-cid-7hholuii> </a>`}  <div class="flex flex-col" data-astro-cid-7hholuii> <a${addAttribute(`/jugador/${team.team.id}`, "href")} class="font-cinzel text-xs font-bold uppercase tracking-wide text-theme-cream hover:text-theme-gold transition-colors duration-300" data-astro-cid-7hholuii> ${team.team.name} </a> ${team.team.manager && renderTemplate`<span class="text-[0.5rem] uppercase tracking-wider text-theme-cream/40" data-astro-cid-7hholuii> ${team.team.manager} </span>`} </div> </div>  <div class="col-span-1 flex items-center justify-center font-mono text-sm font-bold text-theme-cream/80" data-astro-cid-7hholuii> ${team.played} </div>  <div class="col-span-1 flex items-center justify-center font-mono text-sm font-bold text-emerald-400" data-astro-cid-7hholuii> ${team.wins} </div>  <div class="col-span-1 flex items-center justify-center font-mono text-sm font-bold text-amber-400" data-astro-cid-7hholuii> ${team.draws} </div>  <div class="col-span-1 flex items-center justify-center font-mono text-sm font-bold text-purple-400" data-astro-cid-7hholuii> ${team.losses} </div>  <div class="col-span-2 hidden items-center justify-center font-mono text-xs text-theme-cream/70 sm:flex" data-astro-cid-7hholuii> ${team.goalsFor} : ${team.goalsAgainst} </div>  <div${addAttribute(`
              col-span-2 hidden items-center justify-center font-mono text-sm font-bold sm:flex
              ${team.goalDifference > 0 ? "text-emerald-400" : team.goalDifference < 0 ? "text-purple-400" : "text-theme-cream/60"}
            `, "class")} data-astro-cid-7hholuii> ${team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference} </div>  <div class="col-span-2 flex items-center justify-center sm:col-span-1" data-astro-cid-7hholuii> <span class="rounded-full bg-theme-gold/15 px-3 py-1 font-cinzel text-sm font-black text-theme-gold" data-astro-cid-7hholuii> ${team.points} </span> </div>  <div class="col-span-2 hidden items-center justify-center gap-1 sm:flex" data-astro-cid-7hholuii> ${team.form?.map((result, i) => renderTemplate`<div${addAttribute(i, "key")}${addAttribute(`
                    flex h-5 w-5 items-center justify-center rounded text-[9px] font-bold transition-all
                    ${getFormColor(result)}
                  `, "class")}${addAttribute(result === "W" ? "Victoria" : result === "D" ? "Empate" : "Derrota", "title")} data-astro-cid-7hholuii> ${getFormIcon(result)} </div>`)} </div> </div>`;
  })} </div> </div>  <div class="mt-4 flex flex-wrap justify-between gap-2 text-[0.55rem] uppercase tracking-wider text-theme-cream/40 mx-4 lg:mx-0" data-astro-cid-7hholuii> <div class="flex flex-wrap items-center gap-x-4 gap-y-1" data-astro-cid-7hholuii> <span data-astro-cid-7hholuii>PJ: Partidos Jugados</span> <span data-astro-cid-7hholuii>G: Victorias</span> <span data-astro-cid-7hholuii>E: Empates</span> <span data-astro-cid-7hholuii>P: Derrotas</span> </div> <div class="flex items-center gap-2" data-astro-cid-7hholuii> <span class="inline-block h-2 w-2 rounded-full bg-emerald-500/80" data-astro-cid-7hholuii></span> <span data-astro-cid-7hholuii>Clasificación</span> </div> </div> </div> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/StandingsTable.astro", void 0);

const $$Astro = createAstro("https://la-velada-clone.vercel.app/");
const $$TournamentBracket = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TournamentBracket;
  const {
    title = "PLAYOFF",
    subtitle = "COPA CHONTADURO",
    finalDate = "30 DE MAYO",
    finalLocation = "BUDAPEST",
    groupA = [
      { id: "alex", name: "\xC1lex", logo: "/images/Logo_Default.png", points: 9 },
      { id: "maria", name: "Mar\xEDa", logo: "/images/Logo_Default.png", points: 6 },
      { id: "javier", name: "Javier", logo: "/images/Logo_Default.png", points: 3 },
      { id: "sergio", name: "Sergio", logo: "/images/Logo_Default.png", points: 0 }
    ],
    groupB = [
      { id: "sofia", name: "Sof\xEDa", logo: "/images/Logo_Default.png", points: 9 },
      { id: "ana", name: "Ana", logo: "/images/Logo_Default.png", points: 6 },
      { id: "carlos", name: "Carlos", logo: "/images/Logo_Default.png", points: 3 },
      { id: "david", name: "David", logo: "/images/Logo_Default.png", points: 0 }
    ],
    groupC = [
      { id: "laura", name: "Laura", logo: "/images/Logo_Default.png", points: 9 },
      { id: "elena", name: "Elena", logo: "/images/Logo_Default.png", points: 6 },
      { id: "miguel", name: "Miguel", logo: "/images/Logo_Default.png", points: 3 },
      { id: "valeria", name: "Valeria", logo: "/images/Logo_Default.png", points: 0 }
    ],
    groupD = [
      { id: "pablo", name: "Pablo", logo: "/images/Logo_Default.png", points: 9 },
      { id: "claudia", name: "Claudia", logo: "/images/Logo_Default.png", points: 6 },
      { id: "ana", name: "Ana", logo: "/images/Logo_Default.png", points: 3 },
      { id: "laura", name: "Laura", logo: "/images/Logo_Default.png", points: 0 }
    ],
    leftQuarterFinals = [
      { id: "lqf1", team1: { id: "alex", name: "\xC1lex", points: 9 }, team2: { id: "ana", name: "Ana", points: 6 }, score1: 3, score2: 1, winner: "team1" },
      { id: "lqf2", team1: { id: "sofia", name: "Sof\xEDa", points: 9 }, team2: { id: "maria", name: "Mar\xEDa", points: 6 }, score1: 3, score2: 1, winner: "team1" }
    ],
    rightQuarterFinals = [
      { id: "rqf1", team1: { id: "laura", name: "Laura", points: 9 }, team2: { id: "claudia", name: "Claudia", points: 6 }, score1: 2, score2: 0, winner: "team1" },
      { id: "rqf2", team1: { id: "pablo", name: "Pablo", points: 9 }, team2: { id: "elena", name: "Elena", points: 6 }, score1: 2, score2: 0, winner: "team1" }
    ],
    leftSemiFinal = {
      id: "lsf",
      team1: { id: "alex", name: "\xC1lex", points: 9 },
      team2: { id: "sofia", name: "Sof\xEDa", points: 9 },
      score1: 2,
      score2: 1,
      winner: "team1"
    },
    rightSemiFinal = {
      id: "rsf",
      team1: { id: "laura", name: "Laura", points: 9 },
      team2: { id: "pablo", name: "Pablo", points: 9 },
      score1: 3,
      score2: 2,
      winner: "team1"
    },
    finalMatch = {
      id: "final",
      team1: { id: "alex", name: "\xC1lex", points: 9 },
      team2: { id: "laura", name: "Laura", points: 9 },
      score1: 4,
      score2: 2,
      winner: "team1"
    }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full px-4 py-10 tb-fade-in" data-astro-cid-dgsfh55f> <!-- ── HEADER ── --> <div class="text-center mb-10" data-astro-cid-dgsfh55f> <div class="flex justify-center gap-1.5 mb-2" data-astro-cid-dgsfh55f> <span class="tb-diamond" data-astro-cid-dgsfh55f></span> <span class="tb-diamond" data-astro-cid-dgsfh55f></span> <span class="tb-diamond" data-astro-cid-dgsfh55f></span> </div> <h2 class="tb-title" data-astro-cid-dgsfh55f>${title}</h2> <p class="tb-subtitle" data-astro-cid-dgsfh55f>${subtitle}</p> </div> <!-- ── BRACKET SCROLL ── --> <div class="w-full overflow-x-auto 2xl:flex 2xl:justify-center pb-2 [-webkit-overflow-scrolling:touch]" data-astro-cid-dgsfh55f> <div class="flex items-center w-max px-4" data-astro-cid-dgsfh55f> <!-- ══════════════ GRUPOS IZQ (A + B) ══════════════ --> <div class="flex flex-col gap-3 flex-shrink-0 self-center" style="width:190px" data-astro-cid-dgsfh55f> <div class="flex flex-col gap-1.5" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Grupo A</span> <div class="tb-group-card" data-astro-cid-dgsfh55f> ${groupA.map((t, i) => renderTemplate`<a${addAttribute(`/jugador/${t.id}`, "href")} class="tb-group-row group" data-astro-cid-dgsfh55f> <span${addAttribute(`tb-pos ${i === 0 ? "tb-pos--gold" : ""}`, "class")} data-astro-cid-dgsfh55f>${i + 1}</span> ${t.logo && renderTemplate`<div class="tb-avatar" data-astro-cid-dgsfh55f><img${addAttribute(t.logo, "src")}${addAttribute(t.name, "alt")} loading="lazy" data-astro-cid-dgsfh55f></div>`} <span class="tb-team-name" data-astro-cid-dgsfh55f>${t.name}</span> <span class="tb-pts" data-astro-cid-dgsfh55f>${t.points}</span> </a>`)} </div> </div> <div class="flex flex-col gap-1.5" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Grupo B</span> <div class="tb-group-card" data-astro-cid-dgsfh55f> ${groupB.map((t, i) => renderTemplate`<a${addAttribute(`/jugador/${t.id}`, "href")} class="tb-group-row group" data-astro-cid-dgsfh55f> <span${addAttribute(`tb-pos ${i === 0 ? "tb-pos--gold" : ""}`, "class")} data-astro-cid-dgsfh55f>${i + 1}</span> ${t.logo && renderTemplate`<div class="tb-avatar" data-astro-cid-dgsfh55f><img${addAttribute(t.logo, "src")}${addAttribute(t.name, "alt")} loading="lazy" data-astro-cid-dgsfh55f></div>`} <span class="tb-team-name" data-astro-cid-dgsfh55f>${t.name}</span> <span class="tb-pts" data-astro-cid-dgsfh55f>${t.points}</span> </a>`)} </div> </div> </div> <!-- ══ CONECTOR grupos izq → cuartos izq ══ --> <div class="flex-shrink-0 self-stretch flex items-center" style="width:36px" data-astro-cid-dgsfh55f> <svg class="w-full overflow-visible" style="height:260px" viewBox="0 0 36 200" preserveAspectRatio="none" data-astro-cid-dgsfh55f> <line x1="0" y1="38" x2="18" y2="38" data-astro-cid-dgsfh55f></line> <line x1="18" y1="38" x2="18" y2="82" data-astro-cid-dgsfh55f></line> <line x1="18" y1="82" x2="36" y2="82" data-astro-cid-dgsfh55f></line> <line x1="0" y1="155" x2="18" y2="155" data-astro-cid-dgsfh55f></line> <line x1="18" y1="155" x2="18" y2="118" data-astro-cid-dgsfh55f></line> <line x1="18" y1="118" x2="36" y2="118" data-astro-cid-dgsfh55f></line> </svg> </div> <!-- ══════════════ CUARTOS IZQ ══════════════ --> <div class="flex flex-col gap-3 flex-shrink-0 self-center" style="width:158px" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Cuartos de Final</span> ${leftQuarterFinals.map((m) => renderTemplate`<a${addAttribute(`/jugador/${m.winner === "team1" ? m.team1.id : m.team2.id}`, "href")} class="tb-match" data-astro-cid-dgsfh55f> <div${addAttribute(`tb-match-row ${m.winner === "team1" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${m.team1.name}</span> <span${addAttribute(`tb-score ${m.winner === "team1" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${m.score1}</span> </div> <div${addAttribute(`tb-match-row ${m.winner === "team2" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${m.team2.name}</span> <span${addAttribute(`tb-score ${m.winner === "team2" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${m.score2}</span> </div> </a>`)} </div> <!-- ══ CONECTOR cuartos izq → semi izq ══ --> <div class="flex-shrink-0 self-stretch flex items-center" style="width:36px" data-astro-cid-dgsfh55f> <svg class="w-full overflow-visible" style="height:260px" viewBox="0 0 36 200" preserveAspectRatio="none" data-astro-cid-dgsfh55f> <line x1="0" y1="74" x2="18" y2="74" data-astro-cid-dgsfh55f></line> <line x1="18" y1="74" x2="18" y2="100" data-astro-cid-dgsfh55f></line> <line x1="0" y1="126" x2="18" y2="126" data-astro-cid-dgsfh55f></line> <line x1="18" y1="126" x2="18" y2="100" data-astro-cid-dgsfh55f></line> <line x1="18" y1="100" x2="36" y2="100" data-astro-cid-dgsfh55f></line> </svg> </div> <!-- ══════════════ SEMI IZQ ══════════════ --> <div class="flex flex-col gap-1.5 flex-shrink-0 self-center" style="width:162px" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Semifinal</span> <a${addAttribute(`/jugador/${leftSemiFinal.winner === "team1" ? leftSemiFinal.team1.id : leftSemiFinal.team2.id}`, "href")} class="tb-sf" data-astro-cid-dgsfh55f> <div${addAttribute(`tb-sf-row ${leftSemiFinal.winner === "team1" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${leftSemiFinal.team1.name}</span> <span${addAttribute(`tb-score ${leftSemiFinal.winner === "team1" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${leftSemiFinal.score1}</span> </div> <div${addAttribute(`tb-sf-row ${leftSemiFinal.winner === "team2" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${leftSemiFinal.team2.name}</span> <span${addAttribute(`tb-score ${leftSemiFinal.winner === "team2" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${leftSemiFinal.score2}</span> </div> </a> </div> <!-- ══ CONECTOR semi izq → final ══ --> <div class="flex-shrink-0 self-center" style="width:42px" data-astro-cid-dgsfh55f> <svg class="w-full" height="2" viewBox="0 0 42 2" data-astro-cid-dgsfh55f> <line x1="0" y1="1" x2="42" y2="1" data-astro-cid-dgsfh55f></line> </svg> </div> <!-- ══════════════ FINAL ══════════════ --> <div class="flex flex-col gap-1.5 flex-shrink-0 self-center" style="width:182px" data-astro-cid-dgsfh55f> <span class="tb-round-label tb-round-label--final" data-astro-cid-dgsfh55f>★ Final ★</span> <a${addAttribute(`/jugador/${finalMatch.winner === "team1" ? finalMatch.team1.id : finalMatch.team2.id}`, "href")} class="tb-final" data-astro-cid-dgsfh55f> <div class="tb-final-header" data-astro-cid-dgsfh55f>CAMPEÓN</div> <div${addAttribute(`tb-final-row ${finalMatch.winner === "team1" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> ${finalMatch.team1.logo && renderTemplate`<div class="tb-avatar tb-avatar--lg" data-astro-cid-dgsfh55f> <img${addAttribute(finalMatch.team1.logo, "src")}${addAttribute(finalMatch.team1.name, "alt")} loading="lazy" data-astro-cid-dgsfh55f> </div>`} <span class="tb-team-name" data-astro-cid-dgsfh55f>${finalMatch.team1.name}</span> <span${addAttribute(`tb-score tb-score--xl ${finalMatch.winner === "team1" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${finalMatch.score1}</span> </div> <div class="tb-final-vs" data-astro-cid-dgsfh55f>VS</div> <div${addAttribute(`tb-final-row ${finalMatch.winner === "team2" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> ${finalMatch.team2.logo && renderTemplate`<div class="tb-avatar tb-avatar--lg" data-astro-cid-dgsfh55f> <img${addAttribute(finalMatch.team2.logo, "src")}${addAttribute(finalMatch.team2.name, "alt")} loading="lazy" data-astro-cid-dgsfh55f> </div>`} <span class="tb-team-name" data-astro-cid-dgsfh55f>${finalMatch.team2.name}</span> <span${addAttribute(`tb-score tb-score--xl ${finalMatch.winner === "team2" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${finalMatch.score2}</span> </div> </a> <p class="tb-final-info" data-astro-cid-dgsfh55f>📍 ${finalLocation} · ${finalDate}</p> </div> <!-- ══ CONECTOR final → semi der ══ --> <div class="flex-shrink-0 self-center" style="width:42px" data-astro-cid-dgsfh55f> <svg class="w-full" height="2" viewBox="0 0 42 2" data-astro-cid-dgsfh55f> <line x1="0" y1="1" x2="42" y2="1" data-astro-cid-dgsfh55f></line> </svg> </div> <!-- ══════════════ SEMI DER ══════════════ --> <div class="flex flex-col gap-1.5 flex-shrink-0 self-center" style="width:162px" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Semifinal</span> <a${addAttribute(`/jugador/${rightSemiFinal.winner === "team1" ? rightSemiFinal.team1.id : rightSemiFinal.team2.id}`, "href")} class="tb-sf" data-astro-cid-dgsfh55f> <div${addAttribute(`tb-sf-row ${rightSemiFinal.winner === "team1" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${rightSemiFinal.team1.name}</span> <span${addAttribute(`tb-score ${rightSemiFinal.winner === "team1" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${rightSemiFinal.score1}</span> </div> <div${addAttribute(`tb-sf-row ${rightSemiFinal.winner === "team2" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${rightSemiFinal.team2.name}</span> <span${addAttribute(`tb-score ${rightSemiFinal.winner === "team2" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${rightSemiFinal.score2}</span> </div> </a> </div> <!-- ══ CONECTOR semi der ← cuartos der ══ --> <div class="flex-shrink-0 self-stretch flex items-center" style="width:36px" data-astro-cid-dgsfh55f> <svg class="w-full overflow-visible" style="height:260px" viewBox="0 0 36 200" preserveAspectRatio="none" data-astro-cid-dgsfh55f> <line x1="36" y1="74" x2="18" y2="74" data-astro-cid-dgsfh55f></line> <line x1="18" y1="74" x2="18" y2="100" data-astro-cid-dgsfh55f></line> <line x1="36" y1="126" x2="18" y2="126" data-astro-cid-dgsfh55f></line> <line x1="18" y1="126" x2="18" y2="100" data-astro-cid-dgsfh55f></line> <line x1="18" y1="100" x2="0" y2="100" data-astro-cid-dgsfh55f></line> </svg> </div> <!-- ══════════════ CUARTOS DER ══════════════ --> <div class="flex flex-col gap-3 flex-shrink-0 self-center" style="width:158px" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Cuartos de Final</span> ${rightQuarterFinals.map((m) => renderTemplate`<a${addAttribute(`/jugador/${m.winner === "team1" ? m.team1.id : m.team2.id}`, "href")} class="tb-match" data-astro-cid-dgsfh55f> <div${addAttribute(`tb-match-row ${m.winner === "team1" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${m.team1.name}</span> <span${addAttribute(`tb-score ${m.winner === "team1" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${m.score1}</span> </div> <div${addAttribute(`tb-match-row ${m.winner === "team2" ? "tb-match-row--win" : ""}`, "class")} data-astro-cid-dgsfh55f> <span class="tb-team-name" data-astro-cid-dgsfh55f>${m.team2.name}</span> <span${addAttribute(`tb-score ${m.winner === "team2" ? "tb-score--win" : "tb-score--loss"}`, "class")} data-astro-cid-dgsfh55f>${m.score2}</span> </div> </a>`)} </div> <!-- ══ CONECTOR cuartos der ← grupos der ══ --> <div class="flex-shrink-0 self-stretch flex items-center" style="width:36px" data-astro-cid-dgsfh55f> <svg class="w-full overflow-visible" style="height:260px" viewBox="0 0 36 200" preserveAspectRatio="none" data-astro-cid-dgsfh55f> <line x1="36" y1="38" x2="18" y2="38" data-astro-cid-dgsfh55f></line> <line x1="18" y1="38" x2="18" y2="82" data-astro-cid-dgsfh55f></line> <line x1="18" y1="82" x2="0" y2="82" data-astro-cid-dgsfh55f></line> <line x1="36" y1="155" x2="18" y2="155" data-astro-cid-dgsfh55f></line> <line x1="18" y1="155" x2="18" y2="118" data-astro-cid-dgsfh55f></line> <line x1="18" y1="118" x2="0" y2="118" data-astro-cid-dgsfh55f></line> </svg> </div> <!-- ══════════════ GRUPOS DER (C + D) ══════════════ --> <div class="flex flex-col gap-3 flex-shrink-0 self-center" style="width:190px" data-astro-cid-dgsfh55f> <div class="flex flex-col gap-1.5" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Grupo C</span> <div class="tb-group-card" data-astro-cid-dgsfh55f> ${groupC.map((t, i) => renderTemplate`<a${addAttribute(`/jugador/${t.id}`, "href")} class="tb-group-row group" data-astro-cid-dgsfh55f> <span${addAttribute(`tb-pos ${i === 0 ? "tb-pos--gold" : ""}`, "class")} data-astro-cid-dgsfh55f>${i + 1}</span> ${t.logo && renderTemplate`<div class="tb-avatar" data-astro-cid-dgsfh55f><img${addAttribute(t.logo, "src")}${addAttribute(t.name, "alt")} loading="lazy" data-astro-cid-dgsfh55f></div>`} <span class="tb-team-name" data-astro-cid-dgsfh55f>${t.name}</span> <span class="tb-pts" data-astro-cid-dgsfh55f>${t.points}</span> </a>`)} </div> </div> <div class="flex flex-col gap-1.5" data-astro-cid-dgsfh55f> <span class="tb-round-label" data-astro-cid-dgsfh55f>Grupo D</span> <div class="tb-group-card" data-astro-cid-dgsfh55f> ${groupD.map((t, i) => renderTemplate`<a${addAttribute(`/jugador/${t.id}`, "href")} class="tb-group-row group" data-astro-cid-dgsfh55f> <span${addAttribute(`tb-pos ${i === 0 ? "tb-pos--gold" : ""}`, "class")} data-astro-cid-dgsfh55f>${i + 1}</span> ${t.logo && renderTemplate`<div class="tb-avatar" data-astro-cid-dgsfh55f><img${addAttribute(t.logo, "src")}${addAttribute(t.name, "alt")} loading="lazy" data-astro-cid-dgsfh55f></div>`} <span class="tb-team-name" data-astro-cid-dgsfh55f>${t.name}</span> <span class="tb-pts" data-astro-cid-dgsfh55f>${t.points}</span> </a>`)} </div> </div> </div> </div> </div> </section> `;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/TournamentBracket.astro", void 0);

const ArrowRightIcon = createSvgComponent({"meta":{"src":"/_astro/arrow-right.K40vdRPV.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\r\n  <path d=\"M5 12h14\" />\r\n  <path d=\"m12 5 7 7-7 7\" />\r\n"});

const CloseIcon = createSvgComponent({"meta":{"src":"/_astro/close.oYIFyTq1.svg","width":14,"height":14,"format":"svg"},"attributes":{"fill":"none","aria-hidden":"true","viewBox":"0 0 14 14"},"children":"<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6\" />"});

const PlayIcon = createSvgComponent({"meta":{"src":"/_astro/play.BFGPui3y.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24","fill":"currentColor"},"children":"\r\n  <path d=\"M8 5v14l11-7z\" />\r\n"});

const $$Videos = createComponent(($$result, $$props, $$slots) => {
  const VIDEOS = [
    {
      id: "presentacion",
      title: "La Presentaci\xF3n",
      videoSrc: "/videos/presentacion.mp4",
      poster: "/videos/thumbnails/presentacion.webp",
      active: true,
      span: "big"
    },
    {
      id: "pesaje",
      title: "El Pesaje",
      videoSrc: null,
      poster: null,
      active: false,
      span: "small"
    },
    {
      id: "cara-a-cara",
      title: "Cara a Cara",
      videoSrc: null,
      poster: null,
      active: false,
      span: "small"
    }
  ];
  const SPAN_CLASSES = {
    big: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    small: "lg:col-span-1 lg:row-span-1"
  };
  return renderTemplate`${maybeRenderHead()}<section id="videos" class="relative w-full px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="videos-title"> <div class="mx-auto flex max-w-7xl flex-col items-center">  <div class="mb-8 flex items-center gap-4 sm:mb-12" aria-hidden="true"> <span class="h-px w-12 bg-linear-to-r from-transparent to-theme-gold/40 sm:w-24"></span> <span class="size-1.5 rotate-45 bg-theme-gold/70"></span> <span class="h-px w-12 bg-linear-to-l from-transparent to-theme-gold/40 sm:w-24"></span> </div>  <h2 id="videos-title" class="mb-3 text-center font-cinzel text-3xl font-bold tracking-[0.18em] text-theme-cream sm:text-4xl md:text-5xl">
VÍDEOS
</h2> <p class="mb-10 max-w-xl text-center font-cinzel text-xs font-medium tracking-[0.25em] text-theme-cream/55 sm:mb-14 sm:text-sm">
Todo lo que rodea a La Copa Chontaduro
</p>  <div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:aspect-[24/9] lg:grid-cols-3 lg:grid-rows-2 lg:gap-4"> ${VIDEOS.map(({ title, videoSrc, poster, active, span }) => {
    const Tag = active ? "button" : "div";
    return renderTemplate`${renderComponent($$result, "Tag", Tag, { "type": active ? "button" : void 0, "data-video-tile": active ? "" : void 0, "data-video-src": active ? videoSrc : void 0, "data-video-title": active ? title : void 0, "aria-label": active ? `Reproducir v\xEDdeo: ${title}` : `${title}. Pr\xF3ximamente.`, "aria-disabled": active ? void 0 : "true", "class:list": [
      "group relative isolate flex aspect-video w-full overflow-hidden rounded-xl border text-left outline-none transition duration-500 lg:aspect-auto",
      SPAN_CLASSES[span],
      active ? "cursor-pointer border-theme-gold/20 bg-black/40 hover:border-theme-gold/60 hover:shadow-[0_18px_60px_-20px_rgba(251,191,36,0.55)] focus-visible:border-theme-gold/70 focus-visible:ring-2 focus-visible:ring-theme-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black" : "pointer-events-none cursor-not-allowed border-theme-gold/15 bg-black/60"
    ] }, { "default": ($$result2) => renderTemplate`${active && poster ? renderTemplate`<img${addAttribute(poster, "src")} alt="" aria-hidden="true" loading="lazy" decoding="async" class="absolute inset-0 -z-10 h-full w-full scale-105 object-cover brightness-75 transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-100 group-focus-visible:scale-110 group-focus-visible:brightness-100">` : renderTemplate`<div aria-hidden="true" class="absolute inset-0 -z-10 bg-linear-to-br from-black via-black to-theme-midnight"></div>`}<div aria-hidden="true" class="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/50 to-black/30"></div> ${!active && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div aria-hidden="true" class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(155,89,182,0.15),_transparent_60%)]"></div> <div aria-hidden="true" class="pointer-events-none absolute inset-3 -z-10 rounded-lg border border-theme-gold/10"></div> ` })}`}<div aria-hidden="true" class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,191,36,0.12),_transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"></div> ${active && renderTemplate`<span aria-hidden="true" class="absolute inset-0 -z-10 flex items-center justify-center"> <span class="flex size-14 items-center justify-center rounded-full border border-theme-gold/40 bg-black/60 backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-theme-gold/70 group-hover:bg-theme-gold/20 group-focus-visible:scale-110 group-focus-visible:border-theme-gold/70 group-focus-visible:bg-theme-gold/20 sm:size-16"> ${renderComponent($$result2, "PlayIcon", PlayIcon, { "class": "size-6 translate-x-[1px] text-white transition duration-500 group-hover:text-theme-cream group-focus-visible:text-theme-cream sm:size-7", "aria-hidden": "true" })} </span> </span>`}${active ? renderTemplate`<div class="relative flex h-full w-full flex-col justify-end gap-1 p-5 sm:p-6 lg:p-7"> <h3${addAttribute([
      "font-cinzel font-bold leading-tight tracking-[0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] transition duration-500 group-hover:text-theme-cream group-focus-visible:text-theme-cream",
      span === "big" ? "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" : "text-xl sm:text-2xl lg:text-3xl"
    ], "class:list")}> ${title} </h3> <span class="mt-2 inline-flex w-fit items-center gap-2 font-cinzel text-[0.6rem] font-semibold tracking-[0.3em] text-white/70 transition duration-500 group-hover:text-theme-gold group-focus-visible:text-theme-gold sm:text-xs">
VER VÍDEO
${renderComponent($$result2, "ArrowRightIcon", ArrowRightIcon, { "class": "size-3 transition-transform duration-500 group-hover:translate-x-1 group-focus-visible:translate-x-1", "stroke-width": "2.5", "aria-hidden": "true" })} </span> </div>` : (
      /* Contenido inactivo (próximamente) */
      renderTemplate`<div class="relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:gap-4 sm:px-8"> <span aria-hidden="true" class="flex items-center gap-3 font-cinzel text-[0.55rem] font-semibold tracking-[0.45em] text-theme-gold/70 sm:text-[0.6rem]"> <span class="h-px w-8 bg-linear-to-r from-transparent to-theme-gold/40 sm:w-12"></span> <span class="size-1 rotate-45 bg-theme-gold/60"></span> <span class="h-px w-8 bg-linear-to-l from-transparent to-theme-gold/40 sm:w-12"></span> </span> <h3${addAttribute([
        "font-cinzel font-bold leading-tight tracking-[0.08em] text-theme-cream/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]",
        span === "big" ? "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" : "text-xl sm:text-2xl lg:text-[1.75rem]"
      ], "class:list")}> ${title} </h3> <span class="inline-flex items-center gap-2 font-cinzel text-[0.55rem] font-semibold tracking-[0.4em] text-theme-gold/80 sm:text-[0.65rem]"> <span class="size-1 rotate-45 bg-theme-gold/70" aria-hidden="true"></span>
PRÓXIMAMENTE
<span class="size-1 rotate-45 bg-theme-gold/70" aria-hidden="true"></span> </span> </div>`
    )}` })}`;
  })} </div> </div>  <dialog id="video-dialog" aria-labelledby="video-dialog-title" class="m-0 w-screen max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm open:flex open:h-screen open:items-center open:justify-center"> <div class="relative mx-4 w-full max-w-5xl"> <div class="mb-4 flex items-center justify-between gap-4"> <h3 id="video-dialog-title" data-video-dialog-title class="font-cinzel text-base font-bold tracking-[0.18em] text-theme-cream sm:text-xl"></h3> <button type="button" data-video-dialog-close aria-label="Cerrar vídeo" class="inline-flex size-10 items-center justify-center rounded-full border border-theme-gold/30 bg-black/60 text-white outline-none transition hover:border-theme-gold/70 hover:bg-theme-gold/15 focus-visible:border-theme-gold/70 focus-visible:ring-2 focus-visible:ring-theme-gold/60 sm:size-11"> ${renderComponent($$result, "CloseIcon", CloseIcon, { "class": "size-5", "aria-hidden": "true" })} </button> </div> <div class="relative aspect-video w-full overflow-hidden rounded-xl border border-theme-gold/20 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"> <div data-video-dialog-frame class="absolute inset-0 h-full w-full"></div> </div> </div> </dialog> </section> ${renderScript($$result, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Videos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/components/Videos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamsHero", $$TeamsHero, {})} ${renderComponent($$result2, "StandingsTable", $$StandingsTable, { "title": "TORNEO PES - TEMPORADA 1" })} ${maybeRenderHead()}<section class="py-12 px-4"> ${renderComponent($$result2, "TournamentBracket", $$TournamentBracket, { "title": "PLAYOFF", "finalDate": "30 DE MAYO", "finalLocation": "BUDAPEST" })} </section>  ${renderComponent($$result2, "Video", $$Videos, {})} ` })}`;
}, "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/index.astro", void 0);

const $$file = "C:/Users/jorge/OneDrive/Desktop/pruebaVelada/la-velada-clone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

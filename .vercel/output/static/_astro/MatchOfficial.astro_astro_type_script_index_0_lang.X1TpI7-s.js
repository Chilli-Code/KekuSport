(function(){const h=[{id:"m1",round:"Jornada 4 · Partido 1",status:"live",role:"Árbitro principal",time:"14:00",field:"Cancha A",teamA:{name:"Los Vikingos",color:"#00ff88",players:["Peereira7","Perxitaa","Abby","Andoni","Alana"]},teamB:{name:"Los Guerreros",color:"#f59e0b",players:["TheGrefg","Westcol","Viruzz","T.Mazza","Arigeli"]}},{id:"m2",round:"Jornada 4 · Partido 2",status:"upcoming",role:"Plantillero",time:"16:30",field:"Cancha B",teamA:{name:"Los Ángeles",color:"#a78bfa",players:["Rubius","AuronPlay","Ibai","Spreen","Coscu"]},teamB:{name:"Los Diablos",color:"#f87171",players:["Rivers","Luzu","Momo","Paracetamor","JuanSG"]}},{id:"m3",round:"Jornada 4 · Partido 3",status:"finished",role:"Plantillero",time:"10:00",field:"Cancha A",teamA:{name:"Equipo Norte",color:"#38bdf8",players:["A1","A2","A3","A4","A5"]},teamB:{name:"Equipo Sur",color:"#e2ff5d",players:["B1","B2","B3","B4","B5"]}}],g={yellow:{label:"Amarilla",icon:"🟨",iconBg:"rgba(120,53,15,.6)",iconColor:"#fbbf24",iconBorder:"rgba(251,191,36,.25)"},red:{label:"Roja",icon:"🟥",iconBg:"rgba(127,29,29,.6)",iconColor:"#f87171",iconBorder:"rgba(248,113,113,.25)"},goal:{label:"Gol",icon:"⚽",iconBg:"rgba(6,78,59,.6)",iconColor:"#00ff88",iconBorder:"rgba(0,255,136,.3)"},change:{label:"Cambio",icon:"🔄",iconBg:"rgba(76,29,149,.6)",iconColor:"#c4b5fd",iconBorder:"rgba(196,181,253,.25)"},shot:{label:"Tiro",icon:"🎯",iconBg:"rgba(12,74,110,.6)",iconColor:"#7dd3fc",iconBorder:"rgba(125,211,252,.25)"},foul:{label:"Falta",icon:"⚠️",iconBg:"rgba(39,39,42,.8)",iconColor:"#a1a1aa",iconBorder:"rgba(161,161,170,.15)"}},A={live:{label:"En juego",cls:"mo-status-live"},upcoming:{label:"Próximo",cls:"mo-status-upcoming"},finished:{label:"Finalizado",cls:"mo-status-finished"}},y=e=>"velada_log_"+e,k=e=>"velada_timer_"+e,B=e=>"velada_score_"+e,u=e=>{try{return JSON.parse(localStorage.getItem(y(e)))||[]}catch{return[]}},b=(e,o)=>localStorage.setItem(y(e),JSON.stringify(o)),v=e=>{try{return JSON.parse(localStorage.getItem(B(e)))||{a:0,b:0}}catch{return{a:0,b:0}}},w=(e,o)=>localStorage.setItem(B(e),JSON.stringify(o)),S=e=>parseInt(localStorage.getItem(k(e))||"0",10),T=(e,o)=>localStorage.setItem(k(e),String(o));let r=null,i=0,d=!1,x=null,s=null;const t=e=>document.getElementById(e);function L(){const e=t("mo-cards-container");e.innerHTML=h.map(o=>{const a=u(o.id),n=v(o.id),l=o.status!=="upcoming",c=A[o.status];return`
      <div data-id="${o.id}" class="mo-card group relative oxer-profile-card bg-theme-midnight/70 backdrop-blur-xs
transition-all duration-500 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl cursor-pointer">
        
        <!-- EFECTO SHINE (brillo que cruza al hover) -->
        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
        
        <!-- GLOW DE FONDO (resplandor detrás de la card) -->
        <div class="absolute inset-0 bg-theme-gold/0 group-hover:bg-theme-gold/5 transition-all duration-500 rounded-xl -z-0"></div>
        
        <!-- Borde superior con colores de equipos -->
      
        
        <!-- HUD corners -->
        <span class="hud-corner hud-corner--tl"></span>
        <span class="hud-corner hud-corner--tr"></span>
        <span class="hud-corner hud-corner--bl"></span>
        <span class="hud-corner hud-corner--br"></span>
        
        <!-- Contenido principal -->
        <div class="relative z-10 p-5">
          
          <!-- Header con round y status -->
          <div class="flex items-center gap-2 mb-3">
            <span class="text-[0.52rem] font-semibold tracking-[0.08em] uppercase text-theme-cream/40 flex-1">
              ${o.round}
            </span>
            <span class="text-[0.5rem] text-red-400 font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-full ${c.cls}">${c.label}</span>
            </div>
            <span class="text-xs justify-center py-2 text-amber-200 flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              ${o.time} · ${o.field}
            </span>
          
          <!-- Equipos y marcador -->
          <div class="flex items-center justify-between gap-3 mb-3">
            
            <!-- Equipo A -->
            <div class="flex-1 flex flex-col gap-1">
              <div class="h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-8" style="background: ${o.teamA.color}"></div>
              <span class="text-[0.7rem] font-bold tracking-[0.06em] uppercase text-theme-cream/90 transition-all duration-300 group-hover:text-theme-cream">${o.teamA.name}</span>
              ${l?`<span class="text-[1.8rem] font-black leading-none text-theme-cream/90 transition-all duration-300 group-hover:scale-105 group-hover:text-theme-cream inline-block">${n.a}</span>`:""}
            </div>
            
            <!-- VS -->
            <span class="text-[0.55rem] font-black tracking-[0.15em] text-theme-gold/40 transition-all duration-300 group-hover:text-theme-gold/60">VS</span>
            
            <!-- Equipo B -->
            <div class="flex-1 flex flex-col items-end gap-1">
              <div class="h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-8" style="background: ${o.teamB.color}"></div>
              <span class="text-[0.7rem] font-bold tracking-[0.06em] uppercase text-theme-cream/90 transition-all duration-300 group-hover:text-theme-cream">${o.teamB.name}</span>
              ${l?`<span class="text-[1.8rem] font-black leading-none text-theme-cream/90 transition-all duration-300 group-hover:scale-105 group-hover:text-theme-cream inline-block">${n.b}</span>`:""}
            </div>
          </div>
          
          <!-- Footer de la card -->
          <div class="flex items-center justify-between pt-3 mt-2 border-t border-theme-gold/10">
            <span class="text-[0.5rem] text-amber-200">
              ${a.length} evento${a.length!==1?"s":""} registrado${a.length!==1?"s":""}
            </span>
            <span class="text-[0.5rem] font-bold tracking-[0.1em] uppercase text-green-500 bg-theme-green/10 border border-theme-green/25 rounded-full px-2 py-1">
              ${o.role}
            </span>
            
            <!-- BOTÓN FLECHA - SOLO ESTO ABRE EL PARTIDO -->
            <button class="open-match-btn w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-theme-gold/20 group-hover:translate-x-1 cursor-pointer"
                    data-id="${o.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-green-300 transition-all duration-300 group-hover:text-theme-gold">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          
        </div>
      </div>`}).join(""),e.querySelectorAll(".open-match-btn").forEach(o=>o.addEventListener("click",a=>{a.stopPropagation(),M(o.dataset.id)}))}function M(e){r=h.find(a=>a.id===e),t("mo-view-list").classList.add("hidden"),t("mo-view-match").classList.remove("hidden"),t("mo-match-round").textContent=r.round+" · "+r.field,t("mo-match-role-chip").textContent=r.role,t("mo-sb-name-a").textContent=r.teamA.name,t("mo-sb-name-b").textContent=r.teamB.name,t("mo-sb-color-a").style.background=r.teamA.color,t("mo-sb-color-b").style.background=r.teamB.color,t("mo-sb-topbar").style.background=`linear-gradient(90deg,${r.teamA.color} 0%,transparent 50%,${r.teamB.color} 100%)`;const o=v(r.id);t("mo-sb-score-a").textContent=o.a,t("mo-sb-score-b").textContent=o.b,i=S(r.id),d=!1,clearInterval(x),C(),N(),p(),window.scrollTo(0,0)}function I(){d&&E(),t("mo-view-match").classList.add("hidden"),t("mo-view-list").classList.remove("hidden"),L(),r=null}t("mo-back-btn").addEventListener("click",I);function C(){const e=Math.floor(i/60).toString().padStart(2,"0"),o=(i%60).toString().padStart(2,"0");t("mo-timer-display").textContent=e+":"+o}function N(){t("mo-timer-btn").classList.remove("active"),t("mo-timer-label").textContent="Iniciar"}function E(){d=!1,clearInterval(x),t("mo-timer-btn").classList.remove("active"),t("mo-timer-label").textContent="Reanudar"}t("mo-timer-btn").addEventListener("click",()=>{if(d){E();return}d=!0,t("mo-timer-btn").classList.add("active"),t("mo-timer-label").textContent="Pausar",x=setInterval(()=>{i++,T(r.id,i),C()},1e3)}),document.querySelectorAll(".mo-action-btn").forEach(e=>e.addEventListener("click",()=>_(e.dataset.type)));function _(e){s=e;const o=g[e],a=t("mo-modal-badge");a.textContent=o.label,a.style.background=o.iconBg,a.style.color=o.iconColor,a.style.borderColor=o.iconBorder,t("mo-modal-title").textContent="Registrar · "+o.label,t("mo-m-team").innerHTML=`
      <option value="a">${r.teamA.name}</option>
      <option value="b">${r.teamB.name}</option>`,t("mo-m-player").value="",t("mo-m-minute").value=Math.floor(i/60)||"";const n=t("mo-m-extra");e==="change"?n.innerHTML=`
        <div class="mo-field-group flex flex-col gap-0.5 relative">
          <label class="text-xs gap-2 uppercase text-[rgba(232,220,200,.4)]" for="mo-m-out">Sale</label>
         <input
  id="mo-m-out"
  type="text"
  placeholder="Nombre o número"
  autocomplete="off"
  class="
    w-full
    px-[0.85rem]
    py-[0.65rem]
    rounded-[10px]
    border
    border-[color-mix(in_srgb,var(--gold)_18%,transparent)]
    bg-white/[0.03]
    text-[var(--cream)]
    text-xs
    tracking-[0.04em]
    outline-none
    caret-[var(--green)]
    transition-all
    duration-200
  "
>
        </div>
<div class="mo-field-group flex flex-col gap-0.5 relative" style="margin-top:.75rem">
  <label
    class="text-xs gap-2 uppercase text-[rgba(232,220,200,.4)]"
    for="mo-m-in"
  >
    Entra
  </label>

  <input
    id="mo-m-in"
    type="text"
    placeholder="Nombre o número"
    autocomplete="off"
    class="
      w-full
      px-[0.85rem]
      py-[0.65rem]
      rounded-[10px]
      border
      border-[color-mix(in_srgb,var(--gold)_18%,transparent)]
      bg-white/[0.03]
      text-[var(--cream)]
      text-xs
      tracking-[0.04em]
      outline-none
      caret-[var(--green)]
      transition-all
      duration-200
    "
  >
</div>`:e==="shot"?n.innerHTML=`
<div class="mo-field-group flex flex-col gap-0.5 relative">
  <label
    class="text-xs gap-2 uppercase text-[rgba(232,220,200,.4)]"
    for="mo-m-shottype"
  >
    Tipo de tiro
  </label>

  <select
    id="mo-m-shottype"
    class="
      w-full
      px-[0.85rem]
      py-[0.65rem]
      rounded-[10px]
      border
      border-[color-mix(in_srgb,var(--gold)_18%,transparent)]
      bg-white/[0.03]
      text-[var(--cream)]
      text-xs
      tracking-[0.04em]
      outline-none
      caret-[var(--green)]
      transition-all
      duration-200
    "
  >
    <option>Al arco</option>
    <option>Gol (suma marcador)</option>
    <option>Bloqueado</option>
    <option>Afuera</option>
  </select>
</div>`:n.innerHTML="";const l=t("mo-modal-overlay");l.classList.remove("hidden"),l.classList.add("flex")}function f(){t("mo-modal-overlay").classList.add("hidden"),t("mo-modal-overlay").classList.remove("flex"),s=null}t("mo-modal-cancel").addEventListener("click",f),t("mo-modal-save").addEventListener("click",()=>{const e=t("mo-m-team").value,o=(t("mo-m-player").value||"").trim()||"—",a=parseInt(t("mo-m-minute").value,10),n=isNaN(a)?Math.floor(i/60):a,l=e==="a"?r.teamA.name:r.teamB.name;let c="";if(s==="change"){const m=(t("mo-m-out")?.value||"").trim()||"—",O=(t("mo-m-in")?.value||"").trim()||"—";c=`Sale: ${m}  ·  Entra: ${O}`}else s==="shot"&&(c=t("mo-m-shottype")?.value||"Al arco");const $=u(r.id);if($.unshift({id:Date.now(),type:s,team:e,teamName:l,player:o,minute:n,detail:c}),b(r.id,$),s==="goal"||s==="shot"&&c==="Gol (suma marcador)"){const m=v(r.id);m[e]++,w(r.id,m),t("mo-sb-score-"+e).textContent=m[e]}f(),p()});function p(){const e=u(r.id),o=t("mo-log-list");if(!e.length){o.innerHTML='<div class="text-center py-8"><p class="text-xs text-green-400/30 tracking-wider uppercase">Sin eventos registrados</p><p class="text-[0.52rem] text-cream/15 mt-2">Registra el primer evento del partido</p></div>';return}o.innerHTML=e.map(a=>{const n=g[a.type]||g.foul,l=a.team==="a"?r.teamA.color:r.teamB.color;return`
      <div class="mo-log-entry group relative flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 hover:translate-x-0.5" 
           style="background: linear-gradient(160deg, color-mix(in srgb, var(--midnight) 92%, var(--gold)) 0%, var(--midnight) 100%); border-color: var(--border);">
        
        <!-- Línea lateral de color del equipo -->
        <div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style="background: ${l};"></div>
        
        <!-- Minuto -->
        <span class="mo-log-min font-mono text-sm font-extrabold min-w-[2.5rem] text-center py-0.5 px-1.5 rounded-md"
              style="color: var(--gold); background: rgba(199,168,107,0.12);">${a.minute}'</span>
        
        <!-- Icono del evento -->
        <span class="mo-log-icon w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 border transition-transform duration-150 group-hover:scale-105 group-hover:shadow-md"
              style="background: ${n.iconBg}; color: ${n.iconColor}; border-color: ${n.iconBorder}; box-shadow: 0 0 8px ${l}40;">${n.icon}</span>
        
        <!-- Información del evento -->
        <div class="mo-log-info flex-1 min-w-0">
          <p class="mo-log-event-title text-xs font-extrabold tracking-wide uppercase"
             style="color: var(--cream);">${n.label} · ${a.teamName}</p>
          <p class="mo-log-event-sub text-[0.58rem] font-medium mt-0.5 truncate"
             style="color: rgba(232,220,200,0.5);">${a.player}${a.detail?" · "+a.detail:""}</p>
        </div>
        
        <!-- Botón eliminar -->
        <button data-eid="${a.id}" class="mo-log-del flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                style="color: rgba(232,220,200,0.25); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);"
                aria-label="Eliminar evento">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>`}).join(""),o.querySelectorAll(".mo-log-del").forEach(a=>a.addEventListener("click",()=>{b(r.id,u(r.id).filter(n=>n.id!==Number(a.dataset.eid))),p()}))}t("mo-log-clear").addEventListener("click",()=>{confirm("¿Eliminar todos los eventos de este partido?")&&(b(r.id,[]),w(r.id,{a:0,b:0}),t("mo-sb-score-a").textContent="0",t("mo-sb-score-b").textContent="0",p())}),t("mo-min-minus")?.addEventListener("click",()=>{const e=t("mo-m-minute");if(e){let o=parseInt(e.value||"0",10);o>0&&(e.value=o-1)}}),t("mo-min-plus")?.addEventListener("click",()=>{const e=t("mo-m-minute");if(e){let o=parseInt(e.value||"0",10);e.value=o+1}}),t("mo-modal-handle")?.addEventListener("click",f),L()})();

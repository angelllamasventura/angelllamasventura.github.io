/* =========================
   Hero typing
   ========================= */
const text = "Ángel Llamas Ventura";
const typingElement = document.getElementById('typing-text');
let idx = 0;
function typeText(){
  if(!typingElement) return;
  if(idx < text.length){
    typingElement.textContent = text.slice(0, idx + 1);
    idx++; setTimeout(typeText, 110);
  }else{
    typingElement.classList.remove('typing-cursor');
  }
}

/* =========================
   Intersection Observer: reveal + skill bars (legacy)
   ========================= */
function observeElements(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // legacy skill bars
        const bars = entry.target.querySelectorAll('.skill-bar[data-width]');
        if(bars.length){
          bars.forEach((bar, i)=>{
            setTimeout(()=>{
              let raw = (bar.getAttribute('data-width')||'0').toString().replace('%','').trim();
              let n = Math.max(0, Math.min(100, parseFloat(raw)||0));
              bar.style.width = n + '%';
              bar.style.opacity = '1';
              bar.style.transition = 'width 1.2s cubic-bezier(.25,.46,.45,.94), opacity .5s ease';
            }, i*140 + 260);
          });
        }
      }
    });
  }, {threshold: .2});
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .elegant-card, .elegant-card-dark').forEach(el=>observer.observe(el));
}

/* =========================
   Smooth scroll helper
   ========================= */
function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth', block:'start'});
  closeMobile();
}

/* =========================
   Contact demo
   ========================= */
function showContactDemo(){
  const demo = document.getElementById('demo-message');
  if(!demo) return;
  demo.classList.remove('hidden');
  setTimeout(()=>demo.classList.add('hidden'), 6000);
}

/* =========================
   Parallax
   ========================= */
function initParallax(){
  const els = Array.from(document.querySelectorAll('.parallax-element'));
  if(!els.length) return;
  let ticking = false;
  function update(){
    const y = window.pageYOffset||document.documentElement.scrollTop;
    els.forEach((el, i)=>{
      const speed = 0.4 + i*0.1;
      el.style.transform = `translateY(${-(y*speed)}px)`;
    });
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if(!ticking){ window.requestAnimationFrame(update); ticking = true; }
  }, {passive:true});
}

/* =========================
   Stagger
   ========================= */
function initStagger(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const items = e.target.querySelectorAll('.stagger-animation');
        items.forEach((it,i)=>setTimeout(()=>it.classList.add('visible'), i*140));
      }
    });
  },{threshold:.1});
  document.querySelectorAll('.grid').forEach(g=>obs.observe(g));
}

/* =========================
   Reveal helper
   ========================= */
function initReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:.1, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal-animation').forEach(el=>obs.observe(el));
}

/* =========================
   Download CV
   ========================= */
function downloadCV(url, filename='CV.pdf'){
  fetch(url).then(res=>{
    if(!res.ok) throw new Error('No se pudo descargar el CV');
    return res.blob();
  }).then(blob=>{
    const obj = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = obj; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(obj);
  }).catch(err=>alert('Error al descargar el CV: ' + err.message));
}

/* =========================
   Menú móvil
   ========================= */
const btnMobile = document.getElementById('btn-mobile');
const drawer = document.getElementById('nav-drawer');
function closeMobile(){
  if(drawer){ drawer.classList.remove('open'); btnMobile?.setAttribute('aria-expanded','false'); }
}
function initMobile(){
  if(!btnMobile || !drawer) return;
  btnMobile.addEventListener('click', ()=>{
    const opened = drawer.classList.toggle('open');
    btnMobile.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
  document.querySelectorAll('#nav-drawer [data-nav]').forEach(a=>{
    a.addEventListener('click', ()=>closeMobile());
  });
}

/* =========================
   Scroll progress + Spy + Back to top
   ========================= */
const progressEl = document.querySelector('.scroll-progress');
const backTop = document.getElementById('backToTop');
function updateProgress(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop)/(h.scrollHeight - h.clientHeight);
  if(progressEl) progressEl.style.transform = `scaleX(${Math.max(0, Math.min(1, scrolled))})`;
  if(backTop){
    if(h.scrollTop>480) backTop.classList.add('visible'); else backTop.classList.remove('visible');
  }
}
function initBackTop(){
  if(!backTop) return;
  backTop.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
}
function initSpy(){
  const links = Array.from(document.querySelectorAll('[data-nav]'));
  const hero = document.getElementById('inicio');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  function onScroll(){
    const y = window.scrollY + 140;
    let current = hero;
    for(const sec of sections){
      const top = sec.offsetTop;
      if(y >= top) current = sec;
    }
    links.forEach(l=>{
      l.classList.remove('is-active'); l.removeAttribute('aria-current');
      const href = l.getAttribute('href')||'';
      if(current && href === `#${current.id}`){ l.classList.add('is-active'); l.setAttribute('aria-current','page'); }
      if(current && current.id==='inicio' && href==='#inicio'){ l.classList.add('is-active'); l.setAttribute('aria-current','page'); }
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* =========================
   Magnetic cards
   ========================= */
function initMagnetic(){
  const cards = document.querySelectorAll('.magnetic-card');
  cards.forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      card.style.transform = `translate(${x*0.02}px, ${y*0.02}px)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = 'translate(0,0)'; });
  });
}

/* =========================
   Knowledge Tabs + meters
   ========================= */
function animateMeters(scope=document){
  const rows = scope.querySelectorAll('.meter-row');
  rows.forEach(row=>{
    const i = row.querySelector('.meter i');
    if(!i) return;
    const level = Math.max(0, Math.min(100, parseFloat(row.dataset.level||'0')||0));
    requestAnimationFrame(()=>{ i.style.width = level + '%'; });
  });
}
/* === Animación de pips (llenado discreto y elegante) === */
function animatePips(scope=document){
  const sets = scope.querySelectorAll('.pips');
  sets.forEach(set=>{
    const score = Math.max(0, Math.min(5, parseInt(set.getAttribute('data-score') || '0', 10)));
    const pips = Array.from(set.querySelectorAll('.pip'));
    // reset
    pips.forEach(p=>p.classList.remove('on'));
    // animación escalonada
    pips.slice(0, score).forEach((p, i)=>{
      setTimeout(()=>p.classList.add('on'), i*110 + 90);
    });
    // Accesibilidad
    set.setAttribute('aria-label', `Dominio: ${score} de 5`);
  });
}

/* === Tabs de Conocimientos (usa pips) === */
function initKnowledgeTabs(){
  const tabs = document.querySelectorAll('.knowledge-tabs .tab-button');
  const panels = {
    lenguajes : document.getElementById('panel-lenguajes'),
    bases     : document.getElementById('panel-bases'),
    metodo    : document.getElementById('panel-metodo')
  };

  // Click en pestañas
  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabs.forEach(b=>{ b.classList.remove('is-active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('is-active'); btn.setAttribute('aria-selected','true');

      Object.entries(panels).forEach(([key, panel])=>{
        if(!panel) return;
        const active = (btn.id === `tab-${key}`);
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
        if(active) animatePips(panel);
      });
    });

    // Navegación con flechas
    btn.addEventListener('keydown', (e)=>{
      if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const arr = Array.from(tabs);
      const i = arr.indexOf(btn);
      const j = e.key === 'ArrowRight' ? (i+1) % arr.length : (i-1+arr.length) % arr.length;
      arr[j].focus(); arr[j].click();
    });
  });

  // Animación inicial cuando la sección entra en viewport
  const kn = document.getElementById('conocimientos');
  if(kn){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const activePanel = document.querySelector('#conocimientos .tab-panel.is-active') || panels.lenguajes;
          if(activePanel) animatePips(activePanel);
          io.disconnect();
        }
      });
    },{threshold:.25});
    io.observe(kn);
  }
}


  // Animación inicial si el panel está visible
  const kn = document.getElementById('conocimientos');
  if(kn){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const activePanel = document.querySelector('.tab-panel.is-active');
          if(activePanel) animateMeters(activePanel);
          io.disconnect();
        }
      });
    },{threshold:.25});
    io.observe(kn);
  }

/* =========================
   Boot
   ========================= */
document.addEventListener('DOMContentLoaded', ()=>{
  // typing
  setTimeout(typeText, 900);

  // observers & effects
  observeElements(); initParallax(); initStagger(); initReveal(); initMobile(); initBackTop(); initSpy(); initMagnetic(); initKnowledgeTabs();

  // legacy skill bars setup
  document.querySelectorAll('.skill-bar[data-width]').forEach(bar=>{
    bar.style.width='0%'; bar.style.opacity='.3'; bar.style.maxWidth='100%';
  });

  // Download CV
  const btn = document.getElementById('btn-cv');
  if(btn){
    if(location.protocol==='file:'){
      btn.addEventListener('click', ()=>alert('Para forzar la descarga usa un servidor local (http://localhost). En file:// algunos navegadores bloquean la descarga.'), {once:true});
    }else{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const url = btn.href;
        const name = btn.getAttribute('download') || 'CV.pdf';
        downloadCV(url, name);
      });
    }
  }

  // Progreso
  updateProgress();
  window.addEventListener('scroll', updateProgress, {passive:true});
  window.addEventListener('resize', updateProgress);
});

/* =========================
   Expose helpers
   ========================= */
window.scrollToSection = scrollToSection;
window.showContactDemo  = showContactDemo;

(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  document.documentElement.classList.remove('no-js');

  /* ---------- Starry sky ---------- */
  const canvas = document.getElementById('sky');
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2), stars = [], shooting = null, scrollY = 0;

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.round((W * H) / 5200);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.1 + 0.2,
      depth: Math.random() * 0.6 + 0.1,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.004,
      tint: Math.random() < 0.18 ? 'warm' : 'cool'
    }));
  }

  function drawSparkle(x, y, s, a) {
    ctx.save(); ctx.translate(x, y); ctx.globalAlpha = a; ctx.fillStyle = '#d9e2ff';
    ctx.beginPath();
    for (let i = 0; i < 4; i++) { ctx.rotate(Math.PI / 2); ctx.lineTo(0, s); ctx.lineTo(s * 0.18, s * 0.18); }
    ctx.closePath(); ctx.fill(); ctx.restore();
  }

  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      const tw = reduce ? 0.7 : 0.45 + 0.55 * Math.abs(Math.sin(s.phase + t * s.speed * 0.06));
      let y = (s.y - scrollY * s.depth * 0.25) % H; if (y < 0) y += H;
      if (s.r > 1.15) { drawSparkle(s.x, y, s.r * 3.2, tw * 0.8); continue; }
      ctx.globalAlpha = tw;
      ctx.fillStyle = s.tint === 'warm' ? '#ffe0a8' : '#c8d4f0';
      ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduce) {
      if (!shooting && Math.random() < 0.0025) {
        shooting = { x: Math.random() * W * 0.7 + W * 0.2, y: Math.random() * H * 0.35, life: 0 };
      }
      if (shooting) {
        shooting.life += 1;
        const p = shooting.life / 60, len = 140;
        const x = shooting.x - p * 420, y = shooting.y + p * 220;
        const g = ctx.createLinearGradient(x, y, x + len, y - len * 0.52);
        g.addColorStop(0, `rgba(217,226,255,${0.9 * (1 - p)})`); g.addColorStop(1, 'rgba(217,226,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + len, y - len * 0.52); ctx.stroke();
        if (p >= 1) shooting = null;
      }
      requestAnimationFrame(frame);
    }
  }
  resize(); window.addEventListener('resize', resize);
  requestAnimationFrame(frame);

  /* ---------- Moon cursor + star trail ---------- */
  if (finePointer && !reduce) {
    const moon = document.querySelector('.cursor');
    const ring = document.querySelector('.cursor-ring');
    let mx = -100, my = -100, rx = -100, ry = -100, lastX = 0, lastY = 0;
    const glyphs = ['✦', '✧', '⋆', '·'];
    document.body.classList.add('has-cursor');

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      moon.style.transform = `translate(${mx}px, ${my}px)`;
      const d = Math.hypot(mx - lastX, my - lastY);
      if (d > 26) {
        lastX = mx; lastY = my;
        const s = document.createElement('span');
        s.className = 'trail';
        s.textContent = glyphs[(Math.random() * glyphs.length) | 0];
        s.style.setProperty('--x', `${mx + (Math.random() * 14 - 7)}px`);
        s.style.setProperty('--y', `${my + (Math.random() * 14 - 7)}px`);
        s.style.setProperty('--dx', `${Math.random() * 30 - 15}px`);
        s.style.setProperty('--dy', `${Math.random() * 24 + 6}px`);
        s.style.fontSize = `${8 + Math.random() * 8}px`;
        document.body.appendChild(s);
        s.addEventListener('animationend', () => s.remove());
      }
    }, { passive: true });

    (function follow() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(follow);
    })();

    const hoverSel = 'a, button, [data-zoom], .node--row, .flow li';
    document.addEventListener('mouseover', (e) => { if (e.target.closest(hoverSel)) document.body.classList.add('is-hover'); });
    document.addEventListener('mouseout', (e) => { if (e.target.closest(hoverSel)) document.body.classList.remove('is-hover'); });
    document.addEventListener('mouseleave', () => document.body.classList.remove('has-cursor'));
    document.addEventListener('mouseenter', () => document.body.classList.add('has-cursor'));
  }

  /* ---------- Scroll: progress, nav, showcase tilt ---------- */
  const bar = document.querySelector('.progress span');
  const nav = document.querySelector('.nav');
  const show = document.querySelector('.showcase__frame');
  function onScroll() {
    scrollY = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    nav.classList.toggle('is-scrolled', scrollY > 160);
    if (show && !reduce) {
      const r = show.getBoundingClientRect();
      const p = Math.min(Math.max((window.innerHeight - r.top) / (window.innerHeight * 0.9), 0), 1);
      show.style.setProperty('--rx', `${(1 - p) * 12}deg`);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Reveal + bars ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-in');
      en.target.querySelectorAll('[data-bars]').forEach((b) => b.classList.add('is-in'));
      if (en.target.hasAttribute('data-bars')) en.target.classList.add('is-in');
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, [data-bars]').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });

  /* ---------- Active nav link ---------- */
  const links = [...document.querySelectorAll('.nav__links a')];
  const secIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((a) => { const s = document.querySelector(a.getAttribute('href')); if (s) secIO.observe(s); });

  /* ---------- Lightbox ---------- */
  const lb = document.querySelector('.lightbox');
  const lbImg = lb.querySelector('img');
  let lastFocus = null;
  function open(src, alt) { lastFocus = document.activeElement; lbImg.src = src; lbImg.alt = alt || ''; lb.hidden = false; lb.querySelector('button').focus(); document.body.style.overflow = 'hidden'; }
  function close() { lb.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  document.querySelectorAll('[data-zoom]').forEach((el) => {
    el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button');
    el.setAttribute('aria-label', 'Enlarge image');
    const go = () => open(el.dataset.zoom, el.querySelector('img')?.alt);
    el.addEventListener('click', go);
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
  lb.addEventListener('click', (e) => { if (e.target !== lbImg) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) close(); });
})();

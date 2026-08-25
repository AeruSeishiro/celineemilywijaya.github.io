document.body.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

/* ─── Background stars ────────────────────────────────────────── */
const canvas = document.getElementById('stars-canvas');
const starOverlay = document.getElementById('starOverlay');

if (canvas) {
  const context = canvas.getContext('2d');
  let stars = [];
  let animationFrame;

  const createStars = () => {
    const count = window.innerWidth < 700 ? 55 : 120;
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.15 + .15,
      opacity: Math.random() * .6 + .12,
      speed: Math.random() * .0018 + .00045,
      phase: Math.random() * Math.PI * 2,
    }));
  };

  const resizeCanvas = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * scale);
    canvas.height = Math.floor(window.innerHeight * scale);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    createStars();
  };

  const drawStars = (time = 0) => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach((star) => {
      const pulse = reduceMotion.matches ? 1 : .55 + .45 * Math.sin(time * star.speed + star.phase);
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(201, 215, 255, ${star.opacity * pulse})`;
      context.fill();
    });
    if (!reduceMotion.matches && !document.hidden) animationFrame = requestAnimationFrame(drawStars);
  };

  resizeCanvas();
  drawStars();
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrame);
    resizeCanvas();
    drawStars();
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(animationFrame);
    if (!document.hidden && !reduceMotion.matches) drawStars();
  });
}

if (starOverlay) {
  const symbols = ['✦', '·', '✧', '⋆'];
  const count = reduceMotion.matches ? 8 : 18;
  for (let index = 0; index < count; index += 1) {
    const star = document.createElement('span');
    star.className = 'floating-star';
    star.textContent = symbols[index % symbols.length];
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--duration', `${4 + Math.random() * 5}s`);
    star.style.setProperty('--delay', `${Math.random() * -5}s`);
    starOverlay.appendChild(star);
  }
}

/* ─── Header and mobile navigation ────────────────────────────── */
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');

const setMenuState = (open) => {
  if (!navToggle || !mobileMenu) return;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  mobileMenu.hidden = !open;
  document.body.classList.toggle('menu-open', open);
  if (open) mobileMenu.querySelector('a')?.focus();
};

navToggle?.addEventListener('click', () => setMenuState(navToggle.getAttribute('aria-expanded') !== 'true'));
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') setMenuState(false);
});

/* ─── Reveal content progressively ────────────────────────────── */
const revealElements = document.querySelectorAll('.reveal');
if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -25px' });
  revealElements.forEach((element) => revealObserver.observe(element));
}

/* ─── Mark the active section in desktop navigation ───────────── */
const desktopLinks = Array.from(document.querySelectorAll('.nav-desktop-links a'));
const trackedSections = desktopLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && trackedSections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    desktopLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-32% 0px -55%', threshold: [0, .2, .5] });
  trackedSections.forEach((section) => navObserver.observe(section));
}

/* ─── Artwork dialog ─────────────────────────────────────────── */
const artDialog = document.getElementById('artDialog');
const artDialogImage = document.getElementById('artDialogImage');
const artDialogTitle = document.getElementById('artDialogTitle');
const artDialogNumber = document.getElementById('artDialogNumber');
const artCards = document.querySelectorAll('.art-card');

const cursorLayerElements = () => [
  document.getElementById('cursor'),
  document.getElementById('cursorRing'),
  document.querySelector('.cursor-cross-h'),
  document.querySelector('.cursor-cross-v'),
].filter(Boolean);

artCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    if (!artDialog || !artDialogImage || !artDialogTitle || !artDialogNumber) return;
    artDialogImage.src = card.dataset.artSrc || '';
    artDialogImage.alt = card.dataset.artAlt || '';
    artDialogTitle.textContent = card.dataset.artTitle || 'Selected artwork';
    artDialogNumber.textContent = `Artwork ${String(index + 1).padStart(2, '0')}`;
    artDialog.showModal();
    // Native <dialog> renders in the browser's top layer, above any
    // fixed-position element regardless of z-index — move the custom
    // cursor into it so it stays visible while the dialog is open.
    cursorLayerElements().forEach((el) => artDialog.appendChild(el));
  });
});

artDialog?.querySelector('.dialog-close')?.addEventListener('click', () => artDialog.close());
artDialog?.addEventListener('click', (event) => {
  if (event.target === artDialog) artDialog.close();
});
artDialog?.addEventListener('close', () => {
  cursorLayerElements().forEach((el) => document.body.appendChild(el));
});

/* ─── Contact conversion ─────────────────────────────────────── */
const copyButton = document.querySelector('.copy-email');
const toast = document.getElementById('toast');
let toastTimeout;

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
};

copyButton?.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  if (!email) return;
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied — thank you for reaching out.');
  } catch {
    showToast(email);
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

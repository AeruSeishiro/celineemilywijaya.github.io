(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  if (!cursor || !cursorRing || !finePointer.matches || reduceMotion.matches) return;

  document.body.classList.add('has-custom-cursor');

  cursor.innerHTML = `
<svg viewBox="0 0 28 28" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="none">
  <defs>
    <mask id="crescent-mask">
      <rect width="28" height="28" fill="white"/>
      <circle cx="18" cy="10" r="9" fill="black"/>
    </mask>
  </defs>
  <circle cx="13" cy="14" r="9" fill="rgba(220,228,255,0.85)" mask="url(#crescent-mask)"/>
  <circle cx="13" cy="14" r="9" stroke="rgba(232,228,216,0.55)" stroke-width="0.6" mask="url(#crescent-mask)" fill="none"/>
  <line x1="14" y1="0"  x2="14" y2="4"  stroke="rgba(200,212,240,0.5)" stroke-width="0.8"/>
  <line x1="14" y1="24" x2="14" y2="28" stroke="rgba(200,212,240,0.5)" stroke-width="0.8"/>
  <line x1="0"  y1="14" x2="4"  y2="14" stroke="rgba(200,212,240,0.5)" stroke-width="0.8"/>
  <line x1="24" y1="14" x2="28" y2="14" stroke="rgba(200,212,240,0.5)" stroke-width="0.8"/>
</svg>`;

  const crossH = document.createElement('div');
  crossH.className = 'cursor-cross-h';
  const crossV = document.createElement('div');
  crossV.className = 'cursor-cross-v';
  document.body.append(crossH, crossV);

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, ringScale = 1;

  document.addEventListener('pointermove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.transform = `translate(${mouseX - 14}px, ${mouseY - 14}px)`;
    crossH.style.transform = `translateY(${mouseY}px)`;
    crossV.style.transform = `translateX(${mouseX}px)`;
  }, { passive: true });

  const animateRing = () => {
    ringX += (mouseX - ringX - 22) * .1;
    ringY += (mouseY - ringY - 22) * .1;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) scale(${ringScale})`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('is-hovering');
      cursorRing.style.borderColor = 'rgba(232,228,216,0.5)';
      ringScale = 1.6;
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-hovering');
      cursorRing.style.borderColor = 'rgba(200,212,240,0.22)';
      ringScale = 1;
    });
  });
})();

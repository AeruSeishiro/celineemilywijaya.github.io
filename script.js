/* ─── CUSTOM CURSOR ─────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

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
document.body.appendChild(crossH);
document.body.appendChild(crossV);

let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 14}px, ${mouseY - 14}px)`;
  crossH.style.transform = `translateY(${mouseY}px)`;
  crossV.style.transform = `translateX(${mouseX}px)`;
});

function animateRing() {
  ringX += (mouseX - ringX - 22) * 0.10;
  ringY += (mouseY - ringY - 22) * 0.10;
  ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('is-hovering');
    ring.style.borderColor = 'rgba(232,228,216,0.5)';
    ring.style.scale = '1.6';
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-hovering');
    ring.style.borderColor = 'rgba(200,212,240,0.22)';
    ring.style.scale = '1';
  });
});

/* ─── STARS CANVAS ──────────────────────────────────────── */
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
      phase: Math.random() * Math.PI * 2,
    });
  }
}

function drawStars(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    const a = 0.15 + 0.6 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 212, 240, ${a})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resizeCanvas();
createStars(300);
requestAnimationFrame(drawStars);
window.addEventListener('resize', () => {
  resizeCanvas();
  createStars(300);
});

/* ─── FLOATING STAR CHARACTERS ──────────────────────────── */
const overlay = document.getElementById('starOverlay');
const symbols = ['✦', '✧', '★', '☆', '✩', '✪', '·'];

for (let i = 0; i < 30; i++) {
  const s = document.createElement('span');
  s.className = 'floating-star';
  s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  s.style.setProperty('--d', (3 + Math.random() * 5) + 's');
  s.style.setProperty('--delay', (Math.random() * 5) + 's');
  overlay.appendChild(s);
}

/* ─── SKILL BARS SCROLL ANIMATION ───────────────────────── */
const skillBars = document.querySelectorAll('.skill-bar-fill');

// Store target widths and reset to 0 initially
skillBars.forEach(bar => {
  bar.dataset.targetWidth = bar.style.width;
  bar.style.width = '0%';
});

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.targetWidth;
      });
      skillObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);

/* ─── PROJECT MODAL ─────────────────────────────────────── */
const projects = [
  {
    number: '— 001',
    category: 'Web Application',
    title: 'StudySynth',
    desc: `StudySynth is an AI-powered study assistant designed specifically for NTU students to make learning more efficient and personalized. The platform allows users to upload lecture materials in various formats—including documents, audio recordings, or MP3 files—and automatically generates concise summaries to help students quickly grasp key concepts.

Beyond summarization, StudySynth enhances active learning by creating interactive quizzes based on selected materials, enabling students to test their understanding and reinforce knowledge.

In addition, the platform includes a dedicated professor dashboard that provides insights into student performance. Through analytics and statistics, educators can identify which topics students struggle with the most, allowing them to adjust their teaching strategies and focus on areas that need more attention.`,
    tech: ['React', 'Tailwind', 'Next.js'],
    link: '#',
    image: null
  },
  {
    number: '— 002',
    category: 'Game Design',
    title: 'The Last Experiment',
    desc: 'The Last Experiment is a survival FPS game that follows a professor whose experiment goes horribly wrong, turning people into zombies. Players must fight to survive against waves of enemies while navigating a dangerous environment shaped by the failed experiment. The game emphasizes fast-paced shooting mechanics, tension, and survival strategy, creating an intense and immersive gameplay experience.',
    tech: ['Unity', 'C#'],
    link: '#',
    image: null
  },
  {
    number: '— 003',
    category: 'Website',
    title: 'E-Book Shop',
    desc: 'An e-book shop platform focused on delivering a seamless and user-friendly digital reading experience. I was responsible for designing the UI/UX and creating detailed wireframes, ensuring intuitive navigation and a clean interface for browsing, purchasing, and reading e-books. The design emphasizes usability, accessibility, and a modern aesthetic to enhance the overall user experience.',
    tech: ['Procreate', 'Figma', 'Adobe Photoshop'],
    link: '#',
    image: null
  },
];

function openProject(index) {
  const p = projects[index];
  const modal    = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');

  document.getElementById('modalNumber').textContent   = p.number;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalTitle').textContent    = p.title;
  document.getElementById('modalDesc').innerHTML = p.desc
    .split('\n\n')
    .map(para => `<p style="margin-bottom:16px;">${para.trim()}</p>`)
    .join('');

  // tech pills
  const techEl = document.getElementById('modalTech');
  techEl.innerHTML = p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');

  // link
  const cta = document.getElementById('modalCta');
  cta.href = p.link;

  // preview image
  const preview = document.getElementById('modalPreview');
  const existing = preview.querySelector('img');
  if (existing) existing.remove();
  if (p.image) {
    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.title;
    preview.appendChild(img);
    document.getElementById('modalPreviewLabel').style.display = 'none';
  } else {
    document.getElementById('modalPreviewLabel').style.display = '';
  }

  backdrop.classList.add('open');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  document.getElementById('projectModal').classList.remove('open');
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProject();
});
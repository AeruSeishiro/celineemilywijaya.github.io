const caseStudies = {
  studysynth: {
    slug: 'studysynth',
    number: '01',
    category: 'Product concept · Education technology',
    title: 'StudySynth',
    headline: 'Turning study material into a clearer path to active learning.',
    summary: 'StudySynth is an AI-powered study concept for NTU students. It brings uploaded notes or audio, concise summaries, interactive quizzes, and a professor-facing insight view into one considered workflow.',
    role: 'UI/UX design & frontend implementation',
    platform: 'Responsive web application',
    tools: ['Figma', 'React', 'Tailwind', 'Next.js'],
    deliverables: 'Upload flow, summary experience, quiz interaction, dashboard concept',
    image: 'images/overview.png',
    imageAlt: 'StudySynth interface overview with study material and dashboard components',
    challenge: 'Lecture material often arrives in different forms, while the meaningful work starts only after a student can understand, revisit, and practise what they have received. The concept needed to make that transition feel direct rather than fragmented.',
    focus: 'A single product experience that helps students move from source material to understanding, then gives educators a clearer view of where support may be useful.',
    decisions: [
      { title: 'One source, several useful outputs', text: 'The concept starts with uploaded material and keeps summaries and quizzes connected to that source, so a student does not have to restart their context at every step.' },
      { title: 'Make practice the next natural action', text: 'Quizzes are positioned as an extension of understanding rather than a separate tool, helping the experience move from passive reading to active recall.' },
      { title: 'Create a different view for educators', text: 'The professor dashboard shifts the emphasis from individual study to patterns of understanding, giving the platform room to support teaching decisions too.' },
    ],
    flow: [
      { title: '01 · Upload', text: 'Bring in notes, documents, or audio material.' },
      { title: '02 · Understand', text: 'Review a concise, structured summary of the key content.' },
      { title: '03 · Practise', text: 'Use contextual quizzes to check understanding and reinforce recall.' },
      { title: '04 · Reflect', text: 'Surface patterns that can guide where learning support is needed.' },
    ],
    validate: ['Can students understand the upload-to-summary flow without guidance?', 'Does the quiz experience feel clearly connected to the material it is based on?', 'Which dashboard signals help an educator recognise a topic that needs attention?'],
  },
  heirloom: {
    slug: 'heirloom',
    number: '02',
    category: 'Game development · Ongoing project',
    title: 'The Heirloom',
    headline: 'An online multiplayer deduction game.',
    summary: 'The Heirloom is an online multiplayer deduction game currently in development using Unreal Engine 5 and Blender.',
    role: 'Game design & development',
    platform: 'Online multiplayer game',
    tools: ['Unreal Engine 5', 'Blender'],
    status: 'In development',
    visual: 'heirloom',
  },
  'upon-the-star': {
    slug: 'upon-the-star',
    number: '03',
    category: 'UI/UX design · Entertainment concept',
    title: 'Upon the Star',
    headline: 'A cinema booking experience built entirely around Disney.',
    summary: 'Upon the Star is a concept cinema-booking platform where every film on screen is a Disney title — from browsing and a timed seat hold through to a QR-code ticket you scan on the way in.',
    role: 'UI/UX design',
    platform: 'Responsive web concept',
    tools: ['Figma', 'Procreate', 'Adobe Illustrator'],
    deliverables: 'Wireframes, interface direction, end-to-end booking flow from seat selection to ticket',
    visual: 'dinema',
    challenge: 'A themed booking site has to do two things at once: feel unmistakably Disney, and still carry someone through the practical parts of buying a ticket — signing in, holding a seat, paying before a timer runs out — without any of that friction feeling like a chore.',
    focus: 'A booking journey where Disney’s identity comes through in the interface itself — colour, motion, and language — while sign-in, the seat hold, and the ticket handoff stay clear and low-stress.',
    decisions: [
      { title: 'Gate sign-in at the right moment', text: 'Google sign-in only appears right before a seat is claimed, not at landing — so browsing the catalogue stays frictionless, and an account only matters once someone is actually committing to a seat.' },
      { title: 'Make the seat hold impossible to miss', text: 'A selected seat is held for exactly 10 minutes before it releases back to everyone else. That countdown needed to be visible and honest throughout checkout, not a rule someone discovers after losing their seat.' },
      { title: 'Give the ticket two homes', text: 'After payment, a QR-code ticket is emailed automatically and also saved under a "My Tickets" area on the site — so it is easy to find again even if the email gets buried, and staff can scan it straight from a phone at the door.' },
    ],
    flow: [
      { title: '01 · Browse', text: 'Land on Upon the Star and explore the Disney-only catalogue.' },
      { title: '02 · Choose a room', text: 'Pick a screening and a room tier — Small, Regular, or Premier.' },
      { title: '03 · Sign in', text: 'Sign in with Google before a seat can be claimed.' },
      { title: '04 · Pick a seat', text: 'Select a seat on the map — it is held for 10 minutes.' },
      { title: '05 · Pay', text: 'Complete payment before the hold expires, or the seat releases to someone else.' },
      { title: '06 · Get your ticket', text: 'A QR-code ticket arrives by email and is saved under "My Tickets."' },
      { title: '07 · Enter', text: 'Show the QR code at the cinema for staff to scan.' },
    ],
    validate: ['Is a 10-minute hold long enough to feel fair without causing unnecessary drop-off at payment?', 'Does deferring Google sign-in until seat selection actually reduce friction, or just move the drop-off point later?', 'Is "My Tickets" easy enough to find that people would use it instead of searching their email?'],
  },
  'acorn-lab': {
    slug: 'acorn-lab',
    number: '04',
    category: 'UI/UX design · Mobile health concept',
    title: 'Acorn Lab',
    headline: 'A gentler way to remember medication and grow a daily routine.',
    summary: 'Acorn Lab is a medication reminder app concept that connects daily dose logging with a growing forest and Pip, a squirrel companion. I created the full concept, wireframes, and a 14-screen interactive Figma prototype spanning the Home, Forest, and Record experiences.',
    role: 'Concept development, wireframing & UI/UX design',
    platform: 'Mobile app concept · Adults aged 21–70',
    tools: ['Figma', 'Wireframing', 'Interactive prototyping'],
    deliverables: 'Full concept, wireframes, 14-screen prototype, design rationale & 15-slide presentation',
    image: 'images/acorn-lab.png',
    imageAlt: 'Acorn Lab app screens showing a dose reminder, a logged-dose celebration with Pip, and a growing forest',
    challenge: 'The design challenge was to make medication reminders clear and supportive, while keeping the record of taken and missed doses honest. The concept needed to encourage a routine without making a missed day feel like a failure.',
    focus: 'I developed the concept and wireframes around three connected experiences: a clear next dose on Home, a Forest that reflects logged days, and a practical Record for reviewing medication history. The visual design follows Acorn’s Fraunces and Plus Jakarta Sans brand system.',
    decisions: [
      { title: 'Make the next dose easy to act on', text: 'The Home screen puts the scheduled time, medication details, and two clear actions together: log the dose or request a reminder in 30 minutes. A logged moment confirms the time and includes an undo option for accidental entries.' },
      { title: 'Encourage honesty without punishment', text: 'The Forest and Pip’s Den belong to one world, and forest growth reflects logged days rather than purchases. A missed dose lets the forest rest; nothing wilts, progress is not erased, and honest reporting earns one acorn.' },
      { title: 'Keep the health record practical', text: 'The Record tab uses a 30-day calendar, missed-day notes, and a doctor-shareable report. Game elements stay out of this area so medication history remains clear and suitable for a clinical conversation.' },
    ],
    flow: [
      { title: '01 · Remember', text: 'See the next scheduled dose and medication details on Home.' },
      { title: '02 · Respond', text: 'Log the dose, request a later reminder, or honestly record a missed dose.' },
      { title: '03 · Confirm', text: 'Review the logged time and undo an accidental entry if needed.' },
      { title: '04 · Grow', text: 'Visit the Forest, where logged days grow trees around Pip’s home.' },
      { title: '05 · Review', text: 'Use Record to check the calendar, add missed-day notes, and access the shareable report.' },
    ],
    validate: ['Can people across the intended age range quickly distinguish logging a dose from postponing a reminder?', 'Does the resting-forest approach support honest missed-dose reporting without creating guilt?', 'Can users and clinicians understand the medication record independently of the forest and rewards?'],
  },
};

const params = new URLSearchParams(window.location.search);
const study = caseStudies[params.get('project')] || caseStudies.studysynth;
const studyOrder = Object.values(caseStudies);
const currentIndex = studyOrder.findIndex((item) => item.slug === study.slug);
const nextStudy = studyOrder[(currentIndex + 1) % studyOrder.length];
const previousStudy = studyOrder[(currentIndex - 1 + studyOrder.length) % studyOrder.length];

const tags = (items) => items.map((item) => `<li>${item}</li>`).join('');
const decisions = (study.decisions || []).map((decision, index) => `
  <article class="case-decision">
    <span>${String(index + 1).padStart(2, '0')}</span>
    <h3>${decision.title}</h3>
    <p>${decision.text}</p>
  </article>
`).join('');
const flow = (study.flow || []).map((step) => `
  <li><span>${step.title}</span><p>${step.text}</p></li>
`).join('');
const validation = (study.validate || []).map((item) => `<li>${item}</li>`).join('');

const heirloomVisual = `
  <div class="case-heirloom-visual" aria-label="The Heirloom abstract project artwork, in development" role="img">
    <div class="case-heirloom-grid"></div>
    <div class="case-heirloom-glow"></div>
    <div class="case-heirloom-top"><span>THE HEIRLOOM</span><span>ONLINE MULTIPLAYER</span></div>
    <div class="case-heirloom-target"><i></i><b></b></div>
    <div class="case-heirloom-readout"><span>PROJECT STATUS</span><strong>In development</strong></div>
    <p>Deduction game</p>
  </div>
`;

const dinemaVisual = `
  <div class="case-dinema-visual" aria-label="Disney-themed cinema interface placeholder" role="img">
    <div class="case-dinema-stars"><span>✦</span><span>✧</span><span>✦</span><span>⋆</span><span>✧</span><span>✦</span><span>⋆</span></div>
    <div class="case-dinema-glow"></div>
    <div class="case-dinema-mark">${study.title}</div>
    <p>Poster artwork coming soon</p>
  </div>
`;

const projectVisual = study.visual === 'heirloom'
  ? heirloomVisual
  : study.visual === 'dinema'
  ? dinemaVisual
  : `<figure class="case-image-visual"><img src="${study.image}" alt="${study.imageAlt}" /><figcaption>${study.title} · project interface</figcaption></figure>`;

document.title = `${study.title} Case Study — Celine Emily`;
document.querySelector('meta[name="description"]')?.setAttribute('content', study.status ? study.summary : `${study.title}: UI/UX case study by Celine Emily.`);

const root = document.getElementById('case-study');
if (root) {
  root.innerHTML = `
    <article class="case-study-shell case-study-${study.slug}">
      <section class="case-hero">
        <a class="case-back" href="index.html#work"><span>←</span> Back to selected work</a>
        <div class="case-hero-grid">
          <div class="case-hero-copy">
            <p class="case-kicker"><span>${study.number}</span>${study.category}</p>
            <h1>${study.title}</h1>
            <p class="case-headline">${study.headline}</p>
          </div>
          <div class="case-hero-summary">
            <p>${study.summary}</p>
            <a href="#snapshot">See the project snapshot <span>↓</span></a>
          </div>
        </div>
        <div class="case-visual-wrap">${projectVisual}</div>
      </section>

      <section class="case-snapshot" id="snapshot">
        <p class="case-kicker"><span>Snapshot</span> Context at a glance</p>
        <div class="snapshot-grid">
          <div><span>Role</span><strong>${study.role}</strong></div>
          <div><span>Platform</span><strong>${study.platform}</strong></div>
          <div><span>Tools</span><ul class="case-tags">${tags(study.tools)}</ul></div>
          <div><span>${study.status ? 'Status' : 'Delivered'}</span><strong>${study.status || study.deliverables}</strong></div>
        </div>
      </section>

      ${study.status ? `
      <section class="case-content-section case-context">
        <div class="case-section-label"><span>01</span> Project progress</div>
        <div class="case-content-grid">
          <h2>Currently<br /><em>in development.</em></h2>
          <div>
            <p class="case-lead">${study.title} is an ongoing game development project.</p>
            <p>More gameplay and development details will be shared as the project progresses.</p>
          </div>
        </div>
      </section>
      ` : `
      <section class="case-content-section case-context">
        <div class="case-section-label"><span>01</span> Project lens</div>
        <div class="case-content-grid">
          <h2>Designing for a clearer <em>next step.</em></h2>
          <div>
            <p class="case-lead">${study.challenge}</p>
            <p>${study.focus}</p>
          </div>
        </div>
      </section>

      <section class="case-content-section case-decisions-section">
        <div class="case-section-label"><span>02</span> Key design decisions</div>
        <div class="case-decisions">${decisions}</div>
      </section>

      <section class="case-content-section case-flow-section">
        <div class="case-section-label"><span>03</span> Experience flow</div>
        <div class="case-content-grid case-flow-grid">
          <h2>From the first action<br />to a more <em>useful outcome.</em></h2>
          <ol class="case-flow">${flow}</ol>
        </div>
      </section>

      <section class="case-validation">
        <div>
          <p class="case-kicker"><span>04</span> What I would validate next</p>
          <h2>Good design earns<br /><em>the next question.</em></h2>
        </div>
        <ul>${validation}</ul>
      </section>

      `}

      <nav class="case-next" aria-label="More case studies">
        <a href="project.html?project=${previousStudy.slug}" class="case-next-card case-next-previous"><span>Previous case</span><strong>← ${previousStudy.title}</strong></a>
        <a href="project.html?project=${nextStudy.slug}" class="case-next-card"><span>Next case</span><strong>${nextStudy.title} →</strong></a>
      </nav>
    </article>
  `;
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

/* ─── Theme: cycles day → sunset → night; also auto-picks by time ── */
/* mirrors script.js; preference is shared across pages via localStorage */
const THEME_KEY = 'theme-pref';
const themeRoot = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const THEME_CYCLE = ['day', 'sunset', 'night'];
const themeMeta = { day: '#bcdcf3', sunset: '#4a3568', night: '#060713' };
const themeIcon = { day: '☀', sunset: '◐', night: '☾' };

const timeBasedTheme = () => {
  const hour = new Date().getHours();
  if (hour >= 17 && hour < 19) return 'sunset';
  if (hour >= 7 && hour < 17) return 'day';
  return 'night';
};

const updateDusk = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? window.scrollY / max : 0;
  const dusk = Math.min(1, (Math.max(0, p) / 0.9) ** 1.5);
  themeRoot.style.setProperty('--dusk', dusk.toFixed(3));
};

const applyTheme = (theme) => {
  themeRoot.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeMeta[theme] || themeMeta.night);
  if (themeToggle) {
    themeToggle.textContent = themeIcon[theme] || themeIcon.night;
    themeToggle.setAttribute('aria-label', `Theme: ${theme}. Click to change.`);
    themeToggle.removeAttribute('aria-pressed');
  }
  if (theme === 'sunset') updateDusk();
  window.dispatchEvent(new Event('themechange'));
};

let storedTheme = null;
try { storedTheme = localStorage.getItem(THEME_KEY); } catch {}
applyTheme(THEME_CYCLE.includes(storedTheme) ? storedTheme : timeBasedTheme());

themeToggle?.addEventListener('click', () => {
  const next = THEME_CYCLE[(THEME_CYCLE.indexOf(themeRoot.dataset.theme) + 1) % THEME_CYCLE.length];
  try { localStorage.setItem(THEME_KEY, next); } catch {}
  applyTheme(next);
});

let duskTicking = false;
const onDuskScroll = () => {
  if (themeRoot.dataset.theme !== 'sunset' || duskTicking) return;
  duskTicking = true;
  requestAnimationFrame(() => { updateDusk(); duskTicking = false; });
};
window.addEventListener('scroll', onDuskScroll, { passive: true });
window.addEventListener('resize', onDuskScroll, { passive: true });

const canvas = document.getElementById('case-stars');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (canvas) {
  const context = canvas.getContext('2d');
  const dots = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.1 + .15, a: Math.random() * .45 + .08, p: Math.random() * Math.PI * 2 }));
  const resize = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * pixelRatio);
    canvas.height = Math.floor(window.innerHeight * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };
  const draw = (time = 0) => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    dots.forEach((dot) => {
      context.beginPath();
      context.arc(dot.x * window.innerWidth, dot.y * window.innerHeight, dot.r, 0, Math.PI * 2);
      const opacity = reduceMotion ? dot.a : dot.a * (.62 + .38 * Math.sin(time * .001 + dot.p));
      context.fillStyle = `rgba(201, 215, 255, ${opacity})`;
      context.fill();
    });
    if (!reduceMotion && !document.hidden) requestAnimationFrame(draw);
  };
  resize();
  draw();
  window.addEventListener('resize', () => { resize(); draw(); }, { passive: true });
}

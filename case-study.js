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
  'last-experiment': {
    slug: 'last-experiment',
    number: '02',
    category: 'Interaction design · Game concept',
    title: 'The Last Experiment',
    headline: 'Designing tension, feedback, and fast decisions in a survival FPS.',
    summary: 'The Last Experiment is a survival FPS concept where a professor must fight through the consequences of a failed experiment. The work explores how pacing, feedback, and environmental tension can support an immersive survival loop.',
    role: 'Game design & development',
    platform: 'Desktop game concept',
    tools: ['Unity', 'C#'],
    deliverables: 'Survival FPS concept, gameplay interaction, tension and feedback exploration',
    visual: 'experiment',
    challenge: 'A survival game asks players to make rapid choices under pressure. The interaction design has to make threat, urgency, and available actions legible without removing the uncertainty that creates tension.',
    focus: 'A tense encounter loop where environmental signals, player feedback, and escalating danger work together instead of competing for attention.',
    decisions: [
      { title: 'Signal risk without overexplaining', text: 'Visual cues and pacing can point players toward danger while preserving the uncertainty that makes a survival encounter feel alive.' },
      { title: 'Keep critical feedback scannable', text: 'The player needs to recognise important state changes quickly. Interface and environmental feedback should support that decision without taking over the screen.' },
      { title: 'Let pressure shape the rhythm', text: 'The concept treats tension as a sequence: discovery, reaction, commitment, and recovery—not a constant wall of intensity.' },
    ],
    flow: [
      { title: '01 · Enter', text: 'Read the environment and recognise a potential threat.' },
      { title: '02 · Decide', text: 'Choose how to navigate, engage, or conserve resources.' },
      { title: '03 · Respond', text: 'Act under pressure while the game communicates changing state.' },
      { title: '04 · Adapt', text: 'Use the outcome to adjust strategy for the next encounter.' },
    ],
    validate: ['Can players recognise their most important state information at a glance?', 'Do the game’s cues create tension without becoming visual noise?', 'Does the encounter loop encourage meaningful decisions rather than repetition?'],
  },
  'ebook-shop': {
    slug: 'ebook-shop',
    number: '03',
    category: 'UI/UX design · Commerce concept',
    title: 'E-book Shop',
    headline: 'Making a digital bookstore feel simple to browse, buy, and return to.',
    summary: 'E-book Shop is a digital reading and commerce concept focused on a smooth experience for browsing titles, making a purchase, and moving into reading without unnecessary friction.',
    role: 'UI/UX design',
    platform: 'Responsive web concept',
    tools: ['Figma', 'Procreate', 'Adobe Photoshop'],
    deliverables: 'Wireframes, interface direction, browsing and purchase flow',
    image: 'images/ebookshop.png',
    imageAlt: 'E-book shop interface design',
    challenge: 'An e-book experience needs to balance two mindsets: discovering the right title and getting into the reading experience. The interface should help people move between both without making either feel secondary.',
    focus: 'A calm commerce journey that makes content easy to discover while keeping purchasing and reading transitions clear.',
    decisions: [
      { title: 'Prioritise content discovery', text: 'The visual direction gives titles and categories room to lead, so the browsing experience can feel editorial rather than crowded.' },
      { title: 'Keep the purchase path calm', text: 'The journey is structured to reduce unnecessary decisions between interest and checkout, making the path to ownership easy to understand.' },
      { title: 'Connect purchase to reading', text: 'The product concept treats reading as the destination of the commerce flow, not an unrelated experience after the transaction.' },
    ],
    flow: [
      { title: '01 · Browse', text: 'Explore titles and categories through an easy-to-scan catalogue.' },
      { title: '02 · Consider', text: 'Review a book with enough information to make a confident choice.' },
      { title: '03 · Purchase', text: 'Move through a focused checkout flow with minimal interruption.' },
      { title: '04 · Read', text: 'Transition into a digital reading experience with continuity.' },
    ],
    validate: ['Can a first-time visitor find a relevant title quickly?', 'Is the handoff from book discovery to checkout clear and reassuring?', 'Do people understand how to return to purchased books when they come back?'],
  },
};

const params = new URLSearchParams(window.location.search);
const study = caseStudies[params.get('project')] || caseStudies.studysynth;
const studyOrder = Object.values(caseStudies);
const currentIndex = studyOrder.findIndex((item) => item.slug === study.slug);
const nextStudy = studyOrder[(currentIndex + 1) % studyOrder.length];
const previousStudy = studyOrder[(currentIndex - 1 + studyOrder.length) % studyOrder.length];

const tags = (items) => items.map((item) => `<li>${item}</li>`).join('');
const decisions = study.decisions.map((decision, index) => `
  <article class="case-decision">
    <span>${String(index + 1).padStart(2, '0')}</span>
    <h3>${decision.title}</h3>
    <p>${decision.text}</p>
  </article>
`).join('');
const flow = study.flow.map((step) => `
  <li><span>${step.title}</span><p>${step.text}</p></li>
`).join('');
const validation = study.validate.map((item) => `<li>${item}</li>`).join('');

const experimentVisual = `
  <div class="case-experiment-visual" aria-label="Abstract survival game interface visual" role="img">
    <div class="case-experiment-grid"></div>
    <div class="case-experiment-glow"></div>
    <div class="case-experiment-top"><span>EXPERIMENT / 07</span><span>SECTOR 04</span></div>
    <div class="case-experiment-target"><i></i><b></b></div>
    <div class="case-experiment-readout"><span>CONTAINMENT</span><strong>UNSTABLE</strong></div>
    <p>read the threat · choose the response</p>
  </div>
`;

const projectVisual = study.visual === 'experiment'
  ? experimentVisual
  : `<figure class="case-image-visual"><img src="${study.image}" alt="${study.imageAlt}" /><figcaption>${study.title} · project interface</figcaption></figure>`;

document.title = `${study.title} Case Study — Celine Emily`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `${study.title}: UI/UX case study by Celine Emily.`);

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
          <div><span>Delivered</span><strong>${study.deliverables}</strong></div>
        </div>
      </section>

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

      <nav class="case-next" aria-label="More case studies">
        <a href="project.html?project=${previousStudy.slug}" class="case-next-card case-next-previous"><span>Previous case</span><strong>← ${previousStudy.title}</strong></a>
        <a href="project.html?project=${nextStudy.slug}" class="case-next-card"><span>Next case</span><strong>${nextStudy.title} →</strong></a>
      </nav>
    </article>
  `;
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

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

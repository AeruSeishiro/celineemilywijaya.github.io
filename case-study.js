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
  'narrow-to-now': {
    slug: 'narrow-to-now',
    number: '05',
    layout: 'detailed',
    title: 'Narrow to Now',
    summary: 'Narrow to Now helps Goodreads readers with a long Want to Read list pick one book that fits how they feel tonight. A prototype craft case study.',
    detail: {
      hero: {
        kicker: 'DV2008 · Individual case study',
        titleHtml: 'Narrow <em>to Now.</em>',
        headline: 'Helping Goodreads readers with a long Want to Read list pick one book that fits how they feel tonight.',
        note: 'A prototype craft case study.',
        meta: [
          { label: 'Role', value: 'Ideation, concept testing, prototype &amp; UI' },
          { label: 'Team', value: 'Group 5 “Beng-Beng”, 4 designers' },
          { label: 'Timeline', value: 'Sep to Nov 2026' },
          { label: 'Tools', value: 'Figma (UI, prototyping, variables), FigJam' },
        ],
        image: 'images/narrow-to-now/hero-picks.png',
        imageAlt: 'Narrow to Now hi-fi prototype: “Your 3 picks for this weekend”, three books from the reader’s Want to Read list, each with an “Is it for me?” card',
        caption: 'The A3 hi-fi prototype: three picks from the reader’s own Want to Read list, each with an “Is it for me?” card.',
      },
      overview: {
        kicker: 'Overview',
        title: 'The problem and', titleEm: 'what we set out to do.',
        context: {
          lead: 'Goodreads is where readers track books they want to read.',
          text: 'But in our Assignment 1 research with university-aged readers, very few actually found their books there.',
          statsLabel: 'Where 41 readers found books',
          stats: [
            { value: 28, label: 'Friends and family' },
            { value: 28, label: 'TikTok or Instagram' },
            { value: 6, label: 'Goodreads', highlight: true },
          ],
          total: 41,
        },
        problem: {
          text: 'Readers save books in five different places, and their lists grow so long that saving stops helping.',
          quote: 'They get stuck at the last step: picking one book to actually read.',
        },
        objectives: ['Help readers choose one book from a list of 40 or more.', 'Keep the reason a book was saved, so it still makes sense months later.', 'Leave the final choice with the reader.'],
      },
      contribution: {
        kicker: 'My contribution',
        title: 'What I owned,', titleEm: 'and what the team did.',
        rows: [
          { who: 'Me', title: 'What I owned', mine: true, list: ['Sketched ideas A to D: “What should I read now?”, “Save from anywhere”, “Why I saved this”, “Trusted voices first”', 'Ran the A2 concept test (idea A vs idea E) and turned what testers said into design changes', 'Designed and built the prototype and UI in A2 and again in A3: 30+ linked web screens, edge states, a small component set and answers that carry through the flow'] },
          { who: 'Team', title: 'Team effort', list: ['Assignment 1 research and synthesis', 'Scoring 12 ideas (A to L) on an impact and effort matrix', 'Competitor analysis, user flow, success metrics, the A3 usability round and the presentations'] },
        ],
        callout: {
          label: 'A challenge I personally addressed',
          text: 'In concept testing, one reader could not answer the mood question and another wanted to skip it. I redesigned every question to include an “Any” option and added a “Change answers” link on the picks page, so nobody feels stuck with the first three books.',
        },
      },
      process: {
        kicker: 'Process',
        title: 'From research insight', titleEm: 'to one chosen direction.',
        steps: [
          { title: 'Research insight', text: 'Readers find books elsewhere, save them everywhere, and still cannot choose from a list of 40 or more.' },
          { title: 'Ideation, A to L', text: '12 ideas in total. I sketched A to D, from a mood-based shortlist to saving a book straight from TikTok.' },
          { title: 'Concept testing', text: 'Idea A against idea E, “This or That”, with 5 readers. 3 of 5 would use A, 1 chose E, 1 said it depends.' },
          { title: 'Chosen direction', text: 'Narrow to Now: save a book with a reason (C), narrow to three picks (A), judge each with an “Is it for me?” card (K).' },
        ],
        figure: {
          image: 'images/narrow-to-now/sketches.png',
          alt: 'Four hand-drawn sketches on a FigJam board: A “What should I read now?”, B “Save from anywhere”, C “Why I saved this”, D “Friends first”, with handwritten notes',
          caption: 'My four sketches on our A2 FigJam board: A “What should I read now?”, B “Save from anywhere”, C “Why I saved this”, D “Trusted voices first”.',
        },
      },
      decisions: {
        kicker: 'Design decisions',
        title: 'Decisions that', titleEm: 'shaped the solution.',
        cards: [
          { title: 'Go with A, not E', rows: [['Decision', 'Build the “What should I read now?” flow.'], ['Why', 'It reaches a shortlist in fewer steps, and fits someone who wants to start reading soon.'], ['Evidence', '3 of 5 testers would use A. One felt E suits browsing, while A suits “picking for this week”.']] },
          { title: 'Add “Any” and “Change answers”', rows: [['Decision', 'Every question gets an “Any” option, and picks can be redone.'], ['Why', 'Mood is hard to name for some readers, and others only care about length.'], ['Evidence', 'One tester could not answer mood, another wanted to skip it.']] },
          { title: 'Merge C, A and K into one flow', rows: [['Decision', 'Combine saving a reason, a three-book shortlist and a judging card.'], ['Why', 'Without the saved reason, three picks are random titles. K helps weigh the three.'], ['Evidence', 'Scoring put A first, and K scored the full 12 but only works as a step after A.']] },
        ],
      },
      refinement: {
        kicker: 'Assignment 3 · Refinement',
        title: 'Three changes I made', titleEm: 'after the A2 feedback.',
        intro: 'Our lecturer liked the research link but asked three hard questions: would people really add a reason, what happens if they don’t, and do the three features feel like one product? I kept the direction and reworked the prototype around those questions.',
        changes: [
          { title: 'Save first, reason after', image: 'images/narrow-to-now/change-save-first.png', alt: 'Book page with the optional “Why are you saving it?” box shown after the book is saved', before: 'Want to Read asked why before it saved anything. It felt like a hurdle.', after: 'The book saves on the first tap. The reason box is optional and Skip is as easy as Add.' },
          { title: 'Picks work with no reasons', image: 'images/narrow-to-now/change-no-reasons.png', alt: 'Want to Read shelf where books without a saved reason show “No reason yet” with an Add link', before: 'The picks depended on saved reasons, so an empty reason meant a weak pick.', after: 'Picks match on reader tags (mood, pace, length). Books without a reason say “No reason yet”, with a quiet Add link.' },
          { title: 'One flow with a real ending', image: 'images/narrow-to-now/change-real-ending.png', alt: 'Currently Reading shelf showing the picked book, carrying its “Saved because” label', before: 'Saving, picking and judging felt like three separate features, and a pick just stopped.', after: 'One “Saved because” label follows the book everywhere, and every pick ends in Start reading, Not now or Remove.' },
        ],
      },
      craft: {
        kicker: 'Prototype craft',
        title: 'How I built', titleEm: 'the prototype.',
        flow: ['Save a book + reason', 'Want to Read shelf', 'Help me choose', 'Three picks', '“Is it for me?” card'],
        screens: [
          { image: 'images/narrow-to-now/screen-help-me-choose.png', alt: 'Help me choose dialog asking “What do you feel like?” with mood options including Any', caption: 'Help me choose asks one thing at a time. Every question has “Any”, and the answers so far stay visible.' },
          { image: 'images/narrow-to-now/screen-book-page.png', alt: 'Book page opened from a pick, with Start reading as the only filled button', caption: 'The book page from a pick. Start reading is the only filled button; Not now and Remove stay quiet.' },
          { image: 'images/narrow-to-now/screen-no-match.png', alt: 'No-match state: “No books on your list match all three answers” with one-tap options to loosen an answer', caption: 'If nothing matches, readers get the closest books and a one-tap way to loosen an answer, not an empty page.' },
          { image: 'images/narrow-to-now/screen-skip-reason.png', alt: 'Book page with a “Saved to Want to Read” toast offering “Add a reason”', caption: 'Skipping the reason still saves the book. The toast offers to add one later.' },
        ],
        cards: [
          { title: 'Answers that carry through', body: ['Mood, time and length are stored as Figma variables. The picks title and the “Based on” chips change with what you chose.', 'Branches: “Long (450+)” leads to the no-match state, “Dark” to a two-pick state, so testers could hit the edge cases for real.'] },
          { title: 'Built on Goodreads’ own look', body: ['Merriweather and Lato, Goodreads’ cream and brown, and six components (button, label, cover, “Is it for me?” panel, toast, nav) that build every screen.', 'A baseline copy of today’s Want to Read page let us test old against new.'] },
          { title: 'Accessible by default', body: ['Goodreads’ green button was 3.4:1 against white, under the 4.5:1 minimum. I moved main buttons to their darker green, 5.2:1.', '44 px tap targets, and a selected answer gets a tick as well as a fill, so colour is never the only signal.'] },
        ],
      },
      outcome: {
        kicker: 'Final solution &amp; testing',
        title: 'What we', titleEm: 'ended up with.',
        lead: 'Narrow to Now takes a list of 40+ saved books down to three that fit tonight, and keeps the reader in charge of the final pick. Saving, choosing and judging now run as one loop that ends with a book on the Currently Reading shelf.',
        tested: 'We tested the A3 prototype with five readers aged 20 to 23 over Zoom on 7 Nov. Each picked a cosy, short book on Goodreads today and on Narrow to Now, saved a friend’s recommendation, and dealt with picks that didn’t fit.',
        note: 'With five people these are signals, not proof, so I report counts rather than percentages.',
        metrics: [
          { label: 'Picked a book within 3 minutes', before: '3/5', after: '5/5' },
          { label: 'Median time to pick', before: '148 s', after: '88 s' },
          { label: 'Confidence in the pick (1–5)', before: '2.8', after: '4.0' },
          { label: 'Ease of the task (1–7)', before: '3.8', after: '5.8' },
          { label: 'Added a reason when saving', before: 'new step', after: '3/5' },
        ],
        findings: ['3 of 5 added a reason when saving. The 2 who skipped then checked whether the book had actually saved.', '2 of 5 treated Shuffle and Change answers as the same button when the picks didn’t fit.', '4 of 5 checked the mood tags and the “Some readers found” line before choosing.'],
      },
      reflection: {
        kicker: 'Reflection',
        title: 'What', titleEm: 'I learned.',
        cards: [
          { title: 'What worked', text: 'Testing A against E early made the direction easy to defend, and building edge states into the prototype meant the A2 feedback questions had real answers on screen.' },
          { title: 'What didn’t', text: 'My A2 prototype asked why before it saved anything, and the picks only worked if people had added a reason. I was designing for the reader who fills everything in. The feedback, and then 2 of 5 testers skipping the reason, showed me I had to design for the person who skips.' },
          { title: 'What I’d improve', text: 'Testing showed two gaps. People who skipped the reason weren’t sure the book saved, so I’d confirm the save first. Shuffle and Change answers got mixed up, so I’d rename them “Show 3 more picks” and “Change my preferences” and retest.' },
          { title: 'How I grew', text: 'I went from linking static screens to building a prototype that remembers answers and branches, so testers could reach the edge cases on their own. I also learned to run a test I can compare, with time to pick and confidence scores, instead of only collecting opinions.' },
        ],
      },
    },
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
document.querySelector('meta[name="description"]')?.setAttribute('content', study.status || study.layout ? study.summary : `${study.title}: UI/UX case study by Celine Emily.`);

/* ─── Detailed layout (Narrow to Now) — editorial, site brand ─── */
const pad2 = (n) => String(n).padStart(2, '0');
const ntnStars = (items) => `<ul class="ntn-stars">${items.map((t) => `<li>${t}</li>`).join('')}</ul>`;
const ntnHead = (sec, i, aside = '') => `
  <div class="ntn-head${aside ? ' has-aside' : ''}">
    <div>
      <p class="case-section-label"><span>${pad2(i)}</span> ${sec.kicker}</p>
      <h2 class="ntn-h2" id="ntn-s${i}">${sec.title} <em>${sec.titleEm}</em></h2>
    </div>
    ${aside ? `<p class="ntn-aside">${aside}</p>` : ''}
  </div>
`;
const ntnFig = (n, src, w, h, alt, caption, cls = '') => `
  <figure class="ntn-fig ${cls}">
    <div class="ntn-fig-frame" data-zoom data-fig="${pad2(n)}" data-caption="${caption}"><img src="${src}" width="${w}" height="${h}" alt="${alt}" loading="lazy" decoding="async" /></div>
    <figcaption><span>Fig. ${pad2(n)}</span>${caption}</figcaption>
  </figure>
`;
const ntnSec = (i, inner, cls = '') => `<section class="ntn-section ${cls}" aria-labelledby="ntn-s${i}"><div class="ntn-wrap">${inner}</div></section>`;

const renderDetailed = (s) => {
  const { hero, overview, contribution, process, decisions, refinement, craft, outcome, reflection } = s.detail;
  const { context, problem } = overview;
  let fig = 0;
  return `
    <article class="case-study-shell ntn case-study-${s.slug}">
      <section class="ntn-hero">
        <div class="ntn-wrap">
          <a class="case-back" href="index.html#work"><span>←</span> Back to selected work</a>
          <div class="ntn-hero-grid">
            <div class="ntn-hero-copy">
              <p class="case-kicker"><span>${s.number}</span>${hero.kicker}</p>
              <h1 class="ntn-h1">${hero.titleHtml}</h1>
              <p class="ntn-headline">${hero.headline}</p>
              <p class="ntn-hero-note"><span aria-hidden="true">✦</span> ${hero.note}</p>
            </div>
            <dl class="ntn-meta ntn-liquid">
              ${hero.meta.map((m) => `<div><dt>${m.label}</dt><dd>${m.value}</dd></div>`).join('')}
            </dl>
          </div>
          <div class="ntn-hero-visual">
            <div class="ntn-orbit" aria-hidden="true"></div>
            ${ntnFig(++fig, hero.image, 1440, 960, hero.imageAlt, hero.caption, 'ntn-fig-hero')}
          </div>
        </div>
      </section>

      ${ntnSec(1, `
        ${ntnHead(overview, 1)}
        <div class="ntn-context">
          <div class="ntn-context-copy">
            <p class="ntn-sub">Context</p>
            <p class="ntn-lead">${context.lead}</p>
            <p class="ntn-text">${context.text}</p>
          </div>
          <div class="ntn-tally">
            <p class="ntn-sub">${context.statsLabel}</p>
            <ul>
              ${context.stats.map((st) => `
                <li class="${st.highlight ? 'is-low' : ''}">
                  <strong>${st.value}<small>/${context.total}</small></strong>
                  <span>${st.highlight ? '✦ ' : ''}${st.label}</span>
                  <i style="--w:${(st.value / context.total * 100).toFixed(1)}%"></i>
                </li>`).join('')}
            </ul>
          </div>
        </div>
        <blockquote class="ntn-problem">
          <p class="ntn-sub">Problem</p>
          <p class="ntn-text">${problem.text}</p>
          <p class="ntn-quote">${problem.quote}</p>
        </blockquote>
        <div class="ntn-objectives">
          <p class="ntn-sub">Objectives</p>
          <ol>${overview.objectives.map((o, i) => `<li><span>${['i.', 'ii.', 'iii.'][i]}</span><p>${o}</p></li>`).join('')}</ol>
        </div>
      `)}

      ${ntnSec(2, `
        ${ntnHead(contribution, 2)}
        <div class="ntn-ledger">
          ${contribution.rows.map((r) => `
            <div class="ntn-ledger-row${r.mine ? ' is-mine' : ''}">
              <div class="ntn-ledger-meta"><span>${r.who}</span><h3>${r.title}</h3></div>
              ${ntnStars(r.list)}
            </div>`).join('')}
        </div>
        <aside class="ntn-callout">
          <div class="ntn-callout-orbit" aria-hidden="true"></div>
          <p class="ntn-sub">${contribution.callout.label}</p>
          <p class="ntn-callout-text">${contribution.callout.text}</p>
        </aside>
      `)}

      ${ntnSec(3, `
        ${ntnHead(process, 3)}
        <ol class="ntn-timeline">
          ${process.steps.map((st, i) => `
            <li>
              <span class="ntn-node" aria-hidden="true">✦</span>
              <p class="ntn-step-no">${pad2(i + 1)}</p>
              <h3>${st.title}</h3>
              <p class="ntn-text">${st.text}</p>
            </li>`).join('')}
        </ol>
        ${ntnFig(++fig, process.figure.image, 2400, 858, process.figure.alt, process.figure.caption)}
      `)}

      ${ntnSec(4, `
        ${ntnHead(decisions, 4)}
        <div class="ntn-seams ntn-seams-3">
          ${decisions.cards.map((c, i) => `
            <article class="ntn-decision">
              <span class="ntn-num">Decision ${pad2(i + 1)}</span>
              <h3>${c.title}</h3>
              <dl>${c.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
            </article>`).join('')}
        </div>
      `)}

      ${ntnSec(5, `
        ${ntnHead(refinement, 5, refinement.intro)}
        <div class="ntn-changes">
          ${refinement.changes.map((c, i) => `
            <article class="ntn-change${i % 2 ? ' is-flipped' : ''}">
              ${ntnFig(++fig, c.image, 1440, 900, c.alt, `Change ${pad2(i + 1)} · ${c.title}`)}
              <div class="ntn-change-copy">
                <span class="ntn-num">Change ${pad2(i + 1)}</span>
                <h3>${c.title}</h3>
                <div class="ntn-ba">
                  <div class="ntn-before"><span>Before</span><p>${c.before}</p></div>
                  <div class="ntn-after"><span>After</span><p>${c.after}</p></div>
                </div>
              </div>
            </article>`).join('')}
        </div>
      `)}

      ${ntnSec(6, `
        ${ntnHead(craft, 6)}
        <ol class="ntn-path">${craft.flow.map((f, i) => `<li><span>${pad2(i + 1)}</span>${f}</li>`).join('')}</ol>
        <div class="ntn-screens">
          ${craft.screens.map((sc) => ntnFig(++fig, sc.image, 1440, 900, sc.alt, sc.caption, 'ntn-fig-screen')).join('')}
        </div>
        <div class="ntn-craft">
          ${craft.cards.map((c, i) => `
            <article class="ntn-craft-card">
              <span class="ntn-num">Craft ${pad2(i + 1)}</span>
              <h3>${c.title}</h3>
              ${c.body.map((p) => `<p class="ntn-text">${p}</p>`).join('')}
            </article>`).join('')}
        </div>
      `)}

      ${ntnSec(7, `
        ${ntnHead(outcome, 7)}
        <p class="ntn-statement">${outcome.lead}</p>
        <div class="ntn-results">
          <div class="ntn-results-intro">
            <p class="ntn-sub">How we tested</p>
            <p class="ntn-text">${outcome.tested}</p>
            <p class="ntn-small">${outcome.note}</p>
          </div>
          <table class="ntn-score">
            <caption>Results · Goodreads today → Narrow to Now</caption>
            <thead><tr><th scope="col">Measure</th><th scope="col">Today</th><th scope="col">Narrow to Now</th></tr></thead>
            <tbody>
              ${outcome.metrics.map((m) => `<tr><th scope="row">${m.label}</th><td class="${m.before === 'new step' ? 'is-new' : ''}">${m.before}</td><td>${m.after}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div class="ntn-findings">
          <p class="ntn-sub">What we saw</p>
          ${ntnStars(outcome.findings)}
        </div>
      `)}

      ${ntnSec(8, `
        ${ntnHead(reflection, 8)}
        <div class="ntn-notes">
          ${reflection.cards.map((c, i) => `
            <article>
              <span class="ntn-num">${pad2(i + 1)}</span>
              <h3>${c.title}</h3>
              <p class="ntn-text">${c.text}</p>
            </article>`).join('')}
        </div>
      `)}

      <nav class="case-next" aria-label="More case studies">
        <a href="project.html?project=${previousStudy.slug}" class="case-next-card case-next-previous"><span>Previous case</span><strong>← ${previousStudy.title}</strong></a>
        <a href="project.html?project=${nextStudy.slug}" class="case-next-card"><span>Next case</span><strong>${nextStudy.title} →</strong></a>
      </nav>

      <dialog class="art-dialog ntn-lightbox" id="ntnLightbox" aria-labelledby="ntnLightboxCaption">
        <button class="dialog-close" type="button" aria-label="Close image preview">×</button>
        <img id="ntnLightboxImage" src="" alt="" />
        <div class="art-dialog-caption ntn-lightbox-bar">
          <div>
            <span id="ntnLightboxCount"></span>
            <h3 id="ntnLightboxCaption"></h3>
          </div>
          <div class="ntn-lightbox-nav">
            <button type="button" data-step="-1" aria-label="Previous image">←</button>
            <button type="button" data-step="1" aria-label="Next image">→</button>
          </div>
        </div>
      </dialog>
    </article>
  `;
};

/* image lightbox: any [data-zoom] frame opens a larger view; arrows step through */
const initLightbox = (scope) => {
  const dialog = scope.querySelector('#ntnLightbox');
  const image = scope.querySelector('#ntnLightboxImage');
  const caption = scope.querySelector('#ntnLightboxCaption');
  const count = scope.querySelector('#ntnLightboxCount');
  const items = [...scope.querySelectorAll('[data-zoom]')];
  if (!dialog || !image || !items.length) return;
  const cursorLayer = () => [
    document.getElementById('cursor'),
    document.getElementById('cursorRing'),
    document.querySelector('.cursor-cross-h'),
    document.querySelector('.cursor-cross-v'),
  ].filter(Boolean);
  let current = 0;
  let opener = null;

  const show = (index) => {
    current = (index + items.length) % items.length;
    const item = items[current];
    const img = item.querySelector('img');
    image.src = img.currentSrc || img.src;
    image.alt = img.alt;
    caption.textContent = item.dataset.caption || img.alt;
    count.textContent = `Fig. ${item.dataset.fig || String(current + 1).padStart(2, '0')} of ${String(items.length).padStart(2, '0')}`;
  };

  items.forEach((item, index) => {
    const img = item.querySelector('img');
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `View larger: ${img ? img.alt : 'image'}`);
    const open = () => {
      opener = item;
      show(index);
      dialog.showModal();
      // <dialog> sits in the top layer; move the custom cursor in with it
      cursorLayer().forEach((el) => dialog.appendChild(el));
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });

  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog.querySelectorAll('[data-step]').forEach((btn) => btn.addEventListener('click', () => show(current + Number(btn.dataset.step))));
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') show(current + 1);
    if (event.key === 'ArrowLeft') show(current - 1);
  });
  dialog.addEventListener('close', () => {
    cursorLayer().forEach((el) => document.body.appendChild(el));
    opener?.focus();
  });
};

const root = document.getElementById('case-study');
if (root && study.layout === 'detailed') {
  document.body.classList.add('case-page-detailed');
  root.innerHTML = renderDetailed(study);
  initLightbox(root);
} else if (root) {
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

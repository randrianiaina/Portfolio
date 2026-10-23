const projects = [
  {
    name: 'Wizi Learn',
    type: 'product',
    label: 'EDTECH · WEB & MOBILE',
    labelEn: 'EDTECH · WEB & MOBILE',
    desc: 'Plateforme de quiz et de formation avec évaluations, parcours adaptés, suivi de progression et gestion des contenus.',
    descEn: 'Quiz and learning platform with assessments, tailored learning paths, progress tracking and content management.',
    stack: ['Laravel', 'React / Vite', 'Flutter', 'PostgreSQL'],
    github: 'https://github.com/mblitmanager/wizi-learn',
    demo: 'wizi-learn-demo.html'
  },
  {
    name: 'CRM de campagne de phoning',
    type: 'crm',
    label: 'CRM · TÉLÉPHONIE',
    labelEn: 'CRM · TELEPHONY',
    desc: 'Outil de suivi d’appels avec segmentation, orientation vers les équipes concernées et suivi des rappels. L’assistance IA propose des analyses ; la décision reste à l’opérateur.',
    descEn: 'Call-management tool with segmentation, routing to the right teams and follow-up tracking. AI assists with analysis; the operator remains in control.',
    stack: ['Laravel', 'Filament', 'Scoring', 'llama.cpp']
  },
  {
    name: 'AOPIA CRM',
    type: 'crm',
    label: 'CRM · PROCESSUS MÉTIER',
    labelEn: 'CRM · BUSINESS WORKFLOWS',
    desc: 'Personnalisation d’un CRM pour la prospection et la téléphonie : distribution des prospects, statuts, reporting et intégration Ringover.',
    descEn: 'CRM customization for prospecting and telephony, including lead routing, statuses, reporting and Ringover integration.',
    stack: ['EspoCRM', 'PHP', 'MySQL', 'Ringover']
  },
  {
    name: 'Allo Pro 24',
    type: 'crm',
    label: 'SERVICE · AUTOMATISATION',
    labelEn: 'SERVICE · AUTOMATION',
    desc: 'Écosystème de services associant site web, réflexion CRM, agenda, facturation et coordination. Un scénario de répondeur IA nocturne a également été étudié.',
    descEn: 'Service ecosystem combining a website, CRM planning, scheduling, billing and team coordination. An overnight AI answering service was also explored.',
    stack: ['WordPress', 'CRM', 'Téléphonie', 'IA vocale']
  },
  {
    name: 'ERP 8sens & données décisionnelles',
    type: 'data',
    label: 'ERP · DATA',
    labelEn: 'ERP · DATA',
    desc: 'Administration et développements spécifiques autour de l’ERP, modélisation SQL, flux ETL et tableaux de bord pour le suivi des activités.',
    descEn: 'ERP administration and tailored development, SQL data modeling, ETL pipelines and dashboards for operational reporting.',
    stack: ['8sens', 'SQL Server', 'SSIS', 'Power Query · DAX']
  },
  {
    name: 'Tests E2E pour plateforme de formation',
    type: 'data',
    label: 'QUALITÉ · AUTOMATISATION',
    labelEn: 'QUALITY · AUTOMATION',
    desc: 'Scénarios Playwright paramétrés par formation, niveau et parcours, avec captures d’écran pour faciliter la vérification des résultats.',
    descEn: 'Playwright scenarios organized by course, level and learner journey, with screenshots to support result verification.',
    stack: ['Playwright', 'Tests E2E', 'Automatisation']
  },
  {
    name: 'Infrastructure Linux & Proxmox',
    type: 'infra',
    label: 'SYSTÈMES · EXPLOITATION',
    labelEn: 'SYSTEMS · OPERATIONS',
    desc: 'Administration et diagnostic de serveurs et machines virtuelles : réseau, stockage, certificats, services web et bases de données.',
    descEn: 'Server and virtual-machine administration and troubleshooting across networking, storage, certificates, web services and databases.',
    stack: ['Linux', 'Proxmox', 'Apache', 'PostgreSQL']
  },
  {
    name: 'IA locale & reporting',
    type: 'ia',
    label: 'IA · EXPLORATION',
    labelEn: 'AI · EXPLORATION',
    desc: 'Exploration de modèles locaux et de leur intégration dans des outils métier pour l’analyse, le reporting et l’assistance.',
    descEn: 'Exploration of local models and their integration into business tools for analysis, reporting and assistance.',
    stack: ['Ollama', 'llama.cpp', 'LLM locaux']
  },
  {
    name: 'Transcription & comptes rendus',
    type: 'ia',
    label: 'APPLICATION DESKTOP',
    labelEn: 'DESKTOP APPLICATION',
    desc: 'Application desktop en Rust imaginée pour transcrire et résumer des réunions avec des modèles légers, y compris sur des machines sans GPU.',
    descEn: 'Rust desktop application designed to transcribe and summarize meetings with lightweight models, including on machines without a GPU.',
    stack: ['Rust', 'llama.cpp', 'LLM légers']
  },
  {
    name: 'Boutique e-commerce',
    type: 'product',
    label: 'APPLICATION WEB',
    labelEn: 'WEB APPLICATION',
    desc: 'Conception d’une boutique avec catalogue, panier, commande, paiement en ligne et interface d’administration.',
    descEn: 'E-commerce application with a product catalog, cart, checkout, online payments and an administration interface.',
    stack: ['PHP', 'SQL', 'Paiement en ligne']
  },
  {
    name: 'Migration PHP 7 vers PHP 8',
    type: 'data',
    label: 'MODERNISATION',
    labelEn: 'MODERNIZATION',
    desc: 'Reprise d’applications existantes pour PHP 8.x et optimisation de requêtes MySQL dans le cadre de migrations.',
    descEn: 'Updating existing applications to PHP 8.x and optimizing MySQL queries as part of migration work.',
    stack: ['PHP 8', 'MySQL', 'Symfony']
  },
  {
    name: 'LingoLive',
    type: 'ia',
    label: 'APPRENTISSAGE · IA',
    labelEn: 'LEARNING · AI',
    desc: 'Plateforme d’apprentissage des langues qui s’appuie sur Gemini, avec une interface Next.js, un back-end Express et Supabase.',
    descEn: 'Language-learning platform powered by Gemini, with a Next.js interface, an Express back end and Supabase.',
    stack: ['Next.js', 'Express', 'Gemini', 'Supabase']
  },
  {
    name: 'Villa Solara — architecture de site',
    type: 'product',
    label: 'WEB · EXPÉRIENCE UTILISATEUR',
    labelEn: 'WEB · USER EXPERIENCE',
    desc: 'Architecture de l’information d’un site de villa : organisation des pages, des contenus et des parcours de navigation.',
    descEn: 'Information architecture for a villa website, organizing pages, content and navigation journeys.',
    stack: ['Architecture de l’information', 'UX', 'HTML']
  },
  {
    name: 'POS Flutter',
    type: 'product',
    label: 'APPLICATION MÉTIER',
    labelEn: 'BUSINESS APPLICATION',
    desc: 'Application de point de vente et de gestion d’inventaire pensée pour faciliter le suivi des opérations et des stocks.',
    descEn: 'Point-of-sale and inventory application designed to make operations and stock easier to track.',
    stack: ['Flutter', 'POS', 'Inventaire']
  }
];

const grid = document.getElementById('project-grid');
const filters = document.querySelectorAll('.filter');
const countLabel = document.querySelector('#project-count');
let activeFilter = 'all';
function render(filter = activeFilter) {
  activeFilter = filter;
  const visible = filter === 'all' ? projects : projects.filter(project => project.type === filter);
  const isEnglish = document.documentElement.lang === 'en';
  if (countLabel) countLabel.textContent = visible.length;
  grid.innerHTML = visible.map((project, index) => `
    <article class="project-card" data-type="${project.type}">
      <span class="project-index">${String(index + 1).padStart(2,'0')} / ${String(visible.length).padStart(2,'0')}</span>
      <h3>${project.name}</h3>
      <p>${isEnglish ? project.descEn : project.desc}</p>
      <div class="project-bottom"><div class="project-stack">${project.stack.map(item => `<span>${item}</span>`).join('')}</div><div class="project-actions"><span class="project-type">${isEnglish ? project.labelEn : project.label}</span>${project.github ? `<a class="project-link" href="${project.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}${project.demo ? `<a class="project-link project-demo" href="${project.demo}" target="_blank" rel="noopener">${isEnglish ? 'Demo' : 'Démo'} ↗</a>` : ''}</div></div>
    </article>`).join('');
}
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    item.classList.remove('active');
    item.setAttribute('aria-pressed', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  render(button.dataset.filter);
}));
render();

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const updateMenuLabel = () => {
  if (!menu) return;
  const open = menu.getAttribute('aria-expanded') === 'true';
  const isEnglish = document.documentElement.lang === 'en';
  menu.setAttribute('aria-label', open
    ? (isEnglish ? 'Close menu' : 'Fermer le menu')
    : (isEnglish ? 'Open menu' : 'Ouvrir le menu'));
};
const setMenuOpen = open => {
  if (!menu || !nav) return;
  nav.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
};
menu?.addEventListener('click', () => setMenuOpen(menu.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenuOpen(false);
});
window.addEventListener('portfolio:locale-change', () => {
  render();
  updateMenuLabel();
});

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();

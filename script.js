const projects = [
  {name:'EspoCRM',type:'crm',label:'CRM & gestion',desc:'Instance CRM principale avec administration customisée, tests automatisés et scripts de migration.',stack:['PHP','Docker','Playwright']},
  {name:'crmfilament',type:'crm',label:'CRM & gestion',desc:'Application multi-portails pour la gestion documentaire et les workflows de NsConseil, AlloPro et SuperAdmin.',stack:['Laravel 12','Filament','Workflows']},
  {name:'CRM / crmAi / crmfila',type:'crm',label:'CRM & gestion',desc:'Explorations et évolutions locales autour du CRM, de l’assistance IA et des processus commerciaux.',stack:['CRM','IA','PHP']},
  {name:'partner-connect-crm',type:'crm',label:'CRM & gestion',desc:'Espace de connexion partenaires pensé pour fluidifier le partage d’informations commerciales.',stack:['CRM','API','Portail']},
  {name:'freellmapi',type:'ia',label:'IA & automation',desc:'API d’accès unifié aux Large Language Models pour intégrer l’IA aux applications métier.',stack:['API','LLM','Backend']},
  {name:'AIQuizGenius',type:'ia',label:'IA & automation',desc:'Application de génération de quiz pédagogiques basée sur l’intelligence artificielle.',stack:['GenAI','Web app','Éducation']},
  {name:'vision2html',type:'ia',label:'IA & automation',desc:'Conversion et génération d’interfaces web assistées par vision et intelligence artificielle.',stack:['Vision','IA','UI']},
  {name:'review-genie',type:'ia',label:'IA & automation',desc:'Outil d’aide à l’analyse et à la génération de contenus de retour utilisateur.',stack:['IA','Automation','Web']},
  {name:'pappers-collect',type:'data',label:'Data & outils',desc:'Collecte et enrichissement de leads via l’API Pappers pour qualifier des prospects B2B.',stack:['API Pappers','B2B','Data']},
  {name:'pappers-locator',type:'data',label:'Data & outils',desc:'Recherche et localisation de données entreprises pour accélérer la prospection.',stack:['API','Data','Recherche']},
  {name:'LingoLive',type:'ia',label:'IA & automation',desc:'Plateforme d’apprentissage des langues qui utilise Gemini pour accompagner la pratique et les échanges. Front Next.js, back Express et données avec Supabase.',stack:['Next.js','Express','Gemini','Supabase']},
  {name:'POEMS',type:'data',label:'Data & outils',desc:'Outil métier historique pour structurer les informations et les opérations d’équipe.',stack:['Outil métier','Data']},
  {name:'QR Shortener',type:'data',label:'Data & outils',desc:'Génération et gestion de liens courts et QR codes pour partager une information rapidement.',stack:['Web','QR','Utility']},
  {name:'NSCONSEILS / AOPIA',type:'desktop',label:'Bureau / local',desc:'Projets repérés sur le bureau : conseil, automatisation et expérimentations applicatives.',stack:['Projet local','Conseil']},
  {name:'AlloPro24',type:'desktop',label:'Bureau / local',desc:'Suite locale comprenant un espace admin, des flux opérationnels et un traitement d’équipe.',stack:['Projet local','Admin','Ops']},
  {name:'Pointage',type:'desktop',label:'Bureau / local',desc:'Application locale de suivi du temps et des présences pour les équipes.',stack:['Projet local','Suivi']},
  {name:'Active Noise Cancelling',type:'desktop',label:'Bureau / local',desc:'Exploration technique autour de l’audio et de la réduction active du bruit.',stack:['Projet local','Audio']},
  {name:'artisan-finder',type:'github',label:'GitHub · produit',desc:'Application de recherche et de mise en relation autour des artisans et services de proximité.',stack:['TypeScript','Recherche','Vercel'],github:'https://github.com/mblitmanager/artisan-finder'},
  {name:'v0-agent-for-business-data',type:'github',label:'GitHub · data & IA',desc:'Agent orienté données métier pour explorer, structurer et exploiter des informations d’entreprise.',stack:['TypeScript','Agent IA','Data'],github:'https://github.com/mblitmanager/v0-agent-for-business-data',demo:'https://v0-agent-for-business-data.vercel.app'},
  {name:'vtigercrm',type:'github',label:'GitHub · CRM',desc:'Travail et expérimentation autour d’une plateforme CRM open source en PHP.',stack:['PHP','CRM','Open source'],github:'https://github.com/mblitmanager/vtigercrm'},
  {name:'wizi-sy-front',type:'github',label:'GitHub · application',desc:'Interface front-end d’une solution de gestion et d’apprentissage orientée produit.',stack:['TypeScript','Front-end','Vercel'],github:'https://github.com/mblitmanager/wizi-sy-front',demo:'https://wizi-learn-test.vercel.app'},
  {name:'AI-Assistant',type:'github',label:'GitHub · IA',desc:'Assistant expérimental pour connecter intelligence artificielle et usages applicatifs.',stack:['Python','IA','Assistant'],github:'https://github.com/mblitmanager/AI-Assistant'},
  {name:'monday-project-hub',type:'github',label:'GitHub · gestion',desc:'Hub de suivi et d’organisation de projets inspiré des outils collaboratifs modernes.',stack:['TypeScript','Productivité','Hub'],github:'https://github.com/mblitmanager/monday-project-hub'},
  {name:'content-guard-vault',type:'github',label:'GitHub · sécurité',desc:'Espace de protection et de gestion de contenus sensibles dans une interface applicative.',stack:['TypeScript','Sécurité','Vault'],github:'https://github.com/mblitmanager/content-guard-vault'},
  {name:'learn-quest-duo',type:'github',label:'GitHub · learning',desc:'Expérience d’apprentissage ludique pensée pour la progression et l’engagement utilisateur.',stack:['TypeScript','Éducation','UX'],github:'https://github.com/mblitmanager/learn-quest-duo'},
  {name:'quiz-generator',type:'github',label:'GitHub · IA & learning',desc:'Générateur de quiz pédagogique publié depuis un dépôt Python avec une démo en ligne.',stack:['Python','GenAI','Vercel'],github:'https://github.com/mblitmanager/quiz-generator',demo:'https://quiz-generator-one-gules.vercel.app'},
  {name:'serveur-notification',type:'github',label:'GitHub · backend',desc:'Service de notifications pour orchestrer des alertes et événements applicatifs.',stack:['JavaScript','Backend','Vercel'],github:'https://github.com/mblitmanager/serveur-notification',demo:'https://serveur-notification.vercel.app'},
  {name:'code-wizard-ai-fusion',type:'github',label:'GitHub · IA & code',desc:'Expérimentation autour de l’assistance au développement et de la génération de code.',stack:['TypeScript','IA','Developer tool'],github:'https://github.com/mblitmanager/code-wizard-ai-fusion'},
  {name:'video-tutor-scribe-cut',type:'github',label:'GitHub · média',desc:'Outil orienté tutoriels vidéo, transcription et édition de contenus pédagogiques.',stack:['TypeScript','Vidéo','Productivité'],github:'https://github.com/mblitmanager/video-tutor-scribe-cut'},
  {name:'flipbook',type:'github',label:'GitHub · web',desc:'Expérience web de consultation de documents sous forme de livre numérique interactif.',stack:['TypeScript','UI','Web'],github:'https://github.com/mblitmanager/flipbook'},
  {name:'duolingo_quiz_app',type:'github',label:'GitHub · mobile learning',desc:'Application de quiz inspirée des mécaniques d’apprentissage mobile et de progression.',stack:['TypeScript','Quiz','Mobile'],github:'https://github.com/mblitmanager/duolingo_quiz_app'},
  {name:'Analyse-des-besoins',type:'github',label:'GitHub · cadrage',desc:'Dépôt public consacré à l’analyse et à la formalisation des besoins projet.',stack:['Analyse','Spécifications','HTML'],github:'https://github.com/mblitmanager/Analyse-des-besoins'},
  {name:'Wizi Learn',type:'product',label:'Application multi-plateforme',desc:'Application de quiz et d’apprentissage disponible sur plusieurs plateformes, avec un back-end Laravel ou Node.js et des interfaces React, Vue et Flutter pour iOS et Android.',stack:['Laravel / Node.js','React','Vue','Flutter'],github:'https://github.com/mblitmanager/wizi-learn'},
  {name:'POS Flutter',type:'product',label:'Application métier',desc:'Application de point de vente et de gestion d’inventaire conçue pour suivre les opérations commerciales et les stocks.',stack:['Flutter','POS','Inventaire']},
  {name:'Do Not Disturb',type:'product',label:'Solution entreprise',desc:'Plateforme Flutter de redirection d’appel lorsque l’utilisateur est occupé : les appels sont pris en charge sans interrompre l’activité, pour ne manquer aucun contact important.',stack:['Flutter','Téléphonie','Entreprise']},
];

const grid = document.getElementById('project-grid');
const filters = document.querySelectorAll('.filter');
const countLabel = document.querySelector('#project-count');
if (countLabel) countLabel.textContent = projects.length;
function render(filter='all') {
  const visible = filter === 'all' ? projects : projects.filter(project => project.type === filter);
  grid.innerHTML = visible.map((project, index) => `
    <article class="project-card" data-type="${project.type}">
      <span class="project-index">${String(index + 1).padStart(2,'0')} / ${String(visible.length).padStart(2,'0')}</span>
      <h3>${project.name}</h3>
      <p>${project.desc}</p>
      <div class="project-bottom"><div class="project-stack">${project.stack.map(item => `<span>${item}</span>`).join('')}</div><div class="project-actions"><span class="project-type">${project.label}</span>${project.github ? `<a class="project-link" href="${project.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}${project.demo ? `<a class="project-link project-demo" href="${project.demo}" target="_blank" rel="noopener">Démo ↗</a>` : ''}</div></div>
    </article>`).join('');
}
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  render(button.dataset.filter);
}));
render();

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.setAttribute('aria-hidden', String(!open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

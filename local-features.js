(() => {
  const copy = {
    fr: { lang: 'Langue', ats: 'Générer mon CV ATS', generate: 'Générer mon CV ATS', project: 'Projet associé', download: 'Télécharger le CV', language: 'Français' },
    en: { lang: 'Language', ats: 'Generate my ATS CV', generate: 'Generate my ATS CV', project: 'Associated project', download: 'Download CV', language: 'English' },
  };
  const translations = {
    'Profil': 'Profile', 'Projets': 'Projects', 'Expertise': 'Expertise', 'Contact': 'Contact',
    'Parcours': 'Experience', 'Approche': 'Approach', 'Retour en haut': 'Back to top', 'Disponible pour de nouveaux défis': 'Available for new challenges',
    'Parcourir les projets': 'Browse projects', 'Tous': 'All', 'CRM & gestion': 'CRM & management', 'IA & automation': 'AI & automation',
    'Data & outils': 'Data & tools', 'Apps métier': 'Business apps', 'GitHub': 'GitHub', 'Voir le projet': 'View project', 'Démo': 'Demo',
    'Compétences': 'Skills', 'À propos': 'About', 'Me contacter': 'Contact me', 'Télécharger le CV': 'Download CV',
    'Systèmes métier': 'Business systems', 'Intégration IA': 'AI integration', 'Produit pédagogique': 'Learning product', 'Quiz multi-plateforme': 'Multi-platform quiz',
    'Vente & inventaire': 'Sales & inventory', 'Téléphonie d’entreprise': 'Business telephony', 'Apprentissage assisté': 'AI-assisted learning',
    'Expérimentation GenAI': 'GenAI experiment', 'Données & opérations': 'Data & operations',
    'Aller au contenu principal': 'Skip to main content', 'Chef de projet IT · Développement · Solutions métier': 'IT Project Manager · Development · Business Solutions',
    'Des besoins métiers aux': 'From business needs to', 'outils numériques fiables.': 'reliable digital tools.',
    'Produit': 'Product', 'du besoin au livrable': 'from need to delivery', 'Web · mobile': 'Web · mobile',
    'applications métier': 'business applications', 'Data · IA': 'Data · AI', 'intégration raisonnée': 'thoughtful integration',
    'profil / Madagascar': 'profile / Madagascar', 'Projet · Développement · Data': 'Project · Development · Data', '● disponible': '● available',
    '01 — Expertise': '01 — Expertise', 'Comprendre le besoin,': 'Understand the need,', 'livrer une solution utile.': 'deliver a useful solution.',
    'Cadrer & piloter': 'Scope & lead', 'Clarifier les besoins, formaliser les spécifications, planifier les travaux et coordonner les contributeurs jusqu’à la recette.': 'Clarify needs, document requirements, plan work and coordinate contributors through acceptance.',
    'Développer & intégrer': 'Develop & integrate', 'Concevoir des applications et API web, faire évoluer l’existant et connecter les outils utilisés par les équipes.': 'Build web applications and APIs, evolve existing systems and connect the tools teams use.',
    'Structurer la data': 'Structure data', 'Modéliser les données, construire des flux ETL et produire des rapports qui facilitent le suivi opérationnel.': 'Model data, build ETL pipelines and produce reports that support operational tracking.',
    'Déployer & fiabiliser': 'Deploy & improve reliability', 'Préparer les environnements, diagnostiquer les incidents et automatiser les tests pour sécuriser les évolutions.': 'Prepare environments, troubleshoot incidents and automate tests to make changes safer.',
    '02 — Projets': '02 — Projects', 'Des solutions ancrées': 'Solutions grounded', 'dans les usages.': 'in real usage.',
    'Une sélection de projets métier et de travaux techniques, du CRM à l’infrastructure, en passant par les produits web et mobiles.': 'A selection of business and technical projects, spanning CRM, infrastructure, and web and mobile products.',
    'CRM & gestion': 'CRM & management', 'Web & mobile': 'Web & mobile', 'Data & qualité': 'Data & quality', 'Infrastructure': 'Infrastructure', 'IA appliquée': 'Applied AI',
    '03 — Approche': '03 — Approach', 'Du premier échange': 'From the first conversation', 'à la mise en service.': 'to launch.',
    'Une démarche simple pour garder le cap sur le besoin et rendre les livraisons plus prévisibles.': 'A clear process to stay focused on the need and make delivery more predictable.',
    'Comprendre': 'Understand', 'Identifier les utilisateurs, les processus et les contraintes du projet.': 'Identify users, workflows and project constraints.',
    'Concevoir': 'Design', 'Définir une solution pragmatique, ses données et ses intégrations.': 'Define a pragmatic solution, its data and integrations.',
    'Construire': 'Build', 'Développer, tester et faire valider les fonctionnalités par étapes.': 'Develop, test and validate features incrementally.',
    'Fiabiliser': 'Improve reliability', 'Préparer le déploiement, documenter et accompagner la suite.': 'Prepare deployment, document and support what comes next.',
    '04 — Parcours': '04 — Experience', 'Relier la technique': 'Connecting technology', 'aux besoins terrain.': 'to real-world needs.',
    'Cadrage et pilotage de projets IT, coordination des développements et suivi des livrables.': 'IT project scoping and management, development coordination and delivery tracking.',
    'ERP 8sens, données SQL, flux ETL avec SSIS et rapports de suivi sous Power Query / DAX.': '8sens ERP, SQL data, SSIS ETL pipelines and Power Query / DAX reporting.',
    'Développement Symfony, C# et JHipster, accompagnement Agile et interventions sur les systèmes.': 'Symfony, C# and JHipster development, Agile support and systems work.',
    'Support technique, traitement de données, contrôle qualité et accompagnement de nouveaux agents.': 'Technical support, data processing, quality control and onboarding new agents.',
    '05 — Contact': '05 — Contact', 'Un projet à faire avancer ?': 'Have a project to move forward?', 'Échangeons.': 'Let’s talk.',
    'Pour parler d’un projet web, d’un CRM, de données ou d’une mission en gestion de projet IT :': 'Let’s discuss a web project, CRM, data work or IT project management opportunity.',
    'Gestion de projet · Développement · Data': 'Project management · Development · Data', 'Retour en haut ↑': 'Back to top ↑'
  };
  const locale = () => localStorage.getItem('portfolio-locale') || (navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr');
  const setLocale = (value) => { localStorage.setItem('portfolio-locale', value); document.documentElement.lang = value; applyLocale(value); };
  const translateTextNodes = (value) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => { const source = node.nodeValue.trim(); if (source && translations[source]) node.nodeValue = node.nodeValue.replace(source, value === 'en' ? translations[source] : Object.keys(translations).find((key) => translations[key] === source) || source); });
  };
  const ats = (projectTitle = '') => {
    const value = locale(); const isEn = value === 'en'; const cards = [...document.querySelectorAll('.project-card')];
    const projects = cards.map((card) => ({ title: card.querySelector('h3,h2,.project-title')?.textContent.trim() || '', text: card.innerText.replace(/\s+/g, ' ').trim() })).filter((item) => item.title);
    const associated = projects.find((item) => item.title === projectTitle);
    const featuredProjects = isEn
      ? ['Wizi Learn ? learning platform with assessments and tailored paths.', 'Phone-campaign CRM ? call workflows with analysis assistance and operator validation.', '8sens ERP ? SQL modeling, SSIS ETL and operational reporting.', 'Linux & Proxmox ? system administration and troubleshooting.']
      : ['Wizi Learn ? plateforme de formation avec ?valuations et parcours adapt?s.', 'CRM de campagne t?l?phonique ? suivi des appels avec assistance ? l?analyse et validation par l?op?rateur.', 'ERP 8sens ? mod?lisation SQL, ETL avec SSIS et rapports op?rationnels.', 'Linux & Proxmox ? administration et diagnostic des syst?mes.'];
    const html = `<!doctype html><html lang="${value}"><head><meta charset="utf-8"><title>${isEn ? 'ATS Resume' : 'CV ATS'} - Herizo Randrianaina</title><style>body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;color:#111;line-height:1.45}h1{font-size:28px}h2{font-size:15px;border-bottom:1px solid #111;padding-bottom:4px;margin-top:22px}p,li{font-size:11pt}</style></head><body><h1>Herizo Randrianaina</h1><p><strong>${isEn ? 'IT Project Manager · Back-end Developer' : 'Chef de projet IT · Développeur back-end'}</strong></p><p>Antananarivo, Madagascar · menja.herizo@gmail.com · linkedin.com/in/herizo-randrianaina</p><h2>${isEn ? 'PROFILE' : 'PROFIL'}</h2><p>${isEn ? 'IT project manager and back-end developer connecting business needs, technical delivery and operational usage across CRM, ERP, APIs, data flows and AI-enabled products.' : 'Chef de projet IT et développeur back-end, j’interviens sur les CRM, ERP, API, flux data et produits intégrant l’intelligence artificielle.'}</p>${associated ? `<h2>${isEn ? 'ASSOCIATED PROJECT' : 'PROJET ASSOCIÉ'}</h2><p><strong>${associated.title}</strong> — ${associated.text}</p>` : ''}<h2>${isEn ? 'SKILLS' : 'COMPÉTENCES'}</h2><p>${isEn ? 'IT project management · Agile / Scrum · Back-end · REST APIs · CRM / ERP · SQL · ETL · Power BI · GenAI / LLM · Gemini · Docker · CI/CD · React · Vue · Next.js · Express · Laravel · Node.js · Flutter iOS/Android · Supabase' : 'Gestion de projets IT · Agile / Scrum · Back-end · API REST · CRM / ERP · SQL · ETL · Power BI · IA générative / LLM · Gemini · Docker · CI/CD · React · Vue · Next.js · Express · Laravel · Node.js · Flutter iOS/Android · Supabase'}</p><h2>${isEn ? 'SELECTED PROJECTS' : 'PROJETS SÉLECTIONNÉS'}</h2><ul>${projects.map((item) => `<li><strong>${item.title}</strong> — ${item.text}</li>`).join('')}</ul><h2>${isEn ? 'TARGET ROLES' : 'POSTES CIBLÉS'}</h2><p>${isEn ? 'Lead Fullstack Developer · Lead Software Engineer · Mobile Architect · Flutter Architect · Technical Lead · Solution Architect · Engineering Lead · API Architect · AI Integration Lead' : 'Lead Developer Fullstack · Lead Software Engineer · Architecte Mobile · Architecte Flutter · Référent technique · Architecte solutions · Engineering Lead · Architecte API · Lead intégration IA'}</p><h2>${isEn ? 'EDUCATION & CERTIFICATIONS' : 'FORMATIONS & CERTIFICATIONS'}</h2><ul>${(isEn ? ['Master 1 in Computer Science — Databases & Software Engineering, CNTEMAD Madagascar, 2024.','Application Design and Development — Inclusiv Academy, 2022–2023.','Bachelor-level degree in Computer Science — Networks & Systems, CNTEMAD Madagascar, 2012–2015.','Professional certifications: to be completed from the candidate’s official certificates.'] : ['Master 1 en Informatique — Bases de données & Génie logiciel, CNTEMAD Madagascar, 2024.','Concepteur développeur d’applications numériques — Inclusiv Academy, 2022–2023.','Bac+3 en Informatique — Réseaux & Systèmes, CNTEMAD Madagascar, 2012–2015.','Certifications professionnelles : à compléter à partir des certificats officiels du candidat.']).map((item) => `<li>${item}</li>`).join('')}</ul><h2>${isEn ? 'FEATURED PROJECTS' : 'PROJETS PHARES'}</h2><ul>${featuredProjects.map((item) => `<li>${item}</li>`).join('')}</ul></body></html>`;
    const blob = new Blob([html], { type: 'application/msword;charset=utf-8' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `Herizo_Randrianaina_ATS_${value}${projectTitle ? '_' + projectTitle.replace(/[^a-z0-9]+/gi, '-') : ''}.doc`; link.click(); URL.revokeObjectURL(url);
  };
  const updateAtsInfo = (value) => {
    let section = document.querySelector('#ats-info');
    if (!section) {
      const projectsSection = document.querySelector('#projets');
      if (!projectsSection) return;
      section = document.createElement('section'); section.id = 'ats-info'; section.className = 'section-wrap section-block ats-info';
      projectsSection.insertAdjacentElement('afterend', section);
    }
    const isEn = value === 'en';
    if (section.dataset.locale === value) return;
    section.innerHTML = `<div class="section-heading"><p class="eyebrow">${isEn ? 'CV & language' : 'CV & langue'}</p><h2>${isEn ? 'One clear ATS resume,<br><em>in the visitor’s language.</em>' : 'Un CV ATS clair,<br><em>dans la langue du visiteur.</em>'}</h2></div><div class="contact-side"><p>${isEn ? 'Use the single “Generate my ATS CV” button in the navigation. The downloaded document adapts to French or English and includes the selected projects and skills.' : 'Utilisez le bouton unique « Générer mon CV ATS » dans la navigation. Le document téléchargé s’adapte au français ou à l’anglais et inclut les projets et compétences sélectionnés.'}</p><div class="contact-meta"><span>FR / EN</span><span>${isEn ? 'Word-compatible ATS document' : 'Document ATS compatible Word'}</span></div></div>`;
    section.dataset.locale = value;
  };
  const applyLocale = (value) => {
    document.querySelectorAll('[data-i18n]').forEach((node) => { const key = node.dataset.i18n; if (copy[value][key]) node.textContent = copy[value][key]; });
    updateAtsInfo(value);
    if (value === 'en') translateTextNodes(value); else location.reload();
    const toggle = document.querySelector('#portfolio-language'); if (toggle) toggle.textContent = value.toUpperCase();
    const atsButton = document.querySelector('#portfolio-ats'); if (atsButton) atsButton.textContent = copy[value].ats;
    window.dispatchEvent(new CustomEvent('portfolio:locale-change', { detail: { locale: value } }));
  };
  const enhance = () => {
    const nav = document.querySelector('.nav'); if (!nav) return;
    const value = locale();
    if (document.documentElement.lang !== value) {
      document.documentElement.lang = value;
      translateTextNodes(value);
    }
    if (!document.querySelector('#portfolio-language')) { const lang = document.createElement('button'); lang.id = 'portfolio-language'; lang.type = 'button'; lang.className = 'nav-action'; lang.textContent = value.toUpperCase(); lang.title = copy[value].lang; lang.addEventListener('click', () => setLocale(locale() === 'fr' ? 'en' : 'fr')); nav.appendChild(lang); }
    if (!document.querySelector('#portfolio-ats')) { const button = document.createElement('button'); button.id = 'portfolio-ats'; button.type = 'button'; button.className = 'nav-action'; button.textContent = copy[value].ats; button.addEventListener('click', () => ats()); nav.appendChild(button); }
    updateAtsInfo(value);
    window.dispatchEvent(new CustomEvent('portfolio:locale-change', { detail: { locale: value } }));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhance, { once: true });
  else enhance();
})();

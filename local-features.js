(() => {
  const copy = {
    fr: { lang: 'Langue', ats: 'Générer mon CV ATS', generate: 'Générer mon CV ATS', project: 'Projet associé', download: 'Télécharger le CV', language: 'Français' },
    en: { lang: 'Language', ats: 'Generate my ATS CV', generate: 'Generate my ATS CV', project: 'Associated project', download: 'Download CV', language: 'English' },
  };
  const translations = {
    'Profil': 'Profile', 'Projets': 'Projects', 'Expertise': 'Expertise', 'Contact': 'Contact',
    'Parcours': 'Journey', 'Retour en haut': 'Back to top', 'Disponible pour de nouveaux défis': 'Available for new challenges',
    'Parcourir les projets': 'Browse projects', 'Tous': 'All', 'CRM & gestion': 'CRM & management', 'IA & automation': 'AI & automation',
    'Data & outils': 'Data & tools', 'Apps métier': 'Business apps', 'GitHub': 'GitHub', 'Voir le projet': 'View project', 'Démo': 'Demo',
    'Compétences': 'Skills', 'À propos': 'About', 'Me contacter': 'Contact me', 'Télécharger le CV': 'Download CV',
    'Systèmes métier': 'Business systems', 'Intégration IA': 'AI integration', 'Produit pédagogique': 'Learning product', 'Quiz multi-plateforme': 'Multi-platform quiz',
    'Vente & inventaire': 'Sales & inventory', 'Téléphonie d’entreprise': 'Business telephony', 'Apprentissage assisté': 'AI-assisted learning',
    'Expérimentation GenAI': 'GenAI experiment', 'Données & opérations': 'Data & operations'
  };
  const projectCopy = {
    'Wizi Learn': { title: 'Wizi Learn', desc: 'A multi-platform quiz and learning application for web, iOS and Android.', focus: 'Laravel or Node.js back end with React, Vue and Flutter interfaces.' },
    'POS Flutter': { title: 'POS Flutter', desc: 'Point-of-sale and inventory management application for operational teams.', focus: 'Flutter mobile experience bringing checkout and stock visibility together.' },
    'Do Not Disturb': { title: 'Do Not Disturb', desc: 'Enterprise call-redirection platform for busy users who cannot afford to miss a call.', focus: 'Flutter solution that preserves concentration while maintaining reachability.' },
    'LingoLive': { title: 'LingoLive', desc: 'Language-learning platform powered by Gemini.', focus: 'Next.js and Express application backed by Supabase.' }
  };
  const locale = () => localStorage.getItem('portfolio-locale') || (navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr');
  const setLocale = (value) => { localStorage.setItem('portfolio-locale', value); document.documentElement.lang = value; applyLocale(value); };
  const translateTextNodes = (value) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => { const source = node.nodeValue.trim(); if (source && translations[source]) node.nodeValue = node.nodeValue.replace(source, value === 'en' ? translations[source] : Object.keys(translations).find((key) => translations[key] === source) || source); });
  };
  const updateProjectCards = (value) => {
    document.querySelectorAll('.project-card').forEach((card) => {
      const title = card.querySelector('h3,h2,.project-title')?.textContent.trim();
      const data = projectCopy[title];
      if (value === 'en' && data) {
        const desc = card.querySelector('p'); if (desc) desc.dataset.frText ||= desc.textContent;
        const focus = card.querySelector('.project-focus'); if (focus) focus.dataset.frText ||= focus.textContent;
        if (desc) desc.textContent = data.desc;
        if (focus) focus.textContent = data.focus;
      } else if (value === 'fr') {
        card.querySelectorAll('[data-fr-text]').forEach((node) => { node.textContent = node.dataset.frText; });
      }
    });
  };
  const ats = (projectTitle = '') => {
    const value = locale(); const isEn = value === 'en'; const cards = [...document.querySelectorAll('.project-card')];
    const projects = cards.map((card) => ({ title: card.querySelector('h3,h2,.project-title')?.textContent.trim() || '', text: card.innerText.replace(/\s+/g, ' ').trim() })).filter((item) => item.title);
    const associated = projects.find((item) => item.title === projectTitle);
    const html = `<!doctype html><html lang="${value}"><head><meta charset="utf-8"><title>${isEn ? 'ATS Resume' : 'CV ATS'} - Herizo Randrianaina</title><style>body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;color:#111;line-height:1.45}h1{font-size:28px}h2{font-size:15px;border-bottom:1px solid #111;padding-bottom:4px;margin-top:22px}p,li{font-size:11pt}</style></head><body><h1>Herizo Randrianaina</h1><p><strong>${isEn ? 'IT Project Manager · Back-end Developer' : 'Chef de projet IT · Développeur back-end'}</strong></p><p>Antananarivo, Madagascar · menja.herizo@gmail.com · linkedin.com/in/herizo-randrianaina</p><h2>${isEn ? 'PROFILE' : 'PROFIL'}</h2><p>${isEn ? 'IT project manager and back-end developer connecting business needs, technical delivery and operational usage across CRM, ERP, APIs, data flows and AI-enabled products.' : 'Chef de projet IT et développeur back-end, j’interviens sur les CRM, ERP, API, flux data et produits intégrant l’intelligence artificielle.'}</p>${associated ? `<h2>${isEn ? 'ASSOCIATED PROJECT' : 'PROJET ASSOCIÉ'}</h2><p><strong>${associated.title}</strong> — ${associated.text}</p>` : ''}<h2>${isEn ? 'SKILLS' : 'COMPÉTENCES'}</h2><p>${isEn ? 'IT project management · Agile / Scrum · Back-end · REST APIs · CRM / ERP · SQL · ETL · Power BI · GenAI / LLM · Gemini · Docker · CI/CD · React · Vue · Next.js · Express · Laravel · Node.js · Flutter iOS/Android · Supabase' : 'Gestion de projets IT · Agile / Scrum · Back-end · API REST · CRM / ERP · SQL · ETL · Power BI · IA générative / LLM · Gemini · Docker · CI/CD · React · Vue · Next.js · Express · Laravel · Node.js · Flutter iOS/Android · Supabase'}</p><h2>${isEn ? 'SELECTED PROJECTS' : 'PROJETS SÉLECTIONNÉS'}</h2><ul>${projects.map((item) => `<li><strong>${item.title}</strong> — ${item.text}</li>`).join('')}</ul><h2>${isEn ? 'FEATURED PROJECTS' : 'PROJETS PHARES'}</h2><ul>${['Wizi Learn — multi-platform quiz application with Laravel or Node.js, React, Vue and Flutter.', 'POS Flutter — point-of-sale and inventory application.', 'Do Not Disturb — enterprise call-redirection platform built with Flutter.', 'LingoLive — language learning platform using Gemini, Next.js, Express and Supabase.', 'CRM Filament — CRM and business workflow application.'].map((item) => `<li>${item}</li>`).join('')}</ul></body></html>`;
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
    updateProjectCards(value);
    const toggle = document.querySelector('#portfolio-language'); if (toggle) toggle.textContent = value.toUpperCase();
    const atsButton = document.querySelector('#portfolio-ats'); if (atsButton) atsButton.textContent = copy[value].ats;
  };
  const enhance = () => {
    const nav = document.querySelector('.nav'); if (!nav) return;
    if (!document.querySelector('#portfolio-language')) { const lang = document.createElement('button'); lang.id = 'portfolio-language'; lang.type = 'button'; lang.className = 'nav-action'; lang.textContent = locale().toUpperCase(); lang.title = copy[locale()].lang; lang.addEventListener('click', () => setLocale(locale() === 'fr' ? 'en' : 'fr')); nav.appendChild(lang); }
    if (!document.querySelector('#portfolio-ats')) { const button = document.createElement('button'); button.id = 'portfolio-ats'; button.type = 'button'; button.className = 'nav-action'; button.textContent = copy[locale()].ats; button.addEventListener('click', () => ats()); nav.appendChild(button); }
    updateProjectCards(locale());
    updateAtsInfo(locale());
  };
  document.addEventListener('DOMContentLoaded', enhance); const observer = new MutationObserver(enhance); observer.observe(document.body, { childList: true, subtree: true });
})();

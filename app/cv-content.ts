export type ResumeLocale = "fr" | "en";

export type ResumeSection = {
  title: string;
  items: string[];
};

export type ResumeExperience = {
  role: string;
  organization: string;
  dates: string;
  bullets: string[];
};

export type ResumeContent = {
  title: string;
  summaryHeading: string;
  summary: string;
  experienceHeading: string;
  skillsHeading: string;
  projectsHeading: string;
  educationHeading: string;
  languagesHeading: string;
  contactHeading: string;
  skills: ResumeSection[];
  experience: ResumeExperience[];
  projects: { name: string; description: string }[];
  education: string[];
  languages: string[];
  filename: {
    professional: string;
    ats: string;
  };
};

export const resumeContent: Record<ResumeLocale, ResumeContent> = {
  fr: {
    title:
      "Chef de projet IT & Développeur full-stack | PHP/Laravel · TypeScript/Node.js · Intégration IA",
    summaryHeading: "PROFIL",
    summary:
      "Chef de projet IT et développeur full-stack avec plus de 8 ans d’expérience en informatique, dont plusieurs années sur des applications métier en production. Back-end PHP/Laravel et Symfony, services Node.js / NestJS, front-end React, Vue.js et Next.js, bases SQL et conteneurisation Docker. Intègre des modèles d’IA (Gemini, Mistral, LLM locaux) dans des outils métier : streaming, RAG, serveurs MCP. Utilise au quotidien Claude Code, Cursor et MCP pour le prototypage, la revue de code et la documentation. Habitué au cadrage des besoins, à l’Agile et au code testé (PHPUnit, Playwright).",
    experienceHeading: "EXPÉRIENCE PROFESSIONNELLE",
    skillsHeading: "COMPÉTENCES",
    projectsHeading: "PROJETS SÉLECTIONNÉS",
    educationHeading: "FORMATION",
    languagesHeading: "LANGUES",
    contactHeading: "COORDONNÉES",
    skills: [
      {
        title: "Gestion de projet",
        items: [
          "Analyse des besoins, cadrage et rédaction de spécifications",
          "Planification, coordination d’équipe et suivi des livrables",
          "Méthodes Agile / Scrum et recette fonctionnelle",
        ],
      },
      {
        title: "Développement et intégration",
        items: [
          "PHP, Symfony, Laravel, Filament, C#, Java, JHipster",
          "React, Vue.js, Ionic, Flutter, TypeScript, JavaScript et API REST",
          "Node.js, Express, NestJS, TypeORM, BullMQ, Next.js, Rust",
          "Maintenance applicative, reprise de code existant et migrations PHP 8",
        ],
      },
      {
        title: "IA et LLM",
        items: [
          "API Gemini, Mistral, RAG, MCP, Ollama, llama.cpp",
          "Claude Code et Cursor au quotidien (prototypage, revue de code, documentation)",
        ],
      },
      {
        title: "Données et reporting",
        items: [
          "SQL Server, T-SQL, PostgreSQL, MySQL, Supabase et modélisation de données",
          "ETL / SSIS, Power Query et DAX",
        ],
      },
      {
        title: "Systèmes et qualité",
        items: [
          "Linux, Docker, Git, GitLab, Proxmox, GLPI, Netlify et ERP 8sens",
          "Playwright, PHPUnit, JUnit et automatisation de tests",
        ],
      },
    ],
    experience: [
      {
        role: "Chef de projet IT et développeur back-end",
        organization: "Offshore",
        dates: "Mars 2025 – aujourd’hui",
        bullets: [
          "Développement et maintenance d’applications web et d’outils métier en production (Laravel, Filament, NestJS, React, Vue.js).",
          "Intégration de l’IA dans des CRM : back-end temps réel WebSocket avec Gemini et Mistral, moteur RAG, assistance à l’analyse d’appels.",
          "Cadrage des besoins, rédaction des spécifications, découpage en tickets et suivi des priorités en Agile, en échange direct avec le client.",
          "Documentation des systèmes pour faciliter la maintenance et la transmission des connaissances.",
        ],
      },
      {
        role: "Analyste programmeur et Business Analyst",
        organization: "Société de distribution · Groupe EDL",
        dates: "Janvier 2024 – février 2025",
        bullets: [
          "Administration et développements spécifiques autour de l’ERP 8sens.",
          "Modélisation SQL Server, requêtes T-SQL complexes, flux ETL avec SSIS et tableaux de bord Power Query / DAX.",
          "Développement d’applications internes avec Symfony, C#, React et Ionic, consommant des API REST.",
          "Correction d’anomalies, analyse des données et support aux utilisateurs métier.",
        ],
      },
      {
        role: "Développeur chef de projet",
        organization: "Software Overseas Academy",
        dates: "Avril 2023 – novembre 2023",
        bullets: [
          "Développement d’applications avec Symfony, C# et JHipster au sein d’une équipe Agile.",
          "Transformation des besoins en spécifications techniques ; rédaction de cahiers des charges et de manuels utilisateurs.",
          "Interventions sur l’environnement de production, Proxmox et GLPI.",
        ],
      },
      {
        role: "Opérateur sénior et support qualité",
        organization: "Oworkers / Outsourcia",
        dates: "2017 – 2022",
        bullets: [
          "Traitement de données, contrôle qualité et validation fonctionnelle.",
          "Formation et accompagnement de nouveaux agents.",
        ],
      },
    ],
    projects: [
      {
        name: "Wizi Learn",
        description:
          "Plateforme de formation complète : API Laravel et NestJS (files BullMQ, notifications Firebase), back-office Vue.js, front React et application mobile Flutter.",
      },
      {
        name: "Analyse des besoins CPF (WizzyLearn)",
        description:
          "Parcours candidat en 5 étapes avec test de positionnement adaptatif (A1 à B2), recommandation de parcours automatique, rapport PDF envoyé par e-mail et archivé pour l’audit Caisse des Dépôts. Vue 3, NestJS, PostgreSQL, Docker.",
      },
      {
        name: "RustChat — CRM vocal avec IA",
        description:
          "Chat temps réel WebSocket avec Gemini et Mistral, RAG sur documents et planification d’actions, intégré à Laravel. Rust, Next.js.",
      },
      {
        name: "CRM de campagne de phoning & CRM AOPIA",
        description:
          "Segmentation, routage des prospects, suivi des rappels et intégration Ringover, avec analyse d’appels par LLM local. Laravel, Filament, EspoCRM, llama.cpp.",
      },
      {
        name: "Collecte de données B2B",
        description:
          "Collecte et qualification de leads depuis des sources publiques, rapprochement SIREN/SIRET et export Excel/CSV. Python, Node.js, Playwright, Docker.",
      },
    ],
    education: [
      "Master 1 — Bases de données & génie logiciel, CNTEMAD Madagascar, 2024",
      "Concepteur développeur d’applications, Inclusiv Academy, 2022–2023",
      "Bac+3 en informatique — Réseaux & systèmes, CNTEMAD Madagascar, 2012–2015",
    ],
    languages: ["Français : courant / bilingue", "Anglais : professionnel"],
    filename: {
      professional: "Herizo_Randrianaina_CV",
      ats: "Herizo_Randrianaina_CV_ATS",
    },
  },
  en: {
    title:
      "IT Project Manager & Full-stack Developer | PHP/Laravel · TypeScript/Node.js · AI Integration",
    summaryHeading: "PROFESSIONAL SUMMARY",
    summary:
      "IT project manager and full-stack developer with over 8 years of experience in IT, including several years on business applications in production. PHP/Laravel and Symfony back ends, Node.js / NestJS services, React, Vue.js and Next.js front ends, SQL databases and Docker. Integrates AI models (Gemini, Mistral, local LLMs) into business tools: streaming, RAG, MCP servers. Uses Claude Code, Cursor and MCP daily for prototyping, code review and documentation. Experienced in requirements scoping, Agile delivery and tested code (PHPUnit, Playwright).",
    experienceHeading: "PROFESSIONAL EXPERIENCE",
    skillsHeading: "TECHNICAL SKILLS",
    projectsHeading: "SELECTED PROJECTS",
    educationHeading: "EDUCATION",
    languagesHeading: "LANGUAGES",
    contactHeading: "CONTACT",
    skills: [
      {
        title: "Project Management",
        items: [
          "Requirements analysis, scoping and specification writing",
          "Planning, team coordination and delivery tracking",
          "Agile / Scrum and functional acceptance testing",
        ],
      },
      {
        title: "Development & Integration",
        items: [
          "PHP, Symfony, Laravel, Filament, C#, Java, JHipster",
          "React, Vue.js, Ionic, Flutter, TypeScript, JavaScript and REST APIs",
          "Node.js, Express, NestJS, TypeORM, BullMQ, Next.js, Rust",
          "Application maintenance, legacy code takeover and PHP 8 migrations",
        ],
      },
      {
        title: "AI & LLMs",
        items: [
          "Gemini API, Mistral, RAG, MCP, Ollama, llama.cpp",
          "Daily use of Claude Code and Cursor (prototyping, code review, documentation)",
        ],
      },
      {
        title: "Data & Reporting",
        items: [
          "SQL Server, T-SQL, PostgreSQL, MySQL, Supabase and data modeling",
          "ETL / SSIS, Power Query and DAX",
        ],
      },
      {
        title: "Systems & Quality",
        items: [
          "Linux, Docker, Git, GitLab, Proxmox, GLPI, Netlify and 8sens ERP",
          "Playwright, PHPUnit, JUnit and automated testing",
        ],
      },
    ],
    experience: [
      {
        role: "IT Project Manager & Back-end Developer",
        organization: "Offshore",
        dates: "March 2025 – present",
        bullets: [
          "Develop and maintain production web applications and business tools (Laravel, Filament, NestJS, React, Vue.js).",
          "Integrate AI into CRMs: real-time WebSocket back end with Gemini and Mistral, RAG engine, AI-assisted call analysis.",
          "Scope requirements, write specifications, break work into tickets and manage priorities in Agile, working directly with the client.",
          "Document systems to ease maintenance and knowledge transfer.",
        ],
      },
      {
        role: "Programmer Analyst & Business Analyst",
        organization: "Distribution Company · Groupe EDL",
        dates: "January 2024 – February 2025",
        bullets: [
          "Administered and delivered tailored development around 8sens ERP.",
          "Modeled SQL Server databases, wrote complex T-SQL queries, built SSIS ETL flows and Power Query / DAX dashboards.",
          "Developed internal applications using Symfony, C#, React and Ionic, consuming REST APIs.",
          "Fixed defects, analyzed data and supported business users.",
        ],
      },
      {
        role: "Project Lead Developer",
        organization: "Software Overseas Academy",
        dates: "April 2023 – November 2023",
        bullets: [
          "Developed applications with Symfony, C# and JHipster in an Agile team.",
          "Turned requirements into technical specifications; wrote specification documents and user manuals.",
          "Worked with production environments, Proxmox and GLPI.",
        ],
      },
      {
        role: "Senior Operator & Quality Support",
        organization: "Oworkers / Outsourcia",
        dates: "2017 – 2022",
        bullets: [
          "Processed data and performed quality control and functional validation.",
          "Trained and supported new team members.",
        ],
      },
    ],
    projects: [
      {
        name: "Wizi Learn",
        description:
          "End-to-end learning platform: Laravel and NestJS APIs (BullMQ queues, Firebase notifications), Vue.js back office, React front end and Flutter mobile app.",
      },
      {
        name: "CPF Needs Analysis (WizzyLearn)",
        description:
          "Five-step candidate journey with an adaptive placement test (A1 to B2), automatic pathway recommendation, and a PDF report emailed and archived for Caisse des Dépôts audits. Vue 3, NestJS, PostgreSQL, Docker.",
      },
      {
        name: "RustChat — AI voice CRM",
        description:
          "Real-time WebSocket chat with Gemini and Mistral, document RAG and action planning, integrated with Laravel. Rust, Next.js.",
      },
      {
        name: "Phone campaign CRM & AOPIA CRM",
        description:
          "Segmentation, lead routing, follow-up tracking and Ringover integration, with call analysis by a local LLM. Laravel, Filament, EspoCRM, llama.cpp.",
      },
      {
        name: "B2B data collection",
        description:
          "Lead collection and qualification from public sources, SIREN/SIRET matching and Excel/CSV export. Python, Node.js, Playwright, Docker.",
      },
    ],
    education: [
      "Master 1 — Databases & Software Engineering, CNTEMAD Madagascar, 2024",
      "Application Design and Development, Inclusiv Academy, 2022–2023",
      "Bachelor-level degree in Computer Science — Networks & Systems, CNTEMAD Madagascar, 2012–2015",
    ],
    languages: ["French: fluent", "English: professional"],
    filename: {
      professional: "Herizo_Randrianaina_Resume",
      ats: "Herizo_Randrianaina_ATS_Resume",
    },
  },
};

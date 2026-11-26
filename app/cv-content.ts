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
      "Développeur full-stack & Analyste concepteur | Laravel · Node.js · React · VoIP & intégration IA",
    summaryHeading: "PROFIL",
    summary:
      "Analyste concepteur, développeur full-stack et chef de projet IT avec plus de 8 ans d’expérience en informatique, dont plusieurs années sur des applications métier en production. Back-end PHP/Laravel et Symfony, services Node.js / NestJS, front-end React, Vue.js et Next.js, bases SQL et conteneurisation Docker. Met en place des solutions VoIP et de téléphonie couplées aux CRM, et intègre des modèles d’IA (Gemini, Mistral, LLM locaux) dans les outils métier : streaming, RAG, serveurs MCP, analyse d’appels. Utilise au quotidien Claude Code, Cursor et MCP pour le prototypage, la revue de code et la documentation. Habitué au cadrage des besoins, à l’Agile et au code testé (PHPUnit, Playwright). Fait le lien entre équipes métier et équipes techniques : traduit des besoins exprimés sans jargon en outils concrets, forme les utilisateurs métier et les assiste au quotidien.",
    experienceHeading: "EXPÉRIENCE PROFESSIONNELLE",
    skillsHeading: "COMPÉTENCES",
    projectsHeading: "PROJETS SÉLECTIONNÉS",
    educationHeading: "FORMATION",
    languagesHeading: "LANGUES",
    contactHeading: "COORDONNÉES",
    skills: [
      {
        title: "Interface métier & formation",
        items: [
          "Intermédiaire entre équipes non techniques et équipes de développement",
          "Analyse des besoins métier et transformation en outils concrets",
          "Formation des utilisateurs métier, guides et manuels",
          "Assistance et accompagnement des utilisateurs au quotidien",
        ],
      },
      {
        title: "Analyse, conception et pilotage",
        items: [
          "Analyse fonctionnelle, conception d’architecture applicative et modélisation de données",
          "Cadrage, rédaction de spécifications et de cahiers des charges",
          "Planification, coordination d’équipe et suivi des livrables",
          "Méthodes Agile / Scrum et recette fonctionnelle",
        ],
      },
      {
        title: "Full-stack — back-end",
        items: [
          "PHP 8, Laravel, Symfony, Filament, Node.js, Express, NestJS, C#, Java, Rust",
          "API REST, WebSocket, TypeORM, files BullMQ, maintenance et reprise de code existant",
        ],
      },
      {
        title: "Full-stack — front-end et mobile",
        items: [
          "React, Next.js, Vue.js, Vite, TypeScript, JavaScript, HTML/CSS",
          "Flutter et Ionic pour les applications mobiles",
        ],
      },
      {
        title: "VoIP et téléphonie",
        items: [
          "Mise en place de solutions VoIP et de téléphonie d’entreprise",
          "Couplage téléphonie-CRM (Ringover), campagnes de phoning, routage et suivi des appels",
        ],
      },
      {
        title: "Intégration IA",
        items: [
          "API Gemini, Mistral, RAG, MCP, Ollama, llama.cpp, analyse et transcription d’appels",
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
        role: "Chef de projet IT, analyste concepteur et développeur full-stack",
        organization: "Offshore",
        dates: "Mars 2025 – aujourd’hui",
        bullets: [
          "Développement full-stack d’applications web et d’outils métier en production : back-end Laravel, Filament et NestJS, front-end React et Vue.js.",
          "Mise en place de solutions VoIP et de téléphonie, couplées au CRM (Ringover) pour les campagnes d’appels, le routage et le suivi.",
          "Intégration de l’IA dans des CRM : back-end temps réel WebSocket avec Gemini et Mistral, moteur RAG, assistance à l’analyse d’appels.",
          "Cadrage des besoins, rédaction des spécifications, découpage en tickets et suivi des priorités en Agile, en échange direct avec le client.",
          "Interlocuteur entre les équipes métier et les développeurs : reformulation des besoins non techniques en fonctionnalités et en outils.",
          "Formation et assistance des utilisateurs métier ; documentation des systèmes pour la maintenance et la transmission des connaissances.",
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
          "Recueil des besoins auprès des équipes métier et transformation en outils et tableaux de bord adaptés.",
          "Formation des utilisateurs métier, correction d’anomalies et assistance au quotidien.",
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
      "Full-stack Developer & Analyst-Designer | Laravel · Node.js · React · VoIP & AI Integration",
    summaryHeading: "PROFESSIONAL SUMMARY",
    summary:
      "Analyst-designer, full-stack developer and IT project manager with over 8 years of experience in IT, including several years on business applications in production. PHP/Laravel and Symfony back ends, Node.js / NestJS services, React, Vue.js and Next.js front ends, SQL databases and Docker. Sets up VoIP and telephony solutions connected to CRMs, and integrates AI models (Gemini, Mistral, local LLMs) into business tools: streaming, RAG, MCP servers, call analysis. Uses Claude Code, Cursor and MCP daily for prototyping, code review and documentation. Experienced in requirements scoping, Agile delivery and tested code (PHPUnit, Playwright). Bridges business and technical teams: turns needs expressed in plain language into concrete tools, trains business users and supports them day to day.",
    experienceHeading: "PROFESSIONAL EXPERIENCE",
    skillsHeading: "TECHNICAL SKILLS",
    projectsHeading: "SELECTED PROJECTS",
    educationHeading: "EDUCATION",
    languagesHeading: "LANGUAGES",
    contactHeading: "CONTACT",
    skills: [
      {
        title: "Business Liaison & Training",
        items: [
          "Bridge between non-technical teams and development teams",
          "Business needs analysis and translation into concrete tools",
          "Business user training, guides and manuals",
          "Day-to-day user assistance and support",
        ],
      },
      {
        title: "Analysis, Design & Project Management",
        items: [
          "Functional analysis, application architecture design and data modeling",
          "Scoping, specifications and requirements documents",
          "Planning, team coordination and delivery tracking",
          "Agile / Scrum and functional acceptance testing",
        ],
      },
      {
        title: "Full-stack — Back End",
        items: [
          "PHP 8, Laravel, Symfony, Filament, Node.js, Express, NestJS, C#, Java, Rust",
          "REST APIs, WebSocket, TypeORM, BullMQ queues, maintenance and legacy code takeover",
        ],
      },
      {
        title: "Full-stack — Front End & Mobile",
        items: [
          "React, Next.js, Vue.js, Vite, TypeScript, JavaScript, HTML/CSS",
          "Flutter and Ionic for mobile apps",
        ],
      },
      {
        title: "VoIP & Telephony",
        items: [
          "Business VoIP and telephony solution setup",
          "Telephony-CRM integration (Ringover), phone campaigns, call routing and tracking",
        ],
      },
      {
        title: "AI Integration",
        items: [
          "Gemini API, Mistral, RAG, MCP, Ollama, llama.cpp, call analysis and transcription",
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
        role: "IT Project Manager, Analyst-Designer & Full-stack Developer",
        organization: "Offshore",
        dates: "March 2025 – present",
        bullets: [
          "Full-stack development of production web applications and business tools: Laravel, Filament and NestJS back ends, React and Vue.js front ends.",
          "Set up VoIP and telephony solutions connected to the CRM (Ringover) for call campaigns, routing and tracking.",
          "Integrate AI into CRMs: real-time WebSocket back end with Gemini and Mistral, RAG engine, AI-assisted call analysis.",
          "Scope requirements, write specifications, break work into tickets and manage priorities in Agile, working directly with the client.",
          "Act as the go-between for business teams and developers, turning non-technical needs into features and tools.",
          "Train and support business users; document systems to ease maintenance and knowledge transfer.",
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
          "Gathered needs from business teams and turned them into suitable tools and dashboards.",
          "Trained business users, fixed defects and provided day-to-day assistance.",
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

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
      "Chef de projet IT & Développeur back-end | Applications métiers, CRM/ERP et data",
    summaryHeading: "PROFIL",
    summary:
      "Chef de projet IT et développeur back-end avec plus de 8 ans d’expérience en informatique. Expérience en développement et maintenance d’applications métier, intégration CRM/ERP, pilotage de projets, bases de données, flux ETL et reporting. Pratique de PHP/Symfony, Laravel, SQL, Docker et tests automatisés, complétée par des interventions en React, C#, Ionic et infrastructure.",
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
          "React, Ionic, TypeScript, JavaScript et API REST",
          "Maintenance applicative et migrations",
        ],
      },
      {
        title: "Données et reporting",
        items: [
          "SQL Server, SQL, PostgreSQL et modélisation de données",
          "ETL / SSIS, Power Query et DAX",
        ],
      },
      {
        title: "Systèmes et qualité",
        items: [
          "Linux, Docker, Proxmox, GLPI et ERP 8sens",
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
          "Cadrage et pilotage de projets IT, de l’analyse du besoin au suivi des livrables.",
          "Coordination de développements applicatifs et suivi des priorités en contexte Agile.",
          "Intervention sur des applications web, des outils métier et leur maintenance.",
        ],
      },
      {
        role: "Analyste programmeur et Business Analyst",
        organization: "Société de distribution · Groupe EDL",
        dates: "Janvier 2024 – février 2025",
        bullets: [
          "Administration et développements spécifiques autour de l’ERP 8sens.",
          "Modélisation et exploitation de données SQL, flux ETL avec SSIS et tableaux de bord Power Query / DAX.",
          "Développement d’applications internes avec Symfony, C#, React et Ionic.",
        ],
      },
      {
        role: "Développeur chef de projet",
        organization: "Software Overseas Academy",
        dates: "Avril 2023 – novembre 2023",
        bullets: [
          "Développement d’applications avec Symfony, C# et JHipster au sein d’une équipe Agile.",
          "Contribution à la coordination technique, à l’intégration et à la documentation.",
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
          "Plateforme de quiz et de formation avec parcours et suivi de progression.",
      },
      {
        name: "CRM AOPIA",
        description:
          "Personnalisation d’un CRM pour la prospection, la téléphonie et le reporting.",
      },
      {
        name: "ERP 8sens & données",
        description:
          "Données SQL, flux SSIS et rapports de suivi des activités.",
      },
      {
        name: "Infrastructure Linux & Proxmox",
        description:
          "Administration et diagnostic de serveurs et d’environnements virtualisés.",
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
      "IT Project Manager & Back-end Developer | Business Applications, CRM/ERP & Data",
    summaryHeading: "PROFESSIONAL SUMMARY",
    summary:
      "IT project manager and back-end developer with over 8 years of experience in IT. Background in business application development and maintenance, CRM/ERP integration, project coordination, databases, ETL and reporting. Hands-on experience with PHP/Symfony, Laravel, SQL, Docker and automated testing, complemented by work with React, C#, Ionic and infrastructure.",
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
          "React, Ionic, TypeScript, JavaScript and REST APIs",
          "Application maintenance and migrations",
        ],
      },
      {
        title: "Data & Reporting",
        items: [
          "SQL Server, SQL, PostgreSQL and data modeling",
          "ETL / SSIS, Power Query and DAX",
        ],
      },
      {
        title: "Systems & Quality",
        items: [
          "Linux, Docker, Proxmox, GLPI and 8sens ERP",
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
          "Scope and manage IT projects from requirements analysis through delivery tracking.",
          "Coordinate application development and priorities in an Agile environment.",
          "Work across web applications, business tools and their maintenance.",
        ],
      },
      {
        role: "Programmer Analyst & Business Analyst",
        organization: "Distribution Company · Groupe EDL",
        dates: "January 2024 – February 2025",
        bullets: [
          "Administered and delivered tailored development around 8sens ERP.",
          "Modeled and queried SQL data, built SSIS ETL flows and Power Query / DAX dashboards.",
          "Developed internal applications using Symfony, C#, React and Ionic.",
        ],
      },
      {
        role: "Project Lead Developer",
        organization: "Software Overseas Academy",
        dates: "April 2023 – November 2023",
        bullets: [
          "Developed applications with Symfony, C# and JHipster in an Agile team.",
          "Contributed to technical coordination, integration and documentation.",
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
          "Quiz and learning platform with learning paths and progress tracking.",
      },
      {
        name: "AOPIA CRM",
        description:
          "CRM customization for prospecting, telephony and reporting.",
      },
      {
        name: "8sens ERP & Data",
        description:
          "SQL data, SSIS pipelines and operational reporting.",
      },
      {
        name: "Linux & Proxmox Infrastructure",
        description:
          "Administration and troubleshooting of servers and virtualized environments.",
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

export type ProjectCategory = "crm" | "product" | "data" | "infra" | "ia";

export type PortfolioProject = {
  name: string;
  nameEn: string;
  category: ProjectCategory;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: PortfolioProject[] = [
  {
    name: "Wizi Learn",
    nameEn: "Wizi Learn",
    category: "product",
    label: "EDTECH · WEB & MOBILE",
    labelEn: "EDTECH · WEB & MOBILE",
    description:
      "Plateforme de quiz et de formation avec évaluations, parcours adaptés, suivi de progression et gestion des contenus.",
    descriptionEn:
      "Quiz and learning platform with assessments, tailored learning paths, progress tracking and content management.",
    stack: ["Laravel", "React / Vite", "Flutter", "PostgreSQL"],
    github: "https://github.com/mblitmanager/wizi-learn",
    demo: "/wizi-learn-demo.html",
  },
  {
    name: "CRM de campagne de phoning",
    nameEn: "Phone campaign CRM",
    category: "crm",
    label: "CRM · TÉLÉPHONIE",
    labelEn: "CRM · TELEPHONY",
    description:
      "Outil de suivi d’appels avec segmentation, orientation vers les équipes concernées et suivi des rappels. L’assistance IA propose des analyses ; la décision reste à l’opérateur.",
    descriptionEn:
      "Call-management tool with segmentation, routing to the right teams and follow-up tracking. AI assists with analysis; the operator remains in control.",
    stack: ["Laravel", "Filament", "Scoring", "llama.cpp"],
  },
  {
    name: "AOPIA CRM",
    nameEn: "AOPIA CRM",
    category: "crm",
    label: "CRM · PROCESSUS MÉTIER",
    labelEn: "CRM · BUSINESS WORKFLOWS",
    description:
      "Personnalisation d’un CRM pour la prospection et la téléphonie : distribution des prospects, statuts, reporting et intégration Ringover.",
    descriptionEn:
      "CRM customization for prospecting and telephony, including lead routing, statuses, reporting and Ringover integration.",
    stack: ["EspoCRM", "PHP", "MySQL", "Ringover"],
  },
  {
    name: "Intégration Dolibarr & CRM internes",
    nameEn: "Dolibarr & internal CRM integration",
    category: "crm",
    label: "ERP · INTÉGRATION",
    labelEn: "ERP · INTEGRATION",
    description:
      "Pour NS Conseil : connexion de Dolibarr aux outils internes (CRM Laravel, EspoCRM, vTiger) via son API REST, pour faire circuler les données sans double saisie.",
    descriptionEn:
      "For NS Conseil: connecting Dolibarr to internal tools (Laravel CRM, EspoCRM, vTiger) through its REST API so data flows without double entry.",
    stack: ["Dolibarr", "API REST", "Laravel", "EspoCRM", "vTiger"],
  },
  {
    name: "Allo Pro 24",
    nameEn: "Allo Pro 24",
    category: "crm",
    label: "SERVICE · AUTOMATISATION",
    labelEn: "SERVICE · AUTOMATION",
    description:
      "Écosystème de services associant site web, réflexion CRM, agenda, facturation et coordination. Un scénario de répondeur IA nocturne a également été étudié.",
    descriptionEn:
      "Service ecosystem combining a website, CRM planning, scheduling, billing and team coordination. An overnight AI answering service was also explored.",
    stack: ["WordPress", "CRM", "Téléphonie", "IA vocale"],
  },
  {
    name: "ERP 8sens & données décisionnelles",
    nameEn: "8sens ERP & business data",
    category: "data",
    label: "ERP · DATA",
    labelEn: "ERP · DATA",
    description:
      "Administration et développements spécifiques autour de l’ERP, modélisation SQL, flux ETL et tableaux de bord pour le suivi des activités.",
    descriptionEn:
      "ERP administration and tailored development, SQL data modeling, ETL pipelines and dashboards for operational reporting.",
    stack: ["8sens", "SQL Server", "SSIS", "Power Query · DAX"],
  },
  {
    name: "Tests E2E pour plateforme de formation",
    nameEn: "E2E tests for a learning platform",
    category: "data",
    label: "QUALITÉ · AUTOMATISATION",
    labelEn: "QUALITY · AUTOMATION",
    description:
      "Scénarios Playwright paramétrés par formation, niveau et parcours, avec captures d’écran pour faciliter la vérification des résultats.",
    descriptionEn:
      "Playwright scenarios organized by course, level and learner journey, with screenshots to support result verification.",
    stack: ["Playwright", "Tests E2E", "Automatisation"],
  },
  {
    name: "Infrastructure Linux & Proxmox",
    nameEn: "Linux & Proxmox infrastructure",
    category: "infra",
    label: "SYSTÈMES · EXPLOITATION",
    labelEn: "SYSTEMS · OPERATIONS",
    description:
      "Administration et diagnostic de serveurs et machines virtuelles : réseau, stockage, certificats, services web et bases de données.",
    descriptionEn:
      "Server and virtual-machine administration and troubleshooting across networking, storage, certificates, web services and databases.",
    stack: ["Linux", "Proxmox", "Apache", "PostgreSQL"],
  },
  {
    name: "IA locale & reporting",
    nameEn: "Local AI & reporting",
    category: "ia",
    label: "IA · EXPLORATION",
    labelEn: "AI · EXPLORATION",
    description:
      "Exploration de modèles locaux et de leur intégration dans des outils métier pour l’analyse, le reporting et l’assistance.",
    descriptionEn:
      "Exploration of local models and their integration into business tools for analysis, reporting and assistance.",
    stack: ["Ollama", "llama.cpp", "LLM locaux"],
  },
  {
    name: "Transcription & comptes rendus",
    nameEn: "Meeting transcription & summaries",
    category: "ia",
    label: "APPLICATION DESKTOP",
    labelEn: "DESKTOP APPLICATION",
    description:
      "Application desktop en Rust imaginée pour transcrire et résumer des réunions avec des modèles légers, y compris sur des machines sans GPU.",
    descriptionEn:
      "Rust desktop application designed to transcribe and summarize meetings with lightweight models, including on machines without a GPU.",
    stack: ["Rust", "llama.cpp", "LLM légers"],
  },
  {
    name: "TalentMatch — matching CV / offre responsable",
    nameEn: "TalentMatch — responsible CV / job matching",
    category: "ia",
    label: "IA · RECRUTEMENT",
    labelEn: "AI · RECRUITMENT",
    description:
      "Pipeline IA de recrutement conforme RGPD / AI Act : pseudonymisation, extraction structurée de CV par LLM, détection d’injection de prompt et d’hallucinations, score explicable avec revue humaine, métriques d’équité et fine-tuning LoRA de Mistral prêt pour SageMaker.",
    descriptionEn:
      "GDPR / AI Act compliant recruitment AI pipeline: pseudonymization, LLM-based structured CV extraction, prompt-injection and hallucination detection, explainable scoring with human review, fairness metrics and Mistral LoRA fine-tuning ready for SageMaker.",
    stack: ["Python", "PyTorch", "Hugging Face PEFT", "Mistral", "AWS SageMaker", "FastAPI"],
    github: "https://github.com/randrianiaina/Portfolio/tree/main/projects/talentmatch",
  },
  {
    name: "Tableau de bord KPI ventes",
    nameEn: "Sales KPI dashboard",
    category: "data",
    label: "MINI-PROJET · DÉMO EN LIGNE",
    labelEn: "MINI PROJECT · LIVE DEMO",
    description:
      "Import d’un CSV de ventes directement dans le navigateur : CA, panier moyen, meilleure région et meilleur produit, histogramme mensuel et filtre par région. Les lignes invalides sont signalées, pas ignorées. Logique couverte par des tests Node.",
    descriptionEn:
      "Sales CSV import straight in the browser: revenue, average basket, top region and product, monthly chart and region filter. Invalid rows are reported, not silently dropped. Logic covered by Node tests.",
    stack: ["JavaScript", "CSV", "Data visualisation", "node:test"],
    github: "https://github.com/randrianiaina/Portfolio/tree/main/public/demos",
    demo: "/demos/kpi-dashboard.html",
  },
  {
    name: "Workflow de demande d’achat",
    nameEn: "Purchase request workflow",
    category: "product",
    label: "MINI-PROJET · ANALYSE & CONCEPTION",
    labelEn: "MINI PROJECT · ANALYSIS & DESIGN",
    description:
      "Interface métier pilotée par une machine à états : rôles (demandeur, manager, direction, achats), validation par la direction au-delà de 5 000 €, motif de refus obligatoire et journal d’audit complet. Chaque règle de gestion est testée.",
    descriptionEn:
      "Business interface driven by a state machine: roles (requester, manager, management, purchasing), management approval above €5,000, mandatory rejection reason and a full audit trail. Every business rule is tested.",
    stack: ["JavaScript", "Machine à états", "Règles de gestion", "node:test"],
    github: "https://github.com/randrianiaina/Portfolio/tree/main/public/demos",
    demo: "/demos/workflow-achat.html",
  },
  {
    name: "Dédoublonnage de fichier clients",
    nameEn: "Customer file deduplication",
    category: "data",
    label: "MINI-PROJET · QUALITÉ DE DONNÉES",
    labelEn: "MINI PROJECT · DATA QUALITY",
    description:
      "Outil Python qui fiabilise un fichier clients avant import CRM : contrôle SIREN/SIRET par clé de Luhn, normalisation des raisons sociales et regroupement des doublons exacts ou probables, sans rien supprimer, pour une validation humaine.",
    descriptionEn:
      "Python tool that cleans a customer file before CRM import: SIREN/SIRET Luhn check, company-name normalization and grouping of exact or likely duplicates, without deleting anything, for human review.",
    stack: ["Python", "CSV", "Qualité de données", "unittest"],
    github: "https://github.com/randrianiaina/Portfolio/tree/main/projects/dedup-clients",
  },
  {
    name: "RustChat — CRM vocal avec IA",
    nameEn: "RustChat — AI voice CRM",
    category: "ia",
    label: "IA · TEMPS RÉEL",
    labelEn: "AI · REAL TIME",
    description:
      "Back-end Rust de chat en temps réel pour un CRM vocal : streaming WebSocket avec Mistral et Gemini, moteur RAG sur documents et planification d’actions multi-étapes, intégré à Laravel.",
    descriptionEn:
      "Rust real-time chat back end for a voice CRM: WebSocket streaming with Mistral and Gemini, a document RAG engine and multi-step action planning, integrated with Laravel.",
    stack: ["Rust", "WebSocket", "RAG", "Next.js", "Laravel"],
  },
  {
    name: "Correcteur d’accent en temps réel",
    nameEn: "Real-time accent corrector",
    category: "ia",
    label: "APPLICATION DESKTOP · AUDIO",
    labelEn: "DESKTOP APPLICATION · AUDIO",
    description:
      "Application Windows qui capte le micro, passe par l’API Live de Gemini et renvoie une voix à accent neutre vers Teams, Meet ou Zoom, avec sous-titres en direct et serveur MCP.",
    descriptionEn:
      "Windows app that captures the microphone, goes through the Gemini Live API and outputs a neutral-accent voice to Teams, Meet or Zoom, with live captions and an MCP server.",
    stack: ["Rust", "Tauri", "Gemini Live", "MCP"],
  },
  {
    name: "Collecte de données entreprises",
    nameEn: "Business data collection",
    category: "data",
    label: "DATA · AUTOMATISATION",
    labelEn: "DATA · AUTOMATION",
    description:
      "Outils de collecte et de qualification de prospects B2B (entreprises, artisans) à partir de sources publiques, avec rapprochement SIREN/SIRET, tableau de bord et export Excel/CSV.",
    descriptionEn:
      "B2B lead collection and qualification tools (companies, tradespeople) from public sources, with SIREN/SIRET matching, a dashboard and Excel/CSV export.",
    stack: ["Python", "Node.js", "Playwright", "Crawlee", "Docker"],
  },
  {
    name: "Boutique e-commerce",
    nameEn: "E-commerce storefront",
    category: "product",
    label: "APPLICATION WEB",
    labelEn: "WEB APPLICATION",
    description:
      "Conception d’une boutique avec catalogue, panier, commande, paiement en ligne et interface d’administration.",
    descriptionEn:
      "E-commerce application with a product catalog, cart, checkout, online payments and an administration interface.",
    stack: ["PHP", "SQL", "Paiement en ligne"],
  },
  {
    name: "Migration PHP 7 vers PHP 8",
    nameEn: "PHP 7 to PHP 8 migration",
    category: "data",
    label: "MODERNISATION",
    labelEn: "MODERNIZATION",
    description:
      "Reprise d’applications existantes pour PHP 8.x et optimisation de requêtes MySQL dans le cadre de migrations.",
    descriptionEn:
      "Updating existing applications to PHP 8.x and optimizing MySQL queries as part of migration work.",
    stack: ["PHP 8", "MySQL", "Symfony"],
  },
  {
    name: "LingoLive",
    nameEn: "LingoLive",
    category: "ia",
    label: "APPRENTISSAGE · IA",
    labelEn: "LEARNING · AI",
    description:
      "Plateforme d’apprentissage des langues qui s’appuie sur Gemini, avec une interface Next.js, un back-end Express et Supabase.",
    descriptionEn:
      "Language-learning platform powered by Gemini, with a Next.js interface, an Express back end and Supabase.",
    stack: ["Next.js", "Express", "Gemini", "Supabase"],
  },
  {
    name: "Villa Solara — architecture de site",
    nameEn: "Villa Solara — website architecture",
    category: "product",
    label: "WEB · EXPÉRIENCE UTILISATEUR",
    labelEn: "WEB · USER EXPERIENCE",
    description:
      "Architecture de l’information d’un site de villa : organisation des pages, des contenus et des parcours de navigation.",
    descriptionEn:
      "Information architecture for a villa website, organizing pages, content and navigation journeys.",
    stack: ["Architecture de l’information", "UX", "HTML"],
  },
  {
    name: "POS Flutter",
    nameEn: "Flutter POS",
    category: "product",
    label: "APPLICATION MÉTIER",
    labelEn: "BUSINESS APPLICATION",
    description:
      "Application de point de vente et de gestion d’inventaire pensée pour faciliter le suivi des opérations et des stocks.",
    descriptionEn:
      "Point-of-sale and inventory application designed to make operations and stock easier to track.",
    stack: ["Flutter", "POS", "Inventaire"],
  },
];

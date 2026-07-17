// Project Details Data
const projectDetails = {
    proj1: { category: 'crm', fr: { title: "EspoCRM", challenge: "Centraliser la gestion CRM avec des outils d'administration sur mesure et une base de code maintenable.", solution: "Instance EspoCRM containerisée (Docker) avec outils admin custom (CLEAR_DATA_ADMIN_TOOL), tests Playwright/PHPUnit et scripts de migration automatisés.", stack: ["PHP", "EspoCRM", "Docker", "Playwright", "PHPUnit"] }, en: { title: "EspoCRM", challenge: "Centralize CRM management with custom admin tools and maintainable codebase.", solution: "Containerized EspoCRM instance (Docker) with custom admin tools, Playwright/PHPUnit tests and automated migration scripts.", stack: ["PHP", "EspoCRM", "Docker", "Playwright", "PHPUnit"] } },
    proj2: { category: 'crm', fr: { title: "crmfilament", challenge: "Unifier plusieurs portails métier (NsConseil, AlloPro, SuperAdmin) dans une interface d'administration cohérente.", solution: "Application Laravel 12 avec Filament PHP, gestion documentaire multi-portails et workflows métier configurables.", stack: ["Laravel 12", "Filament PHP", "PHP", "MySQL"] }, en: { title: "crmfilament", challenge: "Unify multiple business portals (NsConseil, AlloPro, SuperAdmin) in a consistent admin interface.", solution: "Laravel 12 app with Filament PHP, multi-portal document management and configurable business workflows.", stack: ["Laravel 12", "Filament PHP", "PHP", "MySQL"] } },
    proj3: { category: 'crm', fr: { title: "espoAOPIA", challenge: "Adapter EspoCRM aux processus spécifiques du projet AOPIA avec des règles d'implantation dédiées.", solution: "Instance EspoCRM dérivée avec spécifications métier, entités custom et documentation d'implantation AOPIA.", stack: ["EspoCRM", "PHP", "Docker"] }, en: { title: "espoAOPIA", challenge: "Adapt EspoCRM to AOPIA project-specific processes with dedicated deployment rules.", solution: "Derived EspoCRM instance with business specs, custom entities and AOPIA deployment documentation.", stack: ["EspoCRM", "PHP", "Docker"] } },
    proj4: { category: 'crm', fr: { title: "SuiteCRM", challenge: "Déployer une solution CRM open-source mature pour la gestion commerciale.", solution: "Installation et configuration SuiteCRM (fork SugarCRM) avec modules ventes, marketing et support.", stack: ["SuiteCRM", "PHP", "MySQL"] }, en: { title: "SuiteCRM", challenge: "Deploy a mature open-source CRM for sales management.", solution: "SuiteCRM installation and configuration (SugarCRM fork) with sales, marketing and support modules.", stack: ["SuiteCRM", "PHP", "MySQL"] } },
    proj5: { category: 'crm', fr: { title: "vtigercrm", challenge: "Mettre en place un CRM traditionnel open-source pour les équipes commerciales.", solution: "Déploiement vtiger CRM avec personnalisation des modules ventes, tickets et automatisation.", stack: ["vtiger CRM", "PHP", "MySQL"] }, en: { title: "vtigercrm", challenge: "Set up a traditional open-source CRM for sales teams.", solution: "vtiger CRM deployment with customized sales, ticketing modules and automation.", stack: ["vtiger CRM", "PHP", "MySQL"] } },
    proj6: { category: 'crm', fr: { title: "partner-connect-crm", challenge: "Piloter un réseau de partenaires avec visibilité sur les relations et les performances.", solution: "CRM dédié à la gestion de partenaires : fiches, suivi des interactions et centralisation des données réseau.", stack: ["CRM", "PHP", "API REST"] }, en: { title: "partner-connect-crm", challenge: "Manage a partner network with visibility on relationships and performance.", solution: "Dedicated partner CRM: profiles, interaction tracking and network data centralization.", stack: ["CRM", "PHP", "REST API"] } },
    proj7: { category: 'webai', fr: { title: "AIQuizGenius", challenge: "Générer automatiquement des quiz pédagogiques de qualité à partir de contenus variés.", solution: "Application IA de génération de quiz avec prompts optimisés et export des questions/réponses.", stack: ["AI/LLM", "Next.js", "OpenAI"] }, en: { title: "AIQuizGenius", challenge: "Automatically generate quality educational quizzes from varied content.", solution: "AI quiz generation app with optimized prompts and Q&A export.", stack: ["AI/LLM", "Next.js", "OpenAI"] } },
    proj8: { category: 'webai', fr: { title: "freellmapi", challenge: "Exposer un accès unifié aux LLM pour les applications internes sans dépendance fournisseur unique.", solution: "API REST abstraite pour interroger plusieurs modèles de langage avec gestion des clés et quotas.", stack: ["API REST", "LLM", "Python/Node.js"] }, en: { title: "freellmapi", challenge: "Provide unified LLM access for internal apps without single-vendor dependency.", solution: "Abstract REST API to query multiple language models with key and quota management.", stack: ["REST API", "LLM", "Python/Node.js"] } },
    proj9: { category: 'webai', fr: { title: "pappers-collect", challenge: "Enrichir automatiquement les bases de leads avec des données entreprises fiables.", solution: "Connecteur API Pappers pour collecte, enrichissement et qualification de prospects B2B.", stack: ["Pappers API", "Python", "CRM"] }, en: { title: "pappers-collect", challenge: "Automatically enrich lead databases with reliable company data.", solution: "Pappers API connector for B2B prospect collection, enrichment and qualification.", stack: ["Pappers API", "Python", "CRM"] } },
    proj10: { category: 'webai', fr: { title: "pappers-locator", challenge: "Retrouver et localiser des entreprises à partir de critères de recherche métier.", solution: "Outil de recherche entreprises via API Pappers avec filtres SIREN, secteur et géolocalisation.", stack: ["Pappers API", "JavaScript", "Maps"] }, en: { title: "pappers-locator", challenge: "Find and locate companies based on business search criteria.", solution: "Company search tool via Pappers API with SIREN, sector and geolocation filters.", stack: ["Pappers API", "JavaScript", "Maps"] } },
    proj11: { category: 'webai', url: 'https://ocr-generator.vercel.app/', fr: { title: "vision2html", challenge: "Convertir des maquettes visuelles ou captures en code HTML fidèle.", solution: "Pipeline vision IA pour analyse d'images et génération d'interfaces web structurées.", stack: ["Computer Vision", "AI", "HTML/CSS", "Next.js"] }, en: { title: "vision2html", challenge: "Convert visual mockups or screenshots into faithful HTML code.", solution: "AI vision pipeline for image analysis and structured web interface generation.", stack: ["Computer Vision", "AI", "HTML/CSS", "Next.js"] } },
    proj12: { category: 'webai', fr: { title: "taskosaur", challenge: "Suivre les tâches et livrables d'équipe sans outil lourd de gestion de projet.", solution: "Gestionnaire de tâches léger avec statuts, assignations et vue d'ensemble de l'activité.", stack: ["Web App", "JavaScript", "SQLite/MySQL"] }, en: { title: "taskosaur", challenge: "Track team tasks and deliverables without heavy project management tooling.", solution: "Lightweight task manager with statuses, assignments and activity overview.", stack: ["Web App", "JavaScript", "SQLite/MySQL"] } },
    proj13: { category: 'webai', fr: { title: "Leads-Allopro24", challenge: "Centraliser la capture et le suivi des leads pour l'activité Allopro.", solution: "Gestionnaire de leads dédié : formulaires, qualification, pipeline commercial et reporting.", stack: ["CRM", "PHP/Laravel", "MySQL"] }, en: { title: "Leads-Allopro24", challenge: "Centralize lead capture and follow-up for Allopro activity.", solution: "Dedicated lead manager: forms, qualification, sales pipeline and reporting.", stack: ["CRM", "PHP/Laravel", "MySQL"] } },
    proj14: { category: 'tools', fr: { title: "Active Noise Cancelling", challenge: "Expérimenter l'annulation de bruit actif sur signaux audio en temps réel.", solution: "Prototypes ANC avec algorithmes de traitement du signal et tests sur différents environnements sonores.", stack: ["Signal Processing", "Python", "DSP"] }, en: { title: "Active Noise Cancelling", challenge: "Experiment with active noise cancellation on real-time audio signals.", solution: "ANC prototypes with signal processing algorithms and tests across sound environments.", stack: ["Signal Processing", "Python", "DSP"] } },
    proj15: { category: 'tools', fr: { title: "allopro", challenge: "Déployer une vitrine web WordPress pour la plateforme Allopro.", solution: "Installation WordPress, thème sur mesure, plugins métier et configuration hébergement.", stack: ["WordPress", "PHP", "MySQL"] }, en: { title: "allopro", challenge: "Deploy a WordPress web presence for the Allopro platform.", solution: "WordPress installation, custom theme, business plugins and hosting configuration.", stack: ["WordPress", "PHP", "MySQL"] } },
    proj16: { category: 'tools', fr: { title: "android", challenge: "Développer des applications mobiles Android pour les besoins métier internes.", solution: "Projet mobile Android natif/hybride pour outils terrain et accès aux données CRM.", stack: ["Android", "Kotlin/Java", "REST API"] }, en: { title: "android", challenge: "Build Android mobile apps for internal business needs.", solution: "Native/hybrid Android project for field tools and CRM data access.", stack: ["Android", "Kotlin/Java", "REST API"] } },
    proj17: { category: 'tools', fr: { title: "monday-project-hub", challenge: "Synchroniser la gestion de projets Monday.com avec les outils internes.", solution: "Hub d'intégration Monday.com : webhooks, synchronisation des boards et tableaux de bord unifiés.", stack: ["Monday.com API", "Webhooks", "Node.js/Python"] }, en: { title: "monday-project-hub", challenge: "Sync Monday.com project management with internal tools.", solution: "Monday.com integration hub: webhooks, board sync and unified dashboards.", stack: ["Monday.com API", "Webhooks", "Node.js/Python"] } }
};

// i18n & Basic UI
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'fr');
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.portfolioTranslations[lang][key]) el.textContent = window.portfolioTranslations[lang][key];
    });
    const langText = document.getElementById('lang-text');
    if (langText) langText.textContent = lang === 'fr' ? 'EN' : 'FR';
    updateTypedArray();
}

function initLangToggle() {
    const langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;
    langBtn.addEventListener('click', () => {
        updateLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
}

function applyProjectFilter(filter) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    document.querySelectorAll('.project-card, .project-category').forEach(item => {
        const category = item.getAttribute('data-category');
        const visible = filter === 'all' || category === filter;
        item.style.display = visible ? 'block' : 'none';
        if (visible) item.classList.add('active');
        else item.classList.remove('active');
    });
}

function initProjectFilter() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyProjectFilter(btn.getAttribute('data-filter')));
    });
}

function openModal(projKey) {
    const data = projectDetails[projKey][currentLang];
    const labels = window.portfolioTranslations[currentLang];
    const projectUrl = projectDetails[projKey].url;

    document.getElementById('modal-data').innerHTML = `
        <h2 style="color: var(--accent); margin-bottom: 1.5rem;">${data.title}</h2>
        <div style="margin-bottom: 2rem;"><h4><i class="fas fa-exclamation-triangle"></i> ${labels.modal_challenge}</h4><p>${data.challenge}</p></div>
        <div style="margin-bottom: 2rem;"><h4><i class="fas fa-check-circle"></i> ${labels.modal_solution}</h4><p>${data.solution}</p></div>
        <div style="margin-bottom: 2rem;"><h4>Tech Stack</h4><div class="project-tags">${data.stack.map(tech => `<span class="tag">${tech}</span>`).join('')}</div></div>
        ${projectUrl ? `<a href="${projectUrl}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;"><i class="fas fa-external-link-alt"></i> ${labels.modal_view}</a>` : ''}
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function exportToPDF() { window.open('Profile.pdf', '_blank'); }

// --- THREE.JS LOW POLY WORLD ---
let scene, camera, renderer, worldContainer;
let projectMonoliths = [];
let isWorldActive = false;

function init3DWorld() {
    worldContainer = document.getElementById('threejs-world');
    scene = new THREE.Scene();
    
    // Day/Night Theme Logic
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const skyColor = isDark ? 0x0b1021 : 0x87CEEB; // Night / Day sky
    const fogColor = skyColor;
    const terrainColor = isDark ? 0x1e3a24 : 0x4CAF50; // Dark green / Bright grass
    const ambientIntensity = isDark ? 0.3 : 0.8;
    const dirIntensity = isDark ? 0.5 : 1.0;

    scene.background = new THREE.Color(skyColor);
    scene.fog = new THREE.FogExp2(fogColor, 0.012);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 15, 40);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    worldContainer.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientIntensity);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xfff0dd, dirIntensity);
    dirLight.position.set(50, 60, 20);
    dirLight.castShadow = true;
    dirLight.shadow.camera.left = -50;
    dirLight.shadow.camera.right = 50;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -50;
    scene.add(dirLight);

    if (isDark) {
        // Moon light / Magical night light
        const moonLight = new THREE.DirectionalLight(0x88bbff, 0.5);
        moonLight.position.set(-30, 40, -20);
        scene.add(moonLight);
    }

    // --- TERRAIN ---
    const floorGeo = new THREE.PlaneGeometry(300, 300, 50, 50);
    floorGeo.rotateX(-Math.PI / 2);
    const fPos = floorGeo.attributes.position;
    for (let i = 0; i < fPos.count; i++) {
        const x = fPos.getX(i), z = fPos.getZ(i);
        // Bumpy terrain like Hyrule / Mushroom Kingdom
        fPos.setY(i, Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2 + Math.sin(x * 0.03) * 3);
    }
    fPos.needsUpdate = true;
    floorGeo.computeVertexNormals();
    const floorMat = new THREE.MeshPhongMaterial({ color: terrainColor, flatShading: true });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.receiveShadow = true;
    scene.add(floor);

    // --- SCENERY ---
    // Clouds
    const clouds = [];
    if (!isDark) {
        const cloudGeo = new THREE.SphereGeometry(2, 7, 7);
        const cloudMat = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
        for (let i = 0; i < 15; i++) {
            const cloud = new THREE.Group();
            for (let j = 0; j < 5; j++) {
                const puff = new THREE.Mesh(cloudGeo, cloudMat);
                puff.position.set(Math.random() * 3 - 1.5, Math.random() * 2, Math.random() * 3 - 1.5);
                puff.scale.setScalar(0.5 + Math.random() * 1.5);
                cloud.add(puff);
            }
            cloud.position.set((Math.random() - 0.5) * 200, 20 + Math.random() * 15, (Math.random() - 0.5) * 200);
            scene.add(cloud);
            clouds.push(cloud);
        }
    } else {
        // Stars for night mode
        const starGeo = new THREE.BufferGeometry();
        const starPos = new Float32Array(1500 * 3);
        for(let i=0; i<1500*3; i+=3) {
            starPos[i] = (Math.random() - 0.5) * 400;
            starPos[i+1] = Math.random() * 150 + 10;
            starPos[i+2] = (Math.random() - 0.5) * 400;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({color: 0xffffff, size: 0.5});
        scene.add(new THREE.Points(starGeo, starMat));
    }

    // Trees (Zelda style) & Pipes (Mario style)
    const sceneryObjects = [];
    for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 35 + Math.random() * 70;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        if (Math.random() > 0.3) {
            // Tree
            const tree = new THREE.Group();
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 2, 5), new THREE.MeshPhongMaterial({color: 0x5c4033, flatShading: true}));
            trunk.position.y = 1;
            trunk.castShadow = true;
            const leaves = new THREE.Mesh(new THREE.DodecahedronGeometry(2), new THREE.MeshPhongMaterial({color: 0x228B22, flatShading: true}));
            leaves.position.y = 3;
            leaves.castShadow = true;
            tree.add(trunk);
            tree.add(leaves);
            tree.position.set(x, 0, z);
            tree.scale.setScalar(0.8 + Math.random() * 0.6);
            scene.add(tree);
        } else {
            // Mario Pipe
            const pipe = new THREE.Group();
            const body = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 3, 12), new THREE.MeshPhongMaterial({color: 0x00aa00, flatShading: true}));
            body.position.y = 1.5;
            body.castShadow = true;
            const rim = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.5, 12), new THREE.MeshPhongMaterial({color: 0x00cc00, flatShading: true}));
            rim.position.y = 3.25;
            rim.castShadow = true;
            pipe.add(body);
            pipe.add(rim);
            pipe.position.set(x, -0.5, z); // Sunk slightly into ground
            pipe.scale.setScalar(0.7 + Math.random() * 0.5);
            scene.add(pipe);
        }
    }

    // --- PROJECTS (Mario Blocks & Zelda Rupees) ---
    const keys = Object.keys(projectDetails);
    projectMonoliths = []; // Reset global array

    // Create a glowing coin material for Mario blocks
    const blockMat = new THREE.MeshPhongMaterial({ color: 0xFFD700, emissive: 0xb8860b, flatShading: true });
    
    // Rupee colors (Green, Blue, Red, Purple)
    const rupeeColors = [0x2ecc71, 0x3498db, 0xe74c3c, 0x9b59b6];

    keys.forEach((key, index) => {
        const type = index % 2 === 0 ? 'mario' : 'zelda';
        const angle = (index / keys.length) * Math.PI * 2;
        const radius = 22 + (index % 3) * 6;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const baseY = 3 + Math.random() * 2;

        let obj;
        if (type === 'mario') {
            // Mario Question Block (Yellow Cube)
            obj = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.5, 2.5), blockMat.clone());
        } else {
            // Zelda Rupee (Octahedron / Diamond)
            const rColor = rupeeColors[index % rupeeColors.length];
            const mat = new THREE.MeshPhongMaterial({
                color: rColor,
                emissive: rColor,
                emissiveIntensity: 0.4,
                flatShading: true,
                transparent: true,
                opacity: 0.9
            });
            obj = new THREE.Mesh(new THREE.OctahedronGeometry(1.8, 0), mat);
            // Scale to look like a gem
            obj.scale.set(1, 1.5, 0.5);
        }
        
        obj.castShadow = true;
        obj.position.set(x, baseY, z);
        
        // Add a soft light under each object
        const ptLight = new THREE.PointLight(type === 'mario' ? 0xFFD700 : obj.material.color.getHex(), 1, 10);
        ptLight.position.set(0, -2, 0);
        obj.add(ptLight);

        obj.userData = { 
            projKey: key, 
            type: type, 
            baseY: baseY, 
            isHovered: false,
            animOffset: Math.random() * Math.PI * 2
        };
        
        scene.add(obj);
        projectMonoliths.push(obj);
    });

    // --- HOVER HIGHLIGHT ---
    let hoveredObj = null;
    const hoverRaycaster = new THREE.Raycaster();
    const hoverMouse = new THREE.Vector2();

    function onMouseMoveHover(e) {
        if (!isWorldActive) return;
        hoverMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        hoverMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        hoverRaycaster.setFromCamera(hoverMouse, camera);
        const intersects = hoverRaycaster.intersectObjects(projectMonoliths);
        
        if (hoveredObj && (!intersects.length || intersects[0].object !== hoveredObj)) {
            // Reset previous hover
            hoveredObj.userData.isHovered = false;
            if (hoveredObj.userData.type === 'mario') {
                hoveredObj.scale.set(1, 1, 1);
                hoveredObj.material.emissiveIntensity = 0;
            } else {
                hoveredObj.scale.set(1, 1.5, 0.5); // Reset rupee scale
                hoveredObj.material.emissiveIntensity = 0.4;
            }
            worldContainer.style.cursor = 'default';
            hoveredObj = null;
        }

        if (intersects.length > 0 && intersects[0].object !== hoveredObj) {
            hoveredObj = intersects[0].object;
            hoveredObj.userData.isHovered = true;
            
            if (hoveredObj.userData.type === 'mario') {
                hoveredObj.scale.set(1.2, 1.2, 1.2);
                hoveredObj.material.emissiveIntensity = 0.5; // Glow on hover
            } else {
                hoveredObj.scale.set(1.2, 1.8, 0.6); // Bigger rupee
                hoveredObj.material.emissiveIntensity = 0.8;
            }
            worldContainer.style.cursor = 'pointer';
        }
    }
    window.addEventListener('mousemove', onMouseMoveHover);

    // --- UI OVERLAY ---
    const ui = document.createElement('div');
    ui.className = 'world-ui';
    ui.innerHTML = `
        <button onclick="toggle3DWorld()" class="btn btn-outline" style="color: white; border-color: rgba(255,255,255,0.3); backdrop-filter: blur(10px);">
            <i class="fas fa-arrow-left"></i> EXIT WORLD
        </button>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
            <span style="font-size: 0.75rem; opacity: 0.8; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-hand-pointer"></i> Click blocks & rupees
            </span>
            <span style="font-size: 0.75rem; opacity: 0.8; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-arrows-alt"></i> Drag to rotate camera
            </span>
        </div>
    `;
    worldContainer.appendChild(ui);

    const instruction = document.createElement('div');
    instruction.className = 'world-instruction';
    instruction.innerHTML = '<i class="fas fa-gamepad"></i> Game Exploration Mode';
    worldContainer.appendChild(instruction);

    // --- INTERACTION ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onPointerDown(event) {
        if (!isWorldActive) return;
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        mouse.x = (clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(projectMonoliths);
        if (intersects.length > 0) {
            const obj = intersects[0].object;
            
            // "Jump" animation on click for Mario block
            if (obj.userData.type === 'mario') {
                const startY = obj.position.y;
                let step = 0;
                const jumpInterval = setInterval(() => {
                    step += 0.2;
                    obj.position.y = startY + Math.sin(step) * 2;
                    if (step >= Math.PI) {
                        obj.position.y = startY;
                        clearInterval(jumpInterval);
                        openModal(obj.userData.projKey);
                    }
                }, 16);
            } else {
                openModal(obj.userData.projKey);
            }
        }
    }

    let isDragging = false;
    let previousX = 0;
    let rotationY = 0;

    function onPointerMove(event) {
        if (!isWorldActive || !isDragging) return;
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const deltaX = clientX - previousX;
        rotationY -= deltaX * 0.005;
        previousX = clientX;
    }

    window.addEventListener('mousedown', (e) => { isDragging = true; previousX = e.clientX; });
    window.addEventListener('touchstart', (e) => { isDragging = true; previousX = e.touches[0].clientX; onPointerDown(e); });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('click', (e) => { if(!e.touches) onPointerDown(e); });

    // --- ANIMATE ---
    function animate() {
        if (!isWorldActive) return;
        requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        if (!isDragging) rotationY += 0.0015;

        const px = (typeof globalMouse !== 'undefined') ? globalMouse.x * 3 : 0;
        const py = (typeof globalMouse !== 'undefined') ? (globalMouse.y - 1) * 2 : 0;

        camera.position.x = Math.cos(rotationY) * 38 + px;
        camera.position.z = Math.sin(rotationY) * 38;
        camera.position.y = 12 + py; // Slightly lower camera for Zelda feel
        camera.lookAt(px * 0.2, 4, 0);

        // Animate clouds
        if (!isDark) {
            clouds.forEach(cloud => {
                cloud.position.x += 0.02;
                if (cloud.position.x > 150) cloud.position.x = -150;
            });
        }

        // Animate Objects
        projectMonoliths.forEach((obj) => {
            if (obj.userData.type === 'zelda') {
                // Zelda rupees float and spin constantly
                obj.position.y = obj.userData.baseY + Math.sin(time * 2 + obj.userData.animOffset) * 0.5;
                obj.rotation.y += obj.userData.isHovered ? 0.1 : 0.02;
            } else {
                // Mario blocks float gently, shake on hover
                if (obj.userData.isHovered) {
                    obj.rotation.z = Math.sin(time * 20) * 0.1;
                } else {
                    obj.rotation.z = 0;
                    obj.position.y = obj.userData.baseY + Math.sin(time * 1.5 + obj.userData.animOffset) * 0.3;
                }
            }
        });

        renderer.render(scene, camera);
    }
    animate();
}


window.addEventListener('resize', () => {
    if (renderer && camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

function toggle3DWorld() {
    isWorldActive = !isWorldActive;
    const world = document.getElementById('threejs-world');
    const scene3d = document.getElementById('scene-3d');
    
    if (isWorldActive) {
        world.style.display = 'block';
        scene3d.style.display = 'none';
        document.body.style.overflow = 'hidden';
        if (!renderer) init3DWorld();
        else animate();
    } else {
        world.style.display = 'none';
        scene3d.style.display = 'block';
        document.body.style.overflow = 'auto';
    }
}

document.getElementById('mode-3d-toggle').addEventListener('click', toggle3DWorld);

// Terminal, Typed, Particles, Scroll
const terminalBody = document.getElementById('terminal-body');
const terminalInput = document.getElementById('terminal-input');
if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { handleCommand(terminalInput.value.toLowerCase().trim()); terminalInput.value = ''; }
    });
}
function handleCommand(cmd) {
    const output = document.createElement('div'); output.innerHTML = `<span style="color: #f87171;">$</span> ${cmd}`;
    terminalBody.appendChild(output);
    const resp = document.createElement('div'); resp.style.color = '#94a3b8';
    switch(cmd) {
        case 'help':
            resp.innerHTML = currentLang === 'fr'
                ? 'Commandes : help, whoami, projects, clear, 3d'
                : 'Available: help, whoami, projects, clear, 3d';
            break;
        case 'whoami':
            resp.innerHTML = currentLang === 'fr'
                ? 'Herizo Randrianaina — Chef de projet IT & Développeur Back-end'
                : 'Herizo Randrianaina — IT Project Manager & Back-end Developer';
            break;
        case 'projects':
            resp.innerHTML = Object.keys(projectDetails)
                .map(key => `• ${projectDetails[key][currentLang].title}`)
                .join('<br>');
            break;
        case '3d': toggle3DWorld(); resp.innerHTML = 'World loaded.'; break;
        case 'clear': terminalBody.innerHTML = ''; return;
        default: resp.innerHTML = currentLang === 'fr' ? `Commande inconnue : ${cmd}` : `Unknown: ${cmd}`;
    }
    terminalBody.appendChild(resp);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

const typedTextSpan = document.querySelector(".typed-text");
let textArray = currentLang === 'fr' ? ["Chef de Projet IT", "Développeur Back-end", "Expert ERP/CRM & Data"] : ["IT Project Manager", "Back-end Developer", "ERP/CRM & Data Expert"];
let textArrayIndex = 0, charIndex = 0;
function type() {
    if (charIndex < textArray[textArrayIndex].length) { typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); charIndex++; setTimeout(type, 100); }
    else { setTimeout(erase, 2000); }
}
function erase() {
    if (charIndex > 0) { typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1); charIndex--; setTimeout(erase, 50); }
    else { textArrayIndex = (textArrayIndex + 1) % textArray.length; setTimeout(type, 1000); }
}
function updateTypedArray() { textArray = currentLang === 'fr' ? ["Chef de Projet IT", "Développeur Back-end", "Expert ERP/CRM & Data"] : ["IT Project Manager", "Back-end Developer", "ERP/CRM & Data Expert"]; }

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + "%";
});

// --- SPLASH SCREEN LOGIC ---
function initSplashScreen() {
    const splash = document.getElementById('splash-screen');
    const progressBar = document.getElementById('load-progress');
    const splashText = document.getElementById('splash-text');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        if (progress < 40) splashText.textContent = "Loading Core Modules...";
        else if (progress < 80) splashText.textContent = "Initializing 3D World...";
        else splashText.textContent = "Welcome to Herizo OS";

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                splash.classList.add('hidden');
            }, 500);
        }
    }, 200);
}

// --- CONTACT FORM LOGIC ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.disabled = true;
        btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${window.portfolioTranslations[currentLang].contact_sending}`;
        
        // Simulate API Call
        setTimeout(() => {
            btn.innerHTML = `<i class="fas fa-check"></i> ${window.portfolioTranslations[currentLang].contact_sent}`;
            btn.style.background = '#22c55e';
            
            // Premium Toast (Simple Alert for now, but stylized)
            alert(currentLang === 'fr' ? "Message envoyé avec succès ! Herizo vous recontactera bientôt." : "Message sent successfully! Herizo will get back to you soon.");
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        }, 2000);
    });
}

// --- AUTO THEME DETECTION ---
function initAutoTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const setTheme = (isDark) => {
        const theme = isDark ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        const icon = document.querySelector('#theme-toggle i');
        if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    };
    
    // Initial check
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        setTheme(prefersDark.matches);
    }
    
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) setTheme(e.matches);
    });

    // Manual toggle
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            const newIsDark = !isDark;
            setTheme(newIsDark);
            localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
        });
    }
}

// --- CUSTOM CURSOR LOGIC ---
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }
});

function animateCursor() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    if (follower) {
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
    }
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor Hover Effects
document.querySelectorAll('a, button, .project-card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        if (follower) {
            follower.style.width = '50px';
            follower.style.height = '50px';
            follower.style.background = 'rgba(29, 185, 84, 0.1)';
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        if (follower) {
            follower.style.width = '30px';
            follower.style.height = '30px';
            follower.style.background = 'transparent';
        }
    });
});

// --- REVEAL ANIMATION LOGIC ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

function initReveals() {
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initSplashScreen();
    initAutoTheme();
    initLangToggle();
    initProjectFilter();
    updateLanguage(currentLang);
    initReveals();
    setTimeout(type, 1000);
});

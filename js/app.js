// Project Details Data
const projectDetails = {
    proj1: { category: 'crm', fr: { title: "Analyses des Besoins (AOPIA-LIKE)", challenge: "Gérer des workflows complexes.", solution: "Architecture NestJS + Playwright.", stack: ["NestJS", "Vue.js", "PostgreSQL"] }, en: { title: "Needs Analysis (AOPIA-LIKE)", challenge: "Manage complex workflows.", solution: "NestJS + Playwright architecture.", stack: ["NestJS", "Vue.js", "PostgreSQL"] } },
    proj2: { category: 'mobile', fr: { title: "Wizi Learn", challenge: "Apprentissage cross-platform.", solution: "Flutter + React + Laravel.", stack: ["Flutter", "React", "Laravel"] }, en: { title: "Wizi Learn", challenge: "Cross-platform learning.", solution: "Flutter + React + Laravel.", stack: ["Flutter", "React", "Laravel"] } },
    proj3: { category: 'ai', fr: { title: "QuizThème AI", challenge: "Génération auto de quiz via IA.", solution: "Next.js + OpenAI API.", stack: ["Next.js", "OpenAI", "Tailwind"] }, en: { title: "QuizTheme AI", challenge: "Auto quiz generation via AI.", solution: "Next.js + OpenAI API.", stack: ["Next.js", "OpenAI", "Tailwind"] } },
    proj4: { category: 'crm', fr: { title: "AOPIA CRM & CTI", challenge: "Intégration Aircall.", solution: "Webhooks & API Aircall.", stack: ["NestJS", "Aircall", "Redis"] }, en: { title: "AOPIA CRM & CTI", challenge: "Aircall integration.", solution: "Webhooks & Aircall API.", stack: ["NestJS", "Aircall", "Redis"] } },
    proj5: { category: 'ai', fr: { title: "TAL.IA", challenge: "Analyse logs CRM via LLM.", solution: "GPT-4 + Python engine.", stack: ["Python", "OpenAI", "FastAPI"] }, en: { title: "TAL.IA", challenge: "CRM logs analysis via LLM.", solution: "GPT-4 + Python engine.", stack: ["Python", "OpenAI", "FastAPI"] } },
    proj6: { category: 'mobile', fr: { title: "POS-Flutter", challenge: "Stock offline synchronisé.", solution: "Flutter + SQLite + WebSockets.", stack: ["Flutter", "Node.js", "SQLite"] }, en: { title: "POS-Flutter", challenge: "Synced offline stock.", solution: "Flutter + SQLite + WebSockets.", stack: ["Flutter", "Node.js", "SQLite"] } },
    proj7: { category: 'ai', url: 'https://lingo-live-delta.vercel.app/', fr: { title: "LingoLive AI", challenge: "Conversation vocale Gemini Live.", solution: "Interaction temps réel & analyse prononciation.", stack: ["Next.js", "Gemini Live", "Web Speech"] }, en: { title: "LingoLive AI", challenge: "Gemini Live voice chat.", solution: "Real-time interaction & pronunciation analysis.", stack: ["Next.js", "Gemini Live", "Web Speech"] } },
    proj8: { category: 'crm', fr: { title: "TalentPlan", challenge: "Gestion projet agence web.", solution: "Next.js + Firebase Realtime.", stack: ["Next.js", "Firebase", "Tailwind"] }, en: { title: "TalentPlan", challenge: "Web agency project management.", solution: "Next.js + Firebase Realtime.", stack: ["Next.js", "Firebase", "Tailwind"] } },
    proj9: { category: 'ai', fr: { title: "Wizi Learn Audio", challenge: "Conversion quiz en audio.", solution: "IA Voice Gen + MP3 Export.", stack: ["Next.js", "TTS API", "Web Audio"] }, en: { title: "Wizi Learn Audio", challenge: "Convert quiz to audio.", solution: "IA Voice Gen + MP3 Export.", stack: ["Next.js", "TTS API", "Web Audio"] } },
    proj10: { category: 'ai', url: 'https://ocr-generator.vercel.app/', fr: { title: "OCR IA Vision", challenge: "Extraction HTML fidèle.", solution: "Tesseract + GPT Vision.", stack: ["Next.js", "OpenAI Vision", "Tesseract"] }, en: { title: "AI Vision OCR", challenge: "Faithful HTML extraction.", solution: "Tesseract + GPT Vision.", stack: ["Next.js", "OpenAI Vision", "Tesseract"] } },
    proj11: { category: 'web', url: 'https://nathie-rose.vercel.app/', fr: { title: "Nathie Rose Portfolio", challenge: "Protection contenu & Geo-blocking.", solution: "Back-office + Edge Functions.", stack: ["Next.js", "Edge", "Cloudinary"] }, en: { title: "Nathie Rose Portfolio", challenge: "Content protection & Geo-blocking.", solution: "Back-office + Edge Functions.", stack: ["Next.js", "Edge", "Cloudinary"] } },
    proj12: { category: 'web', url: 'https://shurt.vercel.app/', fr: { title: "Shurt - URL & Landing", challenge: "Optimisation de la visibilité sociale & SEO/GEO/GSO.", solution: "Générateur d'URL avec landing pages optimisées pour les moteurs IA.", stack: ["Next.js", "Firebase", "GEO Optimization"] }, en: { title: "Shurt - URL & Landing", challenge: "Social visibility & SEO/GEO/GSO optimization.", solution: "URL generator with landing pages optimized for AI Search Engines.", stack: ["Next.js", "Firebase", "GEO Optimization"] } },
    proj13: { category: 'crm', fr: { title: "MESR - Symfony", challenge: "Gestion académique Ministère.", solution: "Symfony ACL & Workflows.", stack: ["Symfony", "PHP 8", "Docker"] }, en: { title: "MESR - Symfony", challenge: "Ministry academic management.", solution: "Symfony ACL & Workflows.", stack: ["Symfony", "PHP 8", "Docker"] } },
    proj14: { category: 'crm', fr: { title: "PyAuto Task & Mail", challenge: "Automatisation de rapports.", solution: "Python + Smtplib + Schedule.", stack: ["Python", "Smtplib", "APScheduler"] }, en: { title: "PyAuto Task & Mail", challenge: "Reporting automation.", solution: "Python + Smtplib + Schedule.", stack: ["Python", "Smtplib", "APScheduler"] } },
    proj15: { category: 'web', url: 'https://mekkala-seaview.com', fr: { title: "Mekkala Seaview", challenge: "Luxe WordPress.", solution: "Design premium & SEO.", stack: ["WordPress", "Elementor"] }, en: { title: "Mekkala Seaview", challenge: "Luxury WordPress.", solution: "Premium design & SEO.", stack: ["WordPress", "Elementor"] } },
    proj16: { category: 'web', fr: { title: "SP Villa", challenge: "Gestion conciergerie.", solution: "Site vitrine optimisé.", stack: ["WordPress", "CSS"] }, en: { title: "SP Villa", challenge: "Concierge management.", solution: "Optimized showcase site.", stack: ["WordPress", "CSS"] } },
    proj17: { category: 'web', url: 'https://watairloo.com', fr: { title: "Watairloo", challenge: "Shopify E-commerce.", solution: "Tunnel de vente optimisé.", stack: ["Shopify", "Liquid"] }, en: { title: "Watairloo", challenge: "Shopify E-commerce.", solution: "Optimized sales funnel.", stack: ["Shopify", "Liquid"] } },
    proj18: { category: 'web', url: 'https://aopia-prevention.fr', fr: { title: "AOPIA Prévention", challenge: "Santé publique.", solution: "Portail institutionnel accessible.", stack: ["WordPress"] }, en: { title: "AOPIA Prevention", challenge: "Public health.", solution: "Accessible institutional portal.", stack: ["WordPress"] } },
    proj19: { category: 'web', url: 'https://nova-kinder-garten.com', fr: { title: "Nova Kindergarten", challenge: "Éducation internationale.", solution: "Design intuitif & multilingue.", stack: ["WordPress"] }, en: { title: "Nova Kindergarten", challenge: "International education.", solution: "Intuitive & multilingual design.", stack: ["WordPress"] } },
    proj20: { category: 'web', url: 'https://bianca-monroe.vercel.app', fr: { title: "Bianca Monroe Portfolio", challenge: "Portfolio pour modèle photo.", solution: "Landing page optimisée.", stack: ["Next.js", "Edge", "Cloudinary"] }, en: { title: "Bianca Monroe Portfolio", challenge: "Photo model portfolio.", solution: "Optimized landing page.", stack: ["Next.js", "Edge", "Cloudinary"] } },
    proj21: { category: 'web', url: 'https://camila-monroe.vercel.app', fr: { title: "Camila Monroe Portfolio", challenge: "Portfolio pour modèle photo.", solution: "Landing page optimisée.", stack: ["Next.js", "Edge", "Cloudinary"] }, en: { title: "Camila Monroe Portfolio", challenge: "Photo model portfolio.", solution: "Optimized landing page.", stack: ["Next.js", "Edge", "Cloudinary"] } }
};

// i18n & Basic UI
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'fr');
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.portfolioTranslations[lang][key]) el.textContent = window.portfolioTranslations[lang][key];
    });
    updateTypedArray();
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

// Terminal, Typed, Particles, Scroll (Keep from previous version)
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
        case 'help': resp.innerHTML = 'Available: help, whoami, projects, clear, 3d'; break;
        case '3d': toggle3DWorld(); resp.innerHTML = 'World loaded.'; break;
        case 'clear': terminalBody.innerHTML = ''; return;
        default: resp.innerHTML = `Unknown: ${cmd}`;
    }
    terminalBody.appendChild(resp);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// --- PROJECT FILTERING LOGIC ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.add('active'), 50);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('active');
                }
            });
        });
    });
}

const typedTextSpan = document.querySelector(".typed-text");
let textArray = currentLang === 'fr' ? ["Développeur Fullstack", "Architecte Produit", "IT Manager"] : ["Fullstack Developer", "Product Architect", "IT Manager"];
let textArrayIndex = 0, charIndex = 0;
function type() {
    if (charIndex < textArray[textArrayIndex].length) { typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); charIndex++; setTimeout(type, 100); }
    else { setTimeout(erase, 2000); }
}
function erase() {
    if (charIndex > 0) { typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1); charIndex--; setTimeout(erase, 50); }
    else { textArrayIndex = (textArrayIndex + 1) % textArray.length; setTimeout(type, 1000); }
}
function updateTypedArray() { textArray = currentLang === 'fr' ? ["Développeur Fullstack", "Architecte Produit", "IT Manager"] : ["Fullstack Developer", "Product Architect", "IT Manager"]; }

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
    if (!localStorage.getItem('theme')) {
        setTheme(prefersDark.matches);
    }
    
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) setTheme(e.matches);
    });
}

// Global Mouse tracking for Parallax
const globalMouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
    globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouse.y = (e.clientY / window.innerHeight) * 2 + 1;
});

document.addEventListener("DOMContentLoaded", () => {
    initSplashScreen();
    initAutoTheme();
    updateLanguage(currentLang);
    setTimeout(type, 1000);
});

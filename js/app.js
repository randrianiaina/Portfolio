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
    proj19: { category: 'web', url: 'https://nova-kinder-garten.com', fr: { title: "Nova Kindergarten", challenge: "Éducation internationale.", solution: "Design intuitif & multilingue.", stack: ["WordPress"] }, en: { title: "Nova Kindergarten", challenge: "International education.", solution: "Intuitive & multilingual design.", stack: ["WordPress"] } }
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
    
    // Theme-based colors (Mapped to Spotify OKLCH Theme)
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const bgColor = isDark ? 0x171723 : 0xfdfdfd; // oklch(0.15 0.02 269.18) / oklch(0.99 0 0)
    const fogColor = isDark ? 0x171723 : 0xfdfdfd;
    const floorColor = isDark ? 0x222436 : 0xf0f0f0; // slightly lighter/darker for contrast
    const monolithColor = 0x1db954; // Spotify Green approx for oklch(0.67 0.17 153.85)

    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(fogColor, 0.015);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 15, 40);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    worldContainer.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.4 : 0.7);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, isDark ? 0.8 : 0.5);
    dirLight.position.set(30, 50, 20);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // --- TERRAIN ---
    const floorGeo = new THREE.PlaneGeometry(300, 300, 40, 40);
    floorGeo.rotateX(-Math.PI / 2);
    const fPos = floorGeo.attributes.position;
    for (let i = 0; i < fPos.count; i++) {
        const x = fPos.getX(i), z = fPos.getZ(i);
        fPos.setY(i, Math.sin(x * 0.05) * Math.cos(z * 0.05) * 3 + Math.random() * 0.5);
    }
    fPos.needsUpdate = true;
    floorGeo.computeVertexNormals();
    const floorMat = new THREE.MeshPhongMaterial({ color: floorColor, flatShading: true });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.receiveShadow = true;
    scene.add(floor);

    // --- PROJECT MONOLITHS ---
    const keys = Object.keys(projectDetails);
    
    // Optional: Keep different geometries but use uniform color
    const geometries = [
        (h) => new THREE.BoxGeometry(2, h, 2),
        (h) => new THREE.CylinderGeometry(1, 1, h, 6),
        (h) => new THREE.DodecahedronGeometry(h * 0.4, 0)
    ];

    keys.forEach((key, index) => {
        const h = 3 + Math.random() * 3;
        const geoFn = geometries[index % geometries.length];
        const geometry = geoFn(h);
        const material = new THREE.MeshPhongMaterial({
            color: monolithColor,
            emissive: monolithColor,
            emissiveIntensity: isDark ? 0.2 : 0.1,
            flatShading: true,
            transparent: true,
            opacity: 0.9
        });
        const monolith = new THREE.Mesh(geometry, material);
        monolith.castShadow = true;

        const angle = (index / keys.length) * Math.PI * 2;
        const radius = 22 + (index % 3) * 6;
        monolith.position.set(Math.cos(angle) * radius, h / 2 + 1, Math.sin(angle) * radius);
        monolith.userData = { projKey: key, baseY: h / 2 + 1 };
        scene.add(monolith);
        projectMonoliths.push(monolith);
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
        
        if (hoveredObj) {
            hoveredObj.material.emissiveIntensity = isDark ? 0.2 : 0.1;
            hoveredObj.scale.set(1, 1, 1);
            worldContainer.style.cursor = 'default';
        }
        if (intersects.length > 0) {
            hoveredObj = intersects[0].object;
            hoveredObj.material.emissiveIntensity = 0.6;
            hoveredObj.scale.set(1.1, 1.1, 1.1);
            worldContainer.style.cursor = 'pointer';
        } else {
            hoveredObj = null;
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
                <i class="fas fa-hand-pointer"></i> Click to explore
            </span>
            <span style="font-size: 0.75rem; opacity: 0.8; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-arrows-alt"></i> Drag to rotate
            </span>
        </div>
    `;
    worldContainer.appendChild(ui);

    const instruction = document.createElement('div');
    instruction.className = 'world-instruction';
    instruction.innerHTML = '<i class="fas fa-globe"></i> Exploration Mode';
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
            openModal(intersects[0].object.userData.projKey);
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

        const time = Date.now() * 0.0005;

        if (!isDragging) rotationY += 0.0015;

        const px = (typeof globalMouse !== 'undefined') ? globalMouse.x * 3 : 0;
        const py = (typeof globalMouse !== 'undefined') ? (globalMouse.y - 1) * 2 : 0;

        camera.position.x = Math.cos(rotationY) * 38 + px;
        camera.position.z = Math.sin(rotationY) * 38;
        camera.position.y = 14 + py;
        camera.lookAt(px * 0.2, 2, 0);

        // Animate monoliths
        projectMonoliths.forEach((m, i) => {
            m.position.y = m.userData.baseY + Math.sin(time * 2 + i * 0.7) * 0.8;
            m.rotation.y += 0.008;
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

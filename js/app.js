// Project Details Data
const projectDetails = {
    proj1: {
        fr: {
            title: "Analyses des Besoins (AOPIA-LIKE)",
            challenge: "Gérer des workflows de formation complexes avec des règles de dépendances strictes.",
            solution: "Architecture NestJS modulaire avec moteur de règles personnalisé et génération PDF haute fidélité via Playwright.",
            stack: ["NestJS", "Vue.js", "PostgreSQL", "Playwright"]
        },
        en: {
            title: "Needs Analysis (AOPIA-LIKE)",
            challenge: "Manage complex training workflows with strict dependency rules.",
            solution: "Modular NestJS architecture with custom rules engine and high-fidelity PDF generation via Playwright.",
            stack: ["NestJS", "Vue.js", "PostgreSQL", "Playwright"]
        }
    },
    proj2: {
        fr: {
            title: "Wizi Learn",
            challenge: "Créer une expérience d'apprentissage cohérente sur Web et Mobile avec un backend unique.",
            solution: "Développement cross-platform avec Flutter (Mobile) et React (Web) sur un backend Laravel/Node.",
            stack: ["Flutter", "React", "Laravel", "Node.js"]
        },
        en: {
            title: "Wizi Learn",
            challenge: "Create a consistent learning experience across Web and Mobile with a single backend.",
            solution: "Cross-platform development with Flutter (Mobile) and React (Web) on a Laravel/Node backend.",
            stack: ["Flutter", "React", "Laravel", "Node.js"]
        }
    },
    proj3: {
        fr: {
            title: "QuizThème AI",
            challenge: "Simplifier la création de quiz pédagogiques via l'IA multi-sources (YouTube, PDF, URL).",
            solution: "Application Next.js intégrant l'API OpenAI pour l'extraction de contenu. Système anti-doublon et export Excel/CSV.",
            stack: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"]
        },
        en: {
            title: "QuizTheme AI",
            challenge: "Simplify pedagogical quiz creation via multi-source AI (YouTube, PDF, URL).",
            solution: "Next.js application integrating OpenAI API for content extraction. Anti-duplicate system and Excel/CSV export.",
            stack: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"]
        }
    },
    proj4: {
        fr: {
            title: "AOPIA CRM & CTI",
            challenge: "Fusionner les outils de communication (Aircall) avec le CRM pour supprimer les doubles saisies.",
            solution: "Intégration profonde via Webhooks et API Aircall. Développement de Screen Pops personnalisés et automatisation mail.",
            stack: ["NestJS", "Aircall API", "Webhooks", "Redis"]
        },
        en: {
            title: "AOPIA CRM & CTI",
            challenge: "Merge communication tools (Aircall) with the CRM to eliminate double entries.",
            solution: "Deep integration via Webhooks and Aircall API. Development of custom Screen Pops and mail automation.",
            stack: ["NestJS", "Aircall API", "Webhooks", "Redis"]
        }
    },
    proj5: {
        fr: {
            title: "TAL.IA",
            challenge: "Extraire des insights exploitables à partir de milliers de logs CRM non structurés.",
            solution: "Utilisation de GPT-4 pour classifier et résumer automatiquement les interactions clients via un moteur d'analyse Python.",
            stack: ["OpenAI API", "Python", "React", "FastAPI"]
        },
        en: {
            title: "TAL.IA",
            challenge: "Extract actionable insights from thousands of unstructured CRM logs.",
            solution: "Using GPT-4 to automatically classify and summarize customer interactions via a Python analysis engine.",
            stack: ["OpenAI API", "Python", "React", "FastAPI"]
        }
    },
    proj6: {
        fr: {
            title: "POS-Flutter",
            challenge: "Garantir une synchronisation parfaite des stocks en temps réel avec un mode hors-ligne pour points de vente.",
            solution: "Flutter avec SQLite local et synchronisation automatique via WebSockets vers un backend Node.js.",
            stack: ["Flutter", "Dart", "Node.js", "SQLite"]
        },
        en: {
            title: "POS-Flutter",
            challenge: "Ensure perfect real-time inventory synchronization with an offline mode for points of sale.",
            solution: "Flutter with local SQLite and automatic synchronization via WebSockets to a Node.js backend.",
            stack: ["Flutter", "Dart", "Node.js", "SQLite"]
        }
    },
    proj7: {
        fr: {
            title: "LingoLive",
            challenge: "Créer une application d'apprentissage des langues immersive pour les enfants utilisant l'IA.",
            solution: "Application React/Next.js interactive utilisant l'IA pour personnaliser le parcours d'apprentissage selon le niveau.",
            stack: ["Next.js", "React", "AI Models", "Tailwind"]
        },
        en: {
            title: "LingoLive",
            challenge: "Create an immersive language learning app for children using AI.",
            solution: "Interactive React/Next.js app using AI to personalize the learning path according to the level.",
            stack: ["Next.js", "React", "AI Models", "Tailwind"]
        }
    },
    proj8: {
        fr: {
            title: "TalentPlan",
            challenge: "Unifier la gestion de projet et la planification des publications pour agences web.",
            solution: "Workspace collaboratif Next.js + Firebase gérant les tâches, le calendrier et les fichiers en temps réel (Firestore).",
            stack: ["Next.js", "Firebase", "Firestore", "Tailwind"]
        },
        en: {
            title: "TalentPlan",
            challenge: "Unify project management and publication scheduling for web agencies.",
            solution: "Collaborative workspace Next.js + Firebase managing tasks, calendar, and files in real-time (Firestore).",
            stack: ["Next.js", "Firebase", "Firestore", "Tailwind"]
        }
    },
    proj9: {
        fr: {
            title: "Wizi Learn Audio",
            challenge: "Convertir des quiz textuels en format audio haute qualité avec plusieurs voix.",
            solution: "Générateur vocal Next.js exploitant des APIs de Text-to-Speech avancées avec contrôles de lecture et export MP3.",
            stack: ["Next.js", "Text-to-Speech API", "Web Audio", "Vercel"]
        },
        en: {
            title: "Wizi Learn Audio",
            challenge: "Convert textual quizzes to high-quality audio format with multiple voices.",
            solution: "Next.js voice generator leveraging advanced Text-to-Speech APIs with playback controls and MP3 export.",
            stack: ["Next.js", "Text-to-Speech API", "Web Audio", "Vercel"]
        }
    }
};

// i18n Logic
function getBrowserLang() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('en') ? 'en' : 'fr';
}

let currentLang = localStorage.getItem('lang') || getBrowserLang();

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.portfolioTranslations[lang][key]) {
            el.textContent = window.portfolioTranslations[lang][key];
        }
    });
    updateTypedArray();
}

// Modal Logic
function openModal(projKey) {
    const data = projectDetails[projKey][currentLang];
    const modalData = document.getElementById('modal-data');
    const labels = window.portfolioTranslations[currentLang];

    modalData.innerHTML = `
        <h2 style="color: var(--accent); margin-bottom: 1.5rem;">${data.title}</h2>
        <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);"><i class="fas fa-exclamation-triangle"></i> ${labels.modal_challenge}</h4>
            <p>${data.challenge}</p>
        </div>
        <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);"><i class="fas fa-check-circle"></i> ${labels.modal_solution}</h4>
            <p>${data.solution}</p>
        </div>
        <div>
            <h4 style="margin-bottom: 1rem; color: var(--text-primary);">Tech Stack</h4>
            <div class="project-tags">
                ${data.stack.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// 3D Mode Toggle
const mode3dToggle = document.getElementById('mode-3d-toggle');
let is3dMode = false;

if (mode3dToggle) {
    mode3dToggle.addEventListener('click', () => {
        is3dMode = !is3dMode;
        document.body.classList.toggle('mode-3d-active', is3dMode);
        mode3dToggle.classList.toggle('active', is3dMode);
        
        if (is3dMode) {
            document.addEventListener('mousemove', handle3dMouseMove);
        } else {
            document.removeEventListener('mousemove', handle3dMouseMove);
            document.getElementById('scene-3d').style.transform = '';
        }
    });
}

function handle3dMouseMove(e) {
    if (!is3dMode) return;
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;
    document.getElementById('scene-3d').style.transform = `rotateY(${x - 15}deg) rotateX(${y + 5}deg) scale(0.9)`;
}

// Terminal Logic
const terminalBody = document.getElementById('terminal-body');
const terminalInput = document.getElementById('terminal-input');

if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = terminalInput.value.toLowerCase().trim();
            handleCommand(cmd);
            terminalInput.value = '';
        }
    });
}

function handleCommand(cmd) {
    const output = document.createElement('div');
    output.style.marginBottom = '0.5rem';
    output.innerHTML = `<span style="color: #f87171;">$</span> ${cmd}`;
    terminalBody.appendChild(output);

    const response = document.createElement('div');
    response.style.color = '#94a3b8';
    response.style.marginBottom = '1rem';

    switch(cmd) {
        case 'help':
            response.innerHTML = 'Available: help, whoami, projects, clear, contact, share, 3d';
            break;
        case 'whoami':
            response.innerHTML = currentLang === 'fr' 
                ? 'Herizo Randrianaina: Développeur Fullstack Produit & IT Manager hybride.' 
                : 'Herizo Randrianaina: Product-Oriented Fullstack Developer & Hybrid IT Manager.';
            break;
        case '3d':
            if(mode3dToggle) mode3dToggle.click();
            response.innerHTML = '3D Mode toggled.';
            break;
        case 'projects':
            response.innerHTML = 'Listing projects... [AOPIA, Wizi Learn, QuizThème, LingoLive, TalentPlan...]';
            break;
        case 'clear':
            terminalBody.innerHTML = '';
            return;
        case 'share':
            if (navigator.share) {
                navigator.share({ title: 'Herizo Portfolio', url: window.location.href });
                response.innerHTML = 'Share window opened.';
            } else {
                response.innerHTML = 'Share not supported.';
            }
            break;
        default:
            response.innerHTML = `Command not found: ${cmd}. Type 'help'.`;
    }
    terminalBody.appendChild(response);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Typed Text Effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
let textArray = [];

function updateTypedArray() {
    if (currentLang === 'fr') {
        textArray = ["Développeur Fullstack", "Architecte Produit", "Expert CTI & IT", "IT Manager Hybride"];
    } else {
        textArray = ["Fullstack Developer", "Product Architect", "CTI & IT Expert", "Hybrid IT Manager"];
    }
}

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, 1000);
    }
}

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
const progress = document.querySelector('.scroll-progress');

document.addEventListener('mousemove', (e) => {
    if(cursor && follower) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    }
});

// Scroll Progress
window.addEventListener('scroll', () => {
    if(progress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + "%";
    }
    
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) backToTop.style.display = 'flex';
        else backToTop.style.display = 'none';
    }
});

const btt = document.getElementById('back-to-top');
if(btt) {
    btt.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Particles
function createParticles() {
    const container = document.getElementById('particles-js');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 5 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
        container.appendChild(p);
    }
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, icon);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, icon);
    });
}

function updateThemeIcon(theme, icon) {
    if (theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));

function exportToPDF() { window.print(); }

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(currentLang);
    createParticles();
    setTimeout(type, 1000);
});

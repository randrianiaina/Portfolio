// Project Details Data
const projectDetails = {
    proj1: {
        fr: {
            title: "Analyses des Besoins (AOPIA-LIKE)",
            challenge: "Gérer des workflows de formation complexes avec des règles de dépendances strictes et une génération de rapports haute fidélité.",
            solution: "Architecture NestJS modulaire avec moteur de règles personnalisé. Intégration de Playwright pour la génération PDF et Vue.js pour un workflow utilisateur fluide.",
            stack: ["NestJS", "Vue.js", "PostgreSQL", "Playwright", "Docker"]
        },
        en: {
            title: "Needs Analysis (AOPIA-LIKE)",
            challenge: "Manage complex training workflows with strict dependency rules and high-fidelity report generation.",
            solution: "Modular NestJS architecture with custom rules engine. Playwright integration for PDF generation and Vue.js for a smooth user workflow.",
            stack: ["NestJS", "Vue.js", "PostgreSQL", "Playwright", "Docker"]
        }
    },
    proj2: {
        fr: {
            title: "Wizi Learn",
            challenge: "Créer une expérience d'apprentissage cohérente sur Web et Mobile avec un backend unique et performant.",
            solution: "Développement cross-platform avec Flutter (Mobile) et React (Web). Backend Laravel robuste gérant le contenu, les utilisateurs et les analytics.",
            stack: ["Flutter", "React", "Laravel", "MySQL", "Redis"]
        },
        en: {
            title: "Wizi Learn",
            challenge: "Create a consistent learning experience across Web and Mobile with a single, high-performance backend.",
            solution: "Cross-platform development with Flutter (Mobile) and React (Web). Robust Laravel backend managing content, users, and analytics.",
            stack: ["Flutter", "React", "Laravel", "MySQL", "Redis"]
        }
    },
    proj4: {
        fr: {
            title: "AOPIA CRM & CTI",
            challenge: "Fusionner les outils de communication (Aircall) avec le CRM pour supprimer les doubles saisies et automatiser le suivi des appels.",
            solution: "Intégration profonde via Webhooks et API Aircall. Développement de Screen Pops personnalisés et automatisation des relances mail post-appel.",
            stack: ["NestJS", "Aircall API", "Webhooks", "Redis"]
        },
        en: {
            title: "AOPIA CRM & CTI",
            challenge: "Merge communication tools (Aircall) with the CRM to eliminate double entries and automate call tracking.",
            solution: "Deep integration via Webhooks and Aircall API. Development of custom Screen Pops and post-call automated email follow-ups.",
            stack: ["NestJS", "Aircall API", "Webhooks", "Redis"]
        }
    },
    proj5: {
        fr: {
            title: "TAL.IA",
            challenge: "Extraire des insights exploitables à partir de milliers de logs CRM non structurés.",
            solution: "Utilisation de l'API OpenAI (GPT-4) pour classifier et résumer automatiquement les interactions clients. Interface de dashboarding en React.",
            stack: ["OpenAI API", "Python", "React", "Node.js"]
        },
        en: {
            title: "TAL.IA",
            challenge: "Extract actionable insights from thousands of unstructured CRM logs.",
            solution: "Using OpenAI API (GPT-4) to automatically classify and summarize customer interactions. Dashboarding interface in React.",
            stack: ["OpenAI API", "Python", "React", "Node.js"]
        }
    },
    proj6: {
        fr: {
            title: "POS-Flutter",
            challenge: "Garantir une synchronisation parfaite des stocks en temps réel sur plusieurs points de vente avec un mode hors-ligne.",
            solution: "Développement en Flutter avec SQLite local pour le offline et synchronisation automatique avec un backend Node.js via WebSockets.",
            stack: ["Flutter", "Dart", "Node.js", "SQLite", "WebSockets"]
        },
        en: {
            title: "POS-Flutter",
            challenge: "Ensure perfect real-time inventory synchronization across multiple points of sale with an offline mode.",
            solution: "Flutter development with local SQLite for offline use and automatic synchronization with a Node.js backend via WebSockets.",
            stack: ["Flutter", "Dart", "Node.js", "SQLite", "WebSockets"]
        }
    },
    proj7: {
        fr: {
            title: "Lingo-Live",
            challenge: "Gérer la planification et la diffusion vidéo en direct pour des centaines d'apprenants simultanés.",
            solution: "Intégration d'API WebRTC et gestion des calendriers complexes avec une logique de fuseaux horaires automatisée.",
            stack: ["React", "WebRTC", "Express", "MongoDB"]
        },
        en: {
            title: "Lingo-Live",
            challenge: "Manage scheduling and live video streaming for hundreds of simultaneous learners.",
            solution: "WebRTC API integration and complex calendar management with automated timezone logic.",
            stack: ["React", "WebRTC", "Express", "MongoDB"]
        }
    },
    proj8: {
        fr: {
            title: "Taskosaur",
            challenge: "Créer un outil de gestion de tâches hautement personnalisable sans sacrifier la performance de l'interface.",
            solution: "Utilisation de React-Query pour le caching et une architecture Redux optimisée. Backend en Express avec une structure de base de données relationnelle flexible.",
            stack: ["React", "React-Query", "Express", "MySQL"]
        },
        en: {
            title: "Taskosaur",
            challenge: "Create a highly customizable task management tool without sacrificing interface performance.",
            solution: "Using React-Query for caching and an optimized Redux architecture. Express backend with a flexible relational database structure.",
            stack: ["React", "React-Query", "Express", "MySQL"]
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

    // Update form placeholders
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');
    
    if (lang === 'en') {
        if (nameInput) nameInput.placeholder = "Your name";
        if (emailInput) emailInput.placeholder = "your@email.com";
        if (messageInput) messageInput.placeholder = "Detail your needs...";
        document.getElementById('lang-text').textContent = 'FR';
    } else {
        if (nameInput) nameInput.placeholder = "Votre nom";
        if (emailInput) emailInput.placeholder = "votre@email.com";
        if (messageInput) messageInput.placeholder = "Détaillez votre besoin...";
        document.getElementById('lang-text').textContent = 'EN';
    }

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
            response.innerHTML = 'Available commands: help, whoami, projects, clear, contact, theme';
            break;
        case 'whoami':
            response.innerHTML = currentLang === 'fr' 
                ? 'Herizo Randrianaina: Développeur Fullstack orienté Produit & IT Manager hybride.' 
                : 'Herizo Randrianaina: Product-Oriented Fullstack Developer & Hybrid IT Manager.';
            break;
        case 'projects':
            response.innerHTML = 'Listing top projects... [Analyses des Besoins, Wizi Learn, AOPIA CRM]';
            break;
        case 'clear':
            terminalBody.innerHTML = '';
            return;
        case 'contact':
            response.innerHTML = 'Email: menja.herizo@gmail.com | Phone: +261 34 49 726 70';
            break;
        case 'share':
            if (navigator.share) {
                navigator.share({
                    title: 'Herizo Randrianaina Portfolio',
                    url: window.location.href
                });
                response.innerHTML = 'Sharing window opened.';
            } else {
                response.innerHTML = 'Sharing not supported on this browser. URL: ' + window.location.href;
            }
            break;
        case 'theme':
            document.getElementById('theme-toggle').click();
            response.innerHTML = 'Theme toggled successfully.';
            break;
        default:
            response.innerHTML = `Command not found: ${cmd}. Type 'help' for options.`;
    }
    terminalBody.appendChild(response);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Back to Top Logic
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Language Toggle Event
document.getElementById('lang-toggle').addEventListener('click', () => {
    const nextLang = currentLang === 'fr' ? 'en' : 'fr';
    updateLanguage(nextLang);
});

// Typed Text Effect for Hero
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

let textArray = [];
function updateTypedArray() {
    if (currentLang === 'fr') {
        textArray = ["Développeur Fullstack", "Architecte Logiciel", "Expert CTI & IT", "Analyste Produit"];
    } else {
        textArray = ["Fullstack Developer", "Software Architect", "CTI & IT Expert", "Product Analyst"];
    }
}

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
const progress = document.querySelector('.scroll-progress');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Cursor Hover Effects
const links = document.querySelectorAll('a, button, .project-card, .timeline-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        follower.style.width = '60px';
        follower.style.height = '60px';
        follower.style.borderColor = 'var(--accent)';
        follower.style.background = 'rgba(13, 148, 136, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.width = '30px';
        follower.style.height = '30px';
        follower.style.background = 'transparent';
    });
});

// Scroll Progress Logic
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
});

// Simple Particles Effect
function createParticles() {
    const container = document.getElementById('particles-js');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        container.appendChild(particle);
    }
}

// Add Float Animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
        50% { transform: translateY(-100px) rotate(180deg); opacity: 0.05; }
        100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function() {
    updateLanguage(currentLang);
    createParticles();
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// 3D Tilt Effect
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
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

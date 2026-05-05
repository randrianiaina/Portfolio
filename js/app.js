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
    }
};

// i18n Logic
let currentLang = localStorage.getItem('lang') || 'fr';

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

document.addEventListener("DOMContentLoaded", function() {
    updateLanguage(currentLang);
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

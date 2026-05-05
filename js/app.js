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

    // Refresh Typed Effect
    charIndex = 0;
    textArrayIndex = 0;
    typedTextSpan.textContent = "";
    updateTypedArray();
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
        textArray = ["Analyste Programmeur", "Développeur PHP/Java", "Expert SQL & ERP", "Spécialiste CTI & Réseaux"];
    } else {
        textArray = ["Analyst Programmer", "PHP/Java Developer", "SQL & ERP Expert", "CTI & Network Specialist"];
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

// 3D Tilt Effect for Project Cards
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// Magnetic Buttons
const magneticBtns = document.querySelectorAll('.btn-primary, .cv-btn');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme
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

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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

// CV Export Logic
function exportToPDF() {
    window.print();
}

// Form Submission (Simulated)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = currentLang === 'fr' ? '<i class="fas fa-circle-notch fa-spin"></i> Envoi...' : '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = currentLang === 'fr' ? '<i class="fas fa-check"></i> Envoyé !' : '<i class="fas fa-check"></i> Sent!';
            btn.style.background = '#22c55e';
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

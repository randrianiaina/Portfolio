"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { projects, type ProjectCategory } from "./projects";
import { downloadResumePdf, type ResumeVariant } from "./resume-pdf";
import { translations, type Locale } from "./translations";

type Filter = "all" | ProjectCategory;

const filters: { value: Filter; label: keyof typeof translations.fr }[] = [
  { value: "all", label: "all" },
  { value: "crm", label: "crmManagement" },
  { value: "product", label: "webMobileFilter" },
  { value: "data", label: "dataQuality" },
  { value: "infra", label: "infrastructure" },
  { value: "ia", label: "appliedAi" },
];

const expertise = [
  {
    number: "01",
    title: "scopeAndLead",
    description: "scopeDescription",
    tags: ["agile", "specifications", "coordination"],
  },
  {
    number: "02",
    title: "developmentAndIntegration",
    description: "developmentDescription",
    tags: ["laravel", "symfony", "reactFlutter"],
  },
  {
    number: "03",
    title: "dataTitle",
    description: "dataDescription",
    tags: ["sqlSsis", "powerQuery", "dax"],
  },
  {
    number: "04",
    title: "reliability",
    description: "reliabilityDescription",
    tags: ["linuxProxmox", "docker", "playwright"],
  },
] as const;

const approach = [
  { number: "01", title: "understand", description: "understandDescription" },
  { number: "02", title: "design", description: "designDescription" },
  { number: "03", title: "build", description: "buildDescription" },
  {
    number: "04",
    title: "improveReliability",
    description: "reliabilityDescriptionShort",
  },
] as const;

const experience = [
  {
    dates: "currentRoleDates",
    role: "currentRole",
    description: "currentRoleDescription",
  },
  {
    dates: "analystDates",
    role: "analystRole",
    description: "analystDescription",
  },
  {
    dates: "developerDates",
    role: "developerRole",
    description: "developerDescription",
  },
  {
    dates: "supportDates",
    role: "supportRole",
    description: "supportDescription",
  },
] as const;

const localeChangeEvent = "portfolio-locale-change";

function subscribeToLocaleChange(onChange: () => void) {
  window.addEventListener(localeChangeEvent, onChange);
  return () => window.removeEventListener(localeChangeEvent, onChange);
}

function getLocaleSnapshot(): Locale {
  const savedLocale = window.localStorage.getItem("portfolio-locale");
  if (savedLocale === "fr" || savedLocale === "en") return savedLocale;
  return window.navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
}

function getServerLocaleSnapshot(): Locale {
  return "fr";
}

export default function Portfolio() {
  const locale = useSyncExternalStore(
    subscribeToLocaleChange,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [downloadingVariant, setDownloadingVariant] =
    useState<ResumeVariant | null>(null);
  const t = translations[locale];
  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function changeLocale() {
    const nextLocale = locale === "fr" ? "en" : "fr";
    window.localStorage.setItem("portfolio-locale", nextLocale);
    window.dispatchEvent(new Event(localeChangeEvent));
  }

  async function downloadResume(variant: ResumeVariant) {
    setDownloadError(false);
    setDownloadingVariant(variant);
    try {
      await downloadResumePdf(locale, variant);
    } catch (error) {
      console.error("Unable to generate the resume PDF.", error);
      setDownloadError(true);
    } finally {
      setDownloadingVariant(null);
    }
  }

  return (
    <>
      <div aria-hidden="true" className="noise" />
      <a className="skip-link" href="#top">
        {t.skip}
      </a>
      <header className="site-header">
        <Link
          aria-label={t.brandLabel}
          className="brand"
          href="#top"
          onClick={() => setMenuOpen(false)}
        >
          <span>HR</span>
          <strong>
            Herizo
            <br />
            Randrianaina
          </strong>
        </Link>
        <nav
          aria-label={t.navigation}
          className={`nav${menuOpen ? " open" : ""}`}
          id="primary-navigation"
        >
          <a href="#expertise" onClick={() => setMenuOpen(false)}>
            {t.expertise}
          </a>
          <a href="#projets" onClick={() => setMenuOpen(false)}>
            {t.projects}
          </a>
          <a href="#approche" onClick={() => setMenuOpen(false)}>
            {t.approach}
          </a>
          <a href="#parcours" onClick={() => setMenuOpen(false)}>
            {t.experience}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t.contact}
          </a>
          <button
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            className="nav-action"
            onClick={changeLocale}
            type="button"
          >
            {locale.toUpperCase()}
          </button>
          <button
            aria-busy={downloadingVariant === "ats"}
            className="nav-action"
            disabled={downloadingVariant !== null}
            onClick={() => void downloadResume("ats")}
            type="button"
          >
            {downloadingVariant === "ats" ? t.generatingCv : t.atsTitle}
          </button>
        </nav>
        <button
          aria-busy={downloadingVariant === "professional"}
          className="header-cta"
          disabled={downloadingVariant !== null}
          onClick={() => void downloadResume("professional")}
          type="button"
        >
          {downloadingVariant === "professional"
            ? t.generatingCv
            : t.downloadCv}
          {downloadingVariant !== "professional" && <span>↗</span>}
        </button>
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>
      {downloadError && (
        <p className="download-error" role="alert">
          {t.downloadError}
        </p>
      )}

      <main id="top" tabIndex={-1}>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <i />
              {t.eyebrow}
            </p>
            <h1>
              {t.headlineStart} <em>{t.headlineEmphasis}</em>
            </h1>
            <p className="hero-lead">{t.introduction}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projets">
                {t.seeProjects} <span>↓</span>
              </a>
              <a className="text-link" href="mailto:menja.herizo@gmail.com">
                {t.talkAboutProject} <span>↗</span>
              </a>
            </div>
            <div className="hero-proof">
              <div>
                <strong>{t.product}</strong>
                <span>{t.fromNeedToDelivery}</span>
              </div>
              <div>
                <strong>{t.webMobile}</strong>
                <span>{t.businessApplications}</span>
              </div>
              <div>
                <strong>{t.dataAi}</strong>
                <span>{t.thoughtfulIntegration}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="card-top">
                <span className="status-dot" />
                <span>{t.profile}</span>
                <span className="card-code">01—04</span>
              </div>
              <div className="avatar">
                <Image
                  alt="Herizo Randrianaina"
                  height={620}
                  priority
                  src="/image/herizo.png"
                  width={520}
                />
              </div>
              <h2>
                Herizo
                <br />
                <span>Randrianaina</span>
              </h2>
              <p>{t.profileFocus}</p>
              <div className="card-footer">
                <span>{t.location}</span>
                <span>{t.available}</span>
              </div>
            </div>
            <div className="floating-chip chip-one">{t.chipWebMobile}</div>
            <div className="floating-chip chip-two">{t.chipBusinessTools}</div>
          </div>
        </section>

        <section className="section-wrap section-block" id="expertise">
          <div className="section-heading">
            <p className="eyebrow">{t.section01}</p>
            <h2>
              {t.expertiseTitleStart}
              <br />
              <em>{t.expertiseTitleEnd}</em>
            </h2>
            <p>{t.expertiseDescription}</p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article key={item.number}>
                <span className="number">{item.number}</span>
                <h3>{t[item.title]}</h3>
                <p>{t[item.description]}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{t[tag]}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block projects-section"
          id="projets"
        >
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">{t.section02}</p>
              <h2>
                {t.projectsTitleStart}
                <br />
                <em>{t.projectsTitleEnd}</em>
              </h2>
            </div>
            <p>{t.projectsDescription}</p>
          </div>
          <div aria-label={t.filterLabel} className="filters" role="group">
            {filters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter.value}
                className={`filter${activeFilter === filter.value ? " active" : ""}`}
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                type="button"
              >
                {t[filter.label]}
                {filter.value === "all" && (
                  <b id="project-count">{visibleProjects.length}</b>
                )}
              </button>
            ))}
          </div>
          <div
            aria-label={t.selectedProjects}
            aria-live="polite"
            className="project-grid"
          >
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(visibleProjects.length).padStart(2, "0")}
                </span>
                <h3>{locale === "en" ? project.nameEn : project.name}</h3>
                <p>
                  {locale === "en"
                    ? project.descriptionEn
                    : project.description}
                </p>
                <div className="project-bottom">
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <span className="project-type">
                      {locale === "en" ? project.labelEn : project.label}
                    </span>
                    {project.github && (
                      <a
                        className="project-link"
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.demo && (
                      <Link className="project-link project-demo" href={project.demo}>
                        {t.demo} ↗
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block approach"
          id="approche"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.section03}</p>
            <h2>
              {t.approachTitleStart}
              <br />
              <em>{t.approachTitleEnd}</em>
            </h2>
            <p>{t.approachDescription}</p>
          </div>
          <div className="approach-grid">
            {approach.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{t[item.title]}</h3>
                <p>{t[item.description]}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-wrap section-block journey"
          id="parcours"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.section04}</p>
            <h2>
              {t.experienceTitleStart}
              <br />
              <em>{t.experienceTitleEnd}</em>
            </h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span>{t[item.dates]}</span>
                <h3>{t[item.role]}</h3>
                <p>{t[item.description]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div>
            <p className="eyebrow">{t.section05}</p>
            <h2>
              {t.contactTitleStart}
              <br />
              <em>{t.contactTitleEnd}</em>
            </h2>
          </div>
          <div className="contact-side">
            <p>{t.contactDescription}</p>
            <a
              className="button button-primary"
              href="mailto:menja.herizo@gmail.com"
            >
              {t.email} <span>↗</span>
            </a>
            <div className="contact-meta">
              <a
                href="https://www.linkedin.com/in/herizo-randrianiaina/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/mblitmanager"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub ↗
              </a>
              <a
                href="https://wa.me/261326844949"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t.whatsapp}
              </a>
              <span>{t.phone}</span>
              <span>{t.city}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>© {new Date().getFullYear()} Herizo Randrianaina</span>
        <span>{t.footer}</span>
        <a href="#top">{t.backToTop}</a>
      </footer>
    </>
  );
}

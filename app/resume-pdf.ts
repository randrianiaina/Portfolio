import { resumeContent, type ResumeLocale } from "./cv-content";

export type ResumeVariant = "professional" | "ats";

export async function createResumePdf(
  locale: ResumeLocale,
  variant: ResumeVariant,
) {
  const { jsPDF } = await import("jspdf");
  const PAGE_WIDTH = 210;
  const PAGE_HEIGHT = 297;
  const MARGIN_X = 18;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
  const BOTTOM_MARGIN = 17;
  const BODY_COLOR = [35, 44, 58] as const;
  const MUTED_COLOR = [86, 99, 116] as const;
  const ACCENT_COLOR = [52, 109, 115] as const;
  const content = resumeContent[locale];
  const doc = new jsPDF({ format: "a4", unit: "mm", compress: true });
  const isAts = variant === "ats";
  const top = isAts ? 17 : 20;
  let y = top;

  doc.setProperties({
    title: `${content.filename[variant]}`,
    subject: content.title,
    author: "Herizo Randrianaina",
    creator: "Herizo Randrianaina Portfolio",
    keywords: [
      "IT Project Manager",
      "Back-end Developer",
      "PHP",
      "Laravel",
      "CRM",
      "ERP",
      "SQL",
    ].join(", "),
  });

  function newPage() {
    doc.addPage();
    y = 17;
  }

  function ensureSpace(height: number) {
    if (y + height > PAGE_HEIGHT - BOTTOM_MARGIN) newPage();
  }

  function writeParagraph(
    text: string,
    options: {
      size?: number;
      color?: readonly [number, number, number];
      indent?: number;
    } = {},
  ) {
    const size = options.size ?? (isAts ? 9.5 : 9.2);
    const indent = options.indent ?? 0;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(...(options.color ?? BODY_COLOR));
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - indent);
    const lineHeight = size * 0.43;

    ensureSpace(lines.length * lineHeight + 2);
    doc.text(lines, MARGIN_X + indent, y, { lineHeightFactor: 1.25 });
    y += lines.length * lineHeight + 2;
  }

  function writeSectionHeading(text: string) {
    ensureSpace(13);
    y += isAts ? 5 : 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(isAts ? 11 : 12);
    doc.setTextColor(...ACCENT_COLOR);
    doc.text(text, MARGIN_X, y);
    y += 2;
    doc.setDrawColor(...ACCENT_COLOR);
    doc.setLineWidth(isAts ? 0.25 : 0.4);
    doc.line(MARGIN_X, y, MARGIN_X + CONTENT_WIDTH, y);
    y += isAts ? 5 : 6;
  }

  function writeBullet(text: string) {
    const size = isAts ? 9.2 : 9;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(...BODY_COLOR);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - 7);
    const lineHeight = size * 0.43;
    ensureSpace(lines.length * lineHeight + 2);
    doc.setFillColor(...ACCENT_COLOR);
    doc.circle(MARGIN_X + 1.2, y - 1, 0.55, "F");
    doc.text(lines, MARGIN_X + 5, y, { lineHeightFactor: 1.25 });
    y += lines.length * lineHeight + 1.5;
  }

  if (!isAts) {
    doc.setFillColor(38, 61, 68);
    doc.rect(0, 0, PAGE_WIDTH, 53, "F");
    doc.setTextColor(255, 255, 255);
  } else {
    doc.setTextColor(25, 32, 44);
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(isAts ? 20 : 24);
  doc.text("HERIZO RANDRIANAINA", MARGIN_X, isAts ? y + 5 : 24);
  y = isAts ? y + 12 : 32;
  doc.setFont("helvetica", isAts ? "bold" : "normal");
  doc.setFontSize(isAts ? 10 : 11);
  if (isAts) {
    doc.setTextColor(...MUTED_COLOR);
  } else {
    doc.setTextColor(226, 235, 238);
  }
  const titleLines = doc.splitTextToSize(content.title, CONTENT_WIDTH);
  doc.text(titleLines, MARGIN_X, y, { lineHeightFactor: 1.2 });
  y += titleLines.length * 5 + (isAts ? 6 : 9);

  if (!isAts) {
    doc.setFillColor(217, 210, 246);
    doc.roundedRect(MARGIN_X, y, CONTENT_WIDTH, 17, 2, 2, "F");
    y += 5.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(35, 44, 58);
    doc.text(
      "Antananarivo, Madagascar  |  +261 34 97 26 70  |  menja.herizo@gmail.com",
      MARGIN_X + 4,
      y,
    );
    y += 5;
    doc.text(
      "linkedin.com/in/herizo-randrianiaina  |  github.com/mblitmanager",
      MARGIN_X + 4,
      y,
    );
    y = 62;
  } else {
    writeParagraph(
      "Antananarivo, Madagascar · +261 34 97 26 70 · menja.herizo@gmail.com",
      { size: 9 },
    );
    writeParagraph(
      "linkedin.com/in/herizo-randrianiaina · github.com/mblitmanager",
      { size: 9, color: MUTED_COLOR },
    );
  }

  writeSectionHeading(content.summaryHeading);
  writeParagraph(content.summary);

  writeSectionHeading(content.skillsHeading);
  for (const section of content.skills) {
    ensureSpace(9);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(isAts ? 9.5 : 9.2);
    doc.setTextColor(...BODY_COLOR);
    doc.text(`${section.title}:`, MARGIN_X, y);
    y += 4.5;
    writeParagraph(section.items.join(" · "), { indent: 2 });
  }

  writeSectionHeading(content.experienceHeading);
  for (const job of content.experience) {
    ensureSpace(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...BODY_COLOR);
    doc.text(job.role, MARGIN_X, y);
    y += 4.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.8);
    doc.setTextColor(...MUTED_COLOR);
    doc.text(`${job.organization}  |  ${job.dates}`, MARGIN_X, y);
    y += 5;
    for (const bullet of job.bullets) writeBullet(bullet);
    y += 1.5;
  }

  writeSectionHeading(content.projectsHeading);
  for (const project of content.projects) {
    writeParagraph(`${project.name} — ${project.description}`);
  }

  writeSectionHeading(content.educationHeading);
  for (const item of content.education) writeBullet(item);

  writeSectionHeading(content.languagesHeading);
  writeParagraph(content.languages.join("  |  "));

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...MUTED_COLOR);
  const pageCount = doc.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    doc.text(
      `${page} / ${pageCount}`,
      PAGE_WIDTH - MARGIN_X,
      PAGE_HEIGHT - 9,
      { align: "right" },
    );
  }

  return doc;
}

export async function downloadResumePdf(
  locale: ResumeLocale,
  variant: ResumeVariant,
) {
  const doc = await createResumePdf(locale, variant);
  doc.save(`${resumeContent[locale].filename[variant]}.pdf`);
}

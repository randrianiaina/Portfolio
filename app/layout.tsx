import type { Metadata } from "next";
import { DM_Mono, Fraunces, IBM_Plex_Sans } from "next/font/google";
import "../Style.css";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Herizo Randrianaina — Développeur full-stack & Analyste concepteur",
  description:
    "Portfolio de Herizo Randrianaina — analyste concepteur et développeur full-stack : applications métier, CRM, solutions VoIP et téléphonie, intégration IA.",
  metadataBase: new URL("https://herizo.netlify.app"),
  openGraph: {
    title: "Herizo Randrianaina — Développeur full-stack & Analyste concepteur",
    description:
      "Développement full-stack web et mobile, CRM, VoIP et téléphonie, intégration IA.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${ibmPlexSans.variable} ${fraunces.variable} ${dmMono.variable}`}
      lang="fr"
    >
      <body>{children}</body>
    </html>
  );
}

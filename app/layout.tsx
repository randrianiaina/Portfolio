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
  title: "Herizo Randrianaina — Chef de projet IT & Développeur",
  description:
    "Portfolio de Herizo Randrianaina — chef de projet IT et développeur d’applications métier, CRM, data et outils web.",
  metadataBase: new URL("https://herizo.netlify.app"),
  openGraph: {
    title: "Herizo Randrianaina — Chef de projet IT & Développeur",
    description:
      "Projets web et mobile, CRM, données et solutions métier.",
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

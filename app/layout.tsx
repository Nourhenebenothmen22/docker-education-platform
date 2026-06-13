import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const basePath = process.env.NODE_ENV === 'production' ? '/docker-education-platform' : '';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Docker Master Lab",
  description:
    "Learn Docker from beginner to advanced level with bilingual French and English lessons, Docker commands, Dockerfile, Docker Compose, VM to Docker migration, corrected labs, diagrams, and a final practical challenge.",
  keywords: [
    "Docker",
    "Docker tutorial",
    "advanced Docker course",
    "Docker commands",
    "Dockerfile",
    "Docker Compose",
    "Docker vs VM",
    "VM to Docker migration",
    "containers",
    "DevOps",
    "containerization",
    "Docker labs",
    "Docker exercises",
    "Docker security",
    "Docker networks",
    "Docker volumes",
    "cours Docker",
    "commandes Docker",
    "Docker vs machine virtuelle",
    "migration VM vers Docker",
    "conteneurs",
    "exercices Docker",
    "volumes Docker",
    "réseaux Docker",
  ],
  authors: [{ name: "Docker Master Lab" }],
  creator: "Docker Master Lab",
  icons: {
    icon: basePath + "/docker-logo.png",
    shortcut: basePath + "/docker-logo.png",
    apple: basePath + "/docker-logo.png",
  },
  openGraph: {
    type: "website",
    title: "Docker Master Lab",
    description:
      "Learn Docker from beginner to advanced level with bilingual French and English lessons, Docker commands, Dockerfile, Docker Compose, VM to Docker migration, corrected labs, diagrams, and a final practical challenge.",
    siteName: "Docker Master Lab",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docker Master Lab",
    description:
      "Learn Docker from beginner to advanced level with bilingual French and English lessons, Docker commands, Dockerfile, Docker Compose, VM to Docker migration, corrected labs, and final challenge.",
    creator: "@dockermasterlab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

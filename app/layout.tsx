import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DNA Komunika – We Turn Corporate Stories Into Powerful Visual Identity",
  description:
    "DNA Komunika adalah studio desain kreatif yang mengubah cerita perusahaan menjadi identitas visual yang kuat dan berkesan. Spesialis annual report, branding, dan publikasi korporat.",
  keywords: "DNA Komunika, desain grafis, annual report, branding, visual identity, corporate design",
  openGraph: {
    title: "DNA Komunika – We Turn Corporate Stories Into Powerful Visual Identity",
    description:
      "Studio desain kreatif profesional spesialis corporate visual identity, annual report & branding.",
    type: "website",
    url: "https://dnakomunika.com",
    siteName: "DNA Komunika",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${inter.className} h-full`}>
      <body className={`${inter.className} min-h-full flex flex-col antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

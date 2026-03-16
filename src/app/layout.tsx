import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Druv Sarin | AI Engineer",
  description: "AI Engineer at Travelers building AI-powered data platforms. Co-founder of Avyra, a healthcare AI startup. Northeastern CS '24.",
  keywords: ["AI Engineer", "AI", "Machine Learning", "Full Stack", "React", "Python", "AWS"],
  authors: [{ name: "Druv Sarin" }],
  openGraph: {
    title: "Druv Sarin | AI Engineer",
    description: "AI Engineer at Travelers building AI-powered data platforms. Co-founder of Avyra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}

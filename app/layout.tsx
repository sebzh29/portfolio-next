import type { Metadata } from "next";
import { Anek_Telugu, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AnekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sébastien Glippa Developper",
  description:
    "Portfolio of Sébastien Glippa, a developer specializing in web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugu.variable} antialiased h-full font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

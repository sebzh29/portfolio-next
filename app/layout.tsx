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

const AnekTelugo = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["telugu"],
});

export const metadata: Metadata = {
  title: "Sébbatien Glippa Developper",
  description:
    "Portfolio of Sébbatien Glippa, a developer specializing in web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";   // <-- import the header
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
  title: "Signalist",
  description:
    "Track Real-time stock prices, get personalized alerts and explore detailed company insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 1. Header is now part of the layout */}
        <Header />

        {/* 2. Consistent page wrapper (same as your old layout) */}
        <main className="min-h-screen bg-gray-50">
          <div className="container mx-auto py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
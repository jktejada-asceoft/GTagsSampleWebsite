"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isBrowser = () => typeof window !== "undefined";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log(`Running on the ${isBrowser() ? "browser" : "server"}`);
    const tagManagerArgs = {
      gtmId: "GTM-KDQ62MMP",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="bg-white shadow sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Sample Blog
            </h1>
            <nav>
              <ul className="flex space-x-6">
                {["Home", "About", "Contact"].map((page) => (
                  <li key={page}>
                    <Link
                      href={`/${page === "Home" ? "" : page.toLowerCase()}`}
                      className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-gray-800 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Sample Blog. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

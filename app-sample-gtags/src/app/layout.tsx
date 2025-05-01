// app/layout.tsx
import React from "react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
    {/* Header */}
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          <Link href="/">Sample Blog</Link>
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

    {/* Main Content */}
    <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

    {/* Footer */}
    <footer className="bg-gray-800 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sample Blog. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;

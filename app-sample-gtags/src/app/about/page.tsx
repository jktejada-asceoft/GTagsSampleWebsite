// app/about/page.tsx
import React from "react";

const AboutPage = () => (
  <main className="min-h-screen bg-white text-gray-800 px-6 py-20">
    <section className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6">About Us</h1>
      <p className="text-lg leading-8 text-gray-600 mb-8">
        Welcome to{" "}
        <span className="font-semibold text-gray-800">Sample Blog</span> — your
        go-to source for insightful articles and tips on web development, React,
        and modern tech trends.
      </p>
      <div className="bg-blue-50 p-6 rounded-xl shadow-md text-left text-gray-700">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Our Mission
        </h2>
        <p className="mb-4">
          We aim to educate developers of all levels through practical
          tutorials, in-depth guides, and up-to-date content on the
          ever-evolving landscape of front-end technologies.
        </p>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Why Follow Us?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Hands-on React tutorials and patterns</li>
          <li>Performance and optimization tips</li>
          <li>Design principles and UI/UX best practices</li>
          <li>Real-world use cases and examples</li>
        </ul>
      </div>
    </section>
  </main>
);

export default AboutPage;

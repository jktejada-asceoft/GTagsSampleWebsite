"use client";

import React, { useEffect } from "react";

import Head from "next/head";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Ad {
  id: number;
  imageUrl: string;
  link: string;
}

interface HomeProps {
  posts: Post[];
  ads: Ad[];
}

const Home: React.FC<HomeProps> = ({ posts, ads }) => {
  // Debugging: Check if the code is running in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Running in the browser");
    } else {
      console.log("Running on the server");
    }
  }, []);

  const samplePosts: Post[] =
    posts && posts.length > 0
      ? posts
      : [
          {
            id: 1,
            title: "How to Get Started with React",
            body: "React is a popular JavaScript library for building user interfaces. In this article, we’ll walk through the basics of setting up a React project and creating your first component...",
          },
          {
            id: 2,
            title: "10 Tips for Better Web Performance",
            body: "Web performance is critical for user experience and SEO. In this post, we cover 10 actionable tips to make your websites faster and more efficient...",
          },
          {
            id: 3,
            title: "Understanding useEffect in Depth",
            body: "The useEffect hook is one of the most commonly used hooks in React. But how does it really work? In this post, we’ll explore useEffect’s behavior and common patterns...",
          },
        ];

  const sampleAds: Ad[] =
    ads && ads.length > 0
      ? ads
      : [
          {
            id: 1,
            imageUrl:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", // Google logo
            link: "https://www.google.com",
          },
          {
            id: 2,
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft logo
            link: "https://www.microsoft.com",
          },
          {
            id: 3,
            imageUrl:
              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // GitHub logo
            link: "https://www.github.com",
          },
        ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      <Head>
        <title>Sample Blog with Ads</title>
        <meta name="description" content="A modern blog with sponsored ads" />
      </Head>
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Sample Blog</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Latest Posts
          </h2>
          <ul className="space-y-6">
            {samplePosts.map((post) => (
              <li
                key={post.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <Link
                  href={`/posts/${post.id}`}
                  className="block text-2xl font-semibold text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-gray-700 mt-3">
                  {post.body.substring(0, 100)}...
                </p>
              </li>
            ))}
          </ul>
        </section>
        <aside>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Sponsored</h2>
          <div className="space-y-6">
            {sampleAds.map((ad) => (
              <a
                key={ad.id}
                href={ad.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow">
                  <img
                    src={ad.imageUrl}
                    alt={`Ad ${ad.id}`}
                    className="w-full h-40 object-contain bg-white p-4 group-hover:scale-105 transition-transform"
                  />
                </div>
              </a>
            ))}
          </div>
        </aside>
      </main>
      <footer className="bg-gray-800 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sample Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

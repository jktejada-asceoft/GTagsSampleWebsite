// src/app/posts/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const posts = [
  {
    id: "1",
    title: "How to Get Started with React",
    author: "Jane Doe",
    date: "April 30, 2025",
    body: `React is a powerful JavaScript library used to build modern web interfaces. Here's how to get started:

### 1. Setup your environment
Install Node.js and use Create React App or Vite to scaffold your project.

### 2. Understand Components
React is built around reusable components. Learn how to create functional components.

### 3. Learn JSX
JSX is a syntax extension that allows you to write HTML-like code within JavaScript.

### 4. Manage State
State lets components keep track of information. Use the useState hook to manage it.

### 5. Side Effects with useEffect
Use useEffect to handle lifecycle events like data fetching or subscriptions.`,
  },
  {
    id: "2",
    title: "10 Tips for Better Web Performance",
    author: "John Smith",
    date: "May 1, 2025",
    body:
      `Optimizing web performance improves both SEO and user experience. Here are 10 proven strategies:

1. **Lazy Load Images** - Only load what's in view.
2. **Compress Assets** - Use gzip or Brotli.
3. **Use a CDN** - Serve static files from locations closer to users.
4. **Minimize JavaScript** - Remove unused code.
5. **Optimize Fonts** - Load only the required font weights.
6. **Enable Caching** - Use proper cache headers.
7. **Reduce DOM Size** - A smaller DOM is more performant.
8. **Defer Non-Critical JS** - Use ` +
      "`defer` or `async` attributes." +
      `
9. **Use Responsive Images** - Use ` +
      "`srcset` for different resolutions." +
      `
10. **Analyze with Lighthouse** - Continuously audit your site.`,
  },
  {
    id: "3",
    title: "Understanding useEffect in Depth",
    author: "Emily Stone",
    date: "May 2, 2025",
    body: `The useEffect hook manages side effects in React. Here's what you need to know:

### What is useEffect?
useEffect lets you synchronize a component with external systems like APIs, DOM, or timers.

### Basic Usage
Pass a function to useEffect that runs after render. You can also return a cleanup function.

### Dependency Array
Control when effects run using the dependency array.

### Common Pitfalls
- Missing dependencies
- Memory leaks
- Stale closures

### Best Practices
- Keep effects focused
- Use multiple effects instead of combining logic
- Test cleanup behavior explicitly`,
  },
];

export default async function PostPage({ params }: PageProps) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 font-sans">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="bg-white shadow-xl rounded-2xl p-10">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="text-sm text-gray-500">
              <span>By {post.author}</span> · <time>{post.date}</time>
            </div>
          </header>
          <section className="prose prose-blue prose-lg max-w-none">
            <div className="whitespace-pre-line">{post.body}</div>
          </section>
        </article>
        <div className="mt-10 text-center">
          <Link href="/" className="text-blue-600 hover:underline text-base">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

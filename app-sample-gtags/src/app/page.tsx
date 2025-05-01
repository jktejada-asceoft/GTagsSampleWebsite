"use client";

import Head from "next/head";
import Link from "next/link";

// Types
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

// Static fallback data
const fallbackPosts: Post[] = [
  {
    id: 1,
    title: "How to Get Started with React",
    body: "React is a popular JavaScript library for building user interfaces. In this article...",
  },
  {
    id: 2,
    title: "10 Tips for Better Web Performance",
    body: "Web performance is critical for user experience and SEO. In this post...",
  },
  {
    id: 3,
    title: "Understanding useEffect in Depth",
    body: "The useEffect hook is one of the most commonly used hooks in React...",
  },
];

const fallbackAds: Ad[] = [
  {
    id: 1,
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    link: "https://www.google.com",
  },
  {
    id: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    link: "https://www.microsoft.com",
  },
  {
    id: 3,
    imageUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://www.github.com",
  },
];

//Test

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      <Head>
        <title>Sample Blog with Ads</title>
        <meta name="description" content="A modern blog with sponsored ads" />
      </Head>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <section className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Latest Posts
          </h2>
          <ul className="space-y-6">
            {fallbackPosts.map((post) => (
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

        {/* Ads */}
        <aside>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Sponsored</h2>
          <div className="space-y-6">
            {fallbackAds.map((ad) => (
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
                    alt={`Sponsored ad ${ad.id}`}
                    className="w-full h-40 object-contain bg-white p-4 group-hover:scale-105 transition-transform"
                  />
                </div>
              </a>
            ))}
          </div>
        </aside>
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;

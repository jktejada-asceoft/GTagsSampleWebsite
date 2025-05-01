import React from "react";

const ContactPage = () => (
  <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="mb-6 text-lg">
      Feel free to reach us at{" "}
      <a href="mailto:info@sampleblog.com" className="text-blue-600 underline">
        info@sampleblog.com
      </a>
      .
    </p>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded-lg"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded-lg"
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className="w-full p-3 border rounded-lg"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </main>
);

export default ContactPage;

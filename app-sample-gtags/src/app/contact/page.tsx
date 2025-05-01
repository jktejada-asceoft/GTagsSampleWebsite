import React from "react";

const ContactPage = () => (
  <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-20">
    <section className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        We&apos;d love to hear from you! Email us at{" "}
        <a
          href="mailto:info@sampleblog.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          info@sampleblog.com
        </a>{" "}
        or use the form below.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  </main>
);

export default ContactPage;

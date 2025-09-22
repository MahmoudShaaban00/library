import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-yellow-200 to-yellow-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            We&apos;d love to hear from you! Reach out by phone, email or using
            the form below.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="text-gray-600">
            Our team is always happy to answer questions about our collections,
            events or services.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">mahmoudshabankk010@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">01027938060</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                placeholder="Write your message..."
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-yellow-300 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP / EXTRA */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold">Visit us</h2>
          <p className="mt-2 text-gray-600">
            We’re based in Cairo, Egypt and available 7 days a week.
          </p>
          <div className="mt-6 rounded-xl overflow-hidden shadow">
            <iframe
              title="Google Maps Cairo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2146573265843!2d31.235711715116884!3d30.04441998188516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c7f1bdf3c3%3A0x9e0f77c6a5f51e6d!2sCairo!5e0!3m2!1sen!2seg!4v1631478549862!5m2!1sen!2seg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

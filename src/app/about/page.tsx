"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,8,15,0.6), rgba(6,8,15,0.35)), url('https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c1f9d6b9a7b7f5f8f5b0b4e3f1d4a9a')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Welcome to <span className="text-yellow-300">Al-Reads</span>
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 max-w-xl">
                A friendly independent bookstore bringing you carefully curated collections across
                Historical, Detective, Romance, Islamic studies, Programming and Gaming & Brain
                books. We believe great books spark curiosity — and great readers build
                communities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#genres"
                  className="inline-block bg-yellow-300 text-black px-5 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
                >
                  Explore genres
                </a>
                <a
                  href="#mission"
                  className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg font-medium hover:bg-white/5 transition"
                >
                  Our mission
                </a>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* MISSION + VALUES */}
      <section id="mission" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">Our mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We bring readers closer to meaningful stories and ideas. Whether you&apos;re diving into
              the past with historical epics, solving puzzles in detective thrillers, exploring
              faith-based learning, or building practical skills with programming guides — our
              shelves are thoughtfully chosen to inspire, teach and entertain.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow">
                <h3 className="font-semibold">Curated selection</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Quality over quantity — titles we actually recommend.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow">
                <h3 className="font-semibold">Community oriented</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Book clubs, events and friendly recommendations from real readers.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow">
                <h3 className="font-semibold">Accessible prices</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Affordable editions and occasional promotions to keep books in reach.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow">
                <h3 className="font-semibold">Support learning</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Technical books, tutorials and practice materials to help you grow your skills.
                </p>
              </div>
            </div>
          </div>

          <aside className="p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow">
            <h4 className="text-lg font-semibold">Quick facts</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>📚 Over 5,000 titles (curated)</li>
              <li>🕰️ Open 7 days — community events monthly</li>
              <li>🚚 Local delivery available</li>
              <li>💬 Expert recommendations</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* GENRES */}
      <section id="genres" className="bg-white/60 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Genres we specialize in</h2>
          <p className="mt-2 text-gray-600">A selection focused on depth and discovery.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Historical",
                desc: "Epic biographies, historical fiction and books that bring the past alive.",
                img: "https://www.historic-uk.com/wp-content/uploads/2017/04/historic-august-1920x987.jpg",
              },
              {
                title: "Detective & Thriller",
                desc: "Page-turning mysteries, noir and modern crime investigations.",
                img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=4a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d",
              },
              {
                title: "Romance",
                desc: "Heartfelt love stories, contemporary and classic romances.",
                img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d",
              },
              {
                title: "Islamic",
                desc: "Faith-based learning, history and spiritual classics.",
                img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f2e1d0c9b8a7e6f5d4c3b2a1f0e9d8c",
              },
              {
                title: "Programming",
                desc: "Practical guides, algorithms, and career-boosting books.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
              },
              {
                title: "Gaming & Brain",
                desc: "Game design, strategy, puzzles and books that sharpen the mind.",
                img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=7e6f5d4c3b2a1f0e9d8c7b6a5f4e3d2c",
              },
            ].map((g) => (
              <article
                key={g.title}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="h-40 md:h-44 lg:h-36 overflow-hidden relative">
                  <Image
                    src={g.img}
                    alt={g.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{g.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{g.desc}</p>
                  <a href="#" className="mt-4 inline-block text-sm font-medium">
                    Browse {g.title} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Meet the team</h2>
            <p className="mt-3 text-gray-600">
              A small team of readers, curators and subject experts.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 grid place-items-center">
                  📖
                </div>
                <div>
                  <div className="font-semibold">Amira — Head Curator</div>
                  <div className="text-sm text-gray-500">
                    Focus: Historical & Islamic collections
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 grid place-items-center">
                  🕵️
                </div>
                <div>
                  <div className="font-semibold">Khaled — Mystery Editor</div>
                  <div className="text-sm text-gray-500">
                    Focus: Detective & Thriller picks
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-black text-white px-5 py-3 rounded-lg font-semibold"
              >
                Contact us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Join our newsletter</h3>
            <p className="mt-2 text-gray-600">
              New releases, recommendations and special offers — once a month.
            </p>

            <form className="mt-4 flex gap-2">
              <input
                aria-label="Email"
                placeholder="you@domain.com"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="button"
                className="rounded-lg px-4 py-3 bg-yellow-300 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

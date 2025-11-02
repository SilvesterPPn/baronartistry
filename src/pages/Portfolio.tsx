import React, { useEffect } from "react";
import { Camera } from "lucide-react";
import { works } from '../data/work';

export default function Portfolio(): React.ReactElement {
  useEffect(() => {
    document.title = "Portfolio | Baron's Artistry";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', "View the portfolio of Baron's Artistry: weddings, portraits, events, and creative photography in Makurdi, Nigeria.");
    }
  }, []);



  return (
    <div className="bg-gray-100 text-gray-900">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/portfolio.jpg"
          alt="Baron's Artistry Portfolio"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">Our Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            A curated showcase of the artistry, emotion, and storytelling behind every frame.
          </p>
        </div>
      </section>

      {/* ===== Gallery Section ===== */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex items-center justify-center mb-12">
          <Camera className="text-gray-500 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-center">Our Recent Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="relative group overflow-hidden rounded-xl shadow-md bg-gray-200"
            >
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p className="text-sm text-gray-300">{work.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="text-gray-800 py-8 px-3 text-center">
        <h3 className="text-3xl font-bold mb-4">Interested in working with us?</h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Whether it&apos;s a wedding, portrait, or brand shoot — Baron&apos;s Artistry transforms your
          moments into timeless visual stories.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black border border-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Book a Session
        </a>
      </section>
    </div>
  );
}

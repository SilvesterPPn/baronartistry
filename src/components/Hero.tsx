import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 pt-30"
    >
      {/* Soft Ambient Background Accents */}
      <div className="absolute -top-24 left-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-2xl opacity-40 pointer-events-none" />

      {/* Main Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-3xl"
      >
        <h2 className="uppercase text-xs tracking-[0.4em] text-gray-400 mb-3">
          Baron&apos;s Artistry Photography
        </h2>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 leading-tight mb-6">
          Where <span className="text-amber-600 font-semibold">Emotion</span>  
          Meets <span className="text-amber-600 font-semibold">Artistry</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          We capture stories that live beyond time. Every frame is a brushstroke of emotion 
          elegant, real, and unforgettable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-10">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/portfolio"
              className="bg-black hover:bg-white hover:text-gray-800 text-white my-4 px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Portfolio
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="border border-gray-900 hover:bg-gray-900 hover:text-white my-5 px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300"
            >
              Schedule a Shoot
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Composition */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="relative mt-16 z-10"
      >
        <div className="relative w-full flex justify-center">
          <img
            src="/assets/hero.jpg"
            alt="Baron's Artistry Main"
            className="w-[93%] md:w-[70%] rounded-3xl shadow-2xl object-cover border border-gray-100"
          />

          {/* Floating Accent Image */}
          <motion.img
            src="/assets/hero2.jpg"
            alt="Baron's Artistry Accent"
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="absolute bottom-15 right-15 w-40 md:w-56 rounded-2xl shadow-xl border border-gray-200 hidden sm:block"
          />
        </div>
      </motion.div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default Hero;

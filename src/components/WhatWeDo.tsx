import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image, Video, Palette, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Professional Photography',
    tagline: 'Cinematic imagery for brands & people',
    description:
      'High-end photography tailored to your needs — commercial, portrait, editorial. We focus on mood, lighting and storytelling.',
    icon: <Camera size={20} className="text-amber-500" />,
    image: '/assets/photo1.jpg',
  },
  {
    title: 'Photo & Video Editing',
    tagline: 'Polish & retouch at scale',
    description:
      'Color grading, retouching, and professional video edits that match your brand’s voice and visual standards.',
    icon: <Image size={20} className="text-indigo-500" />,
    image: '/assets/photo2.jpg',
  },
  {
    title: 'Branding & Visual Identity',
    tagline: 'Visual systems that scale',
    description:
      'From logos to full brand guidelines, we craft identity systems that are coherent across platforms and media.',
    icon: <Palette size={20} className="text-pink-500" />,
    image: '/assets/photo3.jpg',
  },
  {
    title: 'Event Coverage',
    tagline: 'Discrete, comprehensive coverage',
    description:
      'On-site teams for weddings, launches and corporate events — cinematic, unobtrusive, and dependable.',
    icon: <Video size={20} className="text-green-500" />,
    image: '/assets/photo4.jpg',
  },
];

const cardVariant = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: { duration: 0.7 },
  },
};

const WhatWeDo: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What we do</h2>
          <p className="mt-4 text-gray-600 text-lg">
            We partner with businesses and creators to produce distinct visual work — from single images to full-scale visual systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {services.map((s) => (
            <motion.article
              key={s.title}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute left-4 bottom-4 flex items-center gap-3">
                  <div className="bg-white/90 p-2 rounded-md shadow">
                    {s.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-amber-500 mt-1">{s.tagline}</p>
                </div>

                <p className="text-sm text-gray-600 flex-1">{s.description}</p>

                <div className="mt-2">
                  <a
                    href="#contact"
                    aria-label={`Learn more about ${s.title}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:underline"
                  >
                    Learn more
                    <ArrowRight size={16} className="text-amber-600" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full shadow hover:bg-amber-700 transition-colors"
          >
            Start your project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

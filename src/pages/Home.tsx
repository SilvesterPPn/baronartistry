'use client'
import { useEffect } from 'react';
import Consultation from '../components/Consultation.tsx'
import Hero from '../components/Hero.tsx'
import WhatWeDo from '../components/WhatWeDo.tsx'
import WhoWeAre from '../components/WhoWeAre.tsx'
import WhatsAppButton from '../components/WhatsAppButton.tsx'

const Home = () => {
  useEffect(() => {
    document.title = "Baron's Artistry | Home";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', "Baron's Artistry Photography - Where Emotion Meets Artistry. Explore our portfolio, services, and book a consultation.");
    }
  }, []);

  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Consultation />
      <WhatsAppButton />
    </>
  )
}

export default Home

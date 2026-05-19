import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonial from './components/Testimonial';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // 0. Ensure page always starts at the top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 1. Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    // 2. Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Add Lenis' requestAnimationFrame (raf) to GSAP's ticker
    // This perfectly syncs GSAP animations with the smooth scroll
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);

    // 4. Disable GSAP's lag smoothing to prevent conflicts with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup on unmount
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-brand-500 selection:text-dark-900">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonial />
        <Cta />
      </main>

      <Footer />
      <Contact />
    </div>
  );
}

export default App;

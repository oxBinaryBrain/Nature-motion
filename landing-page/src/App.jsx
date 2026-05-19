import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

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
      autoRaf: false, // Turn off auto raf so we can drive it via GSAP ticker
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smooth quartic out easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
    });

    // Force scroll to top on load/refresh
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

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

    // 5. Refresh ScrollTrigger once everything is mounted and loaded
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      // Cleanup on unmount
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink-900 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Showcase />
        
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}

export default App;

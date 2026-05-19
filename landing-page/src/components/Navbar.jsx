import React, { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 transition-all duration-500 ${
      scrolled
        ? 'py-3 bg-white/90 backdrop-blur-md border-b border-black/8 shadow-sm'
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className={`text-xl font-display font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-ink-900' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]'}`}>
          EXTRUDER<span className="text-brand-500">.</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-500 ${scrolled ? 'text-ink-600' : 'text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]'}`}>
          <a href="#features" className={`transition-colors ${scrolled ? 'hover:text-ink-900' : 'hover:text-white'}`}>Features</a>
          <a href="#about" className={`transition-colors ${scrolled ? 'hover:text-ink-900' : 'hover:text-white'}`}>About</a>
          <a href="#contact" className={`transition-colors ${scrolled ? 'hover:text-ink-900' : 'hover:text-white'}`}>Contact</a>
        </div>
        <button className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
          scrolled
            ? 'bg-ink-900 text-white hover:bg-ink-600'
            : 'bg-white text-black hover:bg-white/90'
        }`}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

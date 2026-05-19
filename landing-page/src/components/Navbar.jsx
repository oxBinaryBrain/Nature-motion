import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-display font-bold tracking-tight">
          EXTRUDER<span className="text-brand-500">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="px-5 py-2 rounded-full bg-white text-dark-900 font-semibold text-sm hover:bg-neutral-200 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}

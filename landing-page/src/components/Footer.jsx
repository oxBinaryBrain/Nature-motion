import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[400px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <div className="text-2xl font-display font-bold tracking-tight text-ink-900 mb-2">
            EXTRUDER<span className="text-brand-500">.</span>
          </div>
          <p className="text-ink-400 text-sm">© 2026 Extruder Systems. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm text-ink-400">
          <a href="#" className="hover:text-ink-900 transition-colors">Twitter</a>
          <a href="#" className="hover:text-ink-900 transition-colors">GitHub</a>
          <a href="#" className="hover:text-ink-900 transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const sectionRef = useRef(null);
  const orbRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        orbRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 md:py-64 px-6 bg-white overflow-hidden flex items-center justify-center">
      {/* The Glowing Orb — lime green on light bg */}
      <div 
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[150px] pointer-events-none"
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center" ref={contentRef}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-xs font-medium text-ink-600 mb-8 border border-black/8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(132,204,22,0.8)] animate-pulse"></span>
          Systems online. Ready to deploy.
        </div>

        <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-display font-bold tracking-tighter leading-none mb-12 text-ink-900">
          IGNITION.
        </h2>

        <button className="px-12 py-5 rounded-full bg-brand-500 text-white font-bold text-lg hover:bg-brand-600 transition-all duration-300 shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:shadow-[0_0_50px_rgba(132,204,22,0.5)] hover:scale-105">
          Start building free
        </button>
      </div>
    </section>
  );
}

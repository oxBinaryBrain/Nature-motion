import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade up for the monolithic text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 md:py-64 px-6 bg-dark-900 flex items-center justify-center border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10" ref={textRef}>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
          <span className="text-neutral-600">"Extruder completely transformed our workflow. </span>
          <span className="text-white drop-shadow-lg">We ship 10x faster </span>
          <span className="text-neutral-600">without sacrificing cinematic quality."</span>
        </h2>
        
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center overflow-hidden">
            <span className="text-neutral-500 font-display font-bold">SJ</span>
          </div>
          <div>
            <p className="font-bold text-lg text-white">Sarah Jenkins</p>
            <p className="text-neutral-500 text-sm tracking-wide uppercase mt-1">Lead Engineer, Void Dynamics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

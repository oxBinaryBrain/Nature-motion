import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section ref={sectionRef} className="py-40 md:py-56 px-6 bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      />
 
      <div className="max-w-5xl mx-auto text-center relative z-10" ref={textRef}>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
          <span className="text-ink-400">"Extruder completely transformed our workflow. </span>
          <span className="text-ink-900">We ship 10x faster </span>
          <span className="text-ink-400">without sacrificing cinematic quality."</span>
        </h2>
        
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-surface-100 border border-black/10 flex items-center justify-center overflow-hidden">
            <span className="text-ink-600 font-display font-bold">SJ</span>
          </div>
          <div>
            <p className="font-bold text-lg text-ink-900">Sarah Jenkins</p>
            <p className="text-ink-400 text-sm tracking-wide uppercase mt-1">Lead Engineer, Void Dynamics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

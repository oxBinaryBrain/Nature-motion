import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
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
    <section ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-ink-900">
            The Engine <br />
            <span className="text-ink-400">Built for scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">
          {/* Card 1: Wide */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="md:col-span-2 rounded-[2rem] border border-black/8 bg-white p-8 flex flex-col justify-end relative overflow-hidden group hover:border-brand-500/40 transition-colors duration-500 shadow-sm hover:shadow-md"
          >
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=2400&auto=format&fit=crop" alt="Network" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-10"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10">
               <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(132,204,22,0.15),_transparent_70%)]"></div>
            </div>
            <div className="relative z-20">
              <h3 className="text-3xl font-display font-bold mb-2 text-ink-900">Real-time compilation</h3>
              <p className="text-ink-600 max-w-md">Your changes reflect instantly across the entire distributed network without page reloads.</p>
            </div>
          </div>

          {/* Card 2: Square */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="rounded-[2rem] border border-black/8 bg-white p-8 flex flex-col justify-end relative overflow-hidden group hover:border-black/20 transition-colors duration-500 shadow-sm hover:shadow-md"
          >
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=100&w=1600&auto=format&fit=crop" alt="Server room" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h3 className="text-2xl font-display font-bold mb-2 text-ink-900">Zero config</h3>
              <p className="text-ink-600">Out of the box performance optimizations.</p>
            </div>
          </div>

          {/* Card 3: Square */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="rounded-[2rem] border border-black/8 bg-white p-8 flex flex-col justify-end relative overflow-hidden group hover:border-black/20 transition-colors duration-500 shadow-sm hover:shadow-md"
          >
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=1600&auto=format&fit=crop" alt="Circuit" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h3 className="text-2xl font-display font-bold mb-2 text-ink-900">Native integrations</h3>
              <p className="text-ink-600">Connects directly to your existing workflow.</p>
            </div>
          </div>

          {/* Card 4: Wide */}
          <div 
            ref={el => cardsRef.current[3] = el}
            className="md:col-span-2 rounded-[2rem] border border-black/8 bg-white p-8 flex flex-col justify-end relative overflow-hidden group hover:border-brand-500/40 transition-colors duration-500 shadow-sm hover:shadow-md"
          >
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=100&w=2400&auto=format&fit=crop" alt="Dark servers" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-10"></div>
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(132,204,22,0.08),_transparent)] z-10"></div>
            <div className="relative z-20">
              <h3 className="text-3xl font-display font-bold mb-2 text-ink-900">Edge delivery</h3>
              <p className="text-ink-600 max-w-md">Deployed globally to edge networks for sub-50ms latency anywhere in the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section ref={sectionRef} className="py-32 px-6 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            The Engine <br />
            <span className="text-neutral-600">Built for scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">
          {/* Card 1: Wide */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-end relative overflow-hidden group hover:border-brand-500/30 transition-colors duration-500"
          >
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=2400&auto=format&fit=crop" alt="Network" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent z-10"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity duration-500 z-10">
               <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(200,255,0,0.1),_transparent_70%)]"></div>
            </div>
            <div className="relative z-20">
              <h3 className="text-3xl font-display font-bold mb-2">Real-time compilation</h3>
              <p className="text-neutral-400 max-w-md">Your changes reflect instantly across the entire distributed network without page reloads.</p>
            </div>
          </div>

          {/* Card 2: Square */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-end relative overflow-hidden group hover:border-white/30 transition-colors duration-500"
          >
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=100&w=1600&auto=format&fit=crop" alt="Server room" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h3 className="text-2xl font-display font-bold mb-2">Zero config</h3>
              <p className="text-neutral-400">Out of the box performance optimizations.</p>
            </div>
          </div>

          {/* Card 3: Square */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-end relative overflow-hidden group hover:border-white/30 transition-colors duration-500"
          >
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=1600&auto=format&fit=crop" alt="Circuit" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent z-10"></div>
            <div className="relative z-20">
              <h3 className="text-2xl font-display font-bold mb-2">Native integrations</h3>
              <p className="text-neutral-400">Connects directly to your existing workflow.</p>
            </div>
          </div>

          {/* Card 4: Wide */}
          <div 
            ref={el => cardsRef.current[3] = el}
            className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-end relative overflow-hidden group hover:border-brand-500/30 transition-colors duration-500"
          >
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=100&w=2400&auto=format&fit=crop" alt="Dark servers" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent z-10"></div>
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(200,255,0,0.05),_transparent)] z-10"></div>
            <div className="relative z-20">
              <h3 className="text-3xl font-display font-bold mb-2">Edge delivery</h3>
              <p className="text-neutral-400 max-w-md">Deployed globally to edge networks for sub-50ms latency anywhere in the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

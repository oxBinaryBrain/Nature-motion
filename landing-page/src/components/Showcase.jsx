import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate how far to translate (total width of scroll container - viewport width)
      const getScrollAmount = () => {
        return -(scrollRef.current.scrollWidth - window.innerWidth);
      };

      gsap.to(scrollRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { id: 1, title: "Cinematic Rendering", subtitle: "Project Alpha", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=100&w=2400&auto=format&fit=crop" },
    { id: 2, title: "Real-time Physics", subtitle: "Project Beta", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=2400&auto=format&fit=crop" },
    { id: 3, title: "Volumetric Lighting", subtitle: "Project Gamma", image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=100&w=2400&auto=format&fit=crop" },
    { id: 4, title: "Fluid Dynamics", subtitle: "Project Delta", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=100&w=2400&auto=format&fit=crop" },
  ];

  return (
    <section ref={containerRef} className="h-screen bg-dark-900 overflow-hidden flex items-center border-t border-white/5">
      <div ref={scrollRef} className="flex flex-nowrap h-full pt-20 pb-10 px-6 gap-6 w-max">
        <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex items-center justify-center">
          <h2 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tight">
            The <br/> Showcase.
          </h2>
        </div>
        
        {items.map((item) => (
          <div key={item.id} className="w-[85vw] md:w-[50vw] h-full flex-shrink-0 relative rounded-3xl overflow-hidden bg-dark-800 border border-white/10 group cursor-pointer">
            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 z-10">
              <p className="text-brand-500 text-sm font-medium tracking-widest uppercase mb-2">{item.subtitle}</p>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
        
        {/* Buffer at the end */}
        <div className="w-[10vw] flex-shrink-0"></div>
      </div>
    </section>
  );
}

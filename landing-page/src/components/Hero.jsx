import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
      
      // Subtle parallax on the video
      gsap.to(videoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Background Video — cinematic, no overlay blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="https://res.cloudinary.com/davvuoez3/video/upload/q_100/v1777389403/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b_cs90k7.mp4" type="video/mp4" />
        </video>
        {/* Top vignette so navbar is always legible */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10" />
        {/* Bottom vignette to blend into light sections */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-dark text-xs font-medium text-white mb-8 border border-white/20 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_8px_rgba(132,204,22,0.8)]"></span>
          Extruder Cinematic Engine
        </div>
        
        <div ref={titleRef}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-tight mb-6 max-w-5xl drop-shadow-2xl text-white">
            Motion at the <br />
            <span className="text-gradient-hero">speed of thought.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            The next generation platform for creative teams to build, iterate, and deploy stunning cinematic experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-500 text-white font-bold hover:bg-brand-600 transition-colors shadow-[0_0_20px_rgba(132,204,22,0.4)]">
              Start building free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel-dark font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-xl">
              View documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

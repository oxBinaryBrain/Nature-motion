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
      
      // Optional subtle parallax effect on the video
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
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-dark-900">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="https://res.cloudinary.com/davvuoez3/video/upload/q_100/v1779131955/watermark_removed_9b834fd2-a9ec-45ac-826a-2ef0af45ff7b_riphjh.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-white mb-8 border border-white/20 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_8px_rgba(200,255,0,0.8)]"></span>
          Extruder Cinematic Engine
        </div>
        
        <div ref={titleRef}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-tight mb-6 max-w-5xl drop-shadow-2xl">
            Motion at the <br />
            <span className="text-gradient">speed of thought.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            The next generation platform for creative teams to build, iterate, and deploy stunning cinematic experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-500 text-dark-900 font-bold hover:bg-brand-600 transition-colors shadow-[0_0_20px_rgba(200,255,0,0.3)]">
              Start building free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel font-medium hover:bg-white/10 transition-colors backdrop-blur-xl">
              View documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

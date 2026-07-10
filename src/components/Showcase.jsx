"use client";

import AnimatedSection from './AnimatedSection';

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 px-6 bg-brown-900 relative z-10 overflow-hidden">
      {/* Subtle luxury glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-gold-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-[10px] sm:text-xs font-medium mb-3">Experience the Art</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-100">Cinematic Showcase</p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center">
          <div className="w-full max-w-[320px] sm:max-w-[400px] bg-white/5 backdrop-blur-md rounded-[2.5rem] p-3 relative shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-gold-500/20 group mx-auto">
            {/* Elegant corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold-500/50 rounded-tl-[2.5rem] m-1 pointer-events-none z-10 transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold-500/50 rounded-br-[2.5rem] m-1 pointer-events-none z-10 transition-transform duration-700 group-hover:scale-110"></div>

            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              controls
              className="w-full h-auto rounded-[2rem] object-cover bg-black/50"
              src="/video/WhatsApp Video 2026-07-09 at 5.42.45 PM.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

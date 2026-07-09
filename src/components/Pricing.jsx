import AnimatedSection from './AnimatedSection';

export default function Pricing() {
  const features = [
    'Full Hands & Legs',
    'Custom Portrait/Figures',
    'Premium Aftercare Kit',
    'Priority Booking'
  ];

  return (
    <section id="pricing" className="py-6 px-4 sm:px-6 bg-cream-100 relative z-10">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <svg className="w-4 h-4 text-gold-500/60" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <p className="text-xl sm:text-2xl font-serif text-brown-900">Luxury Bridal Packages</p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center">
          <div className="w-full max-w-[360px] bg-brown-900 rounded-[1.5rem] p-5 relative overflow-hidden shadow-2xl border border-gold-500/30 group">
            
            {/* Ambient gold glow in the background of the dark card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-gold-500/20 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center mb-5">
              <span className="inline-block px-2.5 py-0.5 border border-gold-500/50 rounded-full text-gold-500 uppercase tracking-widest text-[8px] mb-3">
                Signature Collection
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-cream-100 mb-1">Bridal Mehndi</h3>
              <p className="text-cream-100/60 font-light text-[10px] italic mb-4">Bespoke Elegance & Intricate Details</p>
              
              <div className="flex flex-col items-center justify-center">
                <span className="text-[8px] text-cream-100/50 uppercase tracking-[0.2em] mb-1">Starting From</span>
                <span className="text-3xl sm:text-4xl font-serif text-gold-500 tracking-tight">₹5,100</span>
              </div>
            </div>

            <div className="space-y-2 mb-5 relative z-10">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5 hover:border-gold-500/30 transition-colors duration-300">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-cream-100/90 tracking-wide text-[10px] sm:text-xs font-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center relative z-10">
              <a 
                href="https://wa.me/917668715610?text=Hi,%20I%20would%20like%20to%20inquire%20about%20the%20Luxury%20Bridal%20Mehndi%20Package" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex w-full justify-center items-center gap-2 px-6 py-3 bg-gold-600 text-brown-900 uppercase tracking-[0.2em] text-[10px] font-bold rounded-xl hover:bg-white hover:text-brown-900 transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                Book Your Dates
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

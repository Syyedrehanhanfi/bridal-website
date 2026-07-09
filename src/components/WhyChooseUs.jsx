import AnimatedSection from './AnimatedSection';

export default function WhyChooseUs() {
  const features = [
    { 
      title: '100% Organic Henna', 
      desc: 'Made with natural henna and premium ingredients for a safe application and a rich, long-lasting color.' 
    },
    { 
      title: 'Custom Mehndi Designs', 
      desc: 'Every design is created especially for you, combining beautiful details with your unique style.' 
    },
    { 
      title: 'Home Service Available', 
      desc: 'Enjoy professional mehndi services at the comfort of your home for a relaxed and hassle-free experience.' 
    }
  ];

  return (
    <section className="py-16 px-6 bg-brown-900 text-cream-100 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gold-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12 flex flex-col items-center">
          <div className="w-8 h-[1px] bg-gold-500/50 mb-4"></div>
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-[10px] font-semibold">The Philosophy</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {features.map((item, idx) => (
            <AnimatedSection 
              key={item.title} 
              delay={idx * 0.1} 
              className="pt-8 md:pt-0 px-4 flex flex-col items-center"
            >
              <h3 className="text-lg md:text-xl font-serif mb-3 text-gold-500 font-bold">{item.title}</h3>
              <p className="text-cream-200/80 font-light text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

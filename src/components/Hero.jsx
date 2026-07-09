import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center pt-32 pb-12 lg:pt-32 overflow-hidden bg-transparent z-10">
      
      {/* Background mandala subtle vector pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex justify-center items-center">
         <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] md:w-[80%] md:h-[80%] text-brown-900 animate-[spin_120s_linear_infinite]">
            <path fill="currentColor" d="M50 0 A50 50 0 0 1 100 50 A50 50 0 0 1 50 100 A50 50 0 0 1 0 50 A50 50 0 0 1 50 0 Z M50 10 A40 40 0 0 0 10 50 A40 40 0 0 0 50 90 A40 40 0 0 0 90 50 A40 40 0 0 0 50 10 Z"/>
            {/* A simplified representation of a mandala pattern */}
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <path fill="none" stroke="currentColor" strokeWidth="1" d="M50 20 L50 80 M20 50 L80 50 M28.78 28.78 L71.21 71.21 M28.78 71.21 L71.21 28.78"/>
         </svg>
      </div>

      <div className="relative z-20 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-gold-500/80"></div>
            <p className="text-gold-600 tracking-[0.3em] uppercase text-xs font-semibold">
              Welcome To
            </p>
            <div className="w-12 h-[1px] bg-gold-500/80 lg:hidden"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-brown-900 flex flex-col mb-6 drop-shadow-md"
          >
            <span className="font-script text-7xl md:text-8xl lg:text-[100px] text-gold-500 leading-[0.8] mb-2 font-normal drop-shadow-sm">Rishi</span>
            <span className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-brown-900">Mehndi Art</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-brown-900/80 text-lg font-light max-w-md mb-10 text-balance leading-relaxed"
          >
            Gurugram's most distinguished Mehndi artist. We blend traditional motifs with modern elegance for your special celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/917668715610?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Mehndi%20appointment"
              target="_blank"
              rel="noreferrer"
              className="group relative w-full sm:w-auto px-10 py-4 bg-brown-900 text-cream-100 uppercase tracking-widest text-sm font-semibold overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 text-center"
            >
              <div className="absolute inset-0 bg-gold-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <span className="relative z-10 group-hover:text-brown-900 transition-colors duration-500">Book Appointment</span>
            </a>
            <a
              href="#gallery"
              className="w-full sm:w-auto px-10 py-4 border border-brown-900 text-brown-900 uppercase tracking-widest text-sm font-medium hover:bg-brown-900 hover:text-white transition-colors duration-300 text-center"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>

        {/* Image Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          {/* Main Arch Image */}
          <div className="relative w-[85%] sm:w-[70%] lg:w-[85%] aspect-[3/4] max-w-md">
            {/* Outer Decorative Line */}
            <div className="absolute -inset-4 border-2 border-gold-500/40 rounded-t-full rounded-b-2xl z-0"></div>
            
            <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl z-10 border border-white">
              <img 
                src="/hero-main.jpeg" 
                alt="Beautiful Mehndi Design" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Floating Overlapping Circular Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 sm:-left-12 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-cream-100 shadow-xl overflow-hidden z-20"
            >
              <img 
                src="/hero-sub.jpeg" 
                alt="Mehndi Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-12 -right-4 sm:-right-8 bg-white p-4 rounded-xl shadow-xl z-20 flex flex-col items-center border border-gold-500/20"
            >
              <span className="text-gold-500 font-serif text-2xl font-bold">5.0</span>
              <div className="flex gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-gold-500 text-gold-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[9px] uppercase tracking-widest text-brown-900/60 font-semibold">Top Rated</span>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

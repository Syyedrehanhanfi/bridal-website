import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const categories = ['All Designs', 'Bridal', 'Arabic', 'Modern', 'Foot Mehndi'];

const images = [
  { id: 1, src: '/bridal/bridal1.jpeg', category: 'Bridal' },
  { id: 2, src: '/bridal/bridal2.jpeg', category: 'Bridal' },
  { id: 3, src: '/bridal/bridal3.jpeg', category: 'Bridal' },
  { id: 4, src: '/bridal/bridal4.jpeg', category: 'Bridal' },
  { id: 5, src: '/bridal/bridal5.jpeg', category: 'Bridal' },
  { id: 6, src: '/bridal/bridal6.jpeg', category: 'Bridal' },
  { id: 7, src: '/bridal/bridal7.jpeg', category: 'Bridal' },
  { id: 28, src: '/bridal/WhatsApp Image 2026-07-09 at 5.38.56 PM (1).jpeg', category: 'Bridal' },
  { id: 8, src: '/arbic/arbic1.jpeg', category: 'Arabic' },
  { id: 9, src: '/arbic/arbic2.jpeg', category: 'Arabic' },
  { id: 10, src: '/arbic/arbic3.jpeg', category: 'Arabic' },
  { id: 11, src: '/arbic/WhatsApp Image 2026-07-09 at 5.39.10 PM (1).jpeg', category: 'Arabic' },
  { id: 12, src: '/arbic/WhatsApp Image 2026-07-09 at 5.39.12 PM.jpeg', category: 'Arabic' },
  { id: 13, src: '/arbic/WhatsApp Image 2026-07-09 at 5.39.12 PM (1).jpeg', category: 'Arabic' },
  { id: 14, src: '/arbic/WhatsApp Image 2026-07-09 at 5.39.12 PM (2).jpeg', category: 'Arabic' },
  { id: 15, src: '/arbic/WhatsApp Image 2026-07-09 at 5.39.00 PM.jpeg', category: 'Arabic' },
  { id: 16, src: '/arbic/WhatsApp Image 2026-07-09 at 5.39.03 PM.jpeg', category: 'Arabic' },
  { id: 17, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.44 PM (1).jpeg', category: 'Modern' },
  { id: 29, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.48 PM (1).jpeg', category: 'Modern' },
  { id: 30, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.48 PM (2).jpeg', category: 'Modern' },
  { id: 31, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.48 PM.jpeg', category: 'Modern' },
  { id: 32, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.50 PM (1).jpeg', category: 'Modern' },
  { id: 33, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.50 PM.jpeg', category: 'Modern' },
  { id: 34, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.51 PM (2).jpeg', category: 'Modern' },
  { id: 35, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.53 PM (1).jpeg', category: 'Modern' },
  { id: 36, src: '/mordern/WhatsApp Image 2026-07-09 at 5.38.54 PM.jpeg', category: 'Modern' },
  { id: 37, src: '/mordern/WhatsApp Image 2026-07-09 at 5.39.00 PM (1).jpeg', category: 'Modern' },
  { id: 38, src: '/mordern/WhatsApp Image 2026-07-09 at 5.39.03 PM (1).jpeg', category: 'Modern' },
  { id: 39, src: '/mordern/WhatsApp Image 2026-07-09 at 5.39.13 PM (4).jpeg', category: 'Modern' },
  { id: 18, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.38.34 PM.jpeg', category: 'Foot Mehndi' },
  { id: 19, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.38.35 PM.jpeg', category: 'Foot Mehndi' },
  { id: 20, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.38.44 PM.jpeg', category: 'Foot Mehndi' },
  { id: 21, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.38.51 PM (1).jpeg', category: 'Foot Mehndi' },
  { id: 22, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.38.51 PM.jpeg', category: 'Foot Mehndi' },
  { id: 23, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.38.52 PM.jpeg', category: 'Foot Mehndi' },
  { id: 24, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.39.04 PM.jpeg', category: 'Foot Mehndi' },
  { id: 25, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.39.06 PM (1).jpeg', category: 'Foot Mehndi' },
  { id: 26, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.39.11 PM (1).jpeg', category: 'Foot Mehndi' },
  { id: 27, src: '/leg mehendi/WhatsApp Image 2026-07-09 at 5.39.11 PM (2).jpeg', category: 'Foot Mehndi' },
];

// Shuffle images once on load for a mixed "All" view
const shuffledImages = [...images].sort(() => Math.random() - 0.5);

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Designs');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const filteredImages = shuffledImages.filter(
    img => activeCategory === 'All Designs' || img.category === activeCategory
  );

  // Ensure the baby design is always the very first image shown
  filteredImages.sort((a, b) => {
    if (a.src === '/mordern/WhatsApp Image 2026-07-09 at 5.39.00 PM (1).jpeg') return -1;
    if (b.src === '/mordern/WhatsApp Image 2026-07-09 at 5.39.00 PM (1).jpeg') return 1;
    return 0;
  });

  const displayedImages = filteredImages.slice(0, visibleCount);

  return (
    <section id="gallery" className="pt-24 pb-12 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-12">
          <div className="w-12 h-[1px] bg-gold-500/50 mb-6"></div>
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-medium mb-4">Portfolio</h2>
          <p className="text-4xl md:text-5xl font-serif text-brown-900 mb-8">Explore Our Mehndi Designs</p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[11px] sm:text-sm uppercase tracking-widest pb-1 border-b-2 transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-gold-500 text-gold-600 font-medium' 
                    : 'border-transparent text-brown-900/60 hover:text-brown-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Gallery Grid with Arch Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pt-8"
        >
          <AnimatePresence>
            {displayedImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="relative group cursor-pointer"
              >
                {/* Decorative Arch Border Background */}
                <div className="absolute -inset-3 border border-gold-500/30 rounded-t-full rounded-b-xl z-0 transition-all duration-500 group-hover:border-gold-500/80 group-hover:-inset-4"></div>
                
                {/* Arch Container */}
                <div className="relative overflow-hidden w-full aspect-[3/4] rounded-t-full rounded-b-lg shadow-xl z-10 bg-white">
                  <img 
                    src={img.src} 
                    alt={`${img.category} Mehndi Design`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-12">
                    <span className="text-gold-500 tracking-widest uppercase text-xs mb-2 font-medium">{img.category}</span>
                    <span className="text-cream-100 tracking-[0.2em] uppercase text-sm font-light border-b border-white/30 pb-1">View Design</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {visibleCount < filteredImages.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center w-full"
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 border border-brown-900 text-brown-900 uppercase tracking-widest text-xs font-medium hover:bg-brown-900 hover:text-cream-100 transition-colors duration-300"
            >
              View More
            </button>
          </motion.div>
        )}
        
        <AnimatedSection className="mt-8 text-center">
           <a href="https://www.instagram.com/rishi_imehandi_art_" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-brown-900 text-cream-100 uppercase tracking-widest text-sm font-medium hover:bg-gold-600 hover:text-brown-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow on Instagram
          </a>
        </AnimatedSection>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-pointer"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 bg-white/20 text-white rounded-full px-8 py-3 hover:bg-gold-500 hover:text-brown-900 transition-colors z-[1000] backdrop-blur-md flex items-center gap-2 border border-white/30 shadow-2xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-sm font-medium tracking-wider uppercase">Close</span>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage.src}
              alt={`${selectedImage.category} Design Full View`}
              className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-md shadow-2xl mb-12"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-gold-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Luxury Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl tracking-wide text-brown-900 font-bold group-hover:text-gold-600 transition-colors duration-300">RISHI</span>
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-gold-500 font-semibold mt-0.5">Mehndi Art</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs font-semibold text-brown-900 uppercase tracking-widest group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-gold-500 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a
            href="https://wa.me/917668715610?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Mehndi%20appointment"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 border border-brown-900 text-brown-900 text-xs font-bold tracking-widest uppercase hover:bg-brown-900 hover:text-gold-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-brown-900 p-2 -mr-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} strokeWidth={1.5} className={scrolled || isOpen ? "text-brown-900" : "text-brown-900"} /> : <Menu size={30} strokeWidth={1.5} className="text-brown-900" />}
        </button>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full bg-cream-100 flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-500/10 rounded-full blur-[80px]"></div>
            
            <div className="flex flex-col items-center gap-6 z-10 w-full px-8 mt-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-brown-900 hover:text-gold-500 transition-colors w-full text-center border-b border-brown-900/10 pb-4"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="https://wa.me/917668715610?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Mehndi%20appointment"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="mt-6 px-10 py-5 bg-brown-900 text-gold-500 font-medium tracking-widest uppercase text-sm text-center w-full shadow-2xl rounded-2xl"
              >
                Book Appointment
              </motion.a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-10 z-10 text-center"
            >
              <p className="text-[10px] uppercase tracking-widest text-brown-900/50">Gurugram's Premium Artist</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

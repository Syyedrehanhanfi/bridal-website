export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-100 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <a href="#" className="flex flex-col items-center mb-8">
          <span className="font-serif text-3xl tracking-wide text-cream-100">RISHI</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 mt-2">Mehndi Art</span>
        </a>
        
        <div className="flex gap-8 mb-12">
          <a href="#services" className="text-xs uppercase tracking-widest text-cream-200 hover:text-gold-500 transition-colors">Services</a>
          <a href="#gallery" className="text-xs uppercase tracking-widest text-cream-200 hover:text-gold-500 transition-colors">Gallery</a>
          <a href="#contact" className="text-xs uppercase tracking-widest text-cream-200 hover:text-gold-500 transition-colors">Contact</a>
        </div>

        <p className="text-cream-200/50 text-xs font-light tracking-wide">
          &copy; {new Date().getFullYear()} Rishi Mehndi Art. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

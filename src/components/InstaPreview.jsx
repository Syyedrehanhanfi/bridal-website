import AnimatedSection from './AnimatedSection';

export default function InstaPreview() {
  const posts = [
    'https://images.unsplash.com/photo-1594244248404-5f560e980315?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616035072049-74e89bd48f7d?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558284566-6f7db1228f41?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621217036688-61d02c65a8fc?q=80&w=400&auto=format&fit=crop'
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-medium mb-4">Follow The Journey</h2>
          <p className="text-4xl font-serif text-brown-900 mb-6">@rishi_imehandi_art_</p>
          <a 
            href="https://www.instagram.com/rishi_imehandi_art_" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border border-brown-900 text-brown-900 px-8 py-3 text-sm tracking-widest uppercase hover:bg-brown-900 hover:text-white transition-colors duration-300"
          >
            Follow on Instagram
          </a>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((src, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <a href="https://www.instagram.com/rishi_imehandi_art_" target="_blank" rel="noreferrer" className="block relative group overflow-hidden aspect-square">
                <img 
                  src={src} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brown-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from 'next/image';
import { Instagram } from 'lucide-react';
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
                <Image 
                  src={src} 
                  alt={`Instagram Post ${idx + 1}`} 
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brown-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

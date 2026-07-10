"use client";

import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function RatingBanner() {
  return (
    <AnimatedSection className="bg-brown-900 text-cream-100 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-serif mb-2">Top Rated Mehndi Artist</h3>
          <p className="text-cream-200 font-light text-sm tracking-widest uppercase">in Gurugram & Delhi NCR</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <p className="text-lg font-serif">
            <span className="text-gold-500 font-semibold">5.0</span> Rating
          </p>
          <p className="text-xs tracking-widest uppercase text-cream-200 mt-1">Based on 300+ Reviews</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    question: "Do you provide home service for bridal mehndi?",
    answer: "Yes, we provide luxury home services across Gurugram, Delhi NCR, and surrounding areas. Our team brings everything needed for a comfortable, salon-like experience at your venue."
  },
  {
    question: "Is your henna organic and safe for sensitive skin?",
    answer: "Absolutely. We prepare our own organic henna paste using 100% natural ingredients and premium essential oils, ensuring a safe application and a rich, dark stain."
  },
  {
    question: "How far in advance should I book for my wedding?",
    answer: "We recommend booking at least 2-3 months in advance for peak wedding seasons to secure your preferred dates, though we always try to accommodate last-minute requests when possible."
  },
  {
    question: "Do you cater to guest mehndi as well?",
    answer: "Yes, we have a skilled team of artists capable of handling guest mehndi for events of any size, ensuring everyone receives beautiful designs efficiently."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-cream-100">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-medium mb-4">Inquiries</h2>
          <p className="text-4xl font-serif text-brown-900">Frequently Asked Questions</p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div 
                className={`border border-brown-900/10 bg-white transition-colors duration-300 ${openIndex === idx ? 'shadow-md' : 'hover:border-gold-500/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-serif text-lg text-brown-900 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold-500 shrink-0"
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-brown-900/70 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

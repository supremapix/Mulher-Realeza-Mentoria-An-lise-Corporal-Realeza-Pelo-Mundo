import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Decorative Gold Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-serif text-4xl text-center text-white mb-16">Histórias de Renascimento</h2>

        <div className="max-w-4xl mx-auto h-[400px] md:h-[300px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="glass-card p-8 md:p-12 rounded-sm text-center h-full flex flex-col items-center justify-center">
                <Quote className="text-gold opacity-50 mb-6 mx-auto" size={48} />
                <p className="font-serif text-xl md:text-2xl text-pearl italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={TESTIMONIALS[currentIndex].image} 
                    alt={TESTIMONIALS[currentIndex].name} 
                    className="w-12 h-12 rounded-full border border-gold object-cover grayscale"
                  />
                  <div className="text-left">
                    <p className="text-white font-bold">{TESTIMONIALS[currentIndex].name}</p>
                    <p className="text-gold text-xs uppercase tracking-wide">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-gold w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
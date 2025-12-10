import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Crown, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a2a2a] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] z-0" />
      
      {/* Decorative Particles (Static positions for simplicity, animate via CSS class) */}
      <div className="absolute top-1/4 left-1/4 animate-float opacity-30">
        <Crown size={64} className="text-gold" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Sparkles size={48} className="text-gold" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 border-b border-gold pb-2"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Mentoria & Análise Corporal
          </motion.span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight">
            Da Dor ao <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Renascimento
            </span>
          </h1>

          <p className="font-sans text-pearl/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Liberte-se das feridas emocionais e tensões corporais. 
            Uma jornada de luxo terapêutico para reencontrar sua essência.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de agendar minha Sessão Estratégica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gold text-black font-bold uppercase tracking-wider overflow-hidden rounded-sm transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-white/30 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full" />
              Agendar Sessão (30min)
            </motion.a>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, quero começar com o produto de R$10.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-pearl text-pearl hover:border-gold hover:text-gold uppercase tracking-wider rounded-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar por R$ 10
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
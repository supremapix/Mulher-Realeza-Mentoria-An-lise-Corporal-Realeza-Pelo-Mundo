import React from 'react';
import { motion } from 'framer-motion';
import { FUNNEL_STEPS } from '../constants';

const Funnel: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(60,60,60,0.3),transparent_60%)] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold text-sm uppercase tracking-[0.2em]">Sua Jornada</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">O Caminho da Transformação</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent -translate-x-1/2 hidden md:block" />

          {FUNNEL_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center justify-between mb-16 relative ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'} text-center mb-6 md:mb-0`}>
                  <h3 className="text-2xl font-serif text-white">{step.title}</h3>
                  <p className="text-gold font-bold text-sm my-1">{step.price}</p>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center text-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <step.icon size={20} />
                </div>

                {/* Empty Side for layout balance */}
                <div className="w-full md:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Funnel;
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold text-sm uppercase tracking-[0.2em]">O Caminho da Realeza</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">Nossos Serviços Exclusivos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-sm border ${
                service.highlight 
                  ? 'border-gold bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]' 
                  : 'border-white/10 bg-[#141414]'
              } group hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Recomendado
                </div>
              )}

              <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-gold">{service.price}</span>
                {service.originalPrice && (
                  <span className="text-sm text-gray-500 line-through decoration-gold/50">
                    {service.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-400 mb-8 min-h-[60px] text-sm leading-relaxed">
                {service.description}
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 text-center uppercase text-sm tracking-wider font-semibold transition-all ${
                  service.highlight
                    ? 'bg-gold text-black hover:bg-white'
                    : 'border border-gold text-gold hover:bg-gold hover:text-black'
                }`}
              >
                {service.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
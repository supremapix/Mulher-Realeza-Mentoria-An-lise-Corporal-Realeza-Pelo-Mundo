import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, UserCheck } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "500+", label: "Vidas Transformadas" },
    { number: "7", label: "Países Visitados" },
    { number: "100%", label: "Entrega e Excelência" }
  ];

  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/30 rounded-sm translate-x-4 translate-y-4" />
            <div className="relative h-[600px] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
               {/* Using a placeholder that fits the luxury/woman vibe */}
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Mulher Realeza Founder" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="font-serif text-3xl text-white">Carla Tutschke</p>
                <p className="text-gold uppercase tracking-widest text-sm">Mentora & Analista Corporal</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold text-sm uppercase tracking-[0.2em] mb-4">Quem Sou Eu</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Ajudando mulheres a curar feridas que viraram <span className="text-gold italic">tensões no corpo</span>.
            </h3>
            
            <p className="text-pearl/80 mb-6 leading-relaxed">
              Minha missão é guiar mulheres que carregam o peso do mundo e sofrem com a "ferida masculina" – a necessidade excessiva de controle, força e rigidez.
            </p>
            <p className="text-pearl/80 mb-10 leading-relaxed">
              Através da Análise Corporal e mentorias de alto nível, ajudo você a entender o funcionamento da sua mente, respeitar sua essência e renascer para uma vida de leveza, luxo e propósito.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <h4 className="text-3xl font-serif text-gold font-bold mb-1">{stat.number}</h4>
                  <p className="text-xs uppercase tracking-wider text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Pillars */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Cura Emocional", desc: "Cicatrize as feridas do passado." },
            { icon: UserCheck, title: "Autoconhecimento", desc: "Entenda como sua mente funciona." },
            { icon: Sparkles, title: "Transformação", desc: "Renascimento completo e sistêmico." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 text-center rounded-sm group hover:border-gold/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                <item.icon size={28} />
              </div>
              <h4 className="font-serif text-xl text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
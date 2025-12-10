import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, BatteryLow, Shield } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const points = [
    {
      icon: BatteryLow,
      text: "Sente tensões constantes no corpo e exaustão mental."
    },
    {
      icon: Shield,
      text: "Tem dificuldade de pedir ajuda e carrega o mundo nas costas."
    },
    {
      icon: AlertCircle,
      text: "Sente que perdeu sua feminilidade e leveza ao longo dos anos."
    }
  ];

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl text-white mb-4">Para quem é a Mulher Realeza?</h2>
          <p className="text-gray-400">
            Mulheres de 25 a 55 anos que buscam reencontrar sua essência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-black/50 border border-white/5 rounded-sm"
            >
              <point.icon className="text-gold mb-4" size={32} />
              <p className="text-pearl">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
import React from 'react';
import { Facebook, Instagram, Mail, Phone, Globe } from 'lucide-react';
import { EMAIL, INSTAGRAM, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-black border-t border-gold/20 text-pearl pt-20 pb-8">
      {/* Pre-footer CTA */}
      <div className="container mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-gold/20 to-black p-8 md:p-12 rounded-sm border border-gold/30 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Pronta para sua Transformação?</h2>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, estou pronta para minha transformação!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Agendar Agora
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Section 1: Brand */}
          <div>
            <h3 className="font-serif text-2xl text-gold mb-6 font-bold">MULHER REALEZA</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cura emocional, análise corporal e transformação feminina. Reconecte-se com sua essência real.
            </p>
            <div className="flex space-x-4">
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Section 2: Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#servicos" className="hover:text-gold transition-colors">Mentoria</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Análise Corporal</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Produtos Digitais</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Viagens</a></li>
            </ul>
          </div>

          {/* Section 3: Institutional */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Área do Cliente</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Section 4: Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-gold">(41) 99866-7758</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="text-gold" />
                <span>mulherrealeza.com.br</span>
              </li>
              <li className="text-xs text-gray-500 mt-4">
                Seg-Sex, 8h às 22h
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p className="mb-2">© 2024 Mulher Realeza. Todos os direitos reservados.</p>
          <div className="footer-credits">
            <p>
              Desenvolvido com <span className="inline-block animate-heartbeat text-gold text-lg mx-1">❤️</span> pela{' '}
              <a 
                href="https://www.supremasite.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors font-semibold"
              >
                Suprema Sites Express
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
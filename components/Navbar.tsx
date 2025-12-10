import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold text-gold tracking-widest">
            MULHER REALEZA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-pearl hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-sm text-sm uppercase tracking-wider"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl text-pearl hover:text-gold"
            >
              {link.name}
            </a>
          ))}
           <a 
              href="#contato" 
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-gold text-black font-bold uppercase tracking-widest"
            >
              Agendar Agora
            </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Events', href: '#events' },
    { name: 'Artists', href: '#artists' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0F0F0F] border-b border-[#EDEDED]/5">
      <div className="narrow-container py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4">
        {/* Logo and Name */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://i.ibb.co/bRDK2LSP/IMG-3261-2.jpg" 
            alt="PESUTUPA UG" 
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover transition-transform group-hover:rotate-12 flex-shrink-0"
          />
          <h1 className="text-logo font-bold tracking-[0.1em] whitespace-nowrap uppercase">PESUTUPA UG</h1>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 md:gap-8 flex-shrink-0 pb-2 md:pb-0">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-nav uppercase tracking-wider hover:text-white transition-colors relative group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EDEDED] transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

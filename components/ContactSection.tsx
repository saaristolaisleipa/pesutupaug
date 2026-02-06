
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <div className="space-y-16">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-header font-bold uppercase tracking-widest border-b border-[#EDEDED]/20 pb-4"
      >
        Contact
      </motion.h2>

      <div className="flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-xl"
        >
          <p className="text-body mb-8 leading-relaxed">
          Pesutupa ry
          </p>
          
          <a 
            href="mailto:pesukone.pesutupa@gmail.com" 
            className="text-body font-bold underline decoration-1 underline-offset-4 hover:text-white transition-colors"
          >
            pesukone.pesutupa@gmail.com
          </a>
        </motion.div>

        <div className="flex flex-wrap gap-12 mt-8">
          <motion.a 
            href="https://instagram.com/pesutupa.ug" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-[#EDEDED] flex items-center justify-center text-[#0F0F0F]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <span className="text-nav uppercase tracking-widest group-hover:underline">Instagram</span>
          </motion.a>

          <motion.a 
            href="https://t.me/+9Ag3jURKuUZjZjFk" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-[#EDEDED] flex items-center justify-center text-[#0F0F0F]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
            <span className="text-nav uppercase tracking-widest group-hover:underline">Telegram</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

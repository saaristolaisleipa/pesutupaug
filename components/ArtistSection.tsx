
import React from 'react';
import { motion } from 'framer-motion';

const ArtistCard: React.FC<{ name: string; image: string; link: string }> = ({ name, image, link }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <div className="aspect-square bg-[#333] mb-6 relative overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
      />
    </div>
    <h3 className="text-header font-bold mb-1 uppercase tracking-tighter">{name}</h3>
    <a 
      href={`https://${link}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-nav text-[#EDEDED]/60 hover:text-white transition-colors"
    >
      SOUNDCLOUD
    </a>
  </motion.div>
);

const ArtistSection: React.FC = () => {
  const artists = [
    { 
      name: "runeberghain", 
      image: "https://i.ibb.co/pvD3Pf2q/IMG-3263.jpg", 
      link: "soundcloud.com/runeberghain" 
    }, 
    { 
      name: "Abjekti", 
      image: "https://i.ibb.co/s92mfQSY/IMG-3262.jpg", 
      link: "soundcloud.com/abjekti" 
    },
    { 
      name: "Heizgerat", 
      image: "https://i.ibb.co/RGc0xyNn/IMG-3264.jpg", 
      link: "soundcloud.com/heizgerat" 
    },
    { 
      name: "Rasmus", 
      image: "https://picsum.photos/seed/artist4/600/600",
      link: "soundcloud.com/" 
    },
     { 
      name: "Malakias", 
      image: "https://picsum.photos/seed/artist4/600/600",
      link: "soundcloud.com/" 
    },
  ];

  return (
    <div className="space-y-16">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-header font-bold uppercase tracking-widest border-b border-[#EDEDED]/20 pb-4"
      >
        Artists
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {artists.map((artist, idx) => (
          <ArtistCard key={idx} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
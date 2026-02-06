
import React from 'react';
import { motion } from 'framer-motion';

const EventCard: React.FC<{ image: string; alt: string; past?: boolean }> = ({ image, alt, past }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`group relative overflow-hidden transition-all duration-500`}
  >
    {/* Aspect ratio 4:5 (1080x1350 equivalent) */}
    <div className="aspect-[4/5] bg-[#333] overflow-hidden">
      <img 
        src={image} 
        alt={alt} 
        className={`w-full h-full object-cover transition-all duration-700 ${past ? 'grayscale group-hover:grayscale-0' : 'grayscale-0'}`}
      />
    </div>
  </motion.div>
);

const EventSection: React.FC = () => {
  const upcomingEvents = [
    {
      alt: "Upcoming Event 01",
      image: "https://i.ibb.co/hxL2KB8Y/IMG-3266.jpg"
    }
  ];

  const pastEvents = [
    {
      alt: "Past Event 01",
      image: "https://i.ibb.co/J8qQd7R/IMG-3258.jpg"
    },
    {
      alt: "Past Event 02",
      image: "https://i.ibb.co/N6R602N5/IMG-3257.jpg"
    },
    {
      alt: "Past Event 02",
      image: "https://i.ibb.co/VYM3JJ6F/IMG-3256.jpg"
    },
    {
      alt: "Past Event 02",
      image: "https://i.ibb.co/5WNsCdR2/IMG-3255.jpg"
    },
    
  ];

  return (
    <div className="space-y-24">
      <div className="space-y-12">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-header font-bold uppercase tracking-widest border-b border-[#EDEDED]/20 pb-4"
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 gap-12">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="max-w-md mx-auto w-full">
               <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-header font-bold uppercase tracking-widest border-b border-[#EDEDED]/20 pb-4"
        >
          Past Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pastEvents.map((event, idx) => (
            <EventCard key={idx} {...event} past />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
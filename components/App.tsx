
import React from 'react';
import Header from './components/Header';
import EventSection from './components/EventSection';
import ArtistSection from './components/ArtistSection';
import ContactSection from './components/ContactSection';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  /**
   * Precise landing calculation:
   * The mobile header stacks elements, making it taller (~115px).
   * The desktop header is horizontal (~100px).
   * scroll-mt defines where the browser 'stops' when navigating to an ID.
   * Increased mobile scroll-mt to 130px to guarantee the heading is clear of the header.
   */
  const sectionClasses = "pt-0 mb-32 scroll-mt-[130px] md:scroll-mt-[110px]";

  return (
    <div className="min-h-screen selection:bg-[#EDEDED] selection:text-[#0F0F0F]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#EDEDED] origin-left z-50"
        style={{ scaleX }}
      />

      <Header />

      {/* Padding top on main container handles the initial view on load */}
      <main className="narrow-container pt-[160px] md:pt-[160px]">
        {/* Events Section */}
        <section id="events" className={sectionClasses}>
          <EventSection />
        </section>

        {/* Artists Section */}
        <section id="artists" className={sectionClasses}>
          <ArtistSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${sectionClasses} mb-12`}>
          <ContactSection />
        </section>
      </main>

      <footer className="narrow-container py-12 border-t border-[#EDEDED]/10 text-center opacity-50 text-body">
        <p>&copy; {new Date().getFullYear()} Pesutupa ry </p>
      </footer>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* WhatsApp Floating Chat CTA */}
      <a
        href="https://wa.me/919839000000?text=Hello%20Shabnam%20Children%20English%20School%2C%20Ghosi.%20I%20want%20to%20inquire%20about%20Admissions%202026-27."
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        title="WhatsApp Direct Inquiry"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Phone Call Floating CTA */}
      <a
        href="tel:+919839000000"
        className="pointer-events-auto bg-[#1E5EFF] hover:bg-blue-700 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        title="Call School Desk"
      >
        <Phone className="w-5 h-5 fill-white text-[#1E5EFF]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold pl-0 group-hover:pl-2">
          Call Helpline
        </span>
      </a>

      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto bg-slate-900/90 hover:bg-slate-950 text-amber-300 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 border border-slate-700/80 backdrop-blur-md cursor-pointer animate-fadeIn"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

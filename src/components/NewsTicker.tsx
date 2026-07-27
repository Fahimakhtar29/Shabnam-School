import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Bell, ArrowRight, Sparkles } from 'lucide-react';

export const NewsTicker: React.FC = () => {
  const { tickerItems, setIsAdmissionModalOpen } = useSchool();

  return (
    <div className="bg-[#1E5EFF] text-white py-2 px-4 overflow-hidden shadow-inner flex items-center border-b border-blue-700">
      <div className="max-w-7xl mx-auto w-full flex items-center gap-3">
        {/* Ticker Title Badge */}
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-white text-[#1E5EFF] px-3 py-1 rounded-md font-black text-[11px] tracking-wider uppercase shadow-xs">
          <Bell className="w-3.5 h-3.5 text-[#1E5EFF] animate-bounce" />
          <span className="hidden sm:inline">LATEST ANNOUNCEMENTS</span>
          <span className="sm:hidden">UPDATES</span>
        </div>

        {/* Marquee Ticker */}
        <div className="relative flex-1 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-ticker text-xs font-semibold text-white">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 mx-6 hover:text-[#F4B400] transition-colors cursor-pointer">
                <Sparkles className="w-3 h-3 text-[#F4B400] flex-shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Quick Admission CTA */}
        <button
          onClick={() => setIsAdmissionModalOpen(true)}
          className="flex-shrink-0 hidden md:flex items-center gap-1 text-xs font-black text-[#F4B400] hover:text-amber-300 transition-colors uppercase tracking-wider"
        >
          <span>Apply Online</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F4B400]" />
        </button>
      </div>
    </div>
  );
};

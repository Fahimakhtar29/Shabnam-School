import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Facility } from '../types';
import {
  Tv,
  FlaskConical,
  Monitor,
  BookOpen,
  Trophy,
  Bus,
  HeartPulse,
  Music,
  CheckCircle2,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const { facilities, selectedFacility, setSelectedFacility } = useSchool();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv': return <Tv className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'Monitor': return <Monitor className="w-6 h-6" />;
      case 'Library': return <BookOpen className="w-6 h-6" />;
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      case 'Bus': return <Bus className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Music': return <Music className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>World Class Campus Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            School <span className="text-[#0B6B3A]">Facilities & Amenities</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Equipped with modern technology, athletic grounds, and safety systems designed to maximize learning potential.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => {
            const topAccent = idx % 3 === 0 ? 'border-t-4 border-[#0B6B3A]' :
              idx % 3 === 1 ? 'border-t-4 border-[#1E5EFF]' :
              'border-t-4 border-[#F4B400]';

            return (
              <div
                key={fac.id}
                className={`bg-slate-50 rounded-xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between ${topAccent}`}
              >
                <div>
                  {/* Image Container with Zoom */}
                  <div className="relative h-48 img-zoom-container overflow-hidden">
                    <img
                      src={fac.imageUrl}
                      alt={fac.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 right-3 bg-white/90 text-[#0B6B3A] p-2 rounded-lg shadow-md backdrop-blur-md">
                      {getIcon(fac.icon)}
                    </div>

                    <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold font-serif text-white leading-tight">
                      {fac.title}
                    </h3>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {fac.shortDesc}
                    </p>

                    <div className="space-y-1">
                      {fac.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6B3A] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedFacility(fac)}
                    className="w-full py-2.5 bg-[#0B6B3A] hover:bg-emerald-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Explore Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Facility Specification Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-56">
              <img
                src={selectedFacility.imageUrl}
                alt={selectedFacility.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#0B6B3A] text-amber-300 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 inline-block">
                  Campus Facility
                </span>
                <h3 className="text-2xl font-bold font-serif">{selectedFacility.title}</h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>{selectedFacility.fullDesc}</p>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B6B3A]">
                  Key Technical Specifications & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.features.map((f, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6B3A] flex-shrink-0" />
                      <span className="font-medium text-slate-800 text-xs">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-medium">Shabnam Children English School, Ghosi</span>
              <button
                onClick={() => setSelectedFacility(null)}
                className="bg-[#0B6B3A] text-white font-bold px-5 py-2 rounded-lg text-xs"
              >
                Close Specs
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const { slides, setIsAdmissionModalOpen } = useSchool();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  if (slides.length === 0) return null;

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full h-[85vh] min-h-[500px] max-h-[750px] bg-slate-950 overflow-hidden select-none"
    >
      {/* Slide Image Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.headline}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('lh3.googleusercontent.com')) {
                const parts = target.src.split('/');
                const id = parts[parts.length - 1];
                if (id) {
                  target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1920`;
                }
              }
            }}
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-10000 ease-out"
          />
          {/* Subtle Balanced Gradient Dark Overlay for Photo Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
        </div>
      ))}

      {/* Slide Text Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
        <div className="max-w-3xl text-white space-y-5 animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F4B400] text-[#0B6B3A] px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>{activeSlide.badgeText}</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-serif leading-tight text-white drop-shadow-md">
            {activeSlide.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl drop-shadow">
            {activeSlide.subtitle}
          </p>

          {/* CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#1E5EFF] hover:bg-blue-600 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg flex items-center gap-2 text-sm uppercase tracking-wide transition-all transform hover:scale-105 cursor-pointer border border-blue-400/30"
            >
              <span>{activeSlide.ctaText1}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href="#facilities"
              className="bg-white hover:bg-slate-100 text-[#0B6B3A] font-bold px-7 py-3.5 rounded-full shadow-md text-sm uppercase tracking-wide transition-all hover:scale-105 text-center"
            >
              {activeSlide.ctaText2}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-amber-300 border border-slate-700/80 backdrop-blur-md transition-colors"
          title={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-slate-700/80 backdrop-blur-md transition-all hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-slate-700/80 backdrop-blur-md transition-all hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

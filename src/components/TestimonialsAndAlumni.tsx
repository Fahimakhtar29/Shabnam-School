import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Sparkles, GraduationCap } from 'lucide-react';

export const TestimonialsAndAlumni: React.FC = () => {
  const { testimonials, alumni } = useSchool();
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeParent = testimonials[activeTestimonialIdx] || testimonials[0];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        
        {/* Parent Testimonials Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-amber-800 font-extrabold text-xs tracking-wider uppercase bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Parent Speak</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              What Parents Say About <span className="text-[#0B6B3A]">Shabnam School</span>
            </h2>
          </div>

          {activeParent && (
            <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg relative">
              <Quote className="w-16 h-16 text-amber-400/30 absolute top-6 right-8" />

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-amber-400 p-1 bg-white shadow-md flex-shrink-0">
                  <img
                    src={activeParent.avatarUrl}
                    alt={activeParent.parentName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-4 text-center md:text-left flex-1">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500">
                    {[...Array(activeParent.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-base sm:text-lg italic leading-relaxed font-serif">
                    "{activeParent.feedback}"
                  </p>

                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">{activeParent.parentName}</h3>
                    <p className="text-xs text-[#0B6B3A] font-bold">
                      Parent of {activeParent.studentName} ({activeParent.studentClass}) • {activeParent.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === activeTestimonialIdx ? 'w-8 bg-[#0B6B3A]' : 'w-2.5 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-full bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-full bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Alumni Network Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-[#1E5EFF] font-extrabold text-xs tracking-wider uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Global Alumni Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              Our Accomplished <span className="text-[#1E5EFF]">Alumni</span>
            </h2>
            <p className="text-slate-600 text-sm">
              Shabnam graduates serving in top engineering, medical, defence, and corporate institutions nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumni.map((alum) => (
              <div
                key={alum.id}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={alum.imageUrl}
                      alt={alum.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                    />
                    <div>
                      <span className="text-[10px] font-extrabold text-[#1E5EFF] uppercase tracking-wider bg-blue-100 px-2 py-0.5 rounded">
                        {alum.batch}
                      </span>
                      <h3 className="font-bold text-slate-900 font-serif text-base">{alum.name}</h3>
                      <p className="text-xs font-bold text-[#0B6B3A]">{alum.profession}</p>
                      <p className="text-[11px] text-slate-500">{alum.companyOrRole}</p>
                    </div>
                  </div>

                  <p className="bg-white p-4 rounded-xl border border-slate-200 text-slate-600 text-xs italic leading-relaxed">
                    "{alum.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-right">
                  <span className="text-[10px] font-bold text-amber-600 uppercase">
                    Proud Shabnamian
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

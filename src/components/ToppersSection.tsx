import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Trophy, Star, Award, Sparkles, Quote } from 'lucide-react';

export const ToppersSection: React.FC = () => {
  const { toppers } = useSchool();

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-800 font-extrabold text-xs tracking-wider uppercase bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Roll of Academic Honor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Our CBSE <span className="text-amber-600">Board Toppers</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Celebrating extraordinary academic dedication, 100% board success, and district top ranks at Shabnam School.
          </p>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((top) => (
            <div
              key={top.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden group border-t-4 border-[#F4B400]"
            >
              <div>
                {/* Photo Frame with Percentage Badge */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-[#F4B400] p-1 bg-amber-50 shadow-md">
                    <img
                      src={top.imageUrl}
                      alt={top.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform"
                    />
                  </div>
                  {/* Floating Percentage Badge */}
                  <div className="absolute -bottom-3 -right-2 bg-[#F4B400] text-[#0B6B3A] px-3 py-1 rounded-xl text-xs font-black shadow-lg border border-amber-300">
                    {top.percentage}%
                  </div>
                </div>

                {/* Name & Stream */}
                <div className="text-center space-y-1 mb-4">
                  <span className="text-[10px] font-black text-[#0B6B3A] tracking-wider uppercase bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 inline-block">
                    {top.classGrade} {top.stream ? `• ${top.stream}` : ''}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-slate-900">{top.name}</h3>
                  <p className="text-xs font-extrabold text-amber-700 flex items-center justify-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#F4B400]" />
                    <span>{top.rank}</span>
                  </p>
                </div>

                {/* Testimonial Quote */}
                {top.testimonial && (
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-slate-700 text-xs italic leading-relaxed relative font-medium">
                    <Quote className="w-4 h-4 text-[#F4B400]/80 mb-1" />
                    <p>"{top.testimonial}"</p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Academic Session {top.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

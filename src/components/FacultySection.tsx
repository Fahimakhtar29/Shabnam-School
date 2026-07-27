import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Users, GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react';

export const FacultySection: React.FC = () => {
  const { faculty } = useSchool();

  return (
    <section id="faculty" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            <Users className="w-3.5 h-3.5" />
            <span>Academic Mentors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Our Experienced <span className="text-[#0B6B3A]">Faculty & Staff</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Over 80+ qualified educators, subject specialists, and coaches dedicated to inspiring academic brilliance.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 flex-shrink-0 shadow-md">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold text-[#0B6B3A] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {member.department}
                    </span>
                    <h3 className="font-bold text-slate-900 font-serif text-base">{member.name}</h3>
                    <p className="text-xs font-bold text-[#1E5EFF]">{member.designation}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{member.qualification}</p>
                  </div>
                </div>

                {member.message && (
                  <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-600 text-xs italic leading-relaxed">
                    "{member.message}"
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span className="flex items-center gap-1 text-[#0B6B3A]">
                  <Award className="w-3.5 h-3.5" /> {member.experience}
                </span>
                <span>Ghosi, Mau Campus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

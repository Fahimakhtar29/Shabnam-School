import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  BookOpen,
  Clock,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Download,
  Calendar,
  Layers
} from 'lucide-react';

export const AcademicsSection: React.FC = () => {
  const { academics, setIsAdmissionModalOpen } = useSchool();
  const [selectedAcademic, setSelectedAcademic] = useState(academics[0]?.id || 'ac1');

  const activeProgram = academics.find(a => a.id === selectedAcademic) || academics[0];

  return (
    <section id="academics" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Wings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Curriculum & <span className="text-[#0B6B3A]">Academic Structure</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From playful foundational years to rigorous CBSE board & competitive exam preparation.
          </p>
        </div>

        {/* Academic Program Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {academics.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setSelectedAcademic(prog.id)}
              className={`px-5 py-3 rounded-lg font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                selectedAcademic === prog.id
                  ? 'bg-[#0B6B3A] text-[#F4B400] shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{prog.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Academic Program Spotlight Card */}
        {activeProgram && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image & Timing Banner */}
            <div className="lg:col-span-5 relative min-h-[300px]">
              <img
                src={activeProgram.imageUrl}
                alt={activeProgram.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full inline-block shadow">
                  {activeProgram.classes}
                </span>
                <h3 className="text-2xl font-bold font-serif">{activeProgram.name}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-200">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-300" /> {activeProgram.timings}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-300" /> {activeProgram.ageGroup}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Curriculum Details */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-2">
                  Program Overview & Objectives
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeProgram.description}
                </p>

                {/* Subjects Grid */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B6B3A] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Key Subjects & Modules
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProgram.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="bg-emerald-50 text-[#0B6B3A] border border-emerald-200/80 px-3 py-1 rounded-lg text-xs font-semibold"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#1E5EFF] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Special Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {activeProgram.keyHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-md">
                        <CheckCircle2 className="w-4 h-4 text-[#0B6B3A] flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#downloads"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1E5EFF] hover:text-blue-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete Class Syllabus (PDF)</span>
                </a>

                <button
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="bg-[#F4B400] hover:bg-amber-400 text-[#0B6B3A] font-black px-6 py-2.5 rounded-full shadow-md text-xs uppercase tracking-wider cursor-pointer border border-amber-300"
                >
                  Apply for Admission
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

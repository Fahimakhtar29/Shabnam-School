import React, { useState } from 'react';
import {
  CheckCircle2,
  Award,
  BookOpen,
  Target,
  Compass,
  Heart,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  X,
  Building
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const AboutSection: React.FC = () => {
  const { setIsAdmissionModalOpen } = useSchool();
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Campus Images with Badge Overlays */}
          <div className="lg:col-span-5 relative mb-12 lg:mb-0 pb-8 lg:pb-0">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white img-zoom-container">
              <img
                src="https://lh3.googleusercontent.com/d/1lkggAgXqdAlTI-bmb_TF5aGfr5YNxcd-"
                alt="Shabnam Children English School Campus"
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
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#0B6B3A] text-amber-300 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block shadow">
                  Ghosi, Mau (UP)
                </span>
                <h4 className="text-xl font-bold font-serif">A Center of Academic Distinction</h4>
                <p className="text-xs text-slate-200 mt-1">Inspiring young minds since 1992</p>
              </div>
            </div>

            {/* Floating Experience Badge - Moved down */}
            <div className="absolute -bottom-10 sm:-bottom-14 right-2 sm:-right-4 z-20 bg-[#F4B400] text-[#0B6B3A] p-5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0B6B3A] text-[#F4B400] rounded-xl flex items-center justify-center font-black text-xl shadow-inner">
                34
              </div>
              <div>
                <p className="font-black text-xs uppercase tracking-wider text-slate-950">Years of Service</p>
                <p className="text-[11px] font-extrabold text-[#0B6B3A]">1992 – 2026 Excellence</p>
              </div>
            </div>

            {/* Decorative Backing Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#0B6B3A]/20 rounded-3xl -z-0 hidden sm:block" />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Shabnam Children English School</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
                Welcome to <span className="text-[#0B6B3A]">Shabnam Children English School</span>
              </h2>
              <p className="text-[#1E5EFF] font-bold text-base italic">"A School With Difference"</p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Established in <strong className="text-slate-900 font-bold">1992 in Ghosi, Mau, Uttar Pradesh</strong>, Shabnam Children English School stands as a beacon of quality education, moral integrity, and modern child development. Over three decades, we have evolved into a premier CBSE-oriented co-educational school serving over 1,500 students with an unwavering commitment to holistic growth.
            </p>

            {/* Tabbed Mission / Vision / Core Values */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex border-b border-slate-200 gap-4">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-2.5 font-bold text-sm transition-all border-b-2 cursor-pointer ${
                    activeTab === 'mission'
                      ? 'border-[#0B6B3A] text-[#0B6B3A]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-2.5 font-bold text-sm transition-all border-b-2 cursor-pointer ${
                    activeTab === 'vision'
                      ? 'border-[#0B6B3A] text-[#0B6B3A]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`pb-2.5 font-bold text-sm transition-all border-b-2 cursor-pointer ${
                    activeTab === 'values'
                      ? 'border-[#0B6B3A] text-[#0B6B3A]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Core Values
                </button>
              </div>

              <div className="text-slate-700 text-sm leading-relaxed min-h-[80px]">
                {activeTab === 'mission' && (
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#0B6B3A] flex-shrink-0 mt-0.5" />
                    <p>
                      To empower every student with rigorous academic knowledge, critical analytical skills, fluent English communication, and high ethical standards, preparing them to excel in competitive global environments while staying rooted in Indian cultural values.
                    </p>
                  </div>
                )}
                {activeTab === 'vision' && (
                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-0.5" />
                    <p>
                      To be recognized as Uttar Pradesh’s most progressive educational institution, nurturing innovative thinkers, compassionate leaders, and lifelong learners who contribute meaningfully to nation building and society.
                    </p>
                  </div>
                )}
                {activeTab === 'values' && (
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p>
                      Integrity, Discipline, Inclusivity, Scientific Temper, Respect for All, and Pursuit of Academic Excellence across every facet of learning.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0B6B3A]" />
                <span className="text-xs font-bold text-emerald-950">CBSE Curriculum</span>
              </div>
              <div className="bg-blue-50/80 p-3 rounded-xl border border-blue-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1E5EFF]" />
                <span className="text-xs font-bold text-blue-950">100% CCTV Security</span>
              </div>
              <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-100 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-amber-950">English Medium</span>
              </div>
              <div className="bg-purple-50/80 p-3 rounded-xl border border-purple-100 flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-bold text-purple-950">Top CBSE Results</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsReadMoreOpen(true)}
                className="bg-[#0B6B3A] hover:bg-emerald-800 text-white font-extrabold px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 text-xs uppercase tracking-wider cursor-pointer border border-emerald-700"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="bg-[#F4B400] hover:bg-amber-400 text-[#0B6B3A] font-black px-7 py-3.5 rounded-full shadow-md transition-all text-xs uppercase tracking-wider cursor-pointer border border-amber-300"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Detailed Modal */}
      {isReadMoreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#0B6B3A] text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-extrabold font-serif">Shabnam Children English School History & Ethos</h3>
                <p className="text-xs text-amber-300">Ghosi, Mau, Uttar Pradesh • Established 1992</p>
              </div>
              <button
                onClick={() => setIsReadMoreOpen(false)}
                className="p-1 rounded-full hover:bg-emerald-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>
                <strong>Shabnam Children English School</strong> was founded in 1992 with a noble objective: to make high-quality, English-medium CBSE education accessible to students in Ghosi, Mau, and nearby rural and semi-urban regions of eastern Uttar Pradesh.
              </p>
              <h4 className="font-bold text-slate-900 text-base font-serif text-[#0B6B3A]">34 Years of Dedication</h4>
              <p>
                What started as a modest nursery initiative with a handful of visionary educators has today expanded into a full-fledged, state-of-the-art educational complex spanning acres of green campus, modern STEM laboratories, digital smart classrooms, and a multi-sports complex.
              </p>
              <h4 className="font-bold text-slate-900 text-base font-serif text-[#0B6B3A]">Pedagogical Excellence & Discipline</h4>
              <p>
                Our curriculum balances academic rigor with creative expression. We maintain an optimal student-teacher ratio of 1:20 to ensure every child’s unique learning curve is understood and nurtured. With over 80 qualified educators and subject specialists, our students consistently rank among the district CBSE board toppers year after year.
              </p>
              <h4 className="font-bold text-slate-900 text-base font-serif text-[#0B6B3A]">Community Leadership</h4>
              <p>
                Beyond textbooks, our students actively participate in community outreach, environmental awareness campaigns, national sports meets, and district robotics forums, embodying our foundational motto: <em>"A School With Difference"</em>.
              </p>
            </div>

            <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-500">Contact Admin: +91 9839XXXXXX</span>
              <button
                onClick={() => {
                  setIsReadMoreOpen(false);
                  setIsAdmissionModalOpen(true);
                }}
                className="gold-shimmer text-slate-950 font-bold px-5 py-2 rounded-lg text-xs"
              >
                Apply Online Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

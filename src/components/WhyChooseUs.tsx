import React from 'react';
import {
  Tv,
  FlaskConical,
  Monitor,
  BookOpen,
  Trophy,
  Bus,
  ShieldCheck,
  Sparkles,
  MessageSquareCode,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Smart Classrooms',
      desc: 'Interactive digital boards with animated curriculum modules and audio-visual lessons.',
      icon: Tv,
      color: 'bg-emerald-50 text-[#0B6B3A] border-emerald-200'
    },
    {
      title: 'Modern Science Labs',
      desc: 'Dedicated Physics, Chemistry, and Biology research laboratories adhering to CBSE guidelines.',
      icon: FlaskConical,
      color: 'bg-blue-50 text-[#1E5EFF] border-blue-200'
    },
    {
      title: 'Computer & AI Lab',
      desc: 'High-speed fiber internet with 60+ desktop computers for coding, IT, and AI skills.',
      icon: Monitor,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      title: 'Rich Central Library',
      desc: '8000+ reference volumes, encyclopedias, competitive exam guides, and storybooks.',
      icon: BookOpen,
      color: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      title: 'Sports & Athletics',
      desc: 'Football grounds, cricket nets, basketball, volleyball courts, and certified coaches.',
      icon: Trophy,
      color: 'bg-purple-50 text-purple-800 border-purple-200'
    },
    {
      title: 'GPS Tracked Transport',
      desc: 'Fleet of safe school buses covering Ghosi, Mau, and nearby routes with live parent app tracking.',
      icon: Bus,
      color: 'bg-teal-50 text-teal-800 border-teal-200'
    },
    {
      title: 'Safe & CCTV Campus',
      desc: '24/7 CCTV security, verified security personnel, and female staff across primary wings.',
      icon: ShieldCheck,
      color: 'bg-red-50 text-red-800 border-red-200'
    },
    {
      title: 'Activity Based Learning',
      desc: 'Experiential STEM projects, robotics, public speaking, drama, and art clubs.',
      icon: Sparkles,
      color: 'bg-yellow-50 text-yellow-800 border-yellow-200'
    },
    {
      title: 'English Speaking Campus',
      desc: '100% English speaking atmosphere with regular phonics, vocabulary, and debate drills.',
      icon: MessageSquareCode,
      color: 'bg-[#1E5EFF]/10 text-[#1E5EFF] border-blue-200'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The Shabnam Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Why Parents Choose <span className="text-[#0B6B3A]">Shabnam School</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Providing top-tier infrastructure, experienced educators, and a safe nurturing environment for complete student transformation in Ghosi, Mau.
          </p>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            const accentBorder = idx % 3 === 0 ? 'border-l-4 border-[#0B6B3A]' :
              idx % 3 === 1 ? 'border-l-4 border-[#1E5EFF]' :
              'border-l-4 border-[#F4B400]';

            return (
              <div
                key={idx}
                className={`bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between ${accentBorder}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color} transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif mb-2 group-hover:text-[#0B6B3A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0B6B3A]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Campus Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

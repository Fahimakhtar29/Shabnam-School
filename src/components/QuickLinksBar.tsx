import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  FileText,
  Bell,
  Users,
  Image,
  Download,
  Trophy,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const QuickLinksBar: React.FC = () => {
  const { setIsAdmissionModalOpen } = useSchool();

  const links = [
    {
      title: 'Admissions 2026-27',
      desc: 'Online Registration & Form',
      icon: FileText,
      action: () => setIsAdmissionModalOpen(true),
      color: 'bg-[#0B6B3A] text-white hover:bg-emerald-800 border-l-4 border-[#F4B400]'
    },
    {
      title: 'Notice Board',
      desc: 'Exams, Circulars & Holidays',
      href: '#notices',
      icon: Bell,
      color: 'bg-[#1E5EFF] text-white hover:bg-blue-700 border-l-4 border-amber-300'
    },
    {
      title: 'Faculty Directory',
      desc: 'Qualified Educators & Staff',
      href: '#faculty',
      icon: Users,
      color: 'bg-white text-slate-900 border-l-4 border-[#0B6B3A] hover:bg-emerald-50/50'
    },
    {
      title: 'Photo & Video Gallery',
      desc: 'Campus Life & Events',
      href: '#gallery',
      icon: Image,
      color: 'bg-white text-slate-900 border-l-4 border-[#1E5EFF] hover:bg-blue-50/50'
    },
    {
      title: 'Downloads Hub',
      desc: 'Syllabus, Forms & Books',
      href: '#downloads',
      icon: Download,
      color: 'bg-white text-slate-900 border-l-4 border-[#F4B400] hover:bg-amber-50/50'
    },
    {
      title: 'Achievements',
      desc: 'CBSE Toppers & Awards',
      href: '#achievements',
      icon: Trophy,
      color: 'bg-[#0B6B3A] text-white hover:bg-emerald-800 border-l-4 border-amber-300'
    }
  ];

  return (
    <section className="py-8 bg-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wider font-serif flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0B6B3A]" />
            <span>Quick Access Portal</span>
          </h2>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Fast Navigation</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {links.map((link, idx) => {
            const Icon = link.icon;
            if (link.action) {
              return (
                <button
                  key={idx}
                  onClick={link.action}
                  className={`p-4 rounded-xl shadow-xs hover:shadow-md transition-all transform hover:-translate-y-1 text-left flex flex-col justify-between group cursor-pointer border border-slate-200/80 ${link.color}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider leading-tight">{link.title}</h3>
                    <p className="text-[11px] opacity-80 mt-0.5 font-medium">{link.desc}</p>
                  </div>
                </button>
              );
            }
            return (
              <a
                key={idx}
                href={link.href}
                className={`p-4 rounded-xl shadow-xs hover:shadow-md transition-all transform hover:-translate-y-1 text-left flex flex-col justify-between group border border-slate-200/80 ${link.color}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider leading-tight">{link.title}</h3>
                  <p className="text-[11px] opacity-80 mt-0.5 font-medium">{link.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

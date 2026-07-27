import React from 'react';
import { Users, GraduationCap, Award, CheckCircle2, Building2, Sparkles } from 'lucide-react';

export const CounterSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      count: '1500+',
      label: 'Students Enrolled',
      sublabel: 'Pre-Nursery to Class XII',
      color: 'bg-emerald-500/10 text-[#0B6B3A] border-emerald-200'
    },
    {
      icon: GraduationCap,
      count: '80+',
      label: 'Expert Teachers',
      sublabel: 'Qualified M.Sc, M.A & B.Ed Faculty',
      color: 'bg-blue-500/10 text-[#1E5EFF] border-blue-200'
    },
    {
      icon: Award,
      count: '34+',
      label: 'Years of Excellence',
      sublabel: 'Serving Ghosi, Mau Since 1992',
      color: 'bg-amber-500/10 text-amber-700 border-amber-200'
    },
    {
      icon: CheckCircle2,
      count: '100%',
      label: 'Learning Focus',
      sublabel: 'Consistent CBSE Result Success',
      color: 'bg-purple-500/10 text-purple-700 border-purple-200'
    },
    {
      icon: Building2,
      count: 'Smart',
      label: 'Digital Campus',
      sublabel: 'STEM Labs & GPS Transport',
      color: 'bg-teal-500/10 text-teal-700 border-teal-200'
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all transform hover:-translate-y-1 text-center flex flex-col items-center justify-center group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 border ${stat.color} transition-transform group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif mb-1">
                  {stat.count}
                </h3>
                <p className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">{stat.label}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

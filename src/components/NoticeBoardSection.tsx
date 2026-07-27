import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Notice } from '../types';
import { Bell, Calendar, Download, Search, AlertCircle, FileText, CheckCircle2, X } from 'lucide-react';

export const NoticeBoardSection: React.FC = () => {
  const { notices, setIsAdmissionModalOpen } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);

  const categories = ['All', 'Admission', 'Exam', 'Holiday', 'Event', 'Circular'];

  const filteredNotices = notices.filter(n => {
    const matchesCat = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          n.content.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="notices" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            <Bell className="w-3.5 h-3.5 text-[#0B6B3A]" />
            <span>Official Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            School <span className="text-[#0B6B3A]">Notice Board & Circulars</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Stay updated with official announcements, examination schedules, holiday notices, and circulars.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B6B3A] text-[#F4B400] shadow-sm font-black'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0B6B3A]"
            />
          </div>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((n, idx) => {
            const topBorderColor = n.category === 'Admission' ? 'border-t-4 border-[#0B6B3A]' :
              n.category === 'Exam' ? 'border-t-4 border-[#1E5EFF]' :
              n.category === 'Holiday' ? 'border-t-4 border-red-500' :
              'border-t-4 border-[#F4B400]';

            return (
              <div
                key={n.id}
                className={`bg-white rounded-xl p-6 border transition-all duration-300 hover:shadow-lg flex flex-col justify-between relative ${topBorderColor} ${
                  n.important ? 'border-amber-400 shadow-md ring-1 ring-amber-400/50' : 'border-slate-200/80 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider ${
                      n.category === 'Admission' ? 'bg-emerald-100 text-[#0B6B3A]' :
                      n.category === 'Exam' ? 'bg-blue-100 text-[#1E5EFF]' :
                      n.category === 'Holiday' ? 'bg-red-100 text-red-800' :
                      'bg-amber-100 text-amber-900'
                    }`}>
                      {n.category}
                    </span>

                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {n.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-serif mb-2 line-clamp-2 hover:text-[#0B6B3A] transition-colors">
                    {n.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4 font-medium">
                    {n.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  {n.important && (
                    <span className="text-amber-700 font-bold flex items-center gap-1 text-[11px] uppercase tracking-wide">
                      <AlertCircle className="w-3.5 h-3.5 text-[#F4B400]" /> High Priority
                    </span>
                  )}

                  <button
                    onClick={() => setActiveNoticeModal(n)}
                    className="ml-auto text-[#0B6B3A] hover:text-emerald-800 font-extrabold flex items-center gap-1 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <span>Read Notice</span>
                    <FileText className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notice View Modal */}
      {activeNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-[#0B6B3A] text-white p-6 flex justify-between items-start">
              <div>
                <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase mb-2 inline-block">
                  {activeNoticeModal.category} Notice
                </span>
                <h3 className="text-lg font-bold font-serif leading-snug">{activeNoticeModal.title}</h3>
                <p className="text-xs text-emerald-100 mt-1">Published: {activeNoticeModal.date}</p>
              </div>
              <button
                onClick={() => setActiveNoticeModal(null)}
                className="text-white hover:text-amber-300 p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-slate-700 text-sm leading-relaxed">
              <p className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                {activeNoticeModal.content}
              </p>
            </div>

            <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => {
                  setActiveNoticeModal(null);
                  setIsAdmissionModalOpen(true);
                }}
                className="gold-shimmer text-slate-950 font-bold px-4 py-2 rounded-lg text-xs"
              >
                Inquire With Admission Desk
              </button>
              <button
                onClick={() => setActiveNoticeModal(null)}
                className="bg-slate-800 text-white font-bold px-4 py-2 rounded-lg text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

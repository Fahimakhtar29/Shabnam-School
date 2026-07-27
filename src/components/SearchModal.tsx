import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Search, X, Bell, BookOpen, Users, FileText, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    setIsSearchModalOpen,
    searchQuery,
    setSearchQuery,
    notices,
    academics,
    faculty,
    downloads,
    facilities
  } = useSchool();

  if (!isSearchModalOpen) return null;

  const query = searchQuery.toLowerCase().trim();

  const matchingNotices = query
    ? notices.filter(n => n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query))
    : [];

  const matchingAcademics = query
    ? academics.filter(a => a.name.toLowerCase().includes(query) || a.description.toLowerCase().includes(query))
    : [];

  const matchingFaculty = query
    ? faculty.filter(f => f.name.toLowerCase().includes(query) || f.department.toLowerCase().includes(query))
    : [];

  const matchingDownloads = query
    ? downloads.filter(d => d.title.toLowerCase().includes(query) || d.category.toLowerCase().includes(query))
    : [];

  const hasResults = matchingNotices.length > 0 || matchingAcademics.length > 0 || matchingFaculty.length > 0 || matchingDownloads.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[80vh]">
        
        {/* Search Bar Input */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#0B6B3A] flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search Shabnam School website (e.g., Admission, Exam, Transport, Physics, Syllabus)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-medium focus:outline-none text-slate-900 placeholder-slate-400"
          />
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-800 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!query ? (
            <div className="text-center py-8 text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto opacity-40 text-slate-400" />
              <p className="text-xs font-semibold">Type keyword above to search notices, faculty, books & syllabus.</p>
            </div>
          ) : !hasResults ? (
            <div className="text-center py-8 text-slate-500 space-y-1">
              <p className="font-bold text-sm">No results found for "{searchQuery}"</p>
              <p className="text-xs text-slate-400">Try searching for 'Admission', 'Syllabus', 'Lab', or 'Class'.</p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Matching Notices */}
              {matchingNotices.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-[#0B6B3A] tracking-wider flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5" /> Notice Board ({matchingNotices.length})
                  </h4>
                  <div className="space-y-2">
                    {matchingNotices.map((n) => (
                      <a
                        key={n.id}
                        href="#notices"
                        onClick={() => setIsSearchModalOpen(false)}
                        className="block bg-slate-50 hover:bg-emerald-50 p-3 rounded-xl border border-slate-200 transition-colors"
                      >
                        <p className="font-bold text-xs text-slate-900">{n.title}</p>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{n.content}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Academics */}
              {matchingAcademics.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-[#1E5EFF] tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Academics ({matchingAcademics.length})
                  </h4>
                  <div className="space-y-2">
                    {matchingAcademics.map((a) => (
                      <a
                        key={a.id}
                        href="#academics"
                        onClick={() => setIsSearchModalOpen(false)}
                        className="block bg-slate-50 hover:bg-blue-50 p-3 rounded-xl border border-slate-200 transition-colors"
                      >
                        <p className="font-bold text-xs text-slate-900">{a.name} ({a.classes})</p>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{a.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Downloads */}
              {matchingDownloads.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-amber-600 tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> Downloads ({matchingDownloads.length})
                  </h4>
                  <div className="space-y-2">
                    {matchingDownloads.map((d) => (
                      <a
                        key={d.id}
                        href="#downloads"
                        onClick={() => setIsSearchModalOpen(false)}
                        className="block bg-slate-50 hover:bg-amber-50 p-3 rounded-xl border border-slate-200 transition-colors"
                      >
                        <p className="font-bold text-xs text-slate-900">{d.title}</p>
                        <p className="text-[11px] text-slate-500">{d.category} • {d.format}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

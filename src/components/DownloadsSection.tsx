import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Download, FileText, CheckCircle2, Sparkles, FileDown, ShieldCheck } from 'lucide-react';

export const DownloadsSection: React.FC = () => {
  const { downloads } = useSchool();
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);

  const handleTriggerDownload = (title: string) => {
    // Simulated instant file download trigger
    setDownloadSuccessItem(title);
    const element = document.createElement("a");
    const file = new Blob([`Official Shabnam Children English School Document: ${title}\nGenerated for Session 2026-27.\nGhosi, Mau, Uttar Pradesh.`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 4000);
  };

  return (
    <section id="downloads" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            <Download className="w-3.5 h-3.5" />
            <span>Official Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Student & Parent <span className="text-[#0B6B3A]">Downloads Hub</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Download prospectus, admission forms, fee structures, book lists, and term syllabus instantly.
          </p>
        </div>

        {downloadSuccessItem && (
          <div className="max-w-xl mx-auto mb-6 bg-emerald-600 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-6 h-6 text-amber-300 flex-shrink-0" />
            <div>
              <p className="font-bold text-xs uppercase tracking-wider">Download Initiated!</p>
              <p className="text-xs text-emerald-100">{downloadSuccessItem} has been saved to your device.</p>
            </div>
          </div>
        )}

        {/* Downloads Table / Cards */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-200">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-white transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0B6B3A] flex items-center justify-center font-bold flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-100 text-[#0B6B3A] text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Updated: {item.updatedDate}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base font-serif">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-center">
                <span className="text-xs font-bold text-slate-500 bg-slate-200 px-2.5 py-1 rounded-md">
                  {item.format} ({item.fileSize})
                </span>

                <button
                  onClick={() => handleTriggerDownload(item.title)}
                  className="bg-[#0B6B3A] hover:bg-emerald-800 text-white font-bold px-4 py-2 rounded-xl shadow transition-all flex items-center gap-1.5 text-xs cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-amber-300" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

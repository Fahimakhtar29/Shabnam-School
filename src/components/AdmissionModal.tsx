import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { X, Sparkles, CheckCircle2, Send, Phone, Mail, User, MapPin, BookOpen } from 'lucide-react';

export const AdmissionModal: React.FC = () => {
  const { isAdmissionModalOpen, setIsAdmissionModalOpen, addInquiry } = useSchool();

  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [classSeeking, setClassSeeking] = useState('Nursery');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('Ghosi, Mau');
  const [message, setMessage] = useState('');
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [submittedRefNo, setSubmittedRefNo] = useState<string | null>(null);

  if (!isAdmissionModalOpen) return null;

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('shabnam_hide_admission_popup', 'true');
    }
    setIsAdmissionModalOpen(false);
    setSubmittedRefNo(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentName || !mobile) return;

    const refNo = addInquiry({
      studentName,
      parentName,
      classSeeking,
      mobile,
      email,
      address,
      message
    });

    setSubmittedRefNo(refNo);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[92vh]">
        
        {/* Banner Header */}
        <div className="relative bg-[#0B6B3A] text-white p-6 sm:p-8 flex justify-between items-start">
          <div className="space-y-1 pr-6 relative z-10">
            <span className="bg-amber-400 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 shadow">
              <Sparkles className="w-3.5 h-3.5" /> Admission Open 2026–27
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif">
              Join Shabnam Children English School
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              Ghosi, Mau, Uttar Pradesh • Pre-Nursery to Class XII
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-slate-900/40 hover:bg-slate-900 text-white transition-colors relative z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Background Decorative Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-[#0B6B3A] to-blue-900/80 -z-0" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submittedRefNo ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-[#0B6B3A] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold font-serif text-slate-900">
                Application Received Successfully!
              </h3>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-md mx-auto">
                <p className="text-xs text-slate-500 uppercase font-bold">Inquiry Reference Number</p>
                <p className="text-2xl font-black text-[#0B6B3A] font-mono my-1">{submittedRefNo}</p>
                <p className="text-xs text-slate-600">
                  Our admission desk in Ghosi will contact you at <strong>{mobile}</strong> within 24 working hours.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="bg-[#0B6B3A] text-white font-bold px-8 py-3 rounded-xl shadow cursor-pointer text-sm"
              >
                Close & Return To Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Verma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Verma"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Class Seeking Admission *
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={classSeeking}
                      onChange={(e) => setClassSeeking(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none bg-white"
                    >
                      <option value="Pre-Nursery">Pre-Nursery</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class I">Class I</option>
                      <option value="Class II">Class II</option>
                      <option value="Class III">Class III</option>
                      <option value="Class IV">Class IV</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX</option>
                      <option value="Class X">Class X</option>
                      <option value="Class XI (Science)">Class XI (Science)</option>
                      <option value="Class XI (Commerce)">Class XI (Commerce)</option>
                      <option value="Class XII">Class XII</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9839000000"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="parent@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Residential Address
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Town / Village, Mau"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Query or Message
                </label>
                <textarea
                  rows={2}
                  placeholder="Inquire about school bus route, fees, hostel, or document requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0B6B3A] focus:ring-[#0B6B3A]"
                  />
                  <span>Don't show this popup again</span>
                </label>

                <button
                  type="submit"
                  className="gold-shimmer text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow flex items-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

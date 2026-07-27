import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Lock,
  X,
  Bell,
  Image,
  Users,
  Calendar,
  Download,
  FileSpreadsheet,
  Plus,
  Trash2,
  CheckCircle2,
  RefreshCw,
  LogOut,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const AdminPanelModal: React.FC = () => {
  const {
    isAdminModalOpen,
    setIsAdminModalOpen,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
    notices,
    addNotice,
    deleteNotice,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    faculty,
    addFaculty,
    deleteFaculty,
    events,
    addEvent,
    deleteEvent,
    downloads,
    addDownload,
    deleteDownload,
    inquiries,
    updateInquiryStatus,
    deleteInquiry,
    resetAllDataToDefault
  } = useSchool();

  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeAdminTab, setActiveAdminTab] = useState<'notices' | 'gallery' | 'faculty' | 'events' | 'downloads' | 'inquiries'>('inquiries');

  // New item forms state
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState<'Admission' | 'Exam' | 'Holiday' | 'Event' | 'Circular'>('Admission');
  const [noticeContent, setNoticeContent] = useState('');

  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryCategory, setGalleryCategory] = useState<'Campus' | 'Labs' | 'Sports' | 'Events' | 'Celebrations' | 'Academics'>('Campus');
  const [galleryUrl, setGalleryUrl] = useState('');

  const [facultyName, setFacultyName] = useState('');
  const [facultyDesig, setFacultyDesig] = useState('');
  const [facultyQual, setFacultyQual] = useState('');
  const [facultyDept, setFacultyDept] = useState('');

  if (!isAdminModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1992' || pin === 'admin') {
      setIsAdminAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeTitle || !noticeContent) return;
    addNotice({
      title: noticeTitle,
      category: noticeCategory,
      content: noticeContent,
      date: new Date().toISOString().split('T')[0],
      important: true
    });
    setNoticeTitle('');
    setNoticeContent('');
  };

  const handleCreateGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryTitle || !galleryUrl) return;
    addGalleryItem({
      title: galleryTitle,
      category: galleryCategory,
      imageUrl: galleryUrl,
      date: new Date().toISOString().split('T')[0]
    });
    setGalleryTitle('');
    setGalleryUrl('');
  };

  const handleCreateFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facultyName) return;
    addFaculty({
      name: facultyName,
      designation: facultyDesig || 'Senior Teacher',
      qualification: facultyQual || 'M.A, B.Ed',
      department: facultyDept || 'Academics',
      experience: '10+ Years Experience',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
    });
    setFacultyName('');
    setFacultyDesig('');
    setFacultyQual('');
    setFacultyDept('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-white max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif">Management Admin Portal</h3>
              <p className="text-xs text-amber-300">Shabnam Children English School, Ghosi</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdminAuthenticated && (
              <button
                onClick={() => setIsAdminAuthenticated(false)}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            )}
            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {!isAdminAuthenticated ? (
          /* Login PIN Prompt */
          <div className="flex-1 p-8 flex items-center justify-center bg-slate-50">
            <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-lg text-center space-y-6">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold font-serif text-slate-900">Enter Admin PIN</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Default PIN is <strong className="font-mono text-[#0B6B3A]">1992</strong>
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  placeholder="Enter 4-digit PIN..."
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full text-center text-2xl font-mono tracking-widest p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                />

                {pinError && (
                  <p className="text-xs text-red-600 font-bold">Incorrect PIN. Please enter 1992.</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#0B6B3A] hover:bg-emerald-800 text-white font-extrabold py-3 rounded-xl shadow transition-all text-sm cursor-pointer"
                >
                  Unlock Admin Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Admin Dashboard Layout */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-50">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-white border-r border-slate-200 p-4 space-y-2 flex-shrink-0">
              <button
                onClick={() => setActiveAdminTab('inquiries')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeAdminTab === 'inquiries'
                    ? 'bg-[#0B6B3A] text-amber-300 shadow'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Admission Inquiries</span>
                </div>
                <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black">
                  {inquiries.length}
                </span>
              </button>

              <button
                onClick={() => setActiveAdminTab('notices')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeAdminTab === 'notices'
                    ? 'bg-[#0B6B3A] text-amber-300 shadow'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span>Manage Notices</span>
                </div>
                <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full text-[10px]">
                  {notices.length}
                </span>
              </button>

              <button
                onClick={() => setActiveAdminTab('gallery')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeAdminTab === 'gallery'
                    ? 'bg-[#0B6B3A] text-amber-300 shadow'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  <span>Photo Gallery</span>
                </div>
                <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full text-[10px]">
                  {gallery.length}
                </span>
              </button>

              <button
                onClick={() => setActiveAdminTab('faculty')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeAdminTab === 'faculty'
                    ? 'bg-[#0B6B3A] text-amber-300 shadow'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Faculty Directory</span>
                </div>
                <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full text-[10px]">
                  {faculty.length}
                </span>
              </button>

              <div className="pt-6">
                <button
                  onClick={() => {
                    if (confirm('Reset all website data to initial factory defaults?')) {
                      resetAllDataToDefault();
                    }
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-200 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset All Data</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
              
              {/* TAB 1: INQUIRIES */}
              {activeAdminTab === 'inquiries' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold font-serif text-slate-900">
                      Parent Admission Inquiries ({inquiries.length})
                    </h4>
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="bg-white p-8 rounded-2xl text-center text-slate-500 text-xs border border-slate-200">
                      No online parent inquiries submitted yet.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="bg-[#0B6B3A] text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                                {inq.id}
                              </span>
                              <h5 className="font-bold text-slate-900 text-base mt-1">
                                {inq.studentName} <span className="text-xs text-slate-500">({inq.classSeeking})</span>
                              </h5>
                              <p className="text-xs text-slate-600 font-medium">
                                Parent: {inq.parentName} • Phone: <strong>{inq.mobile}</strong>
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              <select
                                value={inq.status}
                                onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                                className="text-xs font-bold p-1.5 rounded-lg border border-slate-300 bg-slate-50"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Admitted">Admitted</option>
                              </select>

                              <button
                                onClick={() => deleteInquiry(inq.id)}
                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                                title="Delete Inquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {inq.message && (
                            <p className="bg-slate-50 p-3 rounded-xl text-xs text-slate-600 italic">
                              "{inq.message}"
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: NOTICES */}
              {activeAdminTab === 'notices' && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold font-serif text-slate-900">Publish New Notice</h4>

                  <form onSubmit={handleCreateNotice} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Notice Title</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. CBSE Practical Exams Date Sheet"
                          value={noticeTitle}
                          onChange={(e) => setNoticeTitle(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                        <select
                          value={noticeCategory}
                          onChange={(e) => setNoticeCategory(e.target.value as any)}
                          className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium bg-white"
                        >
                          <option value="Admission">Admission</option>
                          <option value="Exam">Exam</option>
                          <option value="Holiday">Holiday</option>
                          <option value="Event">Event</option>
                          <option value="Circular">Circular</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Content</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Write detailed notice text..."
                        value={noticeContent}
                        onChange={(e) => setNoticeContent(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#0B6B3A] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Publish Notice Live
                    </button>
                  </form>

                  <h5 className="font-bold text-sm text-slate-900">Existing Notices ({notices.length})</h5>
                  <div className="space-y-2">
                    {notices.map((n) => (
                      <div key={n.id} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-slate-900">{n.title}</span>
                          <span className="text-slate-500 ml-2">({n.category})</span>
                        </div>
                        <button
                          onClick={() => deleteNotice(n.id)}
                          className="text-red-600 hover:bg-red-50 p-1 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: GALLERY */}
              {activeAdminTab === 'gallery' && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold font-serif text-slate-900">Add Photo to Gallery</h4>

                  <form onSubmit={handleCreateGallery} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Image Caption / Title</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Science Exhibition Winners"
                          value={galleryTitle}
                          onChange={(e) => setGalleryTitle(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                        <select
                          value={galleryCategory}
                          onChange={(e) => setGalleryCategory(e.target.value as any)}
                          className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium bg-white"
                        >
                          <option value="Campus">Campus</option>
                          <option value="Labs">Labs</option>
                          <option value="Sports">Sports</option>
                          <option value="Events">Events</option>
                          <option value="Celebrations">Celebrations</option>
                          <option value="Academics">Academics</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
                      <input
                        type="url"
                        required
                        placeholder="https://images.unsplash.com/..."
                        value={galleryUrl}
                        onChange={(e) => setGalleryUrl(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#0B6B3A] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Add Photo
                    </button>
                  </form>

                  <h5 className="font-bold text-sm text-slate-900">Current Gallery ({gallery.length})</h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {gallery.map((g) => (
                      <div key={g.id} className="relative bg-white rounded-xl overflow-hidden border border-slate-200 group">
                        <img src={g.imageUrl} alt={g.title} className="h-24 w-full object-cover" />
                        <button
                          onClick={() => deleteGalleryItem(g.id)}
                          className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full shadow"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: FACULTY */}
              {activeAdminTab === 'faculty' && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold font-serif text-slate-900">Add Faculty Member</h4>

                  <form onSubmit={handleCreateFaculty} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Teacher Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mr. S. K. Rai"
                          value={facultyName}
                          onChange={(e) => setFacultyName(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Designation</label>
                        <input
                          type="text"
                          placeholder="e.g. HOD Mathematics"
                          value={facultyDesig}
                          onChange={(e) => setFacultyDesig(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#0B6B3A] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Add Teacher
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

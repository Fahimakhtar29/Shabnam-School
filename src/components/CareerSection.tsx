import React, { useState } from 'react';
import { Briefcase, GraduationCap, CheckCircle2, Send, Sparkles, UserCheck, FileText, Upload, Award, Heart, Shield, Clock } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: 'Teaching' | 'Non-Teaching' | 'Sports & Activities';
  qualification: string;
  experience: string;
  vacancies: number;
  type: 'Full-Time' | 'Part-Time';
  description: string;
}

export const CareerSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  
  // Application Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionApplied, setPositionApplied] = useState('PGT Mathematics');
  const [qualification, setQualification] = useState('M.Sc / B.Ed');
  const [experienceYears, setExperienceYears] = useState('2-5 Years');
  const [resumeText, setResumeText] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const positions: JobPosition[] = [
    {
      id: 'job-1',
      title: 'PGT Mathematics / Physics',
      department: 'Senior Secondary Wing (Class 11-12)',
      category: 'Teaching',
      qualification: 'M.Sc in Mathematics/Physics with B.Ed degree from recognized university',
      experience: '2+ years experience in CBSE affiliated school',
      vacancies: 2,
      type: 'Full-Time',
      description: 'Responsible for delivering engaging curriculum for Senior Secondary classes, preparing students for board exams and competitive entrance examinations.'
    },
    {
      id: 'job-2',
      title: 'TGT English & Social Studies',
      department: 'Secondary Wing (Class 6-10)',
      category: 'Teaching',
      qualification: 'M.A/B.A in English/History with B.Ed & CTET/STET qualified',
      experience: '1-3 years teaching experience',
      vacancies: 3,
      type: 'Full-Time',
      description: 'Focus on language proficiency, creative writing, and social science concepts with modern activity-based pedagogy.'
    },
    {
      id: 'job-3',
      title: 'PRT Primary Grade Educators',
      department: 'Primary Wing (Class 1-5)',
      category: 'Teaching',
      qualification: 'Graduate with D.El.Ed / B.Ed with fluent English communication',
      experience: 'Freshers or 1+ year experience welcome',
      vacancies: 4,
      type: 'Full-Time',
      description: 'Nurture foundational literacy, numeracy, and holistic development in young learners through experiential learning.'
    },
    {
      id: 'job-4',
      title: 'Computer Teacher & IT Administrator',
      department: 'IT & Digital Education',
      category: 'Teaching',
      qualification: 'MCA / B.Tech (CS/IT) / BCA with teaching interest',
      experience: '1-3 years experience in IT lab management & teaching',
      vacancies: 1,
      type: 'Full-Time',
      description: 'Teach computer fundamentals, coding basics, and maintain school computer laboratories and smart classroom infrastructure.'
    },
    {
      id: 'job-5',
      title: 'Physical Education Instructor / Sports Coach',
      department: 'Sports & Co-Curricular',
      category: 'Sports & Activities',
      qualification: 'B.P.Ed / M.P.Ed with specialization in Cricket, Football or Athletics',
      experience: '2+ years experience in coaching',
      vacancies: 2,
      type: 'Full-Time',
      description: 'Lead physical fitness programs, sports drills, intramural tournaments, and prepare school teams for inter-school competitions.'
    },
    {
      id: 'job-6',
      title: 'Front Desk Officer / Admission Counselor',
      department: 'School Administration',
      category: 'Non-Teaching',
      qualification: 'Graduate with excellent spoken English and Hindi, proficient in MS Office',
      experience: '1+ year experience in public relations / education counseling',
      vacancies: 1,
      type: 'Full-Time',
      description: 'Handle parent inquiries, visitor reception, student admission counseling, and administrative coordination.'
    }
  ];

  const categories = ['All', 'Teaching', 'Non-Teaching', 'Sports & Activities'];

  const filteredPositions = selectedCategory === 'All' 
    ? positions 
    : positions.filter(p => p.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const refNo = 'APP-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(refNo);
    
    // Reset form fields
    setFullName('');
    setEmail('');
    setPhone('');
    setResumeText('');
  };

  return (
    <section id="career" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Academic Family</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Careers at <span className="text-[#0B6B3A]">Shabnam Children School</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Shape young minds and build a rewarding career in an institution dedicated to academic excellence and moral integrity in Ghosi, Mau since 1992.
          </p>
        </div>

        {/* Why Work With Us Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs border-t-4 border-[#0B6B3A] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0B6B3A] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Competitive Compensation</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Attractive pay scales with provident fund, annual increments, and performance incentives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs border-t-4 border-[#1E5EFF] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#1E5EFF] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Professional Growth</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Regular CBSE faculty development workshops, seminars, and higher education assistance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs border-t-4 border-[#F4B400] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Supportive Work Culture</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Collaborative environment with state-of-the-art teaching tools and digital smart boards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs border-t-4 border-slate-700 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Staff Benefits & Perks</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Child education concession, subsidized campus transport, and friendly campus community.
            </p>
          </div>
        </div>

        {/* Main Career Grid: Left Openings, Right Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Open Positions List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0B6B3A]" />
                <span>Current Openings ({filteredPositions.length})</span>
              </h3>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0B6B3A] text-[#F4B400] shadow-2xs'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Position Cards */}
            <div className="space-y-4">
              {filteredPositions.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all border-l-4 border-l-[#0B6B3A] flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#1E5EFF] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 inline-block mb-1">
                          {job.department}
                        </span>
                        <h4 className="text-lg font-bold font-serif text-slate-900">{job.title}</h4>
                      </div>
                      <span className="bg-emerald-100 text-[#0B6B3A] text-[11px] font-extrabold px-3 py-1 rounded-full flex-shrink-0 border border-emerald-300">
                        {job.vacancies} {job.vacancies === 1 ? 'Vacancy' : 'Vacancies'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div>
                        <span className="font-bold text-slate-900">Qualification:</span> {job.qualification}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">Experience:</span> {job.experience}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.type} • Immediate Joining
                    </span>

                    <button
                      onClick={() => {
                        setPositionApplied(job.title);
                        setSelectedJob(job);
                        const formElem = document.getElementById('application-form');
                        if (formElem) {
                          formElem.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-[#0B6B3A] hover:bg-emerald-800 text-white font-extrabold px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
                    >
                      <span>Apply For This Role</span>
                      <Send className="w-3 h-3 text-[#F4B400]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Online Job Application Form */}
          <div id="application-form" className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md border-t-4 border-[#F4B400]">
              
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#F4B400]" />
                <h3 className="text-xl font-bold font-serif text-slate-900">Submit Job Application</h3>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-6">
                Fill out the application form below. Our recruitment committee will review your profile and contact shortlisted candidates for interviews.
              </p>

              {submittedRef ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-[#0B6B3A] text-[#F4B400] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Application Submitted Successfully!</h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Thank you for applying to Shabnam Children English School. Your application reference number is:
                  </p>
                  <div className="bg-white border border-emerald-400 px-4 py-2 rounded-lg text-sm font-extrabold text-[#0B6B3A] inline-block tracking-wider">
                    {submittedRef}
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Please keep this reference number for future inquiries with the school admin desk.
                  </p>

                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="mt-2 bg-[#0B6B3A] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-emerald-800 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Ramesh Kumar / Anjali Singh"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                      Position Applied For *
                    </label>
                    <select
                      value={positionApplied}
                      onChange={(e) => setPositionApplied(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none bg-white"
                    >
                      {positions.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                      <option value="General Faculty Application">Other / General Faculty Application</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                        Highest Qualification
                      </label>
                      <input
                        type="text"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="e.g. M.Sc, B.Ed, M.A"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                        Teaching Experience
                      </label>
                      <select
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none bg-white"
                      >
                        <option value="Fresher">Fresher</option>
                        <option value="1-2 Years">1-2 Years</option>
                        <option value="2-5 Years">2-5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                      Brief Profile / Cover Note / Resume Summary
                    </label>
                    <textarea
                      rows={3}
                      value={resumeText}
                      onChange={(e) => setResumeText(e.target.value)}
                      placeholder="Mention your key teaching subjects, achievements, past school experience, or availability..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B6B3A] hover:bg-emerald-800 text-white font-extrabold py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-emerald-700"
                  >
                    <Send className="w-4 h-4 text-[#F4B400]" />
                    <span>Submit Online Job Application</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center font-medium">
                    You may also drop your CV directly at the School Administrative Desk in Ghosi, Mau.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

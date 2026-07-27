import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { addInquiry } = useSchool();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [classVal, setClassVal] = useState('Nursery');
  const [msg, setMsg] = useState('');
  const [successRef, setSuccessRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const ref = addInquiry({
      studentName: name,
      parentName: name + ' (Parent)',
      classSeeking: classVal,
      mobile: phone,
      email: email,
      address: 'Ghosi, Mau',
      message: msg
    });

    setSuccessRef(ref);
    setName('');
    setPhone('');
    setEmail('');
    setMsg('');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Contact <span className="text-[#0B6B3A]">Shabnam School</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We welcome parents, guardians, and visitors to our campus in Ghosi, Mau.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-3">
                School Information Counter
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0B6B3A] flex items-center justify-center flex-shrink-0 font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">School Location Address</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      SHABNAM CHILDREN ENGLISH SCHOOL<br />
                      Main Campus, Ghosi, Mau District<br />
                      Uttar Pradesh - 275304, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E5EFF] flex items-center justify-center flex-shrink-0 font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Admission & Admin Helplines</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      +91 9839XXXXXX / +91 9450XXXXXX<br />
                      Office Tel: 05461-222XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Official Email Address</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      info@shabnamchildrenschool.edu.in<br />
                      admissions@shabnamchildrenschool.edu.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Visitor & Admin Counter Hours</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Monday to Saturday: 8:00 AM – 3:00 PM<br />
                      Sunday: Closed (Emergency Hotline Active)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-100">
                <iframe
                  title="Shabnam Children English School Ghosi Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14361.352462828!2d83.541!3d26.112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39922e9603030303%3A0x1234567890abcdef!2sGhosi%2C%20Mau%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-extrabold text-[#0B6B3A] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-2">
                Online Desk
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                Send Admission / General Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below to receive call assistance from our Ghosi school desk.
              </p>
            </div>

            {successRef ? (
              <div className="bg-emerald-50 border-2 border-[#0B6B3A] p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#0B6B3A] mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-lg">Inquiry Registered!</h4>
                <p className="text-xs text-slate-600">
                  Your reference ID is <strong className="font-mono text-[#0B6B3A]">{successRef}</strong>.
                </p>
                <button
                  onClick={() => setSuccessRef(null)}
                  className="bg-[#0B6B3A] text-white font-bold px-6 py-2 rounded-xl text-xs cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9839000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="parent@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Class Seeking
                    </label>
                    <select
                      value={classVal}
                      onChange={(e) => setClassVal(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none bg-white"
                    >
                      <option value="Nursery">Nursery</option>
                      <option value="LKG/UKG">LKG / UKG</option>
                      <option value="Primary (I-V)">Primary (I - V)</option>
                      <option value="Junior (VI-VIII)">Junior (VI - VIII)</option>
                      <option value="Senior (IX-XII)">Senior (IX - XII)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message or Inquiry
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your questions regarding admission, transport, hostel, or fee details..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B6B3A] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B6B3A] hover:bg-emerald-800 text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Inquiry To School Counter</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

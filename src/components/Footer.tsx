import React, { useState } from 'react';
import { SchoolLogo } from './SchoolLogo';
import { useSchool } from '../context/SchoolContext';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Heart,
  Sparkles,
  Lock,
  ArrowUp,
  CheckCircle2,
  Share2,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsAdmissionModalOpen, setIsAdminModalOpen } = useSchool();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner */}
      <div className="bg-[#0B6B3A] text-white py-6 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <Sparkles className="w-8 h-8 text-[#F4B400] flex-shrink-0 hidden sm:block" />
            <div>
              <h3 className="text-lg font-bold font-serif">Admissions Open For Session 2026–27</h3>
              <p className="text-xs text-emerald-100">Securing Bright Futures for Ghosi & Mau Students Since 1992</p>
            </div>
          </div>

          <button
            onClick={() => setIsAdmissionModalOpen(true)}
            className="bg-[#F4B400] hover:bg-amber-400 text-[#0B6B3A] font-black px-6 py-3 rounded-full shadow transition-all text-xs uppercase tracking-wider cursor-pointer border border-amber-300"
          >
            Apply Online Now
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        
        {/* Col 1: School Bio */}
        <div className="lg:col-span-4 space-y-4">
          <SchoolLogo size="lg" showText={true} lightText={true} />

          <p className="text-xs text-slate-400 leading-relaxed pr-4">
            Shabnam Children English School, Ghosi, Mau, UP is a premier educational institution committed to academic brilliance, character building, English language mastery, and modern STEM innovation.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs text-slate-400 font-semibold">Connect:</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#1E5EFF] text-white flex items-center justify-center transition-colors text-xs font-bold">
              f
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors text-xs font-bold">
              YT
            </a>
            <a href="https://wa.me/919839000000" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors text-xs font-bold">
              WA
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-bold font-serif text-white text-sm uppercase tracking-wider text-amber-400">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs font-medium text-slate-400">
            <li><a href="#home" className="hover:text-white transition-colors">Home Page</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Our School</a></li>
            <li><a href="#academics" className="hover:text-white transition-colors">Academics & Wings</a></li>
            <li><a href="#facilities" className="hover:text-white transition-colors">Campus Facilities</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Photo & Video Gallery</a></li>
            <li><a href="#achievements" className="hover:text-white transition-colors">CBSE Toppers</a></li>
          </ul>
        </div>

        {/* Col 3: Useful Resources */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-bold font-serif text-white text-sm uppercase tracking-wider text-amber-400">
            Useful Resources
          </h4>
          <ul className="space-y-2 text-xs font-medium text-slate-400">
            <li><a href="#notices" className="hover:text-white transition-colors">Official Notice Board</a></li>
            <li><a href="#downloads" className="hover:text-white transition-colors">Downloads & Prospectus</a></li>
            <li><a href="#faculty" className="hover:text-white transition-colors">Faculty Directory</a></li>
            <li><a href="#career" className="hover:text-white transition-colors">Career Opportunities</a></li>
            <li><button onClick={() => setIsAdmissionModalOpen(true)} className="hover:text-white transition-colors text-left">Online Admission Form</button></li>
            <li><button onClick={() => setIsAdminModalOpen(true)} className="hover:text-amber-300 text-amber-400 font-semibold flex items-center gap-1"><Lock className="w-3 h-3" /> Management Portal</button></li>
          </ul>
        </div>

        {/* Col 4: Newsletter & Contact */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-bold font-serif text-white text-sm uppercase tracking-wider text-amber-400">
            School Bulletin
          </h4>
          <p className="text-xs text-slate-400">
            Subscribe to receive official exam updates and circulars directly.
          </p>

          {subscribed ? (
            <div className="bg-emerald-900/60 border border-emerald-600 text-emerald-200 p-3 rounded-xl text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-300" />
              <span>Subscribed to Shabnam School Bulletin!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#0B6B3A]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#0B6B3A] text-white px-3 rounded-lg text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          )}

          <div className="pt-2 text-xs text-slate-400 space-y-1">
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Ghosi, Mau, UP - 275304
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 9839XXXXXX
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-900 py-4 px-4 border-t border-slate-800 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 Shabnam Children English School, Ghosi, Mau, Uttar Pradesh. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span> <Heart className="w-3 h-3 text-red-500 fill-red-500" /> <span>for Educational Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

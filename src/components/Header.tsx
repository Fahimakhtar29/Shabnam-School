import React, { useState, useEffect } from 'react';
import { SchoolLogo } from './SchoolLogo';
import { useSchool } from '../context/SchoolContext';
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  ChevronDown,
  Lock,
  Download,
  Calendar,
  Bell
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    setIsAdmissionModalOpen,
    setIsAdminModalOpen,
    setIsSearchModalOpen,
    notices
  } = useSchool();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Academics', href: '#academics', id: 'academics' },
    { name: 'Admissions', href: '#admissions', id: 'admissions' },
    { name: 'Faculty', href: '#faculty', id: 'faculty' },
    { name: 'Facilities', href: '#facilities', id: 'facilities' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Notice Board', href: '#notices', id: 'notices' },
    { name: 'Downloads', href: '#downloads', id: 'downloads' },
    { name: 'Contact', href: '#contact', id: 'contact' },
    { name: 'Career', href: '#career', id: 'career' },
  ];

  return (
    <header className="w-full z-40 transition-all duration-300">
      {/* Top Header Information Bar */}
      <div className="bg-[#0B6B3A] text-white py-2 px-4 border-b border-emerald-800 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Location & Contact */}
          <div className="flex items-center flex-wrap gap-4 md:gap-6">
            <span className="flex items-center gap-1.5 text-emerald-100 hover:text-amber-300 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#F4B400] flex-shrink-0" />
              <span>Ghosi, Mau, Uttar Pradesh - 275304</span>
            </span>
            <a
              href="tel:+919839000000"
              className="flex items-center gap-1.5 text-emerald-100 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B400] flex-shrink-0" />
              <span>+91 9839XXXXXX / 05461-222XXX</span>
            </a>
            <a
              href="mailto:info@shabnamchildrenschool.edu.in"
              className="hidden sm:flex items-center gap-1.5 text-emerald-100 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F4B400] flex-shrink-0" />
              <span>info@shabnamchildrenschool.edu.in</span>
            </a>
          </div>

          {/* Right: Est 1992 Badge, Search & Quick Admin */}
          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <span className="hidden lg:inline-flex items-center gap-1 bg-emerald-900/90 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#F4B400] border border-emerald-700/60 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#F4B400]" /> ESTD. 1992
            </span>

            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center gap-1 bg-emerald-800/80 hover:bg-emerald-700 px-2.5 py-1 rounded text-emerald-100 transition-all cursor-pointer font-medium"
              title="Search Website"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Search</span>
            </button>

            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="flex items-center gap-1 bg-[#F4B400]/20 hover:bg-[#F4B400]/30 text-[#F4B400] border border-[#F4B400]/40 px-2.5 py-1 rounded transition-all cursor-pointer text-[11px] font-bold"
              title="Management Admin Portal"
            >
              <Lock className="w-3 h-3 text-[#F4B400]" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Logo & Title Header */}
      <div className="bg-white text-slate-900 py-3.5 px-4 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <a href="#home" className="group">
            <SchoolLogo size="lg" showText={true} />
          </a>

          {/* Quick Header Badges for Desktop */}
          <div className="hidden lg:flex items-center gap-5 text-slate-600 text-xs">
            <div className="flex items-center gap-2.5 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0B6B3A] flex items-center justify-center font-bold">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xs">34+ Years</p>
                <p className="text-[10px] text-slate-500 font-medium">Educational Excellence</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1E5EFF] flex items-center justify-center font-bold">
                <Bell className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xs">CBSE Pattern</p>
                <p className="text-[10px] text-slate-500 font-medium">English Medium Campus</p>
              </div>
            </div>

            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#F4B400] hover:bg-amber-400 text-[#0B6B3A] font-black px-5 py-2.5 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 text-xs uppercase tracking-wide transition-all transform hover:scale-105 cursor-pointer border border-amber-300"
            >
              <Sparkles className="w-4 h-4 text-[#0B6B3A]" />
              <span>Admission Open 2026-27</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-emerald-50 text-[#0B6B3A] hover:bg-emerald-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sticky Navigation Menu Bar */}
      <nav
        className={`bg-[#1E5EFF] text-white shadow-md transition-all duration-300 ${
          isScrolled ? 'sticky top-0 z-50 bg-[#164BD8] shadow-xl' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Main Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-0.5 font-bold text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setActiveTab(link.id)}
                  className={`block px-3.5 py-3 transition-all duration-200 relative ${
                    activeTab === link.id
                      ? 'bg-blue-900/70 text-[#F4B400] font-black border-b-2 border-[#F4B400]'
                      : 'hover:bg-blue-600/80 text-white hover:text-amber-200'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Right Quick Action CTA */}
          <div className="lg:hidden py-2 flex items-center justify-between w-full">
            <span className="text-xs font-bold text-[#F4B400] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Admission Open 2026-27
            </span>
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="bg-[#F4B400] text-[#0B6B3A] font-black px-3 py-1 rounded-full text-xs shadow-md border border-amber-300"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 py-4 px-6 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-3 rounded-md text-xs font-bold uppercase tracking-wide hover:bg-blue-600/50 hover:text-[#F4B400] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdmissionModalOpen(true);
                }}
                className="w-full bg-[#F4B400] text-[#0B6B3A] font-black py-2.5 rounded-full text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2 border border-amber-300"
              >
                <Sparkles className="w-4 h-4 text-[#0B6B3A]" /> Apply For Admission 2026-27
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminModalOpen(true);
                }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-[#F4B400] py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" /> Management Portal Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

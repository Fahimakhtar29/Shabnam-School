import React from 'react';
import { SchoolProvider } from './context/SchoolContext';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { NewsTicker } from './components/NewsTicker';
import { CounterSection } from './components/CounterSection';
import { QuickLinksBar } from './components/QuickLinksBar';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MessagesSection } from './components/MessagesSection';
import { AcademicsSection } from './components/AcademicsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { ToppersSection } from './components/ToppersSection';
import { EventsSection } from './components/EventsSection';
import { NoticeBoardSection } from './components/NoticeBoardSection';
import { DownloadsSection } from './components/DownloadsSection';
import { FacultySection } from './components/FacultySection';
import { TestimonialsAndAlumni } from './components/TestimonialsAndAlumni';
import { ContactSection } from './components/ContactSection';
import { CareerSection } from './components/CareerSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { SearchModal } from './components/SearchModal';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  return (
    <SchoolProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0B6B3A] selection:text-amber-300">
        <Header />
        <main>
          <HeroSlider />
          <NewsTicker />
          <CounterSection />
          <QuickLinksBar />
          <AboutSection />
          <WhyChooseUs />
          <MessagesSection />
          <AcademicsSection />
          <FacilitiesSection />
          <GallerySection />
          <ToppersSection />
          <EventsSection />
          <NoticeBoardSection />
          <DownloadsSection />
          <FacultySection />
          <TestimonialsAndAlumni />
          <ContactSection />
          <CareerSection />
        </main>
        <Footer />

        {/* Global Modals & Controls */}
        <AdmissionModal />
        <AdminPanelModal />
        <SearchModal />
        <FloatingControls />
      </div>
    </SchoolProvider>
  );
}

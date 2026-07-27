import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Notice,
  GalleryItem,
  VideoItem,
  FacultyMember,
  EventItem,
  HeroSlide,
  DownloadItem,
  TopperItem,
  ParentTestimonial,
  AlumniMember,
  AcademicProgram,
  Facility,
  AdmissionInquiry
} from '../types';

import {
  INITIAL_SLIDES,
  INITIAL_NOTICES,
  INITIAL_TICKER_ITEMS,
  INITIAL_ACADEMICS,
  INITIAL_FACILITIES,
  INITIAL_GALLERY,
  INITIAL_VIDEOS,
  INITIAL_TOPPERS,
  INITIAL_EVENTS,
  INITIAL_FACULTY,
  INITIAL_DOWNLOADS,
  INITIAL_TESTIMONIALS,
  INITIAL_ALUMNI
} from '../data/initialData';

interface SchoolContextType {
  slides: HeroSlide[];
  notices: Notice[];
  tickerItems: string[];
  academics: AcademicProgram[];
  facilities: Facility[];
  gallery: GalleryItem[];
  videos: VideoItem[];
  toppers: TopperItem[];
  events: EventItem[];
  faculty: FacultyMember[];
  downloads: DownloadItem[];
  testimonials: ParentTestimonial[];
  alumni: AlumniMember[];
  inquiries: AdmissionInquiry[];
  
  // UI States
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isAdmissionModalOpen: boolean;
  setIsAdmissionModalOpen: (open: boolean) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (auth: boolean) => void;
  selectedFacility: Facility | null;
  setSelectedFacility: (f: Facility | null) => void;

  // CRUD Actions
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  deleteNotice: (id: string) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  addFaculty: (f: Omit<FacultyMember, 'id'>) => void;
  deleteFaculty: (id: string) => void;
  addEvent: (e: Omit<EventItem, 'id'>) => void;
  deleteEvent: (id: string) => void;
  addDownload: (d: Omit<DownloadItem, 'id'>) => void;
  deleteDownload: (id: string) => void;
  addInquiry: (inq: Omit<AdmissionInquiry, 'id' | 'submittedAt' | 'status'>) => string;
  updateInquiryStatus: (id: string, status: 'Pending' | 'Contacted' | 'Admitted') => void;
  deleteInquiry: (id: string) => void;
  updateSlide: (id: string, updated: Partial<HeroSlide>) => void;
  resetAllDataToDefault: () => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_PREFIX = 'shabnam_school_';

function getInitialStorage<T>(key: string, defaultValue: T): T {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + key);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (err) {
    console.error(`Error reading ${key} from localStorage`, err);
  }
  return defaultValue;
}

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [slides, setSlides] = useState<HeroSlide[]>(() => {
    const saved = getInitialStorage('slides', INITIAL_SLIDES);
    return saved.map((s) => {
      if (s.id === 's1' && (s.imageUrl.includes('unsplash') || !s.imageUrl.includes('1Anw1EpqnaPUC2arbf-oe7V48cBGk96tH'))) {
        return { ...s, imageUrl: 'https://lh3.googleusercontent.com/d/1Anw1EpqnaPUC2arbf-oe7V48cBGk96tH' };
      }
      if (s.id === 's2' && (s.imageUrl.includes('unsplash') || !s.imageUrl.includes('1AWDZjKxJzawNYzchLm9UHO9swGHWcTl9'))) {
        return { ...s, imageUrl: 'https://lh3.googleusercontent.com/d/1AWDZjKxJzawNYzchLm9UHO9swGHWcTl9' };
      }
      return s;
    });
  });
  const [notices, setNotices] = useState<Notice[]>(() => getInitialStorage('notices', INITIAL_NOTICES));
  const [tickerItems, setTickerItems] = useState<string[]>(() => getInitialStorage('tickerItems', INITIAL_TICKER_ITEMS));
  const [academics] = useState<AcademicProgram[]>(INITIAL_ACADEMICS);
  const [facilities] = useState<Facility[]>(INITIAL_FACILITIES);
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = getInitialStorage('gallery', INITIAL_GALLERY);
    return saved.map((item) => {
      if (item.id === 'g1' && (item.imageUrl.includes('unsplash') || !item.imageUrl.includes('1lkggAgXqdAlTI-bmb_TF5aGfr5YNxcd-'))) {
        return { ...item, imageUrl: 'https://lh3.googleusercontent.com/d/1lkggAgXqdAlTI-bmb_TF5aGfr5YNxcd-' };
      }
      return item;
    });
  });
  const [videos] = useState<VideoItem[]>(INITIAL_VIDEOS);
  const [toppers] = useState<TopperItem[]>(INITIAL_TOPPERS);
  const [events, setEvents] = useState<EventItem[]>(() => getInitialStorage('events', INITIAL_EVENTS));
  const [faculty, setFaculty] = useState<FacultyMember[]>(() => getInitialStorage('faculty', INITIAL_FACULTY));
  const [downloads, setDownloads] = useState<DownloadItem[]>(() => getInitialStorage('downloads', INITIAL_DOWNLOADS));
  const [testimonials] = useState<ParentTestimonial[]>(INITIAL_TESTIMONIALS);
  const [alumni] = useState<AlumniMember[]>(INITIAL_ALUMNI);
  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>(() => getInitialStorage('inquiries', []));

  // UI state
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  // Auto-show admission popup once per session unless disabled
  useEffect(() => {
    const hidePopup = localStorage.getItem('shabnam_hide_admission_popup');
    if (!hidePopup) {
      const timer = setTimeout(() => {
        setIsAdmissionModalOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Sync state changes to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'slides', JSON.stringify(slides));
  }, [slides]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'tickerItems', JSON.stringify(tickerItems));
  }, [tickerItems]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'faculty', JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'downloads', JSON.stringify(downloads));
  }, [downloads]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Actions
  const addNotice = (newNotice: Omit<Notice, 'id'>) => {
    const notice: Notice = {
      ...newNotice,
      id: 'n_' + Date.now()
    };
    setNotices(prev => [notice, ...prev]);
  };

  const deleteNotice = (id: string) => {
    setNotices(prev => prev.filter(n => n.id !== id));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: 'g_' + Date.now()
    };
    setGallery(prev => [newItem, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGallery(prev => prev.filter(g => g.id !== id));
  };

  const addFaculty = (f: Omit<FacultyMember, 'id'>) => {
    const newF: FacultyMember = {
      ...f,
      id: 'f_' + Date.now()
    };
    setFaculty(prev => [...prev, newF]);
  };

  const deleteFaculty = (id: string) => {
    setFaculty(prev => prev.filter(f => f.id !== id));
  };

  const addEvent = (e: Omit<EventItem, 'id'>) => {
    const newE: EventItem = {
      ...e,
      id: 'e_' + Date.now()
    };
    setEvents(prev => [newE, ...prev]);
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const addDownload = (d: Omit<DownloadItem, 'id'>) => {
    const newD: DownloadItem = {
      ...d,
      id: 'd_' + Date.now()
    };
    setDownloads(prev => [newD, ...prev]);
  };

  const deleteDownload = (id: string) => {
    setDownloads(prev => prev.filter(d => d.id !== id));
  };

  const addInquiry = (inq: Omit<AdmissionInquiry, 'id' | 'submittedAt' | 'status'>) => {
    const refNo = 'SCES-2026-' + Math.floor(1000 + Math.random() * 9000);
    const newInq: AdmissionInquiry = {
      ...inq,
      id: refNo,
      submittedAt: new Date().toISOString(),
      status: 'Pending'
    };
    setInquiries(prev => [newInq, ...prev]);
    return refNo;
  };

  const updateInquiryStatus = (id: string, status: 'Pending' | 'Contacted' | 'Admitted') => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status } : inq));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  const updateSlide = (id: string, updated: Partial<HeroSlide>) => {
    setSlides(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };

  const resetAllDataToDefault = () => {
    setSlides(INITIAL_SLIDES);
    setNotices(INITIAL_NOTICES);
    setTickerItems(INITIAL_TICKER_ITEMS);
    setGallery(INITIAL_GALLERY);
    setEvents(INITIAL_EVENTS);
    setFaculty(INITIAL_FACULTY);
    setDownloads(INITIAL_DOWNLOADS);
    setInquiries([]);
    localStorage.clear();
  };

  return (
    <SchoolContext.Provider
      value={{
        slides,
        notices,
        tickerItems,
        academics,
        facilities,
        gallery,
        videos,
        toppers,
        events,
        faculty,
        downloads,
        testimonials,
        alumni,
        inquiries,

        searchQuery,
        setSearchQuery,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isAdmissionModalOpen,
        setIsAdmissionModalOpen,
        isAdminModalOpen,
        setIsAdminModalOpen,
        isAdminAuthenticated,
        setIsAdminAuthenticated,
        selectedFacility,
        setSelectedFacility,

        addNotice,
        deleteNotice,
        addGalleryItem,
        deleteGalleryItem,
        addFaculty,
        deleteFaculty,
        addEvent,
        deleteEvent,
        addDownload,
        deleteDownload,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        updateSlide,
        resetAllDataToDefault
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Exam' | 'Holiday' | 'Event' | 'Circular';
  content: string;
  important?: boolean;
  fileUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Sports' | 'Events' | 'Celebrations' | 'Academics';
  imageUrl: string;
  caption?: string;
  date?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  category: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  department: string;
  experience: string;
  imageUrl: string;
  message?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  imageUrl: string;
  category: string;
  upcoming: boolean;
}

export interface HeroSlide {
  id: string;
  headline: string;
  subtitle: string;
  badgeText: string;
  imageUrl: string;
  ctaText1: string;
  ctaText2: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Admission' | 'Syllabus' | 'Fee Structure' | 'Forms' | 'Calendar';
  fileSize: string;
  format: 'PDF' | 'DOC' | 'ZIP';
  updatedDate: string;
  description: string;
}

export interface TopperItem {
  id: string;
  name: string;
  classGrade: 'Class X' | 'Class XII';
  percentage: number;
  year: string;
  stream?: string;
  rank: string;
  imageUrl: string;
  testimonial?: string;
}

export interface ParentTestimonial {
  id: string;
  parentName: string;
  studentName: string;
  studentClass: string;
  rating: number;
  feedback: string;
  avatarUrl: string;
  location: string;
}

export interface AlumniMember {
  id: string;
  name: string;
  batch: string;
  profession: string;
  companyOrRole: string;
  imageUrl: string;
  quote: string;
}

export interface AdmissionInquiry {
  id: string;
  studentName: string;
  parentName: string;
  classSeeking: string;
  mobile: string;
  email: string;
  address: string;
  message: string;
  submittedAt: string;
  status: 'Pending' | 'Contacted' | 'Admitted';
}

export interface AcademicProgram {
  id: string;
  name: string;
  classes: string;
  ageGroup: string;
  timings: string;
  description: string;
  subjects: string[];
  keyHighlights: string[];
  iconName: string;
  imageUrl: string;
}

export interface Facility {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  features: string[];
  icon: string;
}

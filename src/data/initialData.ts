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
  Facility
} from '../types';

export const INITIAL_SLIDES: HeroSlide[] = [
  {
    id: 's1',
    headline: 'Welcome to Shabnam Children English School',
    subtitle: 'Nurturing Young Minds in Ghosi, Mau Since 1992 With Academic Rigor & Holistic Character Building.',
    badgeText: 'ESTABLISHED 1992 • CBSE ORIENTED',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Anw1EpqnaPUC2arbf-oe7V48cBGk96tH',
    ctaText1: 'Admission Open 2026-27',
    ctaText2: 'Explore Campus'
  },
  {
    id: 's2',
    headline: 'Learning Today, Leading Tomorrow',
    subtitle: 'State-of-the-Art Smart Classrooms, Advanced STEM Laboratories & Comprehensive Sports Infrastructure.',
    badgeText: 'MODERN PEDAGOGY • DIGITAL CAMPUS',
    imageUrl: 'https://lh3.googleusercontent.com/d/1AWDZjKxJzawNYzchLm9UHO9swGHWcTl9',
    ctaText1: 'Apply Online Now',
    ctaText2: 'View Academics'
  },
  {
    id: 's3',
    headline: 'Admission Open for Session 2026–27',
    subtitle: 'Inviting Applications from Pre-Nursery to Grade XII. Give Your Child the Advantage of Excellence.',
    badgeText: 'LIMITED SEATS AVAILABLE',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1920&auto=format&fit=crop',
    ctaText1: 'Fill Inquiry Form',
    ctaText2: 'Download Prospectus'
  },
  {
    id: 's4',
    headline: 'Building Bright Futures & Strong Values',
    subtitle: 'Dedicated Faculty, 100% English Speaking Atmosphere, and Personalized Individual Care.',
    badgeText: 'QUALIFIED TEACHERS • 80+ FACULTY',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop',
    ctaText1: 'Meet Our Faculty',
    ctaText2: 'Our Achievements'
  },
  {
    id: 's5',
    headline: 'Excellence Through Education',
    subtitle: 'Consistent 100% CBSE Result, State Level Science Exhibition Winners & All-Round Cultural Growth.',
    badgeText: '34+ YEARS OF TRUST IN MAU DISTRICT',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop',
    ctaText1: 'View CBSE Toppers',
    ctaText2: 'Contact Admissions'
  }
];

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'Admissions Open for Session 2026-27 (Pre-Nursery to Grade XI)',
    date: '2026-07-20',
    category: 'Admission',
    content: 'Registration forms for admission to the academic session 2026-27 are now available online and at the school admin block in Ghosi, Mau. Parents are invited to apply early to secure seats.',
    important: true,
    fileUrl: '#download-prospectus'
  },
  {
    id: 'n2',
    title: 'CBSE Board Examination Date Sheet & Guidelines Released',
    date: '2026-07-15',
    category: 'Exam',
    content: 'The official date sheet for Class X and Class XII pre-board examinations has been published. All students are advised to download the subject schedule from the downloads section.',
    important: true,
    fileUrl: '#download-datesheet'
  },
  {
    id: 'n3',
    title: 'Independence Day 2026 Parade & Cultural Practice Notice',
    date: '2026-07-10',
    category: 'Event',
    content: 'Rehearsals for the 80th Independence Day Flag Hoisting, March Past, and Patriotic Cultural Program will begin from 1st August. Selected students must report in full white uniform.',
    important: false
  },
  {
    id: 'n4',
    title: 'Parent-Teacher Meeting (PTM) Scheduled for First Saturday',
    date: '2026-07-05',
    category: 'Circular',
    content: 'Parents of all classes from Nursery to XII are requested to attend the upcoming PTM to review term progress reports and interact with class teachers between 8:30 AM to 12:30 PM.',
    important: false
  },
  {
    id: 'n5',
    title: 'School Transport GPS Tracking App Update for Parents',
    date: '2026-06-28',
    category: 'Circular',
    content: 'The upgraded Shabnam School Bus Tracker mobile app is live. Parents utilizing school transport in Ghosi and Mau routes can monitor live bus locations.',
    important: false
  },
  {
    id: 'n6',
    title: 'Summer Vacation Olympiad & Science Project Winners Announcement',
    date: '2026-06-20',
    category: 'Event',
    content: 'Heartiest congratulations to Shabnam school participants who bagged top honors in the District Science Olympiad held at Mau.',
    important: false
  }
];

export const INITIAL_TICKER_ITEMS = [
  '📢 Admission Open for Academic Session 2026-27! Register Online Today.',
  '🏆 Shabnam Children English School Secures 100% Pass Percentage in CBSE Board Exams!',
  '🗓️ Parent-Teacher Meeting (PTM) scheduled for upcoming Saturday from 8:30 AM.',
  '📚 Download the Updated Syllabus & Book List for 2026-27 from the Downloads Hub.',
  '🚌 GPS-tracked AC Transport facility available across Ghosi, Mau, and nearby routes.',
  '🎉 Registrations open for Annual Science & Robotics Exhibition 2026.'
];

export const INITIAL_ACADEMICS: AcademicProgram[] = [
  {
    id: 'ac1',
    name: 'Pre-Nursery & Nursery',
    classes: 'Pre-Nursery, Nursery',
    ageGroup: '3 to 4 Years',
    timings: '8:30 AM - 12:30 PM',
    description: 'A warm, nurturing environment focusing on sensory development, play-way phonics, social interaction, motor skills, and creative play.',
    subjects: ['English Phonics', 'Number Magic', 'Rhymes & Storytelling', 'Creative Art & Craft', 'Environmental Awareness'],
    keyHighlights: [
      'Activity-based playrooms with non-toxic sensory toys',
      'Caring & trained female Montessori teachers',
      'Daily storytelling, music, and physical agility games',
      'Special focus on English listening and gentle speech'
    ],
    iconName: 'Baby',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ac2',
    name: 'Kindergarten (LKG & UKG)',
    classes: 'LKG, UKG',
    ageGroup: '4 to 6 Years',
    timings: '8:30 AM - 1:00 PM',
    description: 'Foundational literacy and numeracy through interactive smart boards, phonics drills, hands-on counting, and structured creative activities.',
    subjects: ['English Literacy', 'Hindi Varnmala & Reading', 'Mathematics Concepts', 'General Knowledge', 'Art & Value Education'],
    keyHighlights: [
      'Interactive smart classroom learning sessions',
      'Early writing, reading, and public expression skills',
      'Regular stage performances to build confidence',
      'Healthy meal break and hygienic environment'
    ],
    iconName: 'BookOpen',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ac3',
    name: 'Primary School',
    classes: 'Classes I to V',
    ageGroup: '6 to 11 Years',
    timings: '8:00 AM - 1:30 PM',
    description: 'Building strong conceptual foundations in STEM, languages, social studies, and computers with active enquiry and experiential learning.',
    subjects: ['English Literature & Grammar', 'Hindi', 'Mathematics', 'Environmental Studies (EVS)', 'Computer Science', 'General Knowledge', 'Art & Craft'],
    keyHighlights: [
      'Computer lab sessions and digital learning modules',
      'Regular spoken English drills & vocabulary building',
      'Weekly co-curricular clubs (Music, Dance, Sports)',
      'Individual attention with small teacher-student ratio'
    ],
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ac4',
    name: 'Middle / Junior High',
    classes: 'Classes VI to VIII',
    ageGroup: '11 to 14 Years',
    timings: '8:00 AM - 2:00 PM',
    description: 'Developing critical thinking, scientific inquiry, logic, and analytical problem-solving with hands-on science lab practicals and coding.',
    subjects: ['English Core', 'Hindi & Sanskrit', 'Mathematics', 'Science (Physics, Chemistry, Bio)', 'Social Science', 'Computer Applications (Python/AI basics)', 'Moral Science'],
    keyHighlights: [
      'Hands-on experiments in dedicated Physics, Chemistry & Biology labs',
      'Participation in district science exhibitions and inter-school debates',
      'Comprehensive sports training in Football, Cricket & Badminton',
      'Personal mentorship for academic excellence'
    ],
    iconName: 'Microscope',
    imageUrl: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ac5',
    name: 'Senior Secondary',
    classes: 'Classes IX to XII',
    ageGroup: '14 to 18 Years',
    timings: '8:00 AM - 2:00 PM',
    description: 'Rigorous preparation aligned with CBSE curriculum and national competitive exams (JEE, NEET, CUET) with specialized Science & Commerce streams.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Accountancy', 'Business Studies', 'Economics', 'Computer Science / IP', 'English Core'],
    keyHighlights: [
      'Dedicated coaching modules for JEE, NEET & CUET alongside CBSE board prep',
      'Modern High-Tech Computer Lab & Advanced Science Research Labs',
      'Career counselling seminars with leading education experts',
      'Proven track record of 95%+ scorers every year'
    ],
    iconName: 'Award',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
  }
];

export const INITIAL_FACILITIES: Facility[] = [
  {
    id: 'f1',
    title: 'Smart Interactive Classrooms',
    shortDesc: 'Digital smart boards with multimedia audio-visual learning content in every classroom.',
    fullDesc: 'Our classrooms are equipped with high-definition digital smart boards, projector units, and ergonomic dual-desk furniture designed to provide an engaging, interactive learning environment.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    features: ['HD Interactive Panels', 'Digital Audio Systems', 'Ergonomic Seating', 'Airy & Well-Ventilated'],
    icon: 'Tv'
  },
  {
    id: 'f2',
    title: 'Modern Science Laboratories',
    shortDesc: 'Fully equipped Physics, Chemistry, and Biology practical research labs.',
    fullDesc: 'Dedicated state-of-the-art laboratories designed in strict accordance with CBSE standards, featuring high-precision optical microscopes, safe chemical workstations, and modern demonstration apparatus.',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
    features: ['Physics Workstations', 'Chemistry Fume Exhausts', 'Biology Specimen Bank', 'Safety Equipment & First Aid'],
    icon: 'FlaskConical'
  },
  {
    id: 'f3',
    title: 'High-Tech Computer & AI Lab',
    shortDesc: '60+ latest desktop computers with high-speed fiber internet & coding environment.',
    fullDesc: 'Students receive hands-on training in computer fundamentals, office software, Web Development, Python programming, and AI basics under expert faculty supervision.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    features: ['High-speed Optical Fiber WiFi', '1:1 Computer Ratio per Student', 'Python & Robotics Software', 'Full Power Backup'],
    icon: 'Monitor'
  },
  {
    id: 'f4',
    title: 'Rich Central Library & Resource Centre',
    shortDesc: 'Over 8,000 books, reference encyclopedias, journals, and digital e-readers.',
    fullDesc: 'A quiet, inspiring reading haven housing comprehensive reference collections for CBSE board preparation, competitive exams, storybooks, periodicals, and national newspapers.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
    features: ['8000+ Physical Books', 'National Newspapers & Magazines', 'E-Library Kiosks', 'Quiet Study Zone'],
    icon: 'Library'
  },
  {
    id: 'f5',
    title: 'Spacious Sports & Athletics Complex',
    shortDesc: 'Multi-sport grounds for Football, Cricket, Basketball, Volleyball, and Martial Arts.',
    fullDesc: 'We place equal emphasis on physical health. Our sports facility includes a manicured football field, cricket practice nets, volleyball court, table tennis hall, and trained physical instructors.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    features: ['Cricket Practice Pitch', 'Football Ground', 'Badminton & TT Courts', 'Certified Physical Trainers'],
    icon: 'Trophy'
  },
  {
    id: 'f6',
    title: 'Safe GPS-Tracked School Transport',
    shortDesc: 'Fleet of modern yellow buses covering Ghosi, Mau, and surrounding regional routes.',
    fullDesc: 'Our school transport service ensures maximum safety with speed governors, CCTV surveillance, female bus attendants, and real-time GPS tracking accessible to parents.',
    imageUrl: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=800&auto=format&fit=crop',
    features: ['GPS Bus Tracking App', 'CCTV & Speed Limiters', 'Female Attendants on Board', 'First Aid Box in Every Bus'],
    icon: 'Bus'
  },
  {
    id: 'f7',
    title: 'Medical Health Room & First Aid',
    shortDesc: 'On-campus health unit with qualified nurse and emergency medical care support.',
    fullDesc: 'Equipped with beds, health monitoring equipment, first aid supplies, and instant ties with local hospitals in Ghosi & Mau for immediate medical assistance.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    features: ['Dedicated Trained Nurse', 'First Aid & Health Checks', 'Resting Beds & Medical Supplies', 'Emergency Hospital Tie-up'],
    icon: 'HeartPulse'
  },
  {
    id: 'f8',
    title: 'Multipurpose Activity & Cultural Hall',
    shortDesc: 'Acoustically treated auditorium for school assemblies, drama, music, and debates.',
    fullDesc: 'A modern 500-seater assembly hall featuring professional sound systems, stage lighting, and projection screens for cultural celebrations and seminars.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    features: ['500+ Seating Capacity', 'Professional Stage & Audio System', 'Digital Projection', 'Indoor Event Setup'],
    icon: 'Music'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'School Main Front Campus Building',
    category: 'Campus',
    imageUrl: 'https://lh3.googleusercontent.com/d/1lkggAgXqdAlTI-bmb_TF5aGfr5YNxcd-',
    caption: 'Majestic front view of Shabnam Children English School building in Ghosi, Mau.',
    date: '2026-06-15'
  },
  {
    id: 'g2',
    title: 'Interactive Smart Classroom Session',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    caption: 'Students engaging in multimedia digital lessons.',
    date: '2026-05-10'
  },
  {
    id: 'g3',
    title: 'Science Experiment Workstation in Chemistry Lab',
    category: 'Labs',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
    caption: 'Senior secondary students conducting chemical titrations.',
    date: '2026-04-20'
  },
  {
    id: 'g4',
    title: 'Annual Sports Day Track & Field Competition',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    caption: 'Annual sports meet athletes celebrating on the field.',
    date: '2026-03-12'
  },
  {
    id: 'g5',
    title: 'Independence Day Patriotic Cultural Performance',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    caption: 'Students performing traditional dance on Independence Day.',
    date: '2025-08-15'
  },
  {
    id: 'g6',
    title: 'Republic Day Flag Hoisting Ceremony',
    category: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop',
    caption: 'School management, teachers & students honoring the tricolor.',
    date: '2026-01-26'
  },
  {
    id: 'g7',
    title: 'High-Speed Computer & AI Programming Lab',
    category: 'Labs',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    caption: 'Junior coders practicing Python scripts in computer class.',
    date: '2026-02-18'
  },
  {
    id: 'g8',
    title: 'Central Library Reading Hall',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
    caption: 'Students exploring reference books in quiet reading hour.',
    date: '2026-03-05'
  },
  {
    id: 'g9',
    title: 'Primary Wing Storytelling & Activity Hour',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    caption: 'Young toddlers building creative shapes during activity hour.',
    date: '2026-04-14'
  }
];

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Shabnam Children English School - Official Virtual Campus Tour',
    youtubeId: 'L_LUpnjgPso',
    duration: '4:15',
    category: 'Campus Tour'
  },
  {
    id: 'v2',
    title: 'Annual Day Cultural Extravaganza & Prize Distribution',
    youtubeId: 'dGcsHMXbSOA',
    duration: '8:30',
    category: 'Cultural Event'
  },
  {
    id: 'v3',
    title: 'Science & Robotics Exhibition - Innovations by Shabnam Students',
    youtubeId: 'ScMzIvxBSi4',
    duration: '5:45',
    category: 'Exhibition'
  }
];

export const INITIAL_TOPPERS: TopperItem[] = [
  {
    id: 't1',
    name: 'Ananya Verma',
    classGrade: 'Class XII',
    percentage: 98.4,
    year: '2025-26',
    stream: 'Science (PCM)',
    rank: 'District Rank 1 (Mau)',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    testimonial: 'Shabnam School provided me with dedicated guidance, constant mock tests, and supportive teachers who cleared every single doubt.'
  },
  {
    id: 't2',
    name: 'Mohd. Zaid Khan',
    classGrade: 'Class XII',
    percentage: 97.6,
    year: '2025-26',
    stream: 'Science (PCB)',
    rank: 'School Top Scorer (NEET Prep)',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    testimonial: 'The practical exposure in our Chemistry & Biology labs made complex concepts crystal clear. Grateful to the Principal and faculty.'
  },
  {
    id: 't3',
    name: 'Priya Sharma',
    classGrade: 'Class X',
    percentage: 98.2,
    year: '2025-26',
    rank: '1st Position (Class X Board)',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
    testimonial: 'Continuous evaluation and smart classroom tools helped me score 100 in Mathematics and Science.'
  },
  {
    id: 't4',
    name: 'Aditya Gupta',
    classGrade: 'Class X',
    percentage: 96.8,
    year: '2025-26',
    rank: '2nd Position (Class X Board)',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    testimonial: 'The disciplined English speaking environment and library facilities played a key role in my top result.'
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'ev1',
    title: '80th Independence Day Celebration & Grand March Past',
    date: '15th August 2026',
    time: '8:00 AM - 12:00 PM',
    venue: 'School Main Playground, Ghosi',
    description: 'National Flag hoisting ceremony followed by patriotic march past, drills, cultural songs, drama performances, and address by school Chairman.',
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop',
    category: 'National Event',
    upcoming: true
  },
  {
    id: 'ev2',
    title: 'Inter-School Science & Technology Exhibition 2026',
    date: '10th September 2026',
    time: '9:30 AM - 3:30 PM',
    venue: 'Multipurpose Activity Hall',
    description: 'Students from Grade VI to XII showcase working models in AI, renewable energy, robotics, and environmental conservation.',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
    category: 'Academic',
    upcoming: true
  },
  {
    id: 'ev3',
    title: 'Annual Sports Meet & Athletics Championship',
    date: '15th November 2026',
    time: '8:30 AM - 4:00 PM',
    venue: 'School Athletic Ground',
    description: 'Track races, relay competitions, high jump, shot put, football finals, and house championship trophy award ceremony.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    category: 'Sports',
    upcoming: true
  },
  {
    id: 'ev4',
    title: 'Grand Annual Day Cultural Function & Prize Night',
    date: '22nd December 2026',
    time: '4:30 PM - 8:30 PM',
    venue: 'School Auditorium',
    description: 'Mesmerizing dance dramas, musical choir, theatrical performances, and honor felicitations for academic and sports achievers.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    category: 'Cultural',
    upcoming: true
  }
];

export const INITIAL_FACULTY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. Ramesh Chandra Tripathi',
    designation: 'Principal',
    qualification: 'M.Sc (Physics), Ph.D, B.Ed',
    department: 'Administration & Physics',
    experience: '28 Years Experience',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    message: 'At Shabnam Children English School, we strive to build a foundation where moral values meet scientific excellence.'
  },
  {
    id: 'f2',
    name: 'Mrs. Shabana Parveen',
    designation: 'Vice Principal & HOD English',
    qualification: 'M.A (English Lit.), B.Ed',
    department: 'English & Humanities',
    experience: '22 Years Experience',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    message: 'Fluency in English coupled with deep cultural ethics prepares our children to shine anywhere in the world.'
  },
  {
    id: 'f3',
    name: 'Mr. Arvind Kumar Rai',
    designation: 'HOD Mathematics',
    qualification: 'M.Sc (Mathematics), B.Ed',
    department: 'Mathematics',
    experience: '18 Years Experience',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    message: 'Mathematics is not about memorizing formulas; it is about logical reasoning and creative problem solving.'
  },
  {
    id: 'f4',
    name: 'Mrs. Sunita Yadav',
    designation: 'HOD Science & Chemistry',
    qualification: 'M.Sc (Chemistry), B.Ed',
    department: 'Science',
    experience: '15 Years Experience',
    imageUrl: 'https://images.unsplash.com/photo-1580894732413-8025211910a5?q=80&w=400&auto=format&fit=crop',
    message: 'We foster scientific curiosity through practical experiments and active research in our labs.'
  },
  {
    id: 'f5',
    name: 'Mr. Vikas Sharma',
    designation: 'HOD Computer Science & IT',
    qualification: 'MCA, B.Tech (CS)',
    department: 'Information Technology',
    experience: '12 Years Experience',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    message: 'Preparing students with AI literacy, coding skills, and digital citizenship for the 21st century.'
  },
  {
    id: 'f6',
    name: 'Mr. Pradeep Singh',
    designation: 'Director of Physical Education',
    qualification: 'M.P.Ed, NIS Coach',
    department: 'Sports & Athletics',
    experience: '16 Years Experience',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    message: 'Physical discipline on the field builds resilience, teamwork, and lifelong leadership skills.'
  }
];

export const INITIAL_DOWNLOADS: DownloadItem[] = [
  {
    id: 'd1',
    title: 'Official School Prospectus & Admission Guide 2026-27',
    category: 'Admission',
    fileSize: '4.2 MB',
    format: 'PDF',
    updatedDate: '2026-07-01',
    description: 'Detailed information regarding school ethos, campus infrastructure, fee structure, rules, and admission procedure.'
  },
  {
    id: 'd2',
    title: 'Offline Admission Application Form 2026-27',
    category: 'Forms',
    fileSize: '1.1 MB',
    format: 'PDF',
    updatedDate: '2026-07-01',
    description: 'Printable admission registration form to be submitted at school counter in Ghosi.'
  },
  {
    id: 'd3',
    title: 'Comprehensive Fee Structure Session 2026-27',
    category: 'Fee Structure',
    fileSize: '850 KB',
    format: 'PDF',
    updatedDate: '2026-06-25',
    description: 'Class-wise breakdown of tuition fees, lab charges, transport fees, and payment schedule.'
  },
  {
    id: 'd4',
    title: 'CBSE Curriculum Syllabus (Classes Pre-Nursery to XII)',
    category: 'Syllabus',
    fileSize: '3.5 MB',
    format: 'PDF',
    updatedDate: '2026-06-15',
    description: 'Complete term-wise subject syllabus, book recommendations, and evaluation blueprint.'
  },
  {
    id: 'd5',
    title: 'Annual Academic Calendar & Holiday List 2026-27',
    category: 'Calendar',
    fileSize: '1.4 MB',
    format: 'PDF',
    updatedDate: '2026-06-10',
    description: 'Important dates for term exams, PTMs, gazetted holidays, sports events, and vacations.'
  }
];

export const INITIAL_TESTIMONIALS: ParentTestimonial[] = [
  {
    id: 'p1',
    parentName: 'Mr. Suresh Kumar Verma',
    studentName: 'Ananya Verma (Class XII Sc.)',
    studentClass: 'Class XII Top Scorer',
    rating: 5,
    feedback: 'Shabnam Children English School is undisputedly the finest institution in Mau district. The teachers give individual attention to every child. My daughter scored 98.4% in board exams thanks to their dedication!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    location: 'Ghosi, Mau'
  },
  {
    id: 'p2',
    parentName: 'Dr. Tariq Anwar',
    studentName: 'Amaan Anwar (Class VIII)',
    studentClass: 'Class VIII',
    rating: 5,
    feedback: 'The English speaking environment and modern computer lab are outstanding. My son has gained tremendous stage confidence and public speaking skills.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    location: 'Mau Nath Bhanjan'
  },
  {
    id: 'p3',
    parentName: 'Mrs. Sunita Pandey',
    studentName: 'Aarav Pandey (LKG)',
    studentClass: 'Kindergarten',
    rating: 5,
    feedback: 'Sending my child to Shabnam School was the best decision. The primary teachers are so caring and patient. The smart class animations make learning joyful for young toddlers.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    location: 'Ghosi, Uttar Pradesh'
  }
];

export const INITIAL_ALUMNI: AlumniMember[] = [
  {
    id: 'al1',
    name: 'Dr. Alok Nath Rai',
    batch: 'Batch of 2012',
    profession: 'Senior Resident Doctor',
    companyOrRole: 'AIIMS, New Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop',
    quote: 'The strong science foundation and disciplined study culture at Shabnam School gave me the confidence to crack NEET with top rank.'
  },
  {
    id: 'al2',
    name: 'Er. Samar Pratap Singh',
    batch: 'Batch of 2015',
    profession: 'Senior Software Engineer',
    companyOrRole: 'Google India',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    quote: 'My journey into computer technology began in the Shabnam Computer Lab back in 2010. Forever indebted to my teachers.'
  },
  {
    id: 'al3',
    name: 'Captain Rohit Yadav',
    batch: 'Batch of 2014',
    profession: 'Commissioned Officer',
    companyOrRole: 'Indian Army',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    quote: 'Discipline, leadership, and national pride were instilled in us right from morning assemblies at Shabnam School.'
  }
];

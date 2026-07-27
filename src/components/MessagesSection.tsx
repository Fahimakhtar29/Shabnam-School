import React, { useState } from 'react';
import { Quote, X, Award, Sparkles, UserCheck } from 'lucide-react';

interface LeaderMessage {
  id: string;
  role: 'Manager' | 'Principal' | 'Director';
  title: string;
  name: string;
  qualification: string;
  imageUrl: string;
  shortQuote: string;
  fullMessage: string[];
}

export const MessagesSection: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderMessage | null>(null);

  const messages: LeaderMessage[] = [
    {
      id: 'm1',
      role: 'Manager',
      title: "Manager's Address",
      name: 'Er. A. H. Khan',
      qualification: 'Manager & Founder Trustee',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      shortQuote: 'Education is the most powerful catalyst for community uplifting. Since 1992, our vision has been to nurture ethical leaders in Ghosi.',
      fullMessage: [
        'Welcome to Shabnam Children English School.',
        'When we established this institution in 1992, our primary goal was to bridge the educational gap in eastern Uttar Pradesh by offering affordable, top-quality English-medium education to rural and semi-urban children.',
        'Over the past 34 years, we have continuously upgraded our physical and digital infrastructure. Today, I take immense pride in seeing our alumni serve as doctors, engineers, military officers, and civil servants across India.',
        'We remain dedicated to expanding our facilities and ensuring that no deserving child is deprived of quality education.'
      ]
    },
    {
      id: 'm2',
      role: 'Principal',
      title: "Principal's Desk",
      name: 'Dr. Ramesh Chandra Tripathi',
      qualification: 'M.Sc (Physics), Ph.D, B.Ed',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      shortQuote: 'We do not merely teach lessons from textbooks; we ignite curiosity, build resilience, and instil lifelong moral discipline in our students.',
      fullMessage: [
        'Dear Parents and Prospective Students,',
        'Academic excellence combined with character development form the core philosophy of Shabnam Children English School.',
        'In today’s rapidly evolving world, education must go beyond rote learning. Our pedagogy emphasizes conceptual clarity, scientific experimentation, language proficiency, and sportsmanship.',
        'Our highly experienced faculty members work tirelessly to identify and nurture the unique talent inside every child. I invite you to join our family and experience the difference.'
      ]
    },
    {
      id: 'm3',
      role: 'Director',
      title: "Director's Vision",
      name: 'Mrs. S. Parveen',
      qualification: 'Academic Director & Mentor',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      shortQuote: 'By integrating digital smart learning with strong English communication, we ensure our students stand shoulder-to-shoulder with top global peers.',
      fullMessage: [
        'Greetings to all guardians and students.',
        'Modern education demands a balanced fusion of traditional discipline and modern technological tools. From introducing AI-driven smart classrooms to robotics and public speaking clubs, we prepare students for the demands of the 21st century.',
        'We place special emphasis on creating a safe, inclusive, and joyful learning environment where girls and boys alike thrive with confidence.',
        'Thank you for entrusting us with your child’s educational journey.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#0B6B3A] font-extrabold text-xs tracking-wider uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Leadership & Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Messages From Our <span className="text-[#0B6B3A]">Leadership</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Guiding Shabnam Children English School toward continuous excellence with wisdom, vision, and dedication.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {messages.map((item, idx) => {
            const borderAccent = idx === 0 ? 'border-t-4 border-[#0B6B3A]' :
              idx === 1 ? 'border-t-4 border-[#1E5EFF]' :
              'border-t-4 border-[#F4B400]';

            return (
              <div
                key={item.id}
                className={`bg-slate-50 rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${borderAccent}`}
              >
                <div>
                  {/* Circular Photo with Gold Ring */}
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#F4B400] p-1 bg-white shadow-md">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 bg-[#0B6B3A] text-[#F4B400] p-1.5 rounded-full shadow-md">
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center space-y-1 mb-5">
                    <span className="text-[10px] font-black text-[#1E5EFF] tracking-wider uppercase bg-blue-50 px-3 py-0.5 rounded-md border border-blue-200 inline-block">
                      {item.role}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-slate-900">{item.name}</h3>
                    <p className="text-xs font-medium text-slate-500">{item.qualification}</p>
                  </div>

                  {/* Quote */}
                  <div className="relative bg-white p-5 rounded-xl border border-slate-200/80 mb-6 shadow-2xs">
                    <Quote className="w-5 h-5 text-[#F4B400]/80 mb-1" />
                    <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed font-medium">
                      "{item.shortQuote}"
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setSelectedLeader(item)}
                  className="w-full py-2.5 px-4 bg-[#0B6B3A] hover:bg-emerald-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs transition-all cursor-pointer text-center"
                >
                  Read Full Message
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leader Full Message Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#0B6B3A] text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={selectedLeader.imageUrl}
                  alt={selectedLeader.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border-2 border-amber-400 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold font-serif">{selectedLeader.name}</h3>
                  <p className="text-xs text-amber-300">{selectedLeader.role} • {selectedLeader.qualification}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLeader(null)}
                className="p-1 rounded-full hover:bg-emerald-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
              {selectedLeader.fullMessage.map((p, idx) => (
                <p key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2 rounded-lg text-xs"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

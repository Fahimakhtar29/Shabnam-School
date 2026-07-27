import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { EventItem } from '../types';
import { Calendar, Clock, MapPin, Sparkles, Flag, Trophy, X, ArrowRight } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { events } = useSchool();
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#1E5EFF] font-extrabold text-xs tracking-wider uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            <Calendar className="w-3.5 h-3.5" />
            <span>School Celebrations & Functions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Major <span className="text-[#1E5EFF]">School Events & Calendar</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Instilling patriotism, cultural heritage, and sportsmanship through annual celebrations at Shabnam School.
          </p>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Event Photo */}
                <div className="relative h-44 img-zoom-container overflow-hidden">
                  <img
                    src={ev.imageUrl}
                    alt={ev.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 bg-[#1E5EFF] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase shadow">
                    {ev.category}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-1.5 text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <span>{ev.date}</span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-slate-900 font-serif text-base group-hover:text-[#1E5EFF] transition-colors line-clamp-2">
                    {ev.title}
                  </h3>

                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                    {ev.description}
                  </p>

                  <div className="space-y-1 text-[11px] text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#0B6B3A]" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-red-500" />
                      <span className="truncate">{ev.venue}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedEvent(ev)}
                  className="w-full py-2 bg-white hover:bg-[#1E5EFF] text-slate-800 hover:text-white border border-slate-300 hover:border-[#1E5EFF] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                >
                  <span>Event Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-52">
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-slate-950/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  {selectedEvent.category}
                </span>
                <h3 className="text-2xl font-bold font-serif">{selectedEvent.title}</h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Date</span>
                  <span className="font-bold text-slate-900">{selectedEvent.date}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Timing</span>
                  <span className="font-bold text-slate-900">{selectedEvent.time}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Venue</span>
                  <span className="font-bold text-slate-900">{selectedEvent.venue}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm font-serif">About This Celebration</h4>
                <p>{selectedEvent.description}</p>
              </div>
            </div>

            <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2 rounded-lg text-xs"
              >
                Close Event
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

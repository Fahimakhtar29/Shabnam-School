import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { GalleryItem, VideoItem } from '../types';
import { Image, Play, X, Sparkles, Maximize2, Calendar, Film } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery, videos } = useSchool();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const categories = ['All', 'Campus', 'Labs', 'Sports', 'Events', 'Celebrations', 'Academics'];

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-300 font-extrabold text-xs tracking-wider uppercase bg-slate-800 px-3.5 py-1 rounded-full border border-slate-700">
            <Image className="w-3.5 h-3.5" />
            <span>Campus Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            School <span className="text-amber-400">Photo & Video Gallery</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Glimpses of daily academic life, cultural festivities, sports accomplishments, and campus events at Ghosi, Mau.
          </p>
        </div>

        {/* Media Type Switcher: Photos vs Videos */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 p-1.5 rounded-2xl border border-slate-700 flex gap-2">
            <button
              onClick={() => setActiveTab('photo')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'photo'
                  ? 'bg-[#0B6B3A] text-amber-300 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Photo Gallery ({gallery.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-[#1E5EFF] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Video Tours ({videos.length})</span>
            </button>
          </div>
        </div>

        {/* Photo Gallery Tab Content */}
        {activeTab === 'photo' && (
          <div className="space-y-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-slate-950 font-extrabold shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className="group relative h-64 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 cursor-pointer img-zoom-container shadow-lg"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('lh3.googleusercontent.com')) {
                        const parts = target.src.split('/');
                        const id = parts[parts.length - 1];
                        if (id) {
                          target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1920`;
                        }
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <span className="absolute top-3 left-3 bg-[#0B6B3A] text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shadow">
                    {item.category}
                  </span>

                  <div className="absolute top-3 right-3 bg-slate-950/60 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <h3 className="font-bold text-sm text-white font-serif line-clamp-1 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    {item.caption && (
                      <p className="text-[11px] text-slate-300 line-clamp-1">{item.caption}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Gallery Tab Content */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div
                key={v.id}
                onClick={() => setSelectedVideo(v)}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg group cursor-pointer hover:border-amber-400 transition-all"
              >
                <div className="relative h-48 bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                    alt={v.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Play Pulse Button */}
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1 fill-white" />
                  </div>

                  <span className="absolute bottom-3 right-3 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur">
                    {v.duration}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    {v.category}
                  </span>
                  <h3 className="font-bold text-sm text-white font-serif group-hover:text-amber-300 transition-colors leading-snug">
                    {v.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Photo Popup Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 bg-slate-950/80 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('lh3.googleusercontent.com')) {
                    const parts = target.src.split('/');
                    const id = parts[parts.length - 1];
                    if (id) {
                      target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1920`;
                    }
                  }
                }}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="bg-[#0B6B3A] text-amber-300 font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                  {selectedPhoto.category}
                </span>
                {selectedPhoto.date && (
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {selectedPhoto.date}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold font-serif text-white">{selectedPhoto.title}</h3>
              {selectedPhoto.caption && (
                <p className="text-sm text-slate-300">{selectedPhoto.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-950 p-4 flex justify-between items-center border-b border-slate-800">
              <h3 className="font-bold text-white font-serif">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-slate-400 hover:text-white p-1 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

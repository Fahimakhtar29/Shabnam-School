import React, { useState } from 'react';

interface SchoolLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  size = 'md',
  showText = true,
  lightText = false
}) => {
  const [imageError, setImageError] = useState(false);
  const [imgSrc, setImgSrc] = useState('https://lh3.googleusercontent.com/d/1xIUy84MV_hrQu_7xq6hY5W61ykVd10X2');

  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  }[size];

  const handleImgError = () => {
    if (imgSrc.includes('lh3.googleusercontent.com')) {
      // Try secondary Google Drive thumbnail URL format
      setImgSrc('https://drive.google.com/thumbnail?id=1xIUy84MV_hrQu_7xq6hY5W61ykVd10X2&sz=w1000');
    } else {
      // Fallback to vector SVG crest if image fails
      setImageError(true);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* School Crest Logo Image from Google Drive */}
      <div className={`relative ${dimensions} flex-shrink-0 drop-shadow-md flex items-center justify-center`}>
        {!imageError ? (
          <img
            src={imgSrc}
            alt="Shabnam Children English School Logo"
            referrerPolicy="no-referrer"
            onError={handleImgError}
            className="w-full h-full object-contain rounded-lg filter drop-shadow-sm"
          />
        ) : (
          /* Scalable SVG Emblem Crest Fallback */
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B6B3A" />
                <stop offset="100%" stopColor="#064223" />
              </linearGradient>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE066" />
                <stop offset="50%" stopColor="#F4B400" />
                <stop offset="100%" stopColor="#C99200" />
              </linearGradient>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E5EFF" />
              </linearGradient>
            </defs>

            {/* Gold Outer Shield Frame */}
            <path
              d="M50,5 L88,20 V50 C88,72 70,90 50,95 C30,90 12,72 12,50 V20 Z"
              fill="url(#goldGrad)"
            />

            {/* Dark Green Inner Shield */}
            <path
              d="M50,10 L83,23 V48 C83,68 67,84 50,89 C33,84 17,68 17,48 V23 Z"
              fill="url(#shieldGrad)"
            />

            {/* Sun Rays / Rising Sun behind book */}
            <circle cx="50" cy="42" r="16" fill="url(#goldGrad)" opacity="0.9" />
            <path
              d="M50,22 L50,18 M38,26 L35,23 M62,26 L65,23 M30,38 L26,38 M70,38 L74,38"
              stroke="#F4B400"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Open Book of Knowledge */}
            <path
              d="M28,48 Q50,44 50,54 Q50,44 72,48 V65 Q50,60 50,70 Q50,60 28,65 Z"
              fill="#FFFFFF"
            />
            <path
              d="M50,54 V70"
              stroke="#0B6B3A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M33,53 Q43,51 47,56 M53,56 Q57,51 67,53"
              stroke="#1E5EFF"
              strokeWidth="1.2"
              fill="none"
            />

            {/* Torch of Enlightenment */}
            <path
              d="M50,33 L47,44 L53,44 Z"
              fill="url(#goldGrad)"
            />
            <path
              d="M50,25 C47,29 46,31 50,34 C54,31 53,29 50,25 Z"
              fill="#EF4444"
            />

            {/* Ribbons / Stars */}
            <path
              d="M20,78 L32,74 L50,80 L68,74 L80,78 L75,85 L50,89 L25,85 Z"
              fill="url(#blueGrad)"
            />
            <text
              x="50"
              y="83"
              fontSize="5.5"
              fontWeight="bold"
              fill="#FFFFFF"
              textAnchor="middle"
              fontFamily="sans-serif"
              letterSpacing="0.5"
            >
              ESTD 1992
            </text>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span className={`font-extrabold tracking-tight font-serif ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'
          } ${lightText ? 'text-white' : 'text-slate-900'}`}>
            SHABNAM CHILDREN
          </span>
          <span className={`font-semibold tracking-wider ${
            size === 'sm' ? 'text-xs' : 'text-sm'
          } ${lightText ? 'text-amber-300' : 'text-[#0B6B3A]'}`}>
            ENGLISH SCHOOL
          </span>
          <span className={`text-[10px] font-medium tracking-wide italic ${
            lightText ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Ghosi, Mau, UP • "A School With Difference"
          </span>
        </div>
      )}
    </div>
  );
};


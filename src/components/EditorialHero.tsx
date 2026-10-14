import React, { useState } from 'react';
import { PageView } from '../types';
import { IMAGES } from '../data/content';
import { ArrowLeft } from 'lucide-react';

interface EditorialHeroProps {
  onNavigate: (page: PageView) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onNavigate }) => {
  // Simple, elegant, effortless view state: 'after' (default) or 'before'
  const [viewState, setViewState] = useState<'after' | 'before'>('after');

  return (
    <section id="hero-section" className="pt-24 sm:pt-32 lg:pt-36 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      
      {/* Pure typographic statement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-14">
        
        {/* Poetic headline */}
        <div className="lg:col-span-8 text-right space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#8C867C]">
            שרי פויזנר · אדריכלות פנים ופסיכולוגיה מרחבית
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-light text-[#1F1E1B] tracking-tight leading-[1.12] font-heebo">
            לראות אחרת
            <span className="block font-normal text-[#1F1E1B] mt-1 sm:mt-2">
              את מה שכבר קיים.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#55524C] font-normal leading-relaxed max-w-2xl pt-1 font-assistant">
            עיצוב פנים שמתחיל ממה שיש — מהבית, מהאנשים שחיים בו, ומהפוטנציאל השקט שמחכה להתגלות. בלי להרוס הכל, עם כל הדיוק שמשנה את התחושה בבית.
          </p>
        </div>

        {/* Crisp editorial CTA buttons */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col items-start lg:items-end justify-start lg:justify-end gap-4 text-right">
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 text-xs sm:text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#383632] transition-colors rounded-xs shadow-xs cursor-pointer inline-flex items-center gap-2"
          >
            <span>בואו נעשה מהפך</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-medium text-[#736E67] hover:text-[#1F1F1D] transition-colors cursor-pointer inline-flex items-center gap-1.5 py-1"
          >
            <span>לכל המהפכים</span>
            <span>←</span>
          </button>
        </div>
      </div>

      {/* 3. Magnificently framed visual centerpiece (Serene, uncluttered, effortlessly interactive) */}
      <div className="space-y-3">
        <div className="relative overflow-hidden rounded-xs bg-[#EFECE5] shadow-xs group">
          
          {/* Main Visual Display with smooth crossfade */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden">
            
            {/* AFTER Image (Result) */}
            <img
              src={IMAGES.hero}
              alt="חלל מגורים מואר ופתוח לאחר מהפך בעיצוב שרי פויזנר"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                viewState === 'after' ? 'opacity-100' : 'opacity-0'
              }`}
              loading="eager"
            />

            {/* BEFORE Image (Point of departure) */}
            <img
              src={IMAGES.featuredBefore}
              alt="חלל המגורים לפני המהפך"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                viewState === 'before' ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />

            {/* Subtle bottom gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Effortless Toggle in bottom-right corner: pure clarity, zero fuss */}
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 flex items-center gap-1.5 bg-[#F8F6F0]/95 backdrop-blur-md p-1 rounded-xs border border-[#E5DFD5] shadow-sm">
              <button
                type="button"
                onClick={() => setViewState('after')}
                className={`px-3 py-1.5 text-xs sm:text-[13px] rounded-xs transition-all cursor-pointer font-medium ${
                  viewState === 'after'
                    ? 'bg-[#1F1F1D] text-[#F8F6F0] shadow-xs'
                    : 'text-[#6B665E] hover:text-[#1F1F1D]'
                }`}
              >
                המהפך (אחרי)
              </button>

              <button
                type="button"
                onClick={() => setViewState('before')}
                className={`px-3 py-1.5 text-xs sm:text-[13px] rounded-xs transition-all cursor-pointer font-medium ${
                  viewState === 'before'
                    ? 'bg-[#1F1F1D] text-[#F8F6F0] shadow-xs'
                    : 'text-[#6B665E] hover:text-[#1F1F1D]'
                }`}
              >
                נקודת המוצא (לפני)
              </button>
            </div>

            {/* Minimal Project Tag in bottom-left */}
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 text-left pointer-events-none hidden sm:block">
              <span className="text-xs text-white/90 font-light drop-shadow-xs">
                דירת 4 חדרים בגבעתיים
              </span>
            </div>

          </div>
        </div>

        {/* Discreet editorial caption below */}
        <div className="flex items-center justify-between text-xs text-[#736E67] pt-1">
          <span>פרויקט גבעתיים // לפני. אחרי. ומה שביניהם.</span>
          <span className="font-mono text-[11px] text-[#A6A095]">01 / 06</span>
        </div>
      </div>

    </section>
  );
};

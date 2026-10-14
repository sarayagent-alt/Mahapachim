import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { PageView } from '../types';
import { STUDIO_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-[#1F1F1D] text-[#DDD8CE] pt-20 pb-12 border-t border-[#302F2C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Architectural Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#302F2C] text-right">
          
          {/* Brand & Concept */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-baseline leading-none">
              <span className="font-heebo text-[22px] sm:text-[24px] font-medium tracking-tight text-[#F8F6F0]">
                מהפכים
              </span>
              <span className="text-[#6B655B] font-extralight text-[13px] sm:text-[14px] mx-2 select-none">
                |
              </span>
              <span className="font-heebo text-[13px] sm:text-[14px] text-[#B8B1A4] font-light tracking-wide">
                עיצוב פנים
              </span>
            </div>
            
            <p className="font-heebo text-xs sm:text-[13px] text-[#8E877C] font-normal tracking-wide mt-1 leading-none">
              לראות אחרת את מה שכבר קיים
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs tracking-wider text-[#9E978C] font-medium">
              ניווט
            </h4>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F8F6F0] text-[#C5BEB2] transition-colors cursor-pointer"
                >
                  בית
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F8F6F0] text-[#C5BEB2] transition-colors cursor-pointer"
                >
                  שירותים
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F8F6F0] text-[#C5BEB2] transition-colors cursor-pointer"
                >
                  מהפכים (לפני ואחרי)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F8F6F0] text-[#C5BEB2] transition-colors cursor-pointer"
                >
                  נעים להכיר
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F8F6F0] text-[#C5BEB2] transition-colors cursor-pointer"
                >
                  דברו איתי
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs tracking-wider text-[#9E978C] font-medium">
              יצירת קשר
            </h4>
            <div className="space-y-3 text-sm text-[#C5BEB2] font-normal">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#F8F6F0] transition-colors group"
              >
                <div className="p-2 bg-[#2B2926] rounded-xs group-hover:bg-[#383632] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#F8F6F0]" />
                </div>
                <span>וואטסאפ: {STUDIO_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-center gap-3 hover:text-[#F8F6F0] transition-colors group"
              >
                <div className="p-2 bg-[#2B2926] rounded-xs group-hover:bg-[#383632] transition-colors">
                  <Mail className="w-4 h-4 text-[#F8F6F0]" />
                </div>
                <span>אימייל: {STUDIO_INFO.email}</span>
              </a>

              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#F8F6F0] transition-colors group"
              >
                <div className="p-2 bg-[#2B2926] rounded-xs group-hover:bg-[#383632] transition-colors">
                  <Instagram className="w-4 h-4 text-[#F8F6F0]" />
                </div>
                <span>אינסטגרם: {STUDIO_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E877C] font-normal">
          <div>
            © {currentYear} מהפכים | עיצוב פנים שרי פויזנר. כל הזכויות שמורות.
          </div>
          <div>
            לראות אחרת את מה שכבר קיים
          </div>
        </div>

      </div>
    </footer>
  );
};

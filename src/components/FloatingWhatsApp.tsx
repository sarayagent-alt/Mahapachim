import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="יצירת קשר מהיר בוואטסאפ" className="fixed bottom-6 left-6 z-40">
      <a
        id="floating-whatsapp-trigger"
        href={STUDIO_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="דברו עם שרי ישירות בוואטסאפ"
        className="group relative flex items-center justify-center w-12 h-12 bg-[#252522] text-[#F3F0E9] hover:bg-[#1A1A18] rounded-xs shadow-md transition-all duration-200 border border-[#383632]"
      >
        <MessageCircle className="w-5 h-5 text-[#25D366]" />

        {/* Tooltip (in RTL: expands to the right side of button) */}
        <span className="pointer-events-none absolute right-full mr-3 hidden sm:group-hover:inline-flex items-center px-3 py-1.5 bg-[#252522] text-[#F3F0E9] text-xs font-light rounded-xs whitespace-nowrap border border-[#383632] shadow-xs">
          שיחה ישירה עם שרי בוואטסאפ
        </span>
      </a>
    </aside>
  );
};

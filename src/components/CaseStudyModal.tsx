import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectCaseStudy, PageView } from '../types';
import { STUDIO_INFO } from '../data/content';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onNavigate: (page: PageView) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1F1F1D]/50 flex justify-center p-4 sm:p-6 md:p-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#F8F6F0] rounded-xs shadow-xl overflow-hidden my-auto border border-[#E5DFD5] text-[#1F1F1D]">
        
        {/* Top close bar */}
        <div className="sticky top-0 z-30 bg-[#F8F6F0]/95 backdrop-blur-xs px-6 py-4 border-b border-[#E5DFD5] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-[#736E67]">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>

          <button
            id="close-case-study-modal"
            onClick={onClose}
            className="p-1.5 text-[#5E5B55] hover:text-[#1F1F1D] rounded-xs transition-colors cursor-pointer"
            aria-label="סגירה"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10 text-right">
          
          {/* Header section */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#1F1F1D] font-heebo">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#5E5B55] font-normal leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Side-by-side Before / After images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                <img
                  src={project.beforeImage}
                  alt={`לפני - ${project.title}`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <span className="text-xs text-[#736E67] font-normal block">
                לפני
              </span>
            </div>

            <div className="space-y-2">
              <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                <img
                  src={project.afterImage}
                  alt={`אחרי - ${project.title}`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <span className="text-xs text-[#1F1F1D] font-medium block">
                אחרי
              </span>
            </div>
          </div>

          {/* Narrative Breakdown (Section 13) */}
          <div className="space-y-8 divide-y divide-[#E5DFD5]">
            
            {/* לפני */}
            <div className="pt-6 first:pt-0 space-y-2">
              <h3 className="text-sm font-medium text-[#1F1F1D]">
                לפני: איך החלל נראה והרגיש
              </h3>
              <p className="text-sm sm:text-base text-[#5E5B55] font-normal leading-relaxed">
                {project.before.description}
              </p>
              <p className="text-xs text-[#736E67]">
                תחושת הדיירים: {project.before.feel}
              </p>
            </div>

            {/* האתגר */}
            <div className="pt-6 space-y-2">
              <h3 className="text-sm font-medium text-[#1F1F1D]">
                האתגר: מה לא עבד
              </h3>
              <p className="text-sm sm:text-base text-[#5E5B55] font-normal leading-relaxed">
                {project.challenge.description}
              </p>
              <ul className="text-xs sm:text-sm text-[#736E67] space-y-1 pt-1 list-disc list-inside">
                {project.challenge.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* מה הבנו */}
            <div className="pt-6 space-y-2">
              <h3 className="text-sm font-medium text-[#1F1F1D]">
                מה הבנו: הצורך או התובנה שעלו מהתהליך
              </h3>
              <p className="text-sm sm:text-base text-[#5E5B55] font-normal leading-relaxed">
                {project.understanding.psychologicalInsight}
              </p>
              <p className="text-xs sm:text-sm text-[#736E67]">
                {project.understanding.spatialInsight}
              </p>
            </div>

            {/* המהפך */}
            <div className="pt-6 space-y-3">
              <h3 className="text-sm font-medium text-[#1F1F1D]">
                המהפך: מה נשאר, מה זז, מה השתנה ומה נוסף
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-1 text-xs sm:text-sm text-[#5E5B55]">
                <div>
                  <span className="font-medium text-[#1F1F1D] block mb-1.5">מה נשאר</span>
                  <ul className="space-y-1">
                    {project.transformation.whatKept.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-medium text-[#1F1F1D] block mb-1.5">מה זז</span>
                  <ul className="space-y-1">
                    {project.transformation.whatMoved.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-medium text-[#1F1F1D] block mb-1.5">מה השתנה</span>
                  <ul className="space-y-1">
                    {project.transformation.whatChanged.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-medium text-[#1F1F1D] block mb-1.5">מה נוסף</span>
                  <ul className="space-y-1">
                    {project.transformation.whatAdded.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* אחרי */}
            <div className="pt-6 space-y-2">
              <h3 className="text-sm font-medium text-[#1F1F1D]">
                אחרי: איך החלל עובד ומרגיש היום
              </h3>
              <p className="text-sm sm:text-base text-[#5E5B55] font-normal leading-relaxed">
                {project.after.description}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#1F1F1D]">
                {project.after.impact}
              </p>
            </div>

          </div>

          {/* Extra Gallery Photos if any */}
          {project.galleryImages.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-[#E5DFD5]">
              <span className="text-xs text-[#736E67] font-medium block">
                זוויות נוספות מהפרויקט
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.galleryImages.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`${project.title} - תמונה ${idx + 1}`}
                    className="w-full h-44 object-cover rounded-xs bg-[#EFECE5]"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#E5DFD5] flex flex-wrap items-center gap-6 justify-start">
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-sm font-medium text-[#F8F6F0] bg-[#1F1F1D] hover:bg-[#33312E] rounded-xs transition-colors cursor-pointer"
            >
              בואו נדבר על הבית שלכם
            </button>

            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors inline-flex items-center gap-2"
            >
              <span>WhatsApp</span>
              <span>←</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

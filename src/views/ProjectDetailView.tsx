import React, { useEffect } from 'react';
import { ProjectCaseStudy, PageView } from '../types';
import { PROJECTS } from '../data/content';

interface ProjectDetailViewProps {
  project: ProjectCaseStudy;
  onBack: () => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
  onNavigate: (page: PageView) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onSelectProject,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Find next project in list for bottom navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject =
    currentIndex >= 0 && currentIndex < PROJECTS.length - 1
      ? PROJECTS[currentIndex + 1]
      : PROJECTS[0];

  return (
    <article className="pt-32 sm:pt-40 lg:pt-44 pb-32 text-[#1F1F1D] text-right">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Navigation: Breadcrumb / Back Link */}
        <div className="mb-12 sm:mb-16 flex items-center justify-between border-b border-[#E5DFD5] pb-6">
          <button
            onClick={onBack}
            className="text-sm font-medium text-[#5E5B55] hover:text-[#1F1F1D] transition-colors cursor-pointer inline-flex items-center gap-2 group"
          >
            <span className="text-base transition-transform group-hover:translate-x-1">→</span>
            <span>חזרה לכל המהפכים</span>
          </button>

          <span className="text-xs text-[#736E67] font-normal">
            {project.category}
          </span>
        </div>

        {/* 1. PROJECT INTRODUCTION */}
        <header className="space-y-5 max-w-3xl">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#1F1F1D] tracking-tight font-heebo leading-[1.2]">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#5E5B55] font-normal leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Minimal metadata */}
          <div className="text-xs sm:text-sm text-[#736E67] font-normal flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
            <span>סוג הפרויקט: {project.category}</span>
            <span className="text-[#B8B2A7]">•</span>
            <span>{project.location}</span>
            {project.year && (
              <>
                <span className="text-[#B8B2A7]">•</span>
                <span>{project.year}</span>
              </>
            )}
          </div>
        </header>

        {/* VERTICAL EDITORIAL FLOW */}
        <div className="pt-16 sm:pt-20 space-y-24 sm:space-y-32">
          
          {/* ================================================== */}
          {/* לפני (BEFORE) */}
          {/* ================================================== */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#736E67] font-medium block">
                לפני
              </span>
              <h2 className="text-xl sm:text-2xl font-normal text-[#1F1F1D] font-heebo">
                איך החלל נראה והרגיש
              </h2>
            </div>

            {/* UNIFIED BEFORE IMAGE FRAME (Identical dimensions, aspect ratio, alignment to AFTER) */}
            <div className="w-full overflow-hidden rounded-xs bg-[#EFECE5]">
              <img
                src={project.beforeImage}
                alt={`לפני המהפך - ${project.title}`}
                className="w-full aspect-[16/10] object-cover object-center block"
                loading="eager"
              />
            </div>

            <div className="max-w-3xl space-y-3 pt-2">
              <p className="text-base sm:text-[17px] text-[#55524C] font-normal leading-[1.8]">
                {project.before.description}
              </p>
              {project.before.feel && (
                <p className="text-sm text-[#736E67] font-normal leading-relaxed">
                  תחושת הדיירים: {project.before.feel}
                </p>
              )}
            </div>
          </section>

          {/* ================================================== */}
          {/* האתגר */}
          {/* ================================================== */}
          <section className="space-y-4 max-w-3xl border-t border-[#E5DFD5]/60 pt-16">
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1F1D] font-heebo">
              האתגר: מה לא עבד
            </h2>
            <p className="text-base sm:text-[17px] text-[#55524C] font-normal leading-[1.8]">
              {project.challenge.description}
            </p>
            <ul className="space-y-2 pt-2 text-sm sm:text-base text-[#55524C] font-normal leading-relaxed">
              {project.challenge.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#A39E93] text-lg leading-none mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ================================================== */}
          {/* מה הבנו */}
          {/* ================================================== */}
          <section className="space-y-4 max-w-3xl border-t border-[#E5DFD5]/60 pt-16">
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1F1D] font-heebo">
              מה הבנו: המבט הפסיכולוגי והמרחבי
            </h2>
            <p className="text-base sm:text-[17px] text-[#55524C] font-normal leading-[1.8]">
              {project.understanding.psychologicalInsight}
            </p>
            <p className="text-base sm:text-[17px] text-[#55524C] font-normal leading-[1.8]">
              {project.understanding.spatialInsight}
            </p>
          </section>

          {/* PULL QUOTE */}
          {project.summaryQuote && (
            <div className="py-12 sm:py-16 border-y border-[#E5DFD5] max-w-3xl">
              <blockquote className="text-xl sm:text-2xl lg:text-[1.7rem] font-normal text-[#1F1F1D] leading-relaxed font-heebo">
                ״{project.summaryQuote}״
              </blockquote>
            </div>
          )}

          {/* ================================================== */}
          {/* המהפך: מה קרה בפועל */}
          {/* ================================================== */}
          <section className="space-y-6 max-w-3xl border-t border-[#E5DFD5]/60 pt-16">
            <h2 className="text-xl sm:text-2xl font-normal text-[#1F1F1D] font-heebo">
              המהפך: מה קרה בפועל
            </h2>

            <div className="space-y-8 text-base sm:text-[16.5px] text-[#55524C] leading-[1.8]">
              {project.transformation.whatKept.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-[#1F1F1D] font-medium">
                    מה נשאר בחלל
                  </h3>
                  <ul className="space-y-1.5 text-sm sm:text-base">
                    {project.transformation.whatKept.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#A39E93] text-lg leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.transformation.whatMoved.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-sm uppercase tracking-wider text-[#1F1F1D] font-medium">
                    מה זז וסודר מחדש
                  </h3>
                  <ul className="space-y-1.5 text-sm sm:text-base">
                    {project.transformation.whatMoved.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#A39E93] text-lg leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.transformation.whatChanged.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-sm uppercase tracking-wider text-[#1F1F1D] font-medium">
                    מה השתנה
                  </h3>
                  <ul className="space-y-1.5 text-sm sm:text-base">
                    {project.transformation.whatChanged.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#A39E93] text-lg leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.transformation.whatAdded.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-sm uppercase tracking-wider text-[#1F1F1D] font-medium">
                    מה נוסף במדויק
                  </h3>
                  <ul className="space-y-1.5 text-sm sm:text-base">
                    {project.transformation.whatAdded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#A39E93] text-lg leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* ================================================== */}
          {/* אחרי (AFTER) */}
          {/* ================================================== */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#1F1F1D] font-medium block">
                אחרי
              </span>
              <h2 className="text-xl sm:text-2xl font-normal text-[#1F1F1D] font-heebo">
                איך החלל עובד ומרגיש היום
              </h2>
            </div>

            {/* UNIFIED AFTER IMAGE FRAME (Exact same width, height, aspect ratio, alignment as BEFORE) */}
            <div className="w-full overflow-hidden rounded-xs bg-[#EFECE5]">
              <img
                src={project.afterImage}
                alt={`אחרי המהפך - ${project.title}`}
                className="w-full aspect-[16/10] object-cover object-center block"
                loading="lazy"
              />
            </div>

            <div className="max-w-3xl space-y-3 pt-2">
              <p className="text-base sm:text-[17px] text-[#55524C] font-normal leading-[1.8]">
                {project.after.description}
              </p>
              {project.after.impact && (
                <p className="text-base sm:text-[17px] font-medium text-[#1F1F1D] leading-relaxed">
                  {project.after.impact}
                </p>
              )}
            </div>
          </section>

          {/* ================================================== */}
          {/* Additional Gallery Photography if available */}
          {/* ================================================== */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <section className="space-y-10 border-t border-[#E5DFD5]/60 pt-16">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-xl sm:text-2xl font-normal text-[#1F1F1D] font-heebo">
                  מבט על פרטים, חומר ואור
                </h2>
                <p className="text-sm sm:text-base text-[#736E67] font-normal leading-relaxed">
                  צילומים נוספים מתוך החלל המעוצב
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="space-y-2">
                    <div className="overflow-hidden rounded-xs bg-[#EFECE5]">
                      <img
                        src={img}
                        alt={`${project.title} - פרט ${i + 1}`}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* BOTTOM NAVIGATION: Next Project Transition + Back to Index */}
        <div className="mt-32 pt-16 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-baseline justify-between gap-8">
          <button
            onClick={onBack}
            className="text-sm font-medium text-[#5E5B55] hover:text-[#1F1F1D] transition-colors cursor-pointer inline-flex items-center gap-2 group"
          >
            <span className="text-base transition-transform group-hover:translate-x-1">→</span>
            <span>חזרה לכל המהפכים</span>
          </button>

          {nextProject && nextProject.id !== project.id && (
            <button
              onClick={() => onSelectProject(nextProject)}
              className="text-right group cursor-pointer"
            >
              <span className="text-xs text-[#736E67] font-normal block mb-1">
                המהפך הבא
              </span>
              <span className="text-lg sm:text-xl font-normal text-[#1F1F1D] font-heebo group-hover:text-[#5E5B55] transition-colors inline-flex items-center gap-2">
                <span>{nextProject.title}</span>
                <span className="text-sm transition-transform group-hover:-translate-x-1">←</span>
              </span>
            </button>
          )}
        </div>

      </div>
    </article>
  );
};

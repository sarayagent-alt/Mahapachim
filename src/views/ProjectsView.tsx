import React from 'react';
import { PageView, ProjectCaseStudy } from '../types';
import { PROJECTS } from '../data/content';

interface ProjectsViewProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onSelectProject,
}) => {
  return (
    <div className="pt-32 sm:pt-40 lg:pt-44 pb-32 space-y-20 sm:space-y-28 text-[#1F1F1D]">
      
      {/* OPENING INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-4 text-right">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal tracking-tight text-[#1F1F1D] font-heebo leading-[1.2]">
            לפני. אחרי. ומה שביניהם.
          </h1>

          <p className="text-base sm:text-lg text-[#55524C] font-normal leading-[1.8]">
            התוצאה היא רק חלק מהסיפור.
            <br />
            בכל מהפך יש נקודת התחלה אחרת, החלטות אחרות ודרך אחרת להפוך את הבית למקום שנכון יותר לאנשים שחיים בו.
          </p>

          <p className="text-base sm:text-lg font-medium text-[#1F1F1D] pt-1">
            הכירו את המהפכים.
          </p>
        </div>
      </section>

      {/* PROJECT INDEX — Sophisticated Editorial Architecture Portfolio */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-24 sm:space-y-32 divide-y divide-[#E5DFD5]">
          {PROJECTS.map((project, index) => {
            // Curated alternating editorial compositions:
            // 0: Full-width commanding landscape
            // 1: Asymmetric composition (image 7 cols, text 5 cols)
            // 2: Reversed asymmetric composition (text 5 cols, image 7 cols)
            const isFullWidth = index % 3 === 0;
            const isAsymmetricRight = index % 3 === 1;

            if (isFullWidth) {
              return (
                <article
                  key={project.id}
                  className="pt-24 first:pt-0 space-y-8 text-right group"
                >
                  {/* Large Photography */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="overflow-hidden rounded-xs bg-[#EFECE5] cursor-pointer"
                  >
                    <img
                      src={project.coverImage || project.afterImage}
                      alt={project.title}
                      className="w-full aspect-[16/9] sm:aspect-[21/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      loading="lazy"
                    />
                  </div>

                  {/* Information Row: Name, Short Description, Type, Link */}
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 pt-2">
                    <div className="space-y-2 max-w-2xl">
                      {project.category && (
                        <span className="text-xs text-[#736E67] font-normal block">
                          {project.category} {project.location ? `• ${project.location}` : ''}
                        </span>
                      )}
                      <h2
                        onClick={() => onSelectProject(project)}
                        className="text-2xl sm:text-3xl font-normal text-[#1F1F1D] font-heebo cursor-pointer hover:text-[#5E5B55] transition-colors"
                      >
                        {project.title}
                      </h2>
                      <p className="text-base text-[#5E5B55] font-normal leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 pt-1">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-2 group/btn"
                      >
                        <span>למהפך המלא</span>
                        <span className="text-base transition-transform group-hover/btn:-translate-x-1">←</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={project.id}
                className="pt-24 first:pt-0 text-right group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* Image Column */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className={`lg:col-span-7 ${
                      isAsymmetricRight ? 'lg:order-1' : 'lg:order-2'
                    } overflow-hidden rounded-xs bg-[#EFECE5] cursor-pointer`}
                  >
                    <img
                      src={project.coverImage || project.afterImage}
                      alt={project.title}
                      className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isAsymmetricRight ? 'lg:order-2' : 'lg:order-1'
                    } space-y-5`}
                  >
                    {project.category && (
                      <span className="text-xs text-[#736E67] font-normal block">
                        {project.category} {project.location ? `• ${project.location}` : ''}
                      </span>
                    )}

                    <h2
                      onClick={() => onSelectProject(project)}
                      className="text-2xl sm:text-3xl font-normal text-[#1F1F1D] font-heebo cursor-pointer hover:text-[#5E5B55] transition-colors"
                    >
                      {project.title}
                    </h2>

                    <p className="text-base text-[#5E5B55] font-normal leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="pt-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-sm font-medium text-[#1F1F1D] hover:text-[#736E67] transition-colors cursor-pointer inline-flex items-center gap-2 group/btn"
                      >
                        <span>למהפך המלא</span>
                        <span className="text-base transition-transform group-hover/btn:-translate-x-1">←</span>
                      </button>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>

    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, ProjectCaseStudy } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ProjectsView } from './views/ProjectsView';
import { ProjectDetailView } from './views/ProjectDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { PROJECTS } from './data/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  // Sync state from URL on initial load and handle browser back/forward (popstate)
  useEffect(() => {
    const parseUrl = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const hash = window.location.hash.replace(/^#\/?/, '');
      const fullRoute = path || hash;

      if (fullRoute.startsWith('projects/')) {
        const slug = fullRoute.replace('projects/', '');
        const found = PROJECTS.find((p) => p.slug === slug || p.id === slug);
        if (found) {
          setSelectedProject(found);
          setCurrentPage('projects');
          return;
        }
      }

      if (fullRoute === 'projects') {
        setSelectedProject(null);
        setCurrentPage('projects');
        return;
      }

      if (fullRoute === 'services') {
        setSelectedProject(null);
        setCurrentPage('services');
        return;
      }

      if (fullRoute === 'about') {
        setSelectedProject(null);
        setCurrentPage('about');
        return;
      }

      if (fullRoute === 'contact') {
        setSelectedProject(null);
        setCurrentPage('contact');
        return;
      }

      // Default or home
      if (fullRoute === '' || fullRoute === 'home') {
        setSelectedProject(null);
        setCurrentPage('home');
      }
    };

    parseUrl();

    const handlePopState = () => {
      parseUrl();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate to top-level pages
  const handleNavigate = (page: PageView) => {
    setSelectedProject(null);
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select a specific individual project
  const handleSelectProject = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
    setCurrentPage('projects');
    const newPath = `/projects/${project.slug}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back from project page to main project index
  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentPage('projects');
    if (window.location.pathname !== '/projects') {
      window.history.pushState({}, '', '/projects');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForContact = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1F1F1D] selection:bg-[#E5DFD5] selection:text-[#1F1F1D] font-heebo antialiased">
      {/* Sticky Minimal Navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onSelectServiceForContact={handleSelectServiceForContact}
          />
        )}

        {currentPage === 'projects' && (
          selectedProject ? (
            <ProjectDetailView
              project={selectedProject}
              onBack={handleBackToProjects}
              onSelectProject={handleSelectProject}
              onNavigate={handleNavigate}
            />
          ) : (
            <ProjectsView
              onNavigate={handleNavigate}
              onSelectProject={handleSelectProject}
            />
          )
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactView preselectedServiceId={preselectedServiceId} />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Link */}
      <FloatingWhatsApp />
    </div>
  );
}

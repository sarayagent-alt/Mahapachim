import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'בית', page: 'home' },
    { label: 'שירותים', page: 'services' },
    { label: 'מהפכים', page: 'projects' },
    { label: 'נעים להכיר', page: 'about' },
    { label: 'דברו איתי', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[#F8F6F0]/95 backdrop-blur-md ${
        isScrolled ? 'py-4 sm:py-5' : 'py-6 sm:py-7 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-baseline justify-between md:justify-start md:gap-14 lg:gap-18 xl:gap-22">
          
          {/* Typographic Brand Signature on the RIGHT */}
          <button
            id="brand-logo-button"
            onClick={() => handleNavClick('home')}
            className="text-right focus:outline-none flex flex-col items-start cursor-pointer group select-none p-0 m-0"
          >
            {/* Primary line: ONE cohesive typographic logo (מהפכים ~100%, עיצוב פנים ~75-80%) */}
            <div className="flex items-baseline leading-none text-right">
              <span className="font-heebo text-[22px] sm:text-[23.5px] lg:text-[24px] font-medium tracking-tight text-[#1F1E1B]">
                מהפכים
              </span>
              <span className="text-[#BDB7AA] font-extralight text-[15px] sm:text-[16px] mx-2.5 sm:mx-3 select-none leading-none">
                |
              </span>
              <span className="font-heebo text-[17.5px] sm:text-[18px] lg:text-[18.5px] text-[#59554E] font-normal tracking-normal">
                עיצוב פנים
              </span>
            </div>

            {/* Tagline: Clearly smaller than both, quiet, refined, intentional warm grey */}
            <span className="font-heebo text-[12px] sm:text-[12.5px] text-[#6E6A63] font-normal tracking-wide mt-1 sm:mt-1.5 leading-none text-right">
              לראות אחרת את מה שכבר קיים
            </span>
          </button>

          {/* Clean architectural navigation anchored to the header grid */}
          <nav id="desktop-navigation-links" className="hidden md:flex items-baseline gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-[14px] sm:text-[15px] tracking-wide transition-colors py-0.5 cursor-pointer leading-none ${
                    isActive
                      ? 'text-[#1F1F1D] font-medium'
                      : 'text-[#6E6A63] hover:text-[#1F1F1D] font-normal'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle (pushed to left on mobile) */}
          <div className="flex md:hidden items-center mr-auto self-center">
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1F1F1D] focus:outline-none cursor-pointer"
              aria-label="פתיחת תפריט"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-x-0 top-[72px] bg-[#F8F6F0] border-b border-[#E5DFD5] shadow-lg px-6 py-8 animate-fadeIn"
        >
          <nav className="flex flex-col gap-5 text-right">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`mobile-nav-link-${link.page}`}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-base tracking-wide text-right py-2 cursor-pointer border-b border-[#E5DFD5]/60 flex items-center justify-between ${
                    isActive ? 'text-[#1F1F1D] font-medium' : 'text-[#6E6A63] font-normal'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-[#1F1F1D]" />}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

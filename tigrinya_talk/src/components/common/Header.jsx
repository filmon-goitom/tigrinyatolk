import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking a link
    setMenuOpen(false);
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-[18px]">
          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto ${
            isScrolled 
              ? 'bg-black/30 backdrop-blur-md' :'bg-black/20 backdrop-blur-sm'
          } lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 p-4 lg:p-0 justify-center items-center">
              <button 
                role="menuitem"
                onClick={() => scrollToSection('services')}
                className="text-sm sm:text-base font-normal leading-sm text-white hover:text-blue-400 transition-colors duration-200 w-auto cursor-pointer"
              >
                Services
              </button>
              <button 
                role="menuitem"
                onClick={() => scrollToSection('team')}
                className="text-sm sm:text-base font-normal leading-sm text-white hover:text-blue-400 transition-colors duration-200 w-auto cursor-pointer"
              >
                Interpretes
              </button>
              <button 
                role="menuitem"
                onClick={() => scrollToSection('about')}
                className="text-sm sm:text-base font-normal leading-sm text-white hover:text-blue-400 transition-colors duration-200 w-auto cursor-pointer"
              >
                About
              </button>
            </div>
          </nav>

          {/* Company Logo */}
          <div className="flex justify-center lg:justify-start w-auto lg:w-[6%]">
            <h2 className="text-md font-bold leading-md text-blue-400">
              TigrinyaTolk.
            </h2>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button
              text="Contact As"
              text_font_size="16"
              text_font_family="Inter"
              text_font_weight="500"
              text_line_height="20px"
              text_text_align="left"
              text_color="#ffffff"
              fill_background_color="#3b82f6"
              border_border="1 solid #3b82f6"
              border_border_radius="12px"
              padding="4px 10px"
              layout_width="auto"
              position="relative"
              variant="primary"
              size="medium"
              className=""
              onClick={() => scrollToSection('contact')}
            />
          </div>

          {/* Mobile Contact Button */}
          <div className="block lg:hidden">
            <Button
              text="Contact"
              text_font_size="14"
              text_font_family="Inter"
              text_font_weight="500"
              text_line_height="18px"
              text_text_align="center"
              text_color="#ffffff"
              fill_background_color="#3b82f6"
              border_border="1 solid #3b82f6"
              border_border_radius="8px"
              padding="6px 12px"
              layout_width="auto"
              position="relative"
              variant="primary"
              size="small"
              className=""
              onClick={() => scrollToSection('contact')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// src/components/layout/Navigation.jsx (From previous response, copied for completeness)
import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import ResponsiveImage from '../common/ResponsiveImage';

const LOGO_SRC = '/assets/images/logo-beehive-essentials.png'; // Assume you have this

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#cta' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}
        lg:bg-white lg:shadow-md
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <ResponsiveImage
                src={LOGO_SRC}
                alt="BeeHive Essentials Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
              />
              <span className={`text-xl lg:text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white lg:text-primary'}`}>
                BeeHive Essentials
              </span>
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 hover:text-accent text-neutral-dark`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="md">Shop Now</Button>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-neutral-dark' : 'text-white'} hover:bg-accent hover:bg-opacity-20`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white shadow-xl px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-dark hover:bg-accent hover:bg-opacity-10 hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button variant="primary" size="sm" className="w-full">Shop Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
// src/components/layout/Footer.jsx
import React from 'react';
import ResponsiveImage from '../common/ResponsiveImage';

const Footer = () => {
  const footerLinks = [
      { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
              { label: 'Contact Us', href: '#' },
                ];

                  return (
                      <footer className="bg-secondary text-white py-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                                              <ResponsiveImage
                                                          src="/assets/images/logo-beehive-essentials.png"
                                                                      alt="BeeHive Essentials Logo"
                                                                                  className="h-8 w-8"
                                                                                            />
                                                                                                      <span className="text-xl font-bold">BeeHive Essentials</span>
                                                                                                              </div>
                                                                                                                      <nav className="flex space-x-4 mb-4 md:mb-0">
                                                                                                                                {footerLinks.map((link) => (
                                                                                                                                            <a key={link.label} href={link.href} className="hover:text-accent">
                                                                                                                                                          {link.label}
                                                                                                                                                                      </a>
                                                                                                                                                                                ))}
                                                                                                                                                                                        </nav>
                                                                                                                                                                                                <p className="text-sm">&copy; 2025 BeeHive Essentials. All rights reserved.</p>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                          </footer>
                                                                                                                                                                                                            );
                                                                                                                                                                                                            };

                                                                                                                                                                                                            export default Footer;
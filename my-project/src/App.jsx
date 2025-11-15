// src/App.jsx
import React from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import NewProducts from './components/sections/NewProducts';
import About from './components/sections/About';
import AllProducts from './components/sections/AllProducts';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

const App = () => {
  return (
      <div className="min-h-screen bg-neutral-light font-sans">
            <Navigation />
                  <main className="pt-16 lg:pt-20">
                          <Hero />
                                  <Features />
                                          <NewProducts />
                                                  <About />
                                                          <AllProducts />
                                                                  <Testimonials />
                                                                          <CTA />
                                                                                </main>
                                                                                      <Footer />
                                                                                          </div>
                                                                                            );
                                                                                            };

                                                                                            export default App;
// src/components/sections/Hero.jsx
import React from 'react';
import Button from '../common/Button';
import ResponsiveImage from '../common/ResponsiveImage';
import SectionWrapper from '../common/SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="bg-neutral-light pt-0">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-b-lg">
        <ResponsiveImage
          src="/assets/images/hero-beehive.jpg" // Add your hero image
          alt="Beekeeper in a vibrant apiary with sustainable hives"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sustainable Beekeeping Made Simple</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl">Discover premium supplies, expert guidance, and eco-friendly products for your buzzing adventure.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-accent bg-opacity-80 p-4 rounded-md">
              <p className="text-2xl font-bold">7+</p>
              <p>Years Experience</p>
            </div>
            <div className="bg-accent bg-opacity-80 p-4 rounded-md">
              <p className="text-2xl font-bold">2k+</p>
              <p>Happy Customers</p>
            </div>
            <div className="bg-accent bg-opacity-80 p-4 rounded-md">
              <p className="text-2xl font-bold">10k+</p>
              <p>Hives Sold</p>
            </div>
            <div className="bg-accent bg-opacity-80 p-4 rounded-md">
              <p className="text-2xl font-bold">250+</p>
              <p>Resources</p>
            </div>
          </div>
          <Button variant="primary" size="md">Get Started</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
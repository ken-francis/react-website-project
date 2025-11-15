// src/components/sections/About.jsx
import React from 'react';
import ResponsiveImage from '../common/ResponsiveImage';
import SectionWrapper from '../common/SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">The Best Beekeeping Partner Of Your Choice</h2>
          <p className="text-lg text-neutral-dark mb-6">At BeeHive Essentials, we are passionate about supporting beekeepers with innovative, sustainable solutions. Our mission is to promote bee health and honey production while protecting the environment.</p>
          <p className="text-neutral-dark">With years of expertise, we offer a curated selection of products that make beekeeping accessible and enjoyable for all levels.</p>
        </div>
        <div className="lg:w-1/2">
          <ResponsiveImage
            src="/assets/images/about-apiary.jpg"
            alt="Scenic apiary with beehives and flowers"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
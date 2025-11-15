// src/components/sections/Testimonials.jsx
import React from 'react';
import ResponsiveImage from '../common/ResponsiveImage';
import SectionWrapper from '../common/SectionWrapper';

const testimonialsData = [
  {
    name: 'John Beek',
    quote: 'BeeHive Essentials transformed my hobby into a thriving apiary. Their products are top-notch!',
    image: '/assets/images/testimonial-john.jpg',
    alt: 'John Beek, satisfied customer',
  },
  // Add more as needed
];

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-white">
      <h2 className="text-3xl font-bold text-neutral-dark mb-8 text-center">What People Are Saying About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-neutral-light p-6 rounded-lg shadow-md">
            <ResponsiveImage src={testimonial.image} alt={testimonial.alt} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-neutral-dark mb-4 italic">"{testimonial.quote}"</p>
            <p className="text-accent font-semibold text-center">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
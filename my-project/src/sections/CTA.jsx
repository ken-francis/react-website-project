// src/components/sections/CTA.jsx
import React from 'react';
import Button from '../common/Button';
import SectionWrapper from '../common/SectionWrapper';

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="bg-accent text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Get More Discounts Off Your Order</h2>
      <p className="text-lg mb-6">Sign up for our newsletter and receive exclusive offers on beekeeping supplies.</p>
      <div className="max-w-md mx-auto flex">
        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-l-md focus:outline-none" />
        <Button variant="primary" className="rounded-l-none">Subscribe</Button>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
// src/components/common/Card.jsx
import React from 'react';
import Button from './Button';

const Card = ({ title, description, imageSrc, alt, price, discount }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageSrc} alt={alt} className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-neutral-dark mb-2">{title}</h3>
      {description && <p className="text-sm text-neutral-dark mb-2">{description}</p>}
      {price && <p className="text-base font-semibold text-accent mb-2">{price}</p>}
      {discount && <span className="text-sm text-red-500">{discount}% Off</span>}
      <Button variant="outline" size="sm" className="mt-2 w-full">View Details</Button>
    </div>
  </div>
);

export default Card;
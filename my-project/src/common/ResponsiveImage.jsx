// src/components/common/ResponsiveImage.jsx
import React from 'react';

const ResponsiveImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
  );

  export default ResponsiveImage;
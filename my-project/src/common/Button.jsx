// src/components/common/Button.jsx
import React from 'react';

const Button = ({ variant = 'primary', size = 'md', children, className = '', onClick }) => {
  let classes = 'rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent';
  
  if (variant === 'primary') classes += ' bg-primary text-white hover:bg-yellow-600';
  if (variant === 'secondary') classes += ' bg-secondary text-white hover:bg-brown-700';
  if (variant === 'outline') classes += ' border border-primary text-primary hover:bg-yellow-50';
  
  if (size === 'sm') classes += ' px-4 py-2 text-sm';
  if (size === 'md') classes += ' px-6 py-3 text-base';
  
  return (
    <button className={`${classes} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
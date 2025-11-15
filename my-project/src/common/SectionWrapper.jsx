// src/components/common/SectionWrapper.jsx
import React from 'react';

const SectionWrapper = ({ children, id, className = '' }) => (
  <section id={id} className={`py-12 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
            {children}
                </div>
                  </section>
                  );

                  export default SectionWrapper;
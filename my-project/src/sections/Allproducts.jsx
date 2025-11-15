// src/components/sections/AllProducts.jsx
import React from 'react';
import Card from '../common/Card';
import SectionWrapper from '../common/SectionWrapper';

const allProductsData = [
  { title: 'Ceiling Light', imageSrc: '/assets/images/ceiling-light.jpg', alt: 'Bee-themed light', price: '$49.99' }, // Rethemed
  { title: 'Wood Chair', imageSrc: '/assets/images/wood-chair.jpg', alt: 'Hive stand chair', price: '$29.99' },
  { title: 'Pepper Cupboard', imageSrc: '/assets/images/cupboard.jpg', alt: 'Storage for tools', price: '$99.99' },
  { title: 'Sunrise Spring Bed', imageSrc: '/assets/images/bed.jpg', alt: 'Comfort for beekeepers', price: '$199.99' },
  { title: 'Tross Series Bed', imageSrc: '/assets/images/tross-bed.jpg', alt: 'Additional bed', price: '$149.99' },
  { title: 'Multi Bikeman Sofa', imageSrc: '/assets/images/sofa.jpg', alt: 'Relaxation sofa', price: '$249.99' },
  { title: 'Kora Corner Desk', imageSrc: '/assets/images/desk.jpg', alt: 'Desk for planning', price: '$79.99' },
  { title: 'Forest Walker Bed', imageSrc: '/assets/images/forest-bed.jpg', alt: 'Nature-inspired bed', price: '$179.99' },
];

const AllProducts = () => {
  return (
    <SectionWrapper id="products" className="bg-neutral-light">
      <h2 className="text-3xl font-bold text-neutral-dark mb-8 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProductsData.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AllProducts;
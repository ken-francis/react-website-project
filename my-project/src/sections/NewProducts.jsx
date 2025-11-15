// src/components/sections/NewProducts.jsx
import React from 'react';
import Card from '../common/Card';
import SectionWrapper from '../common/SectionWrapper';

const newProductsData = [
  { title: 'Langstroth Hive', imageSrc: '/assets/images/langstroth-hive.jpg', alt: 'Wooden Langstroth beehive', description: 'Durable starter hive' },
    { title: 'Bee Suit', imageSrc: '/assets/images/bee-suit.jpg', alt: 'Protective beekeeping suit', description: 'Ventilated protection' },
      { title: 'Honey Extractor', imageSrc: '/assets/images/honey-extractor.jpg', alt: 'Manual honey extractor', description: 'Easy harvesting' },
        { title: 'Smoker', imageSrc: '/assets/images/smoker.jpg', alt: 'Beekeeping smoker tool', description: 'Calm your bees' },
        ];

        const NewProducts = () => {
          return (
              <SectionWrapper id="new-products" className="bg-neutral-light">
                    <h2 className="text-3xl font-bold text-neutral-dark mb-8 text-center">New In Store</h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                  {newProductsData.map((product, index) => (
                                            <Card key={index} {...product} />
                                                    ))}
                                                          </div>
                                                              </SectionWrapper>
                                                                );
                                                                };

                                                                export default NewProducts;
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'Reef Safe Sunscreen SPF 50+',
      description: 'Protect your skin and the ocean with our biodegradable formula',
      price: 24.99,
      image: '/api/placeholder/400/320'
    },
    {
      id: 2,
      name: 'Natural Sunscreen SPF 30',
      description: 'Light, non-greasy formula for daily use',
      price: 19.99,
      image: '/api/placeholder/400/320'
    },
    {
      id: 3,
      name: 'Kids Sunscreen SPF 50',
      description: 'Gentle formula perfect for sensitive skin',
      price: 22.99,
      image: '/api/placeholder/400/320'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Product Display */}
        <div className="h-full">
          <div className="h-1/2 bg-gray-100">
            <img 
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {products[currentIndex].name}
            </h3>
            
            <p className="text-gray-600 mb-4">
              {products[currentIndex].description}
            </p>
            
            <div className="text-2xl font-bold text-gray-900">
              ${products[currentIndex].price}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fixed Bottom Buy Button */}
      <div className="w-full bg-white border-t border-gray-200 p-4">
        <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors">
          Buy Now - ${products[currentIndex].price}
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
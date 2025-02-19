import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/pagination';

const formatPrice = (price) => {
  const [dollars, cents] = price.toFixed(2).split('.');
  return { 
    dollars, 
    cents: cents === '00' ? '' : cents 
  };
};

const products = [
  {
    id: 1,
    name: 'TikTok Shop Mastery',
    description: 'Learn how I made 7-figures on TikTok Shop',
    price: 997.00,
    image: 'products/tiktok-mastery.webp',
    link: 'https://blaz.ing/tiktok-mastery'
  },
  {
    id: 2,
    name: 'Beach Ready SPF50',
    description: 'Premium sunscreen for year-round protection',
    price: 24.99,
    image: 'products/sunscreen.jpg',
    link: 'https://blaz.ing/beach-ready-spf'
  }
];

export const ProductCarousel = () => {
  return (
    <div className="relative bg-gray-50">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        className="pb-8 md:pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex items-center justify-center py-2 md:py-8">
            <div className="w-full max-w-md mx-auto px-4">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-gray-600 text-lg mt-2">{product.description}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0 text-right">
                      <span className="text-base font-bold text-gray-900">
                        ${formatPrice(product.price).dollars}
                        {formatPrice(product.price).cents && (
                          <sup className="text-[0.7em] font-normal">{formatPrice(product.price).cents}</sup>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.link}
                      className="block w-[95%] mx-auto bg-black text-white py-4 text-center rounded-xl text-lg font-bold hover:bg-gray-800 transition-colors"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

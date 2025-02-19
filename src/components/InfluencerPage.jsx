import React from 'react';
import { Instagram, Twitter, Link } from 'lucide-react';
import { ProductCarousel } from './ProductCarousel';

const InfluencerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header/Bio Section */}
      <div className="w-full max-w-2xl mx-auto pt-4 md:pt-8 px-4">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-2 md:mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
            <img 
              src="profile.jpg" 
              alt="Levi Kov"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Levi Kov</h1>
        </div>

        {/* Bio */}
        <div className="text-center mb-2 md:mb-5">
          <p className="text-gray-700">
            TikTok shop's Final Boss | Ex creator's corner schizo Demon | Free agent
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-2 md:mb-5">
          <a 
            href="https://instagram.com/69kov" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 text-gray-700" />
          </a>
          <a 
            href="https://twitter.com/Not69kov" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 text-gray-700" />
          </a>
          <a 
            href="https://calendly.com/69kov/intro" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link className="w-6 h-6 text-gray-700" />
          </a>
        </div>

        {/* Products Section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 md:mb-4 text-center">
            Levi's Top Picks
          </h2>
          <ProductCarousel />
        </div>

        {/* Featured Links */}
        <div className="mb-5">
          <a 
            href="https://calendly.com/69kov/intro" 
            className="block w-full p-3 text-center bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfluencerPage;

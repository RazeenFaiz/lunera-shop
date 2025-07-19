import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            JOIN THE LUNERA MOVEMENT
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            WHERE STYLE FLOWS EFFORTLESSLY
          </p>
          <Link
            to="/casual-wear"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated collections designed for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Casual Wear */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/Casualwear-icon.webp)',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2 font-serif">CASUAL WEAR</h3>
                    <p className="text-gray-200 mb-4">Effortless style for everyday comfort</p>
                    <Link
                      to="/casual-wear"
                      className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Street Wear */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/streetwear-icon.webp)',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2 font-serif">STREET WEAR</h3>
                    <p className="text-gray-200 mb-4">Urban edge meets contemporary style</p>
                    <Link
                      to="/street-wear"
                      className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Oversized Wear */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/Oversizedwearicon.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2 font-serif">OVERSIZED WEAR</h3>
                    <p className="text-gray-200 mb-4">Comfort redefined with modern silhouettes</p>
                    <Link
                      to="/oversized-wear"
                      className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Grace in Every Thread
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At LUNERA, we believe that clothing is more than fabric—it's an expression of who you are. 
            Our carefully crafted pieces blend contemporary design with timeless elegance, ensuring that 
            every garment tells your unique story with grace and confidence.
          </p>
          <Link
            to="/about"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
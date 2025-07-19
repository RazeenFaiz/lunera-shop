import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const CasualWearPage: React.FC = () => {
  const casualProducts = products.filter(product => product.category === 'casual');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
            CASUAL WEAR
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of effortlessly stylish casual wear, designed for comfort without compromising on elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {casualProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasualWearPage;
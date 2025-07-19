import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const StreetWearPage: React.FC = () => {
  const streetProducts = products.filter(product => product.category === 'street');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
            STREET WEAR
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Urban edge meets contemporary style. Explore our street wear collection designed for the modern trendsetter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {streetProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreetWearPage;
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const OversizedWearPage: React.FC = () => {
  const oversizedProducts = products.filter(product => product.category === 'oversized');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
            OVERSIZED WEAR
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comfort redefined with modern silhouettes. Experience the perfect blend of style and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {oversizedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OversizedWearPage;
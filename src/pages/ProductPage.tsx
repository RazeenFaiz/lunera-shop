import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Minus, Plus, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState('');
  // const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleAddToCart = () => {
    if (!selectedSize ) {
      alert('Please select size ');
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        // color: selectedColor,
        quantity
      }
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                RS {product.price.toLocaleString()}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 border rounded-lg text-center font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {/* <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="space-y-2">
                {product.colors.map(color => (
                  <label key={color} className="flex items-center">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="mr-3"
                    />
                    <span className="text-gray-700">{color}</span>
                  </label>
                ))}
              </div>
            </div> */}

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-lg hover:border-gray-400"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-lg hover:border-gray-400"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {addedToCart ? 'ADDED TO CART!' : 'ADD TO CART'}
              </button>
              
              <button className="w-full py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-colors">
                BUY IT NOW
              </button>
            </div>

            {/* Customer Reviews */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.8 out of 5 stars)</span>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium">Sarah M.</span>
                  </div>
                  <p className="text-gray-600">
                    "Amazing quality and perfect fit! The fabric feels premium and the design is exactly what I was looking for."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
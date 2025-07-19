import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
          <img src="/images/lunera.png" alt="" className="h-14 w-auto mr-2"/>
            {/* <div className="text-2xl font-bold text-gray-900">
              LUNERA
              <div className="text-xs text-gray-600 font-normal tracking-wider">
                GRACE IN EVERY THREAD
              </div>
            </div> */}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Collection
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCollectionOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    to="/casual-wear"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsCollectionOpen(false)}
                  >
                    Casual wear
                  </Link>
                  <Link
                    to="/street-wear"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsCollectionOpen(false)}
                  >
                    Street wear
                  </Link>
                  <Link
                    to="/oversized-wear"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsCollectionOpen(false)}
                  >
                    Oversized wear
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About us
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </form>
            
            <button className="sm:hidden p-2">
              <Search className="h-5 w-5 text-gray-700" />
            </button>

            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
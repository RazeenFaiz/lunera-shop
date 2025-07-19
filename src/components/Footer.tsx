import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    // <footer className="bg-green-800 text-white py-12">
    <footer className="bg-[#7b543d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <div className="space-y-2">
              <p className="text-white-100">
                <span className="font-medium">Phone:</span> +94 76 430 5573 / +94 72 547 5573
              </p>
              <p className="text-white-100">
                <span className="font-medium">Email:</span> lunera@gmail.com
              </p>
              <p className="text-white-100">
                <span className="font-medium">Address:</span> 9/11 Waidhya Road, Dehiwela
              </p>
              <p className="text-white-100">
                <span className="font-medium">Hours:</span> MON - SAT 9:00 - 17:00
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              <a href="/casual-wear" className="block text-white-100 hover:text-white transition-colors">
                Casual Wear
              </a>
              <a href="/street-wear" className="block text-white-100 hover:text-white transition-colors">
                Street Wear
              </a>
              <a href="/oversized-wear" className="block text-white-100 hover:text-white transition-colors">
                Oversized Wear
              </a>
              <a href="/about" className="block text-white-100 hover:text-white transition-colors">
                About Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            {/* <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div> */}

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-[#c2b291] p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-[#c2b291] p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
          </div>
          </div>
        </div>

        {/* <div className="border-t border-green-700 mt-8 pt-8 text-center"> */}
        <div className="border-t border-[#c2b291] mt-8 pt-8 text-center">
          <p className="text-white-100">
            © 2025 LUNERA. All rights reserved. Grace in every thread.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
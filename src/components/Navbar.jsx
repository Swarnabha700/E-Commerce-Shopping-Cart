import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gradient-to-r from-violet-200/80 via-blue-100/80 to-purple-200/80 shadow-md sticky top-0 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>
       
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
            <img className="size-6" src="/shopping-cart.png" alt="" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;

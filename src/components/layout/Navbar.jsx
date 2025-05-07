import React from "react";
import logo from "../../assets/logo.png";
import { Heart, SearchIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex items-center justify-between sm:justify-around bg-primary font-poppins h-20 lg:px-16 shadow-lg rounded-b  w-full container mx-auto px-4 md:px-6 max-w-7xl sticky top-0 z-40">
       <div className="flex items-center">
        <div className="font-bold text-xl text-gray-900">Yigzu</div>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          About
        </Link>
      </nav>
      <div className=" items-center gap-6 hidden md:flex" >
        <div className="bg-secondary flex items-center rounded-md px-3 py-1 h-10">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder-opacity-50 text-sm focus:outline-none w-full"
          />
        </div>
        <SearchIcon size={24} className="cursor-pointer" />
        <Heart size={24} className="cursor-pointer" />
        <ShoppingCart size={24} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import logo from "../../assets/logo.png";
import {
  Search,
  SearchIcon,
  ShoppingCart,
  ShoppingBag,
  Heart,
  Menu,
  X,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" flex items-center justify-between sm:justify-around bg-primary font-poppins h-20 lg:px-16 shadow-lg rounded-b  w-full container mx-auto px-4 md:px-6 max-w-7xl sticky top-0 z-40">
      <Link
          to="/">
            <div className="flex items-center">
        <div className="font-bold text-xl text-gray-900">Yigzu</div>
      </div>
          </Link>
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
        <Link
          to="/login"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Signup
        </Link>
      </nav>

      {/* search and icons */}

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-56 lg:w-72"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <Link
          to="/wishlist"
          className="relative text-gray-600 hover:text-gray-900"
        >
          <Heart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </Link>
        <Link to="/cart" className="relative text-gray-600 hover:text-gray-900">
          <ShoppingBag className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </Link>
        <Link
          to="/account"
          className="text-gray-600 hover:text-gray-900 hidden md:block"
        >
          <User className="h-6 w-6" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="py-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 pt-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-6 top-[72px] h-5 w-5 text-gray-400" />
              </div>
              <nav className="flex flex-col space-y-4">
                  
                <Link
                  to="/account"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-2" />
                  My Account
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

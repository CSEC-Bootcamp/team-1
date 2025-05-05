import React from "react";
import logo from "../../assets/logo.png";
import { Heart, SearchIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-0 flex items-center justify-between bg-primary font-poppins h-20 px-4 md:px-8 lg:px-16 container">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>
      <ul className="flex gap-6 md:gap-12 text-sm md:text-base">
        <Link to="/">
          {" "}
          <li className="hover:text-red-700 cursor-pointer">Home</li>
        </Link>
        <li className="hover:text-gray-700 cursor-pointer">Contact</li>
        <li className="hover:text-gray-700 cursor-pointer">About</li>
        <li className="hover:text-gray-700 cursor-pointer">Signup</li>
      </ul>
      <div className="flex items-center gap-6">
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

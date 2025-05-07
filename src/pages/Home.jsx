import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Promosection from "../components/Promosection";
import ProductPage from "./ProductPage";
// import { Container } from "../components/ui/c";
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="py-12 lg:py-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left mb-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight ">
                Elevate Your Style This Season
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Discover our new collection of premium fashion essentials
                designed for the modern lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="flex items-center justify-center cursor-pointer">
                  Shop New Arrivals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center justify-center cursor-pointer"
                >
                  Explore Collection
                </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://www.figma.com/file/enukksbkrTysqif2Te36M5/image/b26fea69ccfd8aa5825862cdb9604a4fb4930464"
                  alt="Fashion model wearing the latest collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 bg-white shadow-lg rounded-lg md:max-w-xs hidden md:block">
                <p className="font-medium text-gray-900 mb-1">
                  Summer Collection
                </p>
                <p className="text-sm text-gray-600 mb-2">Starting at $59.99</p>
                <Link
                  to="/products"
                  className="text-blue-600 text-sm font-medium hover:underline flex items-center cursor-pointer"
                >
                  Shop Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
 
      
      <Promosection/>
      {/* <ProductPage/> */}
      <div className="relative h-[90vh] bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://www.figma.com/file/enukksbkrTysqif2Te36M5/image/b26fea69ccfd8aa5825862cdb9604a4fb4930464)",
          }}
        />
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Discover quality products for every need
            </h1>

            <p className="text-lg text-slate-200 mb-8">
              Simple, elegant shopping experience with carefully curated
              products.
            </p>
            <Link to="/products">
              <button class="bg-black cursor-pointer text-white px-6 py-3 rounded-2xl shadow-lg hover:caret-amber-400  hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                Browse Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Shop with confidence
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Our carefully selected products are designed to meet your needs with
            quality and reliability.
          </p>

          <Link to="/products">
            <button size="lg">View All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

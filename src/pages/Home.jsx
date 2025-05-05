import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[70vh] bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
            <button class="bg-red-500 cursor-pointer text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold">
  Browse Products
</button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

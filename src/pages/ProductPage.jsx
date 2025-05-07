import React from "react";
import ProductCard from "../components/product/ProductCard";
import { ArrowLeft, ArrowRight, Telescope } from "lucide-react";
import ProductCard2 from "../components/product/ProductCard2";
export default function ProductPage() {
  const product = {
    name: "Tea Cup",
    image:
      "https://media.istockphoto.com/id/1656300567/photo/tea-cup-with-teabag-teatime-creative-concepts.webp?a=1&b=1&s=612x612&w=0&k=20&c=sHsRYAoV-j_49x9JGB3NqOBGgzDJj0_hpX0qbuBzcOo=",
    catagory: "Home Utilities",
    price: "250",
    Stock: 6,
    slug: "tea-cup",
  };
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="flex font-bold text-2xl mb-2 text-black px-4 md:px-8 lg:px-5">
        Explore our products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <ProductCard product={product} />
        {/* <ProductCard2 product={product}/> */}
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  );
}

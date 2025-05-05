import React from "react";
import ProductCard from "../components/product/ProductCard";
import { ArrowLeft, ArrowRight, Telescope } from "lucide-react";
export default function ProductPage() {
  const product = {
    name: "Tea Cup",
    image:
      "https://media.istockphoto.com/id/1656300567/photo/tea-cup-with-teabag-teatime-creative-concepts.webp?a=1&b=1&s=612x612&w=0&k=20&c=sHsRYAoV-j_49x9JGB3NqOBGgzDJj0_hpX0qbuBzcOo=",
    catagory: "Home Utilities",
    price: "250",
    Stock: 7,
    slug: "tea-cup",
  };
  return (
    <div>
      <h1 className="flex font-bold text-2xl mb-2 text-red-600">
        Explore our products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-3 sm:px-1 md:px-3 lg:px-5">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  );
}

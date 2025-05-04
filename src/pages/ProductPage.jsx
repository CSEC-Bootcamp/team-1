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
      <h1 className="flex font-bold text-2xl mb-2">
        <Telescope className="mr-2 " />
        Explore our products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full px-3 sm:px-5 md:px-10 lg:px-20">
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

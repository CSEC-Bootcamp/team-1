import React from "react";
import { Link } from "react-router-dom";
import { Badge, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductCard2({ product }) {
  const { name, image, catagory, price, Stock, slug } = product;
  const isLowInStock = Stock <= 5;
  return (
    <Link to={`/product/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-3">
        {/* Discount badge */}
        {/* {product.discount && (
          <Badge variant="sale" className="absolute top-2 left-2 z-10">
            {product.discount}% OFF
          </Badge>
        )} */}
        {isLowInStock && <Badge variant="sale" className="absolute top-2 left-2 z-10">only {Stock} remaining!</Badge>}
        {/* New badge */}
        {
          <Badge  className="absolute top-2 left-2 z-10">
            NEW
          </Badge>
        }

        {/* Wishlist button */}
        <button
          className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className="h-5 w-5 text-gray-600"
          />
        </button>

        {/* Product image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Quick add overlay */}
        <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="primary"
            fullWidth
            className="shadow-lg bg-opacity-90"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-gray-900 text-base mb-1">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="font-semibold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {price && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

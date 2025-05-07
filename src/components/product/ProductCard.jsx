import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product }) {
  const { id ,name, image, catagory, price, Stock, slug } = product;
  const isLowInStock = Stock <= 5;
  return (
    <Link to={`/products/${id}`} className="product-link group block" >
    <Card className="pt-0 hover:shadow-gray-700 font-poppins group block">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rounded-2xl rounded-2xl"
          />
        </div>
      </CardHeader>
      <CardContent className="p-1">
        
        <h3 className="font-medium text-gray-900 text-base mb-1">
          {product.name}
        </h3>
        <CardDescription className="mt-1 mb-1 pl-2">{catagory}</CardDescription>
        <div className="flex font-bold pl-2">
          <span>ETB{price}</span>
          <div className="bg-black rounded-2xl text-white font-bold ml-10">
            {isLowInStock && <Badge>only {Stock} remaining!</Badge>}
          </div>
        </div>
      </CardContent>
      <Link to={`/products/${slug}`} className="product-link">
        <div className="">
        <Button  variant= "primary" className=" bg-black w-full text-white shadow-lg ">
          <ShoppingBag /> Add to cart
        </Button>
        </div>
      </Link>
    </Card>
    </Link>
  );
}

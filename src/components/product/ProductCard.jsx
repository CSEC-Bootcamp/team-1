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
  const { name, image, catagory, price, Stock, slug } = product;
  const isLowInStock = Stock <= 5;
  return (
    <Card className="pt-0 hover:shadow-gray-300 border-b-gray-500">
      <CardHeader className="p-0">
        <Link to={`/products/${slug}`} className="product-link">
          <AspectRatio ratio={4 / 3}>
            <img
              src={image}
              alt={name}
              className="w-full object-cover h-full rounded-t-md "
            />
          </AspectRatio>
        </Link>
      </CardHeader>
      <CardContent className="p-1">
        <Link to={`/products/${slug}`} className="product-link">
          <CardTitle className="font-bold pl-2">{name}</CardTitle>
        </Link>
        <CardDescription className="mt-1 mb-1 pl-2">{catagory}</CardDescription>
        <div className="flex font-bold pl-2">
          <span>ETB{price}</span>
          <div className="bg-red-600 rounded-2xl text-white font-bold ml-10">
            {isLowInStock && <Badge>only {Stock} remaining!</Badge>}
          </div>
        </div>
      </CardContent>
      <Link to={`/products/${slug}`} className="product-link">
        <Button className=" bg-red-600 w-full text-white ">
          <ShoppingBag /> Add to cart
        </Button>
      </Link>
    </Card>
  );
}

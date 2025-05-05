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
  const isLowInStock = Stock <= "5";
  return (
    <Card className="pt-0 hover:shadow-gray-400">
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
          <CardTitle className="font-bold">{name}</CardTitle>
        </Link>
        <CardDescription className="m-1">{catagory}</CardDescription>
        <div className="flex">
          <span>ETB{price}</span>
          <div className="">
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

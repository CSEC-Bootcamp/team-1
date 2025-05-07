import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// import { Container } from '@/components/ui/Container';
// import { Button } from '@/components/ui/Button';
// import { Badge } from '@/components/ui/Badge';
import { Heart, Minus, Plus, Share, Truck, RotateCcw, Check } from 'lucide-react';
import { products } from '../../Data/products';

import { Button } from '../ui/button';
import Container from '../ui/Container';
import Layout from '../ui/layout';
import { Badge } from '../ui/badge';

function ProductDetail() {
    const { productId } = useParams(); 
    const navigate = useNavigate();
    console.log("productId is "+productId)
    
    const product = products.find(p => p.id === productId);
    console.log("product"+ product.id)
    
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <Container className="py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </Container>
      </Layout>
    );
  }

 
  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decrementQuantity = () => {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  };

  // Get related products (same category)
//   const relatedProducts = products
//     .filter(p => p.category === product.category && p.id !== product.id)
//     .slice(0, 4);

  return (
    <Layout>
      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center text-yellow-400">
                {'★'.repeat(Math.floor(product.ratingCount))}
                {product.ratingCount % 1 >= 0.5 ? '★' : ''}
                <span className="text-gray-300">{'★'.repeat(5 - Math.ceil(product.ratingCount))}</span>
                <span className="ml-1 text-gray-600 text-sm">({product.ratingCount})</span>
              </div>

              {product.stock >= 5 ? (
                <Badge variant="success" className="flex items-center text-green-400">
                  <Check className="h-3 w-3 mr-1" />
                  In Stock
                </Badge>
              ) : (
                <Badge variant="error" className="text-red-500">Out of Stock</Badge>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                {/* {product.price && (
                  <span className="ml-2 text-gray-500 line-through">${product.price.toFixed(2)}</span>
                )} */}
                {/* {product.di && (
                  <Badge variant="sale" className="ml-3">
                    {product.discount}% OFF
                  </Badge>
                )} */}
              </div>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

           

            

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  className="w-10 h-10 rounded-l border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="w-12 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 rounded-r border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-4 mb-6">
              <Button  fullWidth>
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="px-4  hover:bg-red-50"
              >
                <Heart className="h-5 w-5 fill-red-500" />
              </Button>
              <Button
                variant="outline"
                className="px-4"
                aria-label="Share product"
              >
                <Share className="h-5 w-5" />
              </Button>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Free Shipping</h4>
                    <p className="text-sm text-gray-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Easy Returns</h4>
                    <p className="text-sm text-gray-600">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {/* {relatedProducts.length > 0 && (
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
            <Pro products={relatedProducts} columns={4} />
          </div>
        )} */}
      </Container>
    </Layout>
  );
};

export default ProductDetail
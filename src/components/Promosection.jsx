import React from 'react'
import { Button } from './ui/button'

function Promosection() {
  return (
    <section className="py-16 bg-black text-white">
      <div  className='container mx-auto px-4 md:px-6 max-w-7xl'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Summer Sale Up To 50% Off
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Limited time offer on our most popular seasonal items. Refresh your wardrobe with the latest trends at amazing prices.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-opacity-50"
            >
              Shop the Sale
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl text-black font-bold mb-2">Free Shipping</h3>
              <p className="text-black">On all orders over $50</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-black">30-Day Returns</h3>
              <p className="text-black">Hassle-free return policy</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-black">New Arrivals</h3>
              <p className="text-black">Fresh styles weekly</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-black">Member Discount</h3>
              <p className="text-black">15% off for members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promosection
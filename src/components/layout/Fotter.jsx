import {
  Copyright,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

function Fotter() {
  return (
    <div className="bg-gray-700 text-neutral-50 text-base font-normal font-Poppins p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h1 className="text-lg font-bold mb-2">Follow us on social media:</h1>
          <div className="flex gap-4">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedinIcon />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">Subscribe</h1>
          <p>Get 10% off on your first cart.</p>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">Support</h1>
          <p>Email: YigzuSupport@gmail.com</p>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">Contact us:</h1>
          <p>Phone: +251-923-445-687</p>
        </div>
      </div>
      <div>
        <hr className="border-t border-gray-300 my-8" />
        <p className="text-gray-100 ">
          <Copyright />
          copyright Rimel 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Fotter;

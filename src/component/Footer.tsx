import React from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div className="flex items-end">
          <img
            src="/logo.png"
            alt="logo"
            className="w-40 h-40 object-contain "
          />
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold text-lg mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Help + FAQ</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Wholesale</li>
            <li className="hover:text-white cursor-pointer">Fuel Your Office</li>
          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <h3 className="font-bold text-lg mb-4">ACCOUNT + ORDERS</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Your Account</li>
            <li className="hover:text-white cursor-pointer">Shipping + Delivery</li>
            <li className="hover:text-white cursor-pointer">Subscription</li>
            <li className="hover:text-white cursor-pointer">Track Your Order</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-bold text-lg mb-4">LEGAL</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Terms + Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">PROP 65</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
<div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-4 items-center">

  {/* EMPTY LEFT SPACE (to match layout balance) */}
  <div className="hidden md:block"></div>

  {/* COPYRIGHT (CENTER UNDER MIDDLE) */}
  <div className="text-center md:col-span-2">
    <p className="text-gray-400 text-sm">
      © 2026, Death Wish Coffee. All rights reserved.
    </p>
  </div>

  {/* SOCIAL (RIGHT) */}
  <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
    <h4 className="font-semibold mb-3">GET WIRED WITH US</h4>

    <div className="flex gap-5 text-2xl">
  
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagramSquare className="hover:text-pink-500 cursor-pointer transition" />
  </a>

  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
  </a>

  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitterSquare className="hover:text-sky-400 cursor-pointer transition" />
  </a>

</div>
</div>

</div>
    </footer>
  )
}

export default Footer
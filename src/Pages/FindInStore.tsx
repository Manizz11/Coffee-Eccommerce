import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";

const FindInStore = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">

     
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        FIND DEATH WISH COFFEE NEAR YOU
      </h1>

      {/* MAIN GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2 space-y-6">

          {/* SEARCH BAR */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full border border-white rounded-full px-10 py-2 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
          </div>

          {/* FORMAT DROPDOWN */}
          <div>
            <h3 className="font-bold mb-2 uppercase">Format</h3>
            <select className="w-1/2 bg-black border border-white p-2">
              <option>Cold Brew</option>
              <option>Ground</option>
              <option>Whole Bean</option>
              <option>Instant</option>
            </select>
          </div>

          {/* PRODUCT CARD SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Product 1 */}
            <div className="border border-white p-3 flex gap-3">
              <img
                src="https://via.placeholder.com/80"
                className="w-20 h-20 object-cover"
              />
              <p className="font-semibold">
                Organic Cold Brew Coffee, Unsweetened
              </p>
            </div>

            {/* Product 2 */}
            <div className="border border-white p-3 flex gap-3">
              <img
                src="https://via.placeholder.com/80"
                className="w-20 h-20 object-cover"
              />
              <p className="font-semibold">
                Dark Roast Cold Brew Bottle
              </p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-6">

          {/* LOCATION INPUT */}
          <div className="relative">
            <input
              type="text"
              placeholder="Washington D.C"
              className="w-full border border-white px-10 py-2 bg-black text-white placeholder-gray-400"
            />
            <GrLocationPin className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
          </div>

          {/* TOGGLE BUTTONS */}
          <div className="flex border border-white">
            <button className="w-1/2 py-2 bg-white text-black font-bold">
              ONLINE
            </button>
            <button className="w-1/2 py-2">
              IN STORE
            </button>
          </div>

          {/* MAP BOX */}
          <div className="h-[300px] bg-gray-800 flex items-center justify-center">
            MAP AREA
          </div>

          {/* STORE LIST */}
          <div className="space-y-4">

            <div className="border border-white p-3">
              <p className="font-bold">Wegmans Food Market</p>
              <p className="text-sm text-gray-300">
                41 Ridge Sq NW, Washington DC
              </p>
              <button className="mt-2 bg-red-500 px-3 py-1 text-sm">
                DIRECTIONS
              </button>
            </div>

            <div className="border border-white p-3">
              <p className="font-bold">Whole Foods Market</p>
              <p className="text-sm text-gray-300">
                150 Stovall St, Alexandria VA
              </p>
              <button className="mt-2 bg-red-500 px-3 py-1 text-sm">
                DIRECTIONS
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default FindInStore;
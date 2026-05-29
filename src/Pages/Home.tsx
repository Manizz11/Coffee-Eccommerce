import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductContent from "../section/ProductContent";

const slides = [
  "/PowerSurge_Banner.webp",
  "/background2.png",
  "/BabaYaga.webp"
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[700px] overflow-hidden">

        {/* Background Slider */}
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Content */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl mt-20 text-white text-left">

              <h1 className="text-[65px] font-bold">
                WHEN LIFE SURGES, SO
              </h1>
              <h1 className="text-[65px] font-bold">DO YOU</h1>
              <h1 className="text-[65px] font-bold">STRONG COFFEE</h1>

              <p className="mt-4 text-lg text-white/80">
                Born from the elements and built for endurance, this naturally high caffeine brew is here to help you harness your inner storm with merch to match.
              </p>

              <div className="flex gap-4 mt-6">
                <NavLink
                  to="/coffee"
                  className="bg-red-600 border-2 border-red-600 py-2 px-6 hover:bg-transparent transition"
                >
                  SHOPE POWER SURGE
                </NavLink>

                <NavLink
                  to="/merch"
                  className="bg-red-600 border-2 border-red-600 py-2 px-6 hover:bg-transparent transition"
                >
                  LEARN MORE
                </NavLink>
              </div>

              

            </div>
          </div>
        </div>
      </div>
        <h1 className="text-[65px] font-bold text-center mt-16 text-white font-display">
                NEW ARRIVALS
              </h1>
      {/* PRODUCT SECTION (MOVED OUTSIDE HERO) */}
      <ProductContent />
    </>
  );
};

export default Home;
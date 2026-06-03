import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductContent from "../section/ProductContent";

const slides = ["/PowerSurge_Banner.webp", "/background2.png", "/BabaYaga.webp"];

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
      {/* HERO */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl mt-16 lg:mt-20 text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-[65px] font-bold leading-tight">
                WHEN LIFE SURGES, SO DO YOU
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold mt-2">STRONG COFFEE</h2>
              <p className="mt-4 text-sm sm:text-base text-white/80 max-w-md">
                Born from the elements and built for endurance, this naturally high caffeine brew is here to help you harness your inner storm.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <NavLink to="/coffee" className="bg-red-600 border-2 border-red-600 py-2 px-5 text-sm font-bold hover:bg-transparent transition">
                  SHOP COFFEE
                </NavLink>
                <NavLink to="/merch" className="bg-red-600 border-2 border-red-600 py-2 px-5 text-sm font-bold hover:bg-transparent transition">
                  SHOP MERCH
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-[55px] font-bold text-center mt-12 mb-8 text-white font-display px-4">
        NEW ARRIVALS
      </h1>
      <ProductContent />
    </>
  );
};

export default Home;

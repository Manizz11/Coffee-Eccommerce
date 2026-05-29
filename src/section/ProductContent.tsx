import React, { useRef } from "react";
import { products } from "../data/Product";
import ProductCard from "../component/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductContent = ({ view = "scroll" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (view === "scroll") {
    return (
      <div className="relative max-w-7xl mx-auto px-4">

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full z-10 hover:bg-black"
        >
          <FaChevronLeft />
        </button>

        {/* Scroll Area (NO SCROLLBAR) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-10"
          style={{ scrollbarWidth: "none" }}
        >
          {products.slice(0, 10).map((product) => (
            <div key={product.id} className="min-w-[30%] flex-shrink-0">
              <ProductCard data={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full z-10 hover:bg-black"
        >
          <FaChevronRight />
        </button>
      </div>
    );
  }

  // GRID fallback (product page)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductContent;
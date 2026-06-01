import React, { useRef, useState } from "react";
import { products } from "../data/Product";
import ProductCard from "../component/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductContent = ({ view = "scroll", filter }: { view?: string; filter?: "coffee" | "merch" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sort, setSort] = useState("");

  const filtered = filter ? products.filter((p) => p.type === filter) : products;

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

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
          {sorted.slice(0, 10).map((product) => (
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
    <div>
      {/* Sort Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-zinc-900 text-white border border-zinc-700 px-4 py-2 rounded-lg focus:outline-none focus:border-red-600 cursor-pointer"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sorted.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContent;
import React, { useState } from "react";
import { blogs } from "../data/Blog";

const Blog = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toogleReadMore=(id:number)=>{
   setExpandedId(prev=> prev===id ? null: id)
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <img
          src="/banner.jpg"
          alt="Blog Banner"
          className="h-140 w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col mt-80 mx-1 justify-center text-start">
          <h1 className="font-bold text-5xl text-white font-display">
            THE VOID
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Take a break from the daily grind and scroll killer content.
          </p>
        </div>
      </div>

      {/* Category buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {[
          "ALL",
          "NEWS",
          "EVENTS",
          "INSTAGRAM",
          "TIKTOK",
          "COFFEE",
          "RECIPES",
          "LIFESTYLE",
          "DEATHCAST",
        ].map((item) => (
          <button
            key={item}
            className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {blogs.map((blog) => {
          const isExpanded = expandedId === blog.id;

          return (
            <div
              key={blog.id}
              className="bg-black text-white rounded-lg overflow-hidden shadow-md p-4"
            >
              <h3 className="text-lg mb-2 font-bold">{blog.title}</h3>

              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-md mb-2"
              />

              
              <p
                className={`text-gray-300 text-sm ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {blog.content}
              </p>
               <div className="flex justify-end">
              <button
                className="mt-4 bg-red-500 hover:bg-red-600 text-white  py-2 px-4 rounded transition j "
                onClick={() => toogleReadMore(blog.id)}
              >
                {isExpanded? "Read Less":"Read More"}
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );  
};

export default Blog;
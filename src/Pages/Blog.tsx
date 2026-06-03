import React from "react";
import {blogs} from "../data/Blog";
const Blog = () => {
  return (
    <div>
      {/* HERO */}
      <div className="relative">
        <img
          src="/banner.jpg"
          alt="Blog Banner"
          className="h-140 w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col mt-80 mx-10 justify-center text-start bg-black/50">
          <h1 className="font-bold text-5xl text-white font-display">
            THE VOID
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Take a break from the daily grind and scroll killer content.
          </p>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          ALL
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          NEWS
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          EVENTS
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          INSTAGRAM
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          TIKTOK
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          COFFEE
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          RECIPES
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          LIFESTYLE
        </button>
        <button className="border font-bold border-white hover:bg-red-500 hover:text-white px-4 py-2">
          DEATHCAST
        </button>
      </div>
      {/* BLOG POSTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-500 font-bold text-sm">{blog.category}</span>
                <span className="text-gray-400 text-sm">{blog.date}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{blog.title}</h2>
              <p className="text-gray-300 mb-4 line-clamp-3">{blog.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">By {blog.author}</span>
                <button className="text-red-500 hover:text-red-400 font-bold text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}'
        
      </div>
    </div>
  );
};

export default Blog;
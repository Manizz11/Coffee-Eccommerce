import React from 'react'
import type { ProductType } from '../data/Product'
import CartContext from '../context/cartContext.ts'

const ProductCard = ({ data }: { data: ProductType }) => {
  const [count, setCount] = React.useState(0)

  const { addToCart } = React.useContext(CartContext)

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(data, count)
      setCount(0)
    }
  }

  return (
    <div className="bg-black text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        
        {/* Product Name */}
        <h2 className="text-xl font-extrabold uppercase tracking-wide">
          {data.name}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {data.description}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-white">
            ${data.price}
          </span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-6">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
              className="bg-red-500 px-3 py-1 font-bold rounded border-2 border-transparent hover:border-red-800 hover:bg-black transition duration-300"
            >
              -
            </button>

            <span className="text-lg font-bold min-w-[20px] text-center">
              {count}
            </span>

            <button
              onClick={() => setCount(count + 1)}
              className="bg-red-500 px-3 py-1 font-bold rounded border-2 border-transparent hover:border-red-800 hover:bg-black transition duration-300"
            >
              +
            </button>
          </div>

          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-black border-2 border-red-600  hover:bg-red-600 px-5 py-2 rounded-lg font-semibold tracking-wide transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
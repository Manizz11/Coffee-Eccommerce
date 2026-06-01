import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/Product'
import CartContext from '../context/cartContext'
import Stars from '../component/Stars'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [count, setCount] = React.useState(1)
  const { addToCart } = React.useContext(CartContext)

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-2xl">Product not found.</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, count)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-white/50 hover:text-white text-sm mb-8 transition"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-4xl font-bold uppercase">{product.name}</h1>

            <Stars rating={4.5} />

            <p className="text-white/60 text-base leading-relaxed">{product.description}</p>

            <p className="text-3xl font-bold text-white">${product.price}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="bg-zinc-800 hover:bg-red-600 text-white w-9 h-9 flex items-center justify-center rounded transition font-bold"
              >-</button>
              <span className="text-lg font-bold min-w-[24px] text-center">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-zinc-800 hover:bg-red-600 text-white w-9 h-9 flex items-center justify-center rounded transition font-bold"
              >+</button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-red-600 hover:bg-red-700 transition py-3 px-10 font-bold uppercase tracking-wide w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

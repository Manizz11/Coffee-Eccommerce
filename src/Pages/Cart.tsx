import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/cartContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0)

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 pt-20">
        <h1 className="text-4xl font-bold uppercase">Your Cart is Empty</h1>
        <p className="text-white/60">Looks like you haven't added anything yet.</p>
        <NavLink
          to="/coffee"
          className="bg-red-600 hover:bg-red-700 transition px-8 py-3 font-bold uppercase tracking-wide"
        >
          Shop Now
        </NavLink>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold uppercase mb-10">Your Cart</h1>

        {/* Cart Items */}
        <div className="flex flex-col gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-zinc-900 rounded-xl p-4 border border-zinc-800"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-lg font-bold uppercase">{item.name}</h2>
                <p className="text-white/50 text-sm mt-1">{item.description}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-white/70">
                  <span>Qty: <span className="text-white font-semibold">{item.quantity}</span></span>
                  <span>Price: <span className="text-white font-semibold">${item.price}</span></span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-white">${item.totalPrice}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-red-500 hover:text-red-400 text-sm transition"
                >
                  <MdDelete className='h-6 text-2xl w-15' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="mt-10 border-t border-zinc-700 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <button
            onClick={clearCart}
            className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-2 transition font-semibold uppercase"
          >
            Clear Cart
          </button>

          <div className="text-right">
            <p className="text-white/60 text-sm uppercase tracking-wide">Order Total</p>
            <p className="text-3xl font-bold mt-1">${total}</p>
            <button onClick={() => navigate('/checkout')} className="mt-4 bg-red-600 hover:bg-red-700 transition px-10 py-3 font-bold uppercase tracking-wide">
              Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart

import React, { useContext } from 'react'
import CartContext from '../context/cartContext'
import { FiX, FiTrash2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const CartDrawer = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0)

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[150]"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-zinc-950 border-l border-zinc-800 z-[200] flex flex-col transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
          <h2 className="text-white font-bold text-xl uppercase tracking-widest">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-white hover:text-red-500 transition text-2xl">
            <FiX />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-5">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-white/40 gap-3">
              <p className="text-lg uppercase tracking-wide">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 items-center border-b border-zinc-800 pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white font-semibold uppercase text-sm">{item.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-zinc-800 hover:bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded transition"
                    >-</button>
                    <span className="text-white text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-zinc-800 hover:bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded transition"
                    >+</button>
                  </div>
                  <p className="text-white font-bold mt-1">${item.totalPrice}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-400 text-lg transition"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-zinc-800 flex flex-col gap-3">
            <div className="flex justify-between text-white text-lg font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button
              onClick={() => { setIsCartOpen(false); navigate('/cart') }}
              className="w-full bg-red-600 hover:bg-red-700 transition py-3 font-bold uppercase tracking-wide text-white"
            >
              View Cart
            </button>
            <button className="w-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition py-3 font-bold uppercase tracking-wide">
              Checkout
            </button>
            <button onClick={clearCart} className="text-white/40 hover:text-white text-sm text-center transition">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer

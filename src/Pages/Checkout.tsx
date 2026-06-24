import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../context/cartContext'

type ShippingForm = {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  country: string
}

type PaymentForm = {
  cardName: string
  cardNumber: string
  expiry: string
  cvv: string
}

const steps = ['Cart', 'Shipping', 'Payment', 'Confirm']

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext)
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const [shipping, setShipping] = useState<ShippingForm>({
    fullName: '', email: '', phone: '', address: '', city: '', state: '', zip: '', country: ''
  })

  const [payment, setPayment] = useState<PaymentForm>({
    cardName: '', cardNumber: '', expiry: '', cvv: ''
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
  const shippingCost = subtotal > 50 ? 0 : 5.99
  const tax = parseFloat((subtotal * 0.08).toFixed(2))
  const total = parseFloat((subtotal + shippingCost + tax).toFixed(2))

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value })
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({ ...payment, [e.target.name]: e.target.value })
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { fullName, email, address, city, state, zip, country } = shipping
    if (fullName && email && address && city && state && zip && country) setStep(2)
    else alert('Please fill in all required fields.')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { cardName, cardNumber, expiry, cvv } = payment
    if (cardName && cardNumber && expiry && cvv) setStep(3)
    else alert('Please fill in all payment fields.')
  }

  const handlePlaceOrder = () => {
    clearCart()
    setStep(4)
  }

  const inputClass = "w-full bg-zinc-900 border border-zinc-700 focus:border-red-600 focus:outline-none text-white px-4 py-3 rounded-lg text-sm placeholder-zinc-500 transition"
  const labelClass = "block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1"

  if (cartItems.length === 0 && step !== 4) {
    navigate('/coffee')
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition ${
                  i <= step ? 'bg-red-600 border-red-600 text-white' : 'bg-transparent border-zinc-700 text-zinc-500'
                }`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className={`text-[10px] mt-1 uppercase tracking-wider ${i <= step ? 'text-white' : 'text-zinc-600'}`}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-[2px] w-16 sm:w-24 mx-1 mb-4 transition ${i < step ? 'bg-red-600' : 'bg-zinc-700'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT: Steps */}
          <div className="lg:col-span-2">

            {/* STEP 1 — SHIPPING */}
            {step === 1 && (
              <form onSubmit={handleShippingSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold uppercase mb-6">Shipping Information</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input name="fullName" value={shipping.fullName} onChange={handleShippingChange} placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input name="email" type="email" value={shipping.email} onChange={handleShippingChange} placeholder="john@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input name="phone" value={shipping.phone} onChange={handleShippingChange} placeholder="+1 234 567 8900" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Country *</label>
                    <select name="country" value={shipping.country} onChange={handleShippingChange} className={inputClass}>
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Street Address *</label>
                  <input name="address" value={shipping.address} onChange={handleShippingChange} placeholder="123 Main St" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>City *</label>
                    <input name="city" value={shipping.city} onChange={handleShippingChange} placeholder="New York" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>State *</label>
                    <input name="state" value={shipping.state} onChange={handleShippingChange} placeholder="NY" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>ZIP Code *</label>
                    <input name="zip" value={shipping.zip} onChange={handleShippingChange} placeholder="10001" className={inputClass} />
                  </div>
                </div>

                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition py-3 font-bold uppercase tracking-widest mt-4">
                  Continue to Payment
                </button>
              </form>
            )}

            {/* STEP 2 — PAYMENT */}
            {step === 2 && (
              <form onSubmit={handlePaymentSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold uppercase mb-6">Payment Details</h2>

                <div className="flex gap-3 mb-4">
                  {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((c) => (
                    <span key={c} className="border border-zinc-700 text-zinc-400 text-xs font-bold px-3 py-1 rounded">{c}</span>
                  ))}
                </div>

                <div>
                  <label className={labelClass}>Name on Card *</label>
                  <input name="cardName" value={payment.cardName} onChange={handlePaymentChange} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Card Number *</label>
                  <input name="cardNumber" value={payment.cardNumber} onChange={handlePaymentChange} placeholder="1234 5678 9012 3456" maxLength={19} className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Expiry Date *</label>
                    <input name="expiry" value={payment.expiry} onChange={handlePaymentChange} placeholder="MM/YY" maxLength={5} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>CVV *</label>
                    <input name="cvv" value={payment.cvv} onChange={handlePaymentChange} placeholder="123" maxLength={4} className={inputClass} />
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <button type="button" onClick={() => setStep(1)} className="w-full border border-zinc-700 hover:border-red-600 text-white py-3 font-bold uppercase tracking-widest transition">
                    Back
                  </button>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition py-3 font-bold uppercase tracking-widest">
                    Review Order
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3 — REVIEW */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold uppercase mb-6">Review Your Order</h2>

                {/* Shipping Summary */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold uppercase tracking-wide text-sm">Shipping To</h3>
                    <button onClick={() => setStep(1)} className="text-red-500 text-xs hover:text-red-400 transition">Edit</button>
                  </div>
                  <p className="text-white/70 text-sm">{shipping.fullName}</p>
                  <p className="text-white/70 text-sm">{shipping.address}, {shipping.city}, {shipping.state} {shipping.zip}</p>
                  <p className="text-white/70 text-sm">{shipping.country} · {shipping.email}</p>
                </div>

                {/* Payment Summary */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold uppercase tracking-wide text-sm">Payment</h3>
                    <button onClick={() => setStep(2)} className="text-red-500 text-xs hover:text-red-400 transition">Edit</button>
                  </div>
                  <p className="text-white/70 text-sm">Card ending in {payment.cardNumber.slice(-4)}</p>
                  <p className="text-white/70 text-sm">{payment.cardName}</p>
                </div>

                {/* Items */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-6">
                  <h3 className="font-bold uppercase tracking-wide text-sm mb-4">Items ({cartItems.length})</h3>
                  <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-bold uppercase">{item.name}</p>
                          <p className="text-white/50 text-xs">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-bold text-sm">${item.totalPrice}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="w-full border border-zinc-700 hover:border-red-600 text-white py-3 font-bold uppercase tracking-widest transition">
                    Back
                  </button>
                  <button onClick={handlePlaceOrder} className="w-full bg-red-600 hover:bg-red-700 transition py-3 font-bold uppercase tracking-widest">
                    Place Order
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 — CONFIRMATION */}
            {step === 4 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-4xl">
                  ✓
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4">Order Placed!</h2>
                <p className="text-white/60 mb-2">Thank you, {shipping.fullName}!</p>
                <p className="text-white/50 text-sm mb-8">A confirmation has been sent to <span className="text-white">{shipping.email}</span></p>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 max-w-sm mx-auto text-left mb-8">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Order Summary</p>
                  <div className="flex justify-between text-sm mb-1"><span className="text-white/60">Subtotal</span><span>${subtotal}</span></div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-white/60">Shipping</span><span>{shippingCost === 0 ? 'FREE' : `$${shippingCost}`}</span></div>
                  <div className="flex justify-between text-sm mb-3"><span className="text-white/60">Tax (8%)</span><span>${tax}</span></div>
                  <div className="flex justify-between font-bold border-t border-zinc-700 pt-3"><span>Total</span><span className="text-red-500">${total}</span></div>
                </div>
                <button onClick={() => navigate('/')} className="bg-red-600 hover:bg-red-700 transition px-10 py-3 font-bold uppercase tracking-widest">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: Order Summary */}
          {step < 4 && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit sticky top-28">
              <h3 className="font-bold uppercase tracking-widest text-sm mb-5">Order Summary</h3>

              <div className="flex flex-col gap-4 mb-5">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <p className="flex-1 text-xs font-semibold uppercase leading-tight">{item.name}</p>
                    <p className="text-sm font-bold">${item.totalPrice}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-700 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span><span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? <span className="text-green-400">FREE</span> : `$${shippingCost}`}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Tax (8%)</span><span>${tax}</span>
                </div>
                <div className="flex justify-between font-bold text-base border-t border-zinc-700 pt-3 mt-2">
                  <span>Total</span><span className="text-red-500">${total}</span>
                </div>
              </div>

              {subtotal < 50 && (
                <p className="text-xs text-white/40 mt-4 text-center">
                  Add <span className="text-white">${(50 - subtotal).toFixed(2)}</span> more for free shipping
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Checkout

import React from 'react'
import ProductContent from '../section/ProductContent'

const Coffee = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold uppercase mb-10 text-center">Our Coffees</h1>
        <ProductContent view="grid" filter="coffee" />
      </div>
    </div>
  )
}

export default Coffee

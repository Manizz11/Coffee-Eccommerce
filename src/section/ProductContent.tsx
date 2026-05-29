import React from 'react'
import { products } from '../data/Product'
import ProductCard from '../component/ProductCard'

const ProductContent = () => {
  return (
    <div className='container mx-auto py-4 px-4'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
            products.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))}
        </div>
           
      
    </div>

  )
}

export default ProductContent

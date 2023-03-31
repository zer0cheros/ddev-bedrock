import React, { useState } from 'react'
import Image from 'next/image'
import {Products} from '@/types/types'

interface Props {
	products: Products[],
}

const ProductPage = ({products}: Props) => {
  const [addCart, setAddCart] = useState(0)
  return (
    <div className='flex flex-wrap w-full h-full'>
    {products.map((product) => (
      <div onMouseOver={()=>setAddCart(product.id)} onMouseOut={()=>setAddCart(0)} key={product.id} className='relative items-center m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md'>
        <Image className='auto w-full h-auto' src={`${product.images[0].src}`} alt={product.name} width={300} height={450} />
        <div className='flex flex-col justify-center text-center gap-2 w-full'>
          <h1 className='font-bold text-stone-900 text-lg'>{product.name}</h1>
          <h2 className='font-semi-bold text-stone-700 text-md'>{product.price}.00 €</h2>
        </div>
        {(addCart == product.id) ? <div className='absolute bottom-20 left-1/2 -translate-x-2/4 h-8 w-48 bg-stone-800 text-slate-50 text-xl text-center m-auto'>Add to cart</div>: null}
      </div>
    ))}
  </div>
  )
}

export default ProductPage
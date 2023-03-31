import React from 'react'
import Category from './Category'
import {Page, Products, Categories} from '@/types/types'
import ProductPage from './Products'

interface Props {
	products: Products[],
	categories: Categories[]
}

const ShopContainer = ({products, categories}:Props) => {
  return (
    <div className='w-full h-full flex'>
      <Category categories={categories} />
        <ProductPage products={products} />
    </div>
  )
}

export default ShopContainer
"use client";
import React, { useState } from 'react'
import Product from './Product'
import { Coffee } from '../typings'
import Search from './Search';

interface Props {
  products: Coffee[]
}

function ProductCard({ products }: Props) {
  const [searchResults, setSearchResults] = useState(products);
  
  return (
    <div className='pt-6 px-8 lg:px-14 bg-[#1E1E1E] h-full pb-24'>
      <Search setSearchResults={setSearchResults} keyWords={products} />
      <div className='pt-8 grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
        {searchResults.length > 0 ? (
          searchResults.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              formCode={product.formCode}
              displayOrder={product.displayOrder}
              availability={product.availability}
              assets={product.assets}
              sizes={product.sizes}
              category={product.category}
              id={product.id}
              value={product.value}
            />
          ))
        ) : (
          <div className='h-screen w-screen'>No search results found, please try again</div>
        )}
      </div>
    </div>
    
  )
}

export default ProductCard
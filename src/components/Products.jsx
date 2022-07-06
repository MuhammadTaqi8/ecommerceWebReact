import React from 'react'
import Product from './Product'

const products = [
    {id: 1, name: "shoes", description: "Walking Shoes", price: 100},
    {id: 2, name: "jacket", description: "Winter jackets", price: 200},
    {id: 1, name: "shoes", description: "Walking Shoes", price: 100},
    {id: 2, name: "jacket", description: "Winter jackets", price: 200},
    
]

const Products = () => {
  return (
    <main>
        <div>
          <h2>Product Library</h2>
            <div className='row'>
                {products.map((product)=> (
                    <div className='col'>
                        <Product  product = {product}/>
                    </div>
                ))}
            </div>
        </div>
    </main>
)
}

export default Products
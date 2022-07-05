import React from 'react'
import Product from './Product'

const products = [
    {id: 1, name: "shoes", description: "Walking Shoes"},
    {id: 2, name: "jacket", description: "Winter jackets"},

]

const Products = () => {
  return (
    <main>
        <div>
            
            {products.map((product)=> (
                <Product  product = {product}/>
            ))}
        </div>
    </main>
)
}

export default Products
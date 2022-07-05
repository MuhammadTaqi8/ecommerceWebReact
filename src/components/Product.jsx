import React from 'react'

const Product = ({product}) => {
  return (
    <>
        <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.description}</p>
        </div>
    </>
  )
}

export default Product
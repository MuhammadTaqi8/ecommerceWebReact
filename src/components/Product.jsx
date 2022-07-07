import React from 'react'


const Product = ({product}) => {
  return (
    <>
          <div class="card-body">
            <img src={product.image} alt="im" width='150px' height='150px' />
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button className='btn btn-primary'>Add to cart</button>
          </div>
    </>
  )
}

export default Product
import React from 'react'
import Grid from '@material-ui/core'
import Product from './Product'

const products = [
    {id: 1, name: "shoes", desciption: "Walking Shoes"},
    {id: 2, name: "jacket", desciption: "Winter jackets"},

]

const Products = () => {
  return (
    <main>
        <Grid container justify = "center" spacing={4}>
            {products.map((product) => {
                <Grid item key={product.id} xs = {12} sm={6} md={4} lg={3}>
                <Product />
                </Grid>
            })}
        </Grid>
    </main>
)
}

export default Products
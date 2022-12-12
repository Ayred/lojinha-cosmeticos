import React, { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import css from './Products.module.css'

const Products = () => {

  const[MenuProducts] = useState(ProductsData)

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Nossos Produtos</h1>
      <div className={css.products} key={ProductsData.id}>
        <div className={css.list}>
          {
            MenuProducts.map((product, i) => (
              <div className={css.product}>
                <div className='left-s'>
                  <div className='name'>
                    <span>{product.name}</span>
                  </div>
                    <span>Rs.{product.price}</span>
                    <div>Comprar</div>
                </div>
                <img src={product.img} alt="" className='img-p'/>
              </div>
            ))
          }
        </div>
      </div>
    </div>



  )
}

export default Products
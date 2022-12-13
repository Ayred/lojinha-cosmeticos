import React, { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import css from './Products.module.css'


const Products = ({
  cart,
  setCart
}) => {

  const onAddProduct = product => {
    let selectedProduct = cart.find((item) => {
      return item.id === product.id
    })
    if (selectedProduct) {
      selectedProduct.quantity++
    } else {
      cart.push({...product, quantity:1})
    }
		localStorage.setItem('cart', JSON.stringify(cart))
    setCart(JSON.parse(localStorage.getItem('cart')))
    console.log(cart.length)
	};


  const[MenuProducts] = useState(ProductsData)

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Nossos Produtos</h1>
      <div className={css.products}>
        <div className={css.list}>
          {
            MenuProducts.map(product => (
              <div className={css.product} key={product.id}>
                <div className='left-s'>
                  <div className='name'>
                    <span>{product.name}</span>
                  </div>
                  <span>Rs.{product.price}</span>
                  <button className={css.btn} onClick={() => onAddProduct(product)}>
							      comprar
						      </button>
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
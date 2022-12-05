import React from 'react'
import { CgShoppingBag } from 'react-icons/cg'
import logo from '../../assets/logo.png'
import css from './Header.module.css'

const header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="Logo da Lojinha de cosméticos" />
      
        <span>Lojinha de Cosméticos</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Quem Somos</li>
            <li>Nossos Produtos</li>
            <li>Novos</li>
            <li>PT-BR</li>
          </ul>
        </div>
     
        <CgShoppingBag className={css.cart}/>
      </div>
    </div>
  )
}

export default header
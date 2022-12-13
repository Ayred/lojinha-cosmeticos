import React from 'react';
import css from './Modal.module.css';

const Modal = ({isOpen, closeModal, cart, setCart}) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }
  return (
    <div className={`${css.modal} ${isOpen?css.modalOpen:''}`}  onClick={closeModal}>
      <div className={css.modalDialog} onClick={handleModalDialogClick}>     
        <button className={css.closeDialog} onClick={closeModal}>X</button> 
        <h1>Meu carrinho</h1>
        <div>
          {
            cart.map(product => (
              <div className={css.product} key={product.id}>
                <div></div>
                <img src={product.img} alt=""/>
                <div className={css.right}>
                  <div className='name'>
                    <span>{product.name}</span>
                  </div>
                  <span>Rs.{product.price}</span>
                
                </div>
                
              </div>
            ))
          }
        </div>

        
        
      </div>

    </div>
  )
}

export default Modal
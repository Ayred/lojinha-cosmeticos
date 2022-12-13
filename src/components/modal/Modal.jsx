import React from 'react'
import css from './Modal.module.css'

const Modal = ({isOpen, closeModal}) => {
  return (
    <div className={`${css.modal} ${isOpen?css.modalOpen:''}`}>
      <div className={css.modalDialog}>      
        <h1>sou um carrinhooo</h1>
        <button onClick={closeModal}>Me fechaaaa aquiii</button>
      </div>

    </div>
  )
}

export default Modal
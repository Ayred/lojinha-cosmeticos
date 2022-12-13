import React from 'react';
import css from './Modal.module.css';

const Modal = ({isOpen, closeModal}) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }
  return (
    <div className={`${css.modal} ${isOpen?css.modalOpen:''}`}  onClick={closeModal}>
      <div className={css.modalDialog} onClick={handleModalDialogClick}>      
        <h1>sou um carrinhooo</h1>
        <button onClick={closeModal}>Me fechaaaa aquiii</button>
      </div>

    </div>
  )
}

export default Modal
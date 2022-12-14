import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import css from './Modal.module.css';

const Modal = ({ isOpen, closeModal, cart, setCart, formatNumber }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };
  const changeQuantity = (e, quantity, productId) => {
    let product = cart.find((item) => item.id === productId);
    if (quantity === -1 && product.quantity === 1) return;

    product.quantity += quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem('cart')));
  };
  const deleteProduct = (e, productId) => {
    localStorage.setItem(
      'cart',
      JSON.stringify(cart.filter((item) => item.id !== productId))
    );
    setCart(JSON.parse(localStorage.getItem('cart')));
  };
  const total = () =>
    cart.reduce(
      (accumulator, item) => item.quantity * item.price + accumulator,
      0
    );
  const pay = (e) => {
    emptyCart();
    closeModal();
  };
  const emptyCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    setCart(JSON.parse(localStorage.getItem('cart')));
  };

  return (
    <div
      className={`${css.modal} ${isOpen ? css.modalOpen : ''}`}
      onClick={closeModal}
    >
      <div className={css.modalDialog} onClick={handleModalDialogClick}>
        <button className={css.closeDialog} onClick={closeModal}>
          X
        </button>
        <h1>Meu carrinho</h1>
        <div>
          {cart.length === 0 && <h5>Seu carrinho está vazio!</h5>}
          {cart.map((product) => (
            <div className={css.product} key={product.id}>
              <img src={product.img} alt="" />
              <div className={css.right}>
                <div className="name">
                  <span>{product.name}</span>
                </div>
                <span>Unidade {formatNumber(product.price)}</span>
                <span> x {product.quantity}</span>
                <div className="name">
                  <span>{formatNumber(product.quantity * product.price)}</span>
                </div>
              </div>
              <div className={css.quantity}>
                <button
                  disabled={product.quantity === 1}
                  onClick={(e) => changeQuantity(e, -1, product.id)}
                >
                  -
                </button>
                <span> {product.quantity} </span>
                <button onClick={(e) => changeQuantity(e, 1, product.id)}>
                  +
                </button>
              </div>
              <div className={css.quantity}>
                <HiOutlineTrash
                  className={css.trash}
                  onClick={(e) => deleteProduct(e, product.id)}
                />
              </div>
            </div>
          ))}
          {cart.length > 0 && (
            <div className={css.totalAndPay}>
              <span>Total: {formatNumber(total())}</span>
              <button onClick={pay} className={css.payButton}>
                Pagar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

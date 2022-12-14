import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Modal from './components/modal/Modal';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const formatNumber = (number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  };
  return (
    <div className="App">
      <Header
        cart={cart}
        setCart={setCart}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}
          cart={cart}
          setCart={setCart}
          formatNumber={formatNumber}
        />
      )}
      <Slider />
      <Products cart={cart} setCart={setCart} formatNumber={formatNumber} />
    </div>
  );
}

export default App;

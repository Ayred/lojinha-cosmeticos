import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  // const [isOpenModal, setIsOpenModal] = !useState;
  // const openModal = () => {
  //   setIsOpenModal(true);
  // };

  return (
    <div className="App">
      {/* //   <div>
    //     <button onClick={openModal}></button>
    //   </div> */}
      <Header
        cart={cart}
        setCart={setCart}
        // isOpenModal={isOpenModal}
        // setIsOpenModal={setIsOpenModal}
      />
      <Slider />
      <Products cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;

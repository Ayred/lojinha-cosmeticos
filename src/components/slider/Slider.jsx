import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './slider.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';
import { SliderProducts } from '../../data/products';

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.details}</span>
              </div>
              <span>R${slide.price}</span>
              <div>
                Produtos feitos com ingredientes naturais que cuidam tua pele!
              </div>
            </div>
            <img src={slide.img} alt="Imagem do Produto" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

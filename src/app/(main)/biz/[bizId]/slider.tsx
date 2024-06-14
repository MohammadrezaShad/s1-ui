'use client';

import {css} from '@styled/css';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

function Slider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        },
        2560: {
          slidesPerView: 6,
        },
      }}
      enabled={false}
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className={css({
            height: '[429px]',
            width: 'full',
            objectFit: 'cover',
          })}
          src='https://s3-media0.fl.yelpcdn.com/bphoto/2_uO3qKelpYJ3xDS-RRqwg/l.jpg'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={css({
            height: '[429px]',
            width: 'full',
            objectFit: 'cover',
          })}
          src='https://s3-media0.fl.yelpcdn.com/bphoto/ZmW54tebbrTaAG0fxPJoRQ/l.jpg'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={css({
            height: '[429px]',
            width: 'full',
            objectFit: 'cover',
          })}
          src='https://s3-media0.fl.yelpcdn.com/bphoto/bH-6nzA4Xrb8fxTyXflWLw/l.jpg'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={css({
            height: '[429px]',
            width: 'full',
            objectFit: 'cover',
          })}
          src='https://s3-media0.fl.yelpcdn.com/bphoto/8_Xs2-TaCgqF_yHrzkFMpA/l.jpg'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={css({
            height: '[429px]',
            width: 'full',
            objectFit: 'cover',
          })}
          src='https://s3-media0.fl.yelpcdn.com/bphoto/wJd0Mbh0XWJloVUQbhvbLw/l.jpg'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={css({
            height: '[429px]',
            width: 'full',
            objectFit: 'cover',
          })}
          src='https://s3-media0.fl.yelpcdn.com/bphoto/X173p9loNsDu-Ry9a8trog/l.jpg'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

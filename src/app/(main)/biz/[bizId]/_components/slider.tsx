'use client';

import {css} from '@styled/css';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';

import {ImageType} from '@/graphql/generated/types';

import 'swiper/css';

interface Props {
  storageUrl: string;
  images: ImageType[];
}

function Slider({storageUrl, images}: Props) {
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
      {images.map(image => (
        <SwiperSlide key={image._id}>
          <Image
            width={image.width}
            height={image.height}
            className={css({
              height: '[429px]',
              width: 'full',
              objectFit: 'cover',
            })}
            src={`${storageUrl}/${image._id}`}
            alt={image.alt || ''}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;

"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className='homeSlider'>
      <Swiper 
        navigation={true} 
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        modules={[Navigation, Pagination]} 
        className="mySwiper"
        spaceBetween={16}
        breakpoints={{
          640: {
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <div className='item'>
            <Image src={"/hero_slider/nike-1.png"} alt='Nike Slide 1' width={1344} height={514} className='mx-6 mt-6'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item'>
            <Image src={"/hero_slider/nike-2.png"} alt='Nike Slide 2' width={1344} height={514} className='mx-6 mt-6'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item'>
            <Image src={"/hero_slider/nike-3.png"} alt='Nike Slide 3' width={1344} height={514} className='mx-6 mt-6'/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlider
'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'

const CategorySlider = () => {
  return (
    <div className='py-4'>
      <div className='container'>
        <Swiper
          slidesPerView={10}
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat1.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat2.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat3.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat4.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat5.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat6.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat7.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat8.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat9.png"} alt='category' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center'>
              <img src={"/cat10.png"} alt='category' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CategorySlider
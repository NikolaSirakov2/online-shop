'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'

const CategorySlider = () => {
  const categories = [
    { name: 'Running', image: '/cat1.png', href: '/running' },
    { name: 'Basketball', image: '/cat2.png', href: '/basketball' },
    { name: 'Football', image: '/cat3.png', href: '/football' },
    { name: 'Tennis', image: '/cat4.png', href: '/tennis' },
    { name: 'Training', image: '/cat5.png', href: '/training' },
    { name: 'Lifestyle', image: '/cat6.png', href: '/lifestyle' },
    { name: 'Kids', image: '/cat7.png', href: '/kids' },
    { name: 'Accessories', image: '/cat8.png', href: '/accessories' },
  ];

  return (
    <div className='py-4'>
      <div className='container'>
        <Swiper
          slidesPerView={8}
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white p-3 w-full rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-200'>
                <img src={category.image} alt={category.name} className='w-12 h-12 object-contain mb-2' />
                <span className='text-xs text-gray-700 font-medium text-center'>{category.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default CategorySlider
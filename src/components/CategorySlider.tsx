'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const CategorySlider = () => {
  const categories = [
    { name: 'Running', image: '/shoes/running-shoes.webp', href: '/running' },
    { name: 'Basketball', image: '/shoes/basketball-shoes.webp', href: '/basketball' },
    { name: 'Football', image: '/shoes/football-shoes.webp', href: '/football' },
    { name: 'Tennis', image: '/shoes/tennis-shoes.webp', href: '/tennis' },
    { name: 'Training', image: '/shoes/workout-shoes.webp', href: '/training' },
    { name: 'Aqua', image: '/shoes/aqva-shoes.webp', href: '/aqua' },
    { name: 'Volleyball', image: '/shoes/voleyball-shoes.webp', href: '/volleyball' },
  ];

  return (
    <div className='py-4 mt-6'>
      <div className='container pt-2 mt-4 pl-4 pr-4'>
        <Swiper
          slidesPerView={8}
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper"
          style={{ paddingRight: '16px' }}
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
              <div className='bg-white p-3 w-full rounded-md border border-gray-200 shadow-md flex flex-col mt-4 ml-2 items-center justify-center cursor-pointer hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 hover:scale-105 transition-all duration-200'>
                <Image src={category.image} alt={category.name} width={48} height={48} className='w-12 h-12 object-contain mb-2' />
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
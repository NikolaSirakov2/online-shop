import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className='search bg-[#E6E6E6] w-full max-w-[600px] h-[40px] md:h-[50px] rounded-md px-4 relative'>
      <input 
        type='text' 
        className='w-full h-full outline-none border-0 bg-transparent text-sm md:text-base' 
        placeholder='Search for products...' 
      />
      <button className='w-8 h-8 md:w-10 md:h-10 rounded-full absolute top-[6px] md:top-[5px] right-2 z-50 flex items-center justify-center cursor-pointer hover:bg-gray-300'>
        <IoSearchOutline size={20} className="md:w-6 md:h-6" />
      </button>
    </div>
  )
}

export default Search
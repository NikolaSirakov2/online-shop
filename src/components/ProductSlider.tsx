"use client"
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const PopularProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Categories from Nav component (excluding Home)
  const categories = [
    'Running',
    'Basketball', 
    'Football',
    'Tennis',
    'Training',
    'Aqua',
    'Volleyball'
  ];

  return (
    <section>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='col1 w-[30%]'>
            <h2 className='text-[20px] text-gray-800 font-[600]'>Popular Products</h2>
          </div>
          <div className='col2 w-[70%] flex items-center justify-end'>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {categories.map((category, index) => (
                <Tab key={index} label={category} />
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
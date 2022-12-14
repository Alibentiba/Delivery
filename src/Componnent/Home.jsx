import React from 'react'
import Categories from './Categories'
import Products from './Products'
import SliderComponent from './SliderComponent'
import TopHome from './TopHome'

const Home = () => {
  return (
    <div className='flex flex-col items-start justify-start mt-[6rem] gap-0 py-0'>
      <TopHome/>
      <SliderComponent/>
      <Categories/>
      <p 
      className='w-full h-28 text-3xl font-semibold pl-10'>
        Our Hot Dishes</p>
      <Products/>

    </div>
  )
}

export default Home

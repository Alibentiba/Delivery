import React from 'react'
import Categories from './Categories'
import SliderComponent from './SliderComponent'
import TopHome from './TopHome'
import ProductsLsit from './ProductsLsit'
import Footer from './Footer'


const Home = () => {

  return (
    <div className='flex flex-col items-start justify-start mt-[6rem] gap-0 py-0'>
      <TopHome/>
      <SliderComponent/>
      <Categories/>
      <p 
      className='w-full h-28 text-3xl font-semibold pl-10 before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-[112.5rem] before:left-[37px] before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 md:before:-bottom-[37.5rem]'>
        Our Hot Dishes</p>
      <ProductsLsit />
      <Footer/>




    </div>
  )
}

export default Home

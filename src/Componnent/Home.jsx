import React from 'react'
import Categories from './Categories'
import SliderComponent from './SliderComponent'
import TopHome from './TopHome'
import {useDispatch, useSelector } from 'react-redux'
import ProductsLsit from './ProductsLsit'


const Home = () => {
  const Dispatch=useDispatch()
  const SliceProducts=useSelector(state=>state.userStore.Products)

  return (
    <div className='flex flex-col items-start justify-start mt-[6rem] gap-0 py-0'>
      <TopHome/>
      <SliderComponent/>
      <Categories/>
      <p 
      className='w-full h-28 text-3xl font-semibold pl-10'>
        Our Hot Dishes</p>
      <ProductsLsit />

    </div>
  )
}

export default Home

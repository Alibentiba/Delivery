import React from 'react'
import Categories from './Categories'
import SliderComponent from './SliderComponent'
import TopHome from './TopHome'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-start gap-0'>
      <TopHome/>
      <SliderComponent/>
      <Categories/>

    </div>
  )
}

export default Home

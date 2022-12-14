import React from 'react'
import Delivery from './img/delivery.png'
import Herobg from './img/heroBg.png'
import I1 from './img/i1.png'
import F1 from './img/f1.png'
import c3 from './img/c3.png'
import Fi1 from './img/fi1.png'
import SliderComponent from './SliderComponent'
import { useDispatch, useSelector } from 'react-redux'
import Categories from './Categories'


const TopHome = () => {


  return (
    


    <div className='grid gap-y-1  grid-cols-1 md:grid-cols-2 md:h-1/2 py-0 px-4'>
        <div className='px-4 flex flex-col items-start justify-start gap-1 pb-0  h-[800px] md:h-[700px]'>
            
            <p className='flex items-center justify-between px-2 h-20 w-full  bg-gradient-to-r from-orange-500 via-orange-200 to-orange-500  rounded-[50px] md:w-1/3 md:h-12  '> 
              <span className='text-4xl font-semibold text-rose-600 md:text-xl'>Bike Delivery</span>
              <img src={Delivery} alt="Delivery" className='bg-white w-20 h-full rounded-full md:w-12 md:h-12'/>
             </p>

             <h1 className='text-7xl font-bold flex flex-col items-start justify-start gap-10 py-10 text-black '>
                  <span className='tracking-wider	'>The Fastest Delivery in</span>
                  <span className='text-orange-500 '>Your City</span>
                   </h1>

                  <p className='text-xl py-0 px-0 text-gray-500  text-left md:text-base'>Retail food delivery is a courier service in which a restaurant,
                     store, or independent food-delivery company 
                     delivers food to a customer. An order is
                      typically made either through a restaurant 
                      </p>
                      <button className='bg-orange-400 w-full h-12 rounded-md  text-lg  md:w-1/4 hover:bg-orange-300 '>Order Now</button>
        </div>

        <div className='flex items-start justify-end  h-[780px] md:h-[650px]'>
            <img src={Herobg} alt="Herobg" className='w-full  h-full md:w-2/3' />



         <div className='absolute top-[66rem] right-[7%] w-196  grid grid-cols-2 gap-x-7 gap-y-[7rem] md:top-[11rem] md:right-[5rem] md:gap-20'>
         <div className='w-44 pb-4 h-56 flex flex-col items-center justify-centers rounded-lg backdrop-blur-md bg-cardOverlay'>
                <img src={I1} alt="I1" className='-mt-20 mb-10' />
                <p className='text-black'>Icecream</p>
                <p className='text-gray-500'>chocloat & vanilla</p>
                <p className='text-black'>5.88 <span className='text-orange-500'>$</span></p>
               </div>

               <div className='w-44 pb-4 h-56 flex flex-col items-center justify-centers rounded-lg backdrop-blur-md bg-cardOverlay'>
             
                <img src={c3} alt="I1" className='-mt-20 mb-10' />
                <p className='text-black'>Icecream</p>
                <p className='text-gray-500'>chocloat & vanilla</p>
                <p className='text-black'>5.88 <span className='text-orange-500'>$</span></p>
               </div>
               <div className='w-44 pb-4 h-56 flex flex-col items-center justify-centers rounded-lg backdrop-blur-md bg-cardOverlay'>
             
                <img src={F1} alt="I1" className='-mt-20 mb-10' />
                <p className='text-black'>Icecream</p>
                <p className='text-gray-500'>chocloat & vanilla</p>
                <p className='text-black'>5.88 <span className='text-orange-500'>$</span></p>
               </div>

               <div className='w-44 pb-4 h-56 flex flex-col items-center justify-centers rounded-lg backdrop-blur-md bg-cardOverlay'>
                  <img src={Fi1} alt="I1" className='-mt-20 mb-10' />
                  <p className='text-black'>Icecream</p>
                  <p className='text-gray-500'>chocloat & vanilla</p>
                  <p className='text-black'>5.88 <span className='text-orange-500'>$</span></p>
               </div>
         </div>
       
        </div>
      
        
   
    </div>
  )
}

export default TopHome

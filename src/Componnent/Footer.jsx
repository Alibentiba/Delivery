import React from 'react'
import { AiFillInstagram,AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='h-auto w-full  pb-3 pt-3 ml-1 mr-2  bg-gray-600 text-white grid grid-cols-1  gap-y-10 md:grid-cols-5 md:gap-x-0 md:pt-8 md:pl-2 '>

     <div className='flex items-start justify-center h-30'>
         <img
         className='w-28 h-28 rounded-full object-cover'
          src='https://www.designfreelogoonline.com/wp-content/uploads/2018/03/gold-silver-restaurant-logo-maker-Luxurious-food-Logo.jpg' alt="" />
        </div>

        <div className='flex items-start justify-start h-full text-xl font-thin px-6'>
        <span>
          Located in the heart of historic 
          Edgartown, we offer handmade foods,
           quality spirits, specialty groceries, and thoughtful gifts. 
          </span>

        </div>
          

        <div className='flex flex-col items-center justify-start gap-1 text-md '>
            <span className='font-bold text-orange-600'>MARKET</span>
            <span>Mon-son:7a-3P</span>
            <span>Kitchen:7a-3P</span>
            <span>508-627-1270</span>
            <span>20 S.Summer ST</span>
            <span className='font-serif italic'>(Across from Cabrlotte Inn)</span>

        </div>

        <div className='flex flex-col items-center justify-start gap-1 text-md '>
        <span className='font-bold text-orange-600'>SPIRITS</span>
            <span>Sun-Thu:10-3P</span>
            <span>Fri-Sat:10a-11P</span>
            <span>456-607-1270</span>
            <span>65 Main ST</span>
            <span className='font-serif italic'>(Next to movie tbeater)</span>


        </div>

           

        <div className='flex flex-col items-center justify-start gap-4 text-md '>
            <span className='w-[70%] text-left '>Share your Rosewater story with us</span>
            <span className='font-bold text-left w-[70%]'>#ROSEWATERMV</span>
            <div className='flex  items-start justify-start gap-4 text-6xl text-orange-500 w-[70%] '>
                <AiFillInstagram className='cursor-pointer '/>
                <AiFillFacebook className='cursor-pointer'/>
            </div>


        

        </div>
      




    </div>
  )
}

export default Footer

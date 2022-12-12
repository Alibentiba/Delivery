import React, { useState } from 'react'
import { categories } from '../Utils/Data'
import { IoFastFoodSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux'
import {setActiveCat} from '../Redux/Slice'


const Categories = () => {
  const dispatch=useDispatch()
 const [active, setActive] = useState('');

//  const dispatchCat=()=>{
   
//   dispatch(setActiveCat(item?.name))
//  }
  return (
    <div className='flex items-center justify-center gap-6 mt-20 mb-10 overflow-x-hidden scroll-auto'>
        {categories?.map((item)=>{
            return(
                <div
                 key={item?.id}  
                onClick={()=>{setActive(item?.name)
                  dispatch(setActiveCat(item?.name))}} 

                 className={` w-28 h-24 cursor-pointer rounded-lg flex flex-col items-center justify-center  ${active!==item?.name? 'bg-white'&&'hover:bg-red-500':'bg-red-500 '} `}>

                  <div 
                  className={`rounded-full  p-2  ${active==item?.name? 'bg-white':'bg-red-500'}`}>
                  <IoFastFoodSharp className={`text-4xl    ${active==item.name?'text-black':'text-white'} `} />
                  </div>

                    <p className={`${active==item.name?'text-white':'text-black'} `} >{item?.name}</p>

            

        </div>
        )}) }



        
      
    </div>
  )
}

export default Categories

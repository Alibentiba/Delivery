import React, { useEffect, useState } from 'react'
import { IoMdBasket} from 'react-icons/io';
import {useDispatch } from 'react-redux'
import {SetTobasket,SetbasketNull} from '../Redux/Slice'


const Product = ({id,data:{title,price,calories,imageURL,Qty}}) => {
 
  const item={id,data:{title,price,calories,imageURL,Qty}}

  
 

  const dispatch = useDispatch()

  return (
    
      
    <div key={id}  className="flex items-center justify-center w-full h-full rounded-lg backdrop-blur-md bg-cardOverlay shadow-md">

                <div className="w-full h-full relative bottom-20  rounded-xl flex items-center justify-center px-3">
                  <img src={imageURL} />
                </div>

                <div className="flex flex-col items-start justify-start w-1/2 h-full ">
                    <div className="rounded-full  mb-10 mt-2 mr-10 bg-red-500 p-2">
                  
                    <IoMdBasket onClick={()=>dispatch(SetTobasket(item))} className='text-xl text-white cursor-pointer '/>
                </div>

                <h1 className="w-full text-xl font-semibold  text-left capitalize ">{title}</h1>
                <p className="w-full text-sm  text-left text-gray-500" >{calories}  calories</p>
                <p className="w-full text-lg  text-left font-bold ">{price} <span className="text-orange-500 font-semibold">$</span></p>
         </div>
         </div>

 
    





     


   
  
  )
}

export default Product

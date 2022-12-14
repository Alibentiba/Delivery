import React from 'react'
import { IoMdBasket} from 'react-icons/io';
import {useDispatch } from 'react-redux'
import {SetTobasket} from '../Redux/Slice'
import { motion } from "framer-motion";

const Product = ({id,data:{title,price,calories,imageURL,qty}}) => {
  const item={id,data:{title,price,calories,imageURL,qty}}
 
  const dispatch = useDispatch()
  return ( 
    <div key={id}  className="flex items-center justify-center w-[300px] h-full rounded-lg backdrop-blur-md bg-cardOverlay shadow-md">
                <div className="w-full h-full relative bottom-20  rounded-xl flex items-center justify-center px-3">
                  <img src={imageURL} alt='imageURL' className='h-[124px]' />
                </div>

                <div className="flex flex-col items-start justify-start w-1/2 h-full ">
                <motion.div
                whileTap={{ scale: 0.75 }} className="rounded-full  mb-10 mt-2 mr-10 bg-red-500 p-2"
                    onClick={()=>dispatch(SetTobasket(item))}>
                    <IoMdBasket 
                     className='text-xl text-white cursor-pointer '/>
                </motion.div>

                <h1 className="w-full text-xl font-semibold  text-left capitalize ">{title}</h1>
                <p className="w-full text-sm  text-left text-gray-500" >{calories}  calories</p>
                <p className="w-full text-lg  text-left font-bold ">{price} <span className="text-orange-500 font-semibold">$</span></p>
              </div>
         </div>

 
    





     


   
  
  )
}

export default Product

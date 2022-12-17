import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { IoNuclear } from 'react-icons/io5';
import c2 from './img/c2.png'
import Caremp from './img/emptyCart.svg'
import { useDispatch, useSelector } from 'react-redux'
import {setActivShoping,SetbasketNull,SetTobasket,Dirncer} from '../Redux/Slice'
import FadeIn from 'react-fade-in';
import { motion } from "framer-motion";



const ShopingCart = () => {
    const [SubTotal , setSubTotal] = useState(0);
    const dispatch=useDispatch()
    var ActiveCart=useSelector(state=>state.userStore.ActivShoping)
    const Basket=useSelector(state=>state.userStore.basket)
    var BasketLength=Basket?.length
    const ClearCart =()=>{
    BasketLength=null;
    dispatch(SetbasketNull([]))}

    useEffect(() => {
       var T=0
        Basket.forEach( obj => {
          T=T+(obj.data.price)*(obj.data.qty)
          })
          console.log('Total is',T)
          setSubTotal(T)

    }, [Basket]);









  return (
   

    
    <div className={`fixed right-0 z-50 top-0 delay-6000 ease-linear ${ActiveCart? 'visible':'hidden'}`}>
{BasketLength?
 
( <FadeIn><div className='w-screen bg-cartBg h-screen px-1 py-1  flex flex-col items-center justify-start md:w-[30rem]'>
        <div className='w-full bg-gray-700 flex items-center justify-between px-3 py-8 rounded-lg text-white'>
            <FaArrowLeft onClick={()=>{dispatch(setActivShoping(!ActiveCart))}} className='text-2xl cursor-pointer'/>
            <p className='font-semibold text-xl cursor-pointer'>Cart</p>
             
            <motion.button
            whileTap={{ scale: 0.75 }}
              onClick={ClearCart}
              className='flex items-center justify-center gap-1 text-lg text-black bg-gray-100 px-3 py-[6px] rounded-lg'>
              Clear <IoNuclear/>
            </motion.button>
        </div>
         
       
        
        
        <div className='w-full min-h-[340px]  rounded-lg flex flex-col items-center gap-2 justify-start py-3  overflow-y-scroll  scrollbar-hide' >
      
        {Basket?.map(({id,data:{title,price,calories,imageURL,qty}})=>{
              const item={id,data:{title,price,calories,imageURL,qty}}
              

           return(
            <FadeIn className='w-full' key={id}>
            <div  className='bg-gray-700 h-[85px] w-full flex items-center justify-between rounded-lg py-1 px-3'>
                
                <div className='w-28 flex h-[85px] items-center justify-center  gap-2'>
                    <img src={imageURL} alt="" className='w-1/2 h-full object-contain' />
                    <p className='flex flex-col text-white '>
                      <span>{title}</span> 
                      <span>$ {price}</span> 
                    </p>
                </div>

                <div className='flex items-center justify-center text-white gap-2 text-2xl'>
                    <p className='cursor-pointer'onClick={()=>dispatch(Dirncer(item))} >-</p>
                    <p className='bg-slate-600  w-14 h-14 flex items-center justify-center rounded-full p-[2px] cursor-pointer'>{String(qty)}</p>
                    <p className='cursor-pointer'onClick={()=>dispatch(SetTobasket(item))} >+</p>
                </div>
            </div></FadeIn>)})}

        </div>

        <div className='bg-cartTotal opacity-70 w-full rounded-2xl h-1/3 flex flex-col items-center justify-start px-9 md:h-1/2'>
           
            <div className='flex flex-col w-full h-1/2  items-center justify-center border-b-[1px] border-gray-300'>
                <p className=' text-xl flex items-center py-2 w-full justify-between text-gray-200'>
                    <span>Sub Total</span>
                    <span>$ {SubTotal}</span>

                </p>
                <p className=' text-xl flex items-center  py-2 w-full justify-between text-gray-200'>

                    <span>Delivery</span>
                    <span>$ 2.4</span>

                </p>

            </div>

            <div className='flex flex-col w-full h-[360px]  items-center justify-center gap-4 '>

                <p className=' text-xl font-semibold flex items-center  py-2 w-full justify-between text-white'>
                        <span>Total</span>
                        <span>$ {SubTotal+ 2.4}</span>
                </p>
                <button className='bg-orange-400 text-white text-xl py-2 rounded-3xl w-3/4'>
                    Login to check out
                </button>

            </div>
        </div>
    
      
    </div>
    </FadeIn>):

    (<><div className='w-[26rem] bg-white h-screen flex flex-col items-center justify-start gap-28 py-3'>
       
        <div className='w-full flex items-center justify-between px-3 py-8 rounded-lg text-gray-700'>
            <FaArrowLeft onClick={()=>{dispatch(setActivShoping(!ActiveCart))}} className='text-2xl '/>
            <p className='font-semibold text-xl'>Cart</p>
        </div>

        <div className='w-full px-4 flex flex-col gap-5'>
            <img src={Caremp} alt="gfhgfh" />
            <p className='w-full text-center text-gray-700 text-2xl font-semibold'>Add some items to your cart</p>

        </div>

    </div></>)
    }

</div>

  )
}

export default ShopingCart

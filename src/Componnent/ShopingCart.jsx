import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { IoNuclear } from 'react-icons/io5';
import c2 from './img/c2.png'
import Caremp from './img/emptyCart.svg'
import { useDispatch, useSelector } from 'react-redux'
import {setActivShoping,SetbasketNull,SetTobasket} from '../Redux/Slice'


const ShopingCart = () => {
    const dispatch=useDispatch()
    var ActiveCart=useSelector(state=>state.userStore.ActivShoping)
    const basket=useSelector(state=>state.userStore.basket)
    var BasketLength=basket?.length

   const ClearCart =()=>{
        BasketLength=null;
        dispatch(SetbasketNull([]))
    }


    
  return (
    
    <div className={`fixed right-0 z-50 top-0 delay-6000 ease-linear ${ActiveCart? 'visible':'hidden'}`}>
{BasketLength?

( <div className='w-screen bg-cartBg h-screen px-1 py-1  flex flex-col items-center justify-start md:w-[30rem]'>
        <div className='w-full bg-gray-700 flex items-center justify-between px-3 py-8 rounded-lg text-white'>
            <FaArrowLeft onClick={()=>{dispatch(setActivShoping(!ActiveCart))}} className='text-2xl cursor-pointer'/>
            <p className='font-semibold text-xl cursor-pointer'>Cart</p>
            <button 
              onClick={ClearCart}
              className='flex items-center justify-center gap-1 text-lg text-black bg-gray-100 px-3 py-[6px] rounded-lg'>
              Clear <IoNuclear/>
            </button>
        </div>
         
       
        
        <div className='w-full min-h-[340px]  rounded-lg flex flex-col items-center gap-2 justify-start py-3  overflow-y-scroll  scrollbar-hide' >
        
         {basket?.map(({id,data:{title,price,calories,imageURL,Qty}},index)=>{
            const item ={id,data:{title,price,calories,imageURL,Qty}}
            return(
            <div key={index} className='bg-gray-700 h-[85px] w-full flex items-center justify-between rounded-lg py-1 px-3'>
                
                <div className='w-28 flex h-[85px] items-center justify-center  gap-2'>
                    <img src={imageURL} alt="" className='w-1/2 h-full object-contain' />
                    <p className='flex flex-col text-white '>
                      <span>{title}</span> 
                      <span>$ {price}</span> 
                    </p>
                </div>

                <div className='flex items-center justify-center text-white gap-2 text-2xl'>
                    <p className='cursor-pointer'onClick={()=>dispatch(SetTobasket({item,Stuts:0}))}>-</p>
                    <p className='bg-slate-600  w-14 h-14 flex items-center justify-center rounded-full p-[2px] cursor-pointer'>{Number(Qty)}</p>
                    <p className='cursor-pointer'onClick={()=>dispatch(SetTobasket({item,Stuts:1}))} >+</p>
                </div>



            </div>)})}

        </div>

        <div className='bg-cartTotal opacity-70 w-full rounded-2xl h-1/2 flex flex-col items-center justify-start px-9'>
           
            <div className='flex flex-col w-full h-1/2  items-center justify-center border-b-[1px] border-gray-300'>
                <p className=' text-xl flex items-center py-2 w-full justify-between text-gray-200'>
                    <span>Sub Total</span>
                    <span>$ 345</span>

                </p>
                <p className=' text-xl flex items-center  py-2 w-full justify-between text-gray-200'>

                    <span>Delivery</span>
                    <span>$ 2.4</span>

                </p>

            </div>

            <div className='flex flex-col w-full h-[360px]  items-center justify-center gap-8 '>

                <p className=' text-xl font-semibold flex items-center  py-2 w-full justify-between text-white'>
                        <span>Total</span>
                        <span>$ 322</span>
                </p>
                <button className='bg-orange-400 text-white text-xl py-2 rounded-3xl w-3/4'>
                    Login to check out
                </button>

            </div>
        </div>
    
      
    </div>):

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

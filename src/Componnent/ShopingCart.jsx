import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { IoNuclear } from 'react-icons/io5';
import c2 from './img/c2.png'
import Caremp from './img/emptyCart.svg'
import { useDispatch, useSelector } from 'react-redux'
import {setActivShoping} from '../Redux/Slice'


const ShopingCart = () => {
    const [Statlenst, setStatlenst] = useState(55)
    const dispatch=useDispatch()
    var ActiveCart=useSelector(state=>state.userStore.ActivShoping)
    





  return (
    <div className={`fixed right-0 z-50 top-0 delay-6000 ease-linear ${ActiveCart? 'visible':'hidden'}`}>
{ Statlenst?
 <div className='w-screen bg-cartBg h-screen px-1 py-1  flex flex-col items-center justify-start md:w-[30rem]'>
        <div className='w-full bg-gray-700 flex items-center justify-between px-3 py-8 rounded-lg text-white'>
            <FaArrowLeft onClick={()=>{dispatch(setActivShoping(false)); ActiveCart=false}} className='text-2xl cursor-pointer'/>
            <p className='font-semibold text-xl cursor-pointer'>Cart</p>
            <button onClick={()=>{setStatlenst(null)}}
              className='flex items-center justify-center gap-1 text-lg text-black bg-gray-100 px-3 py-[6px] rounded-lg'>
              Clear <IoNuclear/>
            </button>
        </div>

        <div className='h-72 w-full  rounded-lg flex flex-col items-center justify-start py-3 px-2 overflow-y-hidden'>

            <div className='bg-gray-700 h-20 w-full flex items-center justify-between rounded-lg py-1 px-3'>
                
                <div className='w-1/4 flex h-full items-center justify-center gap-2'>
                    <img src={c2} alt="" className='w-1/2 h-full object-contain' />
                    <p className='flex flex-col text-white '>
                      <span>Mango</span> 
                      <span>$ 33</span> 
                    </p>
                </div>

                <div className='flex items-center justify-center text-white gap-2 text-2xl'>
                    <p className='cursor-pointer'>-</p>
                    <p className='bg-slate-600 p-[2px] rounded-sm cursor-pointer'>66</p>
                    <p className='cursor-pointer'>+</p>
                </div>



            </div>

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

            <div className='flex flex-col w-full h-1/2  items-center justify-center gap-8 '>

                <p className=' text-xl font-semibold flex items-center  py-2 w-full justify-between text-white'>
                        <span>Total</span>
                        <span>$ 322</span>
                </p>
                <button className='bg-orange-400 text-white text-xl py-2 rounded-3xl w-3/4'>
                    Login to check out
                </button>

            </div>





        </div>
    
      
    </div>:
    <div className='w-[26rem] bg-white h-screen flex flex-col items-center justify-start gap-28 py-3'>
        <div className='w-full flex items-center justify-between px-3 py-8 rounded-lg text-gray-700'>
            <FaArrowLeft onClick={()=>{dispatch(setActivShoping(false))} }className='text-2xl '/>
            <p className='font-semibold text-xl'>Cart</p>
            <button className='flex items-center justify-center gap-1 text-lg text-black bg-gray-100 px-3 py-[6px] rounded-lg'>
              Clear <IoNuclear/>
            </button>
        </div>
        <div className='w-full px-4 flex flex-col gap-5'>
            <img src={Caremp} alt="" />
            <p className='w-full text-center text-gray-700 text-2xl font-semibold'>Add some items to your cart</p>

        </div>



    </div>
    }

</div>
  )
}

export default ShopingCart

import React, { useEffect, useState } from 'react'
import { IoMdBasket} from 'react-icons/io';
import { heroData } from '../Utils/Data';
import {useDispatch, useSelector } from 'react-redux'
import SetTobasket from '../Redux/Slice'


const Products = () => {
  const SliceProducts=useSelector(state=>state.userStore.Products)
  const SliceCategory=useSelector(state=>state.userStore.ActiveCat)
  const Dispatch=useDispatch()
  const [pid,setP]=useState()


  
  var results = SliceProducts?.filter(obj => {
    return obj?.data.category.toUpperCase() ===SliceCategory?.toUpperCase();
  })
  
  if(results?.length==0 || SliceCategory==''){
    results=SliceProducts
  }
  
  

  // useEffect(() => {
  //   const addCart =()=>{
  //     if(pid){
  //      console.log('The p',pid)
  //      Dispatch(SetTobasket())   }
  //    }
  //    addCart()

  // }, [pid]);








  return (
<div className='w-full grid min-h-[100rem]  grid-cols-1 px-5 gap-y-[4.5rem] md:grid-cols-4 md:px-2 md:gap-y-[0px]  md:gap-x-1 py-2'>
    {results?.map(( {id,data:{title,price,calories,imageURL}})=>{
      
      return(
      <div key={id}  className="w-[340px] h-[220px] flex  flex-row items-start justify-start p-2  hover:transition-transform	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500" >

       <div  className="flex items-center justify-center w-full h-full rounded-lg backdrop-blur-md bg-cardOverlay shadow-md">


                <div className="w-full h-full relative bottom-20  rounded-xl flex items-center justify-center px-3">
                  <img src={imageURL} />
                </div>

                <div className="flex flex-col items-start justify-start w-1/2 h-full ">
                    <div className="rounded-full  mb-10 mt-2 mr-10 bg-red-500 p-2">
                  
                    <IoMdBasket onClick={Dispatch(SetTobasket(id))} className='text-xl text-white cursor-pointer '/>
                </div>

                <h1 className="w-full text-xl font-semibold  text-left capitalize ">{title}</h1>
                <p className="w-full text-sm  text-left text-gray-500" >{calories}  calories</p>
                <p className="w-full text-lg  text-left font-bold ">{price} <span className="text-orange-500 font-semibold">$</span></p>
         </div>


    </div>
    
    </div>
    


    )

    })}
     


   
    </div>
  )
}

export default Products

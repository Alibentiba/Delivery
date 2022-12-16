import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
import FadeIn from 'react-fade-in';


const ProductsLsit = () => {
    const SliceProduct=useSelector(state=>state.userStore.Products)
    const ActiveCat=useSelector(state=>state.userStore.ActiveCat)
    const Products =SliceProduct?.filter( (obj)=>{
      return obj?.data?.category?.toUpperCase()===ActiveCat?.toUpperCase();
    });







  return (
<div className='w-full grid min-h-[100rem]  grid-cols-1 px-5 gap-y-[4.5rem] md:grid-cols-4 md:px-2 md:gap-y-[0px]  md:gap-x-22 py-2'>

{SliceProduct?.map((item)=>{


     return(
        <div key={item.id}  className="w-[340px] h-[220px] flex  flex-row items-start justify-start p-2  hover:transition-transform	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500" >
           <FadeIn>
            <Product {...item}/>

            </FadeIn>
              </div>



     )})}
    </div>

  )}

export default ProductsLsit

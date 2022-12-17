import React,{useEffect, useState} from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
import FadeIn from 'react-fade-in';


const ProductsLsit = () => {
    var SliceProduct=useSelector(state=>state.userStore.Products)
    var ActiveCatt=useSelector(state=>state.userStore.ActiveCat)
    const [ProductList, setProductList] = useState(null);

useEffect(() => {
  if(ActiveCatt){
    setProductList(SliceProduct?.filter( (obj)=>{     
      return obj?.data?.category?.toUpperCase()===ActiveCatt?.toUpperCase();})
    )

  }else{
 
    setProductList(SliceProduct)

  }

}, [SliceProduct]);


   
    

  return (
<div className='w-full grid min-h-[30rem] h-auto  grid-cols-1 px-5 gap-y-[1.5rem] md:grid-cols-4 md:px-2   py-2'>

{ProductList?.map((item,index)=>{


     return(
        <div key={index}  className="w-[340px] h-[220px] flex  flex-row items-start justify-start p-2  hover:transition-transform	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500" >
           <FadeIn>
            <Product {...item}/>

            </FadeIn>
              </div>



     )})}
    </div>

  )}

export default ProductsLsit

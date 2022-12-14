
import React, { Component } from "react";
import './brands.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdBasket} from 'react-icons/io';
import {useSelector } from 'react-redux'

  
  const SliderComponent = () => {
    const SliceProducts=useSelector(state=>state.userStore.Products)
    const results = SliceProducts?.filter(obj => {
      return obj?.data.category.toUpperCase() ==='fruits'.toUpperCase();
    })
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
      
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className=" h-[300px] gap-0 w-screen    flex flex-col items-start justify-start ">
                 <p className='text-3xl  px-12 font-semibold w-full text-left after:border-solid '>Our Fresh & Healthy Fruits</p>

        <Slider {...settings} className=" h-[270px]   w-full ">
          {results?.map(({id,data:{title,price,calories,imageURL}})=>{
            return(
              <div key={id} className="w-auto h-auto px-1 py-2  ">

              <div className="w-[400px] h-[260px] flex  flex-row items-start justify-start p-4 cursor-pointer hover:transition-transform	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500 ..." >

                <div  className="flex items-center justify-center w-full h-full rounded-lg backdrop-blur-md bg-cardOverlay shadow-md ...">

               
             <div className="w-full h-full  rounded-xl flex items-center justify-center px-3">
               <img src={imageURL} />
             </div>

              <div className="flex flex-col items-start justify-start w-1/2 h-full">
                <div className="rounded-full hover:cursor-pointer mb-10 mt-2 ml-14 bg-red-500 p-2">
                <IoMdBasket className='text-xl text-white '/>

                </div>

                    <h1 className="w-full text-xl font-semibold  text-left ">{title}</h1>
                    <p className="w-full text-lg  text-left text-gray-500" >{calories}  calories</p>
                    <p className="w-full text-lg  text-left font-bold ">{price} <span className="text-orange-500 font-semibold">$</span></p>
                  </div>
            
              </div>

            </div>
            </div>
  
            )})}
       
          
        </Slider>
        </div>
      
    )
  }
  
  export default SliderComponent
  
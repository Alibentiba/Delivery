// import React from 'react'
import React, { Component } from "react";
// import './brands.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { heroData } from "../Utils/Data";
import { IoMdBasket} from 'react-icons/io';



export default class SliderComponent extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <div className=" h-[380px]  w-screen  pl-10 pr-14  flex items-center justify-center bg-gray-300">
        <Slider {...settings} className=" h-[380px] w-full ">
          {heroData.map((item,index)=>{
            return(
              <div className="w-auto h-auto px-1 py-2  ">

              <div className="w-[400px] h-[360px] flex  flex-row items-start justify-start p-12 cursor-pointer hover:transition-transform	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500 ..." >

                <div className="flex items-center justify-center w-full h-full rounded-lg backdrop-blur-md bg-cardOverlay ">

               
             <div className="w-1/2 h-full  rounded-xl">
             <img src={item?.imageSrc} className="w-full  h-3/4 object-contain  " key={index}/>
             </div>

              <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <div className="rounded-full hover:cursor-pointer bg-orange-400 p-2">
                <IoMdBasket className='text-3xl '/>

                </div>

              <h1 className="w-full text-xl  text-center ">{item.name}</h1>
              <p className="w-full text-lg  text-center ">Calories</p>
              <p className="w-full text-lg  text-center ">{item.price} <span className="text-orange-500 font-semibold">$</span></p>
              </div>
            
              </div>

            </div>
            </div>
  
            )




          })




          }
       
          
        </Slider>
        </div>
      
    );
  }
}
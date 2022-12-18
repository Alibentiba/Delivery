
import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdBasket} from 'react-icons/io';
import {SetTobasket} from '../Redux/Slice'
import {useDispatch,useSelector } from 'react-redux'




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",
      backgroundColor:'orange',padding:'5px',width:'30px',height:'30px',borderRadius:'50%',right:'-15px'
    
       
    
    }}     onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",
      backgroundColor:'orange',padding:'5px',width:'30px',height:'30px',borderRadius:'50%',left:'-30px'
    
       
    
    }}
      onClick={onClick}
    />
  );
}

















  
  const SliderComponent = () => {
    var SliceProducts=useSelector(state=>state.userStore.Products)
    const [FruitsList, setFruitsList] = useState(null);
    useEffect(() => {
      
      setFruitsList(SliceProducts?.filter( (obj)=>{     
      return obj?.data?.category?.toUpperCase()==='fruits'.toUpperCase();}))
    }, [SliceProducts]);

    const dispatch = useDispatch()

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
    
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
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className=" h-[300px] gap-0 w-screen pl-[20px] pr-12    flex flex-col items-start justify-start ">
          <p className='text-3xl  px-12 font-semibold w-full text-left after:border-solid before:absolute before:rounded-lg before:content before:w-[16rem] before:h-1 before:-bottom-[68.5rem] before:left-[65px] before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 md:before:-bottom-[5.5rem]'>Our Fresh & Healthy Fruits</p>

        <Slider {...settings} className=" h-[270px] w-full mx-3 ">
          {FruitsList?.map(({id,data:{title,price,calories,imageURL,qty}})=>{
            const item ={id,data:{title,price,calories,imageURL,qty}}
            return(
              <div key={id} className="w-auto h-auto px-0 py-2  ">

              <div className="w-[400px] h-[260px] flex  flex-row items-start justify-start p-4 cursor-pointer hover:transition-transform	 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500 ..." >

                <div  className="flex items-center justify-center w-full h-full rounded-lg backdrop-blur-md bg-cardOverlay shadow-md">
               
             <div className="w-full h-full  rounded-xl flex items-center justify-center px-3">
               <img src={imageURL} className='h-full' />
             </div>

              <div className="flex flex-col items-start justify-start w-1/2 h-full">
                <div className="rounded-full hover:cursor-pointer mb-10 mt-2 ml-14 bg-red-500 p-2">
                <IoMdBasket onClick={()=>dispatch(SetTobasket(item))} className='text-xl text-white '/>

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
  
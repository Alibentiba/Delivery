import React, { useState } from 'react'
import Logo from './img/logo.png'
import { IoMdBasket,IoMdAdd,IoMdLogOut,IoMdLogIn} from 'react-icons/io';
import avatar from './img/avatar.png'
import {provider} from '../firebase'
import { getAuth, signInWithPopup,signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import {Logout,setActivShoping} from '../Redux/Slice'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";



const Haeder = () => {
  const [user,setUser]=useState(null)
  const [menu,setMenu]=useState(false)

  var user1=useSelector(state=>state.userStore.user)
  var basket=useSelector(state=>state.userStore.basket)

  const dispatch=useDispatch()
  const Singin = async()=>{
  const auth = getAuth();
  setUser( await signInWithPopup(auth, provider))
  
}

const LogOut = async()=>{
  const auth = getAuth();
  signOut(auth)
  dispatch(Logout())
}
var CurentUrl=document.URL

 
  return (
    <div className=' fixed top-0 z-50 w-screen  p-6 px-16 flex items-center justify-between bg-Primary '>
        <div className='hidden md:flex w-full h-full items-center justify-between'>

          <div className='flex items-center justify-center '>
          <Link to='/'><img src='https://www.shutterstock.com/image-vector/running-man-postal-box-logomessenger-260nw-293379359.jpg' alt="Logo" className='w-16 object-contain' /></Link>
          </div>

          <div className='flex items-center justify-centers gap-10'>
            <ul  className="flex items-center gap-12">
           <Link to='/'> <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            </Link>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">

                Menu</li>
                <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
               About Us</li>
               <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Service</li>

            </ul>
            <motion.div whileTap={{ scale: 0.75 }} onClick={()=>{dispatch(setActivShoping(true))}} >
            <IoMdBasket className='text-4xl hover:cursor-pointer text-black'/>

            </motion.div>
           
            <div className='relative'>
            <motion.img whileTap={{ scale: 0.75 }} src={user1? user1.photoURL :avatar}  onClick={()=>{setMenu(!menu); setTimeout(() =>{setMenu(false)},2000);}}
            alt="Avatar" className='w-10 cursor-pointer rounded-full' />

            {menu && (
              <div className='absolute z-50  h-auto flex flex-col items-start justify-start top-12 left-[-93px]  bg-slate-100 py-0 mt-0 rounded-sm'>
              {user1 && CurentUrl==="http://localhost:3000/Admin"&&(<Link to='/Admin'><button className="hover:bg-slate-200 text-black flex w-40 h-14    text-lg font-semibold items-center justify-start px-2  gap-1">New Item <IoMdAdd className='w-8 h-8'/></button>
              </Link>)}
 
              {user1? (<button className="hover:bg-slate-200 text-black flex w-40 h-14   text-lg font-semibold items-center justify-start px-3  gap-7 " onClick={LogOut} >Logout<IoMdLogOut className='w-8 h-8'/></button>)
 
               :(<button className="hover:bg-slate-200 text-black flex w-40 h-14  text-lg font-semibold items-center justify-start px-1 mt-2 gap-5" onClick={Singin} >Login<IoMdLogIn className='w-8 h-8'/></button>
               )}
 
             </div>

            )}





            


            </div>
            <p className='absolute top-[30px] right-[140px] w-[18px] h-[18px] rounded-full text-xs flex items-center font-semibold justify-center bg-red-600 text-yellow-50'>{basket?.length}</p>
        



          </div>

            

        </div>



      {/* Mobile */}

       
        <div className='md:hidden flex w-full h-full items-center justify-between '>
        <IoMdBasket onClick={()=>{dispatch(setActivShoping(true))}} className='text-5xl hover:cursor-pointer text-black'/>
        <p className='absolute top-[30px] left-[80px] w-[18px] h-[18px] rounded-full text-xs flex items-center font-semibold justify-center bg-red-600 text-yellow-50'>{basket?.length}</p>


        <div className='flex items-center justify-center gap-2'>
        
        <Link to='/'> <img src='https://seeklogo.com/images/F/free-delivery-logo-3F8F5B428D-seeklogo.com.png' alt="Logo" className='w-20 object-cover' />
        </Link>
          </div>

        <div className='relative'>
        <img src={user1? user1.photoURL :avatar}  onClick={()=>{setMenu(!menu)}} alt="Avatar" className='w-10 cursor-pointer rounded-full' />
              
            {menu && (
              <div className='absolute z-50  h-auto flex-col items-center justify-center top-12 left-[-25px]  bg-slate-200 '>
              {
              user1 && user1.email ==="bentibaali3@gmail.com"&&(<Link to='/Cantainer'><button className=' hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start px-1 mt-2 gap-3'>New Item <IoMdAdd/></button></Link>
        )}
             <ul  className="flex-col items-center gap-24 ">
             <Link to='/'> <li className="hover:bg-slate-400 text-black flex w-32  text-lg font-semibold items-center justify-start px-1 mt-2 gap-4">
              Home
            </li></Link>
            <li className="hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start px-1 mt-2 gap-4">

                Menu</li>
                <li className="hover:bg-slate-400 text-black flex w-32  text-lg font-semibold items-center justify-start px-1 mt-2 gap-4">
               About Us</li>
               <li className="hover:bg-slate-400 text-black flex w-32  text-lg font-semibold items-center justify-start px-1 mt-2 gap-4">
                Service</li>

            </ul>
 
              {user1? (<button className=' hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start px-1 mt-2 gap-4' onClick={LogOut} >Logout<IoMdLogOut/></button>)
 
               :( <button className=' hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start mt-2  px-1 gap-4' onClick={Singin} >Login<IoMdLogIn/></button>)}
 
             </div>

            )}

            </div>

          </div>





    </div>
  )
}

export default Haeder

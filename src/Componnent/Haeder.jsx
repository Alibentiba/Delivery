import React, { useState } from 'react'
import Logo from './img/logo.png'
import { IoMdBasket,IoMdAdd,IoMdLogOut,IoMdLogIn} from 'react-icons/io';
import avatar from './img/avatar.png'
import {provider} from '../firebase'
import { getAuth, signInWithPopup,signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import {Logout} from '../Redux/Slice'

const Haeder = () => {
  const [user,setUser]=useState(null)
  const [menu,setMenu]=useState(false)

  var user1=useSelector(state=>state.userstore.user)
  const dispatch=useDispatch()
 if(user1){console.log('The user1 informations ',user1.email)
}



   const Singin = async()=>{
    const auth = getAuth();
    setUser( await signInWithPopup(auth, provider))
    console.log('The uers is',user)
  
}
const LogOut = async()=>{
  const auth = getAuth();
  signOut(auth)
 dispatch(Logout())


}

 
  return (
    <div className='fixed z-40 w-screen bg-slate-300 p-6 px-16 flex items-center justify-between'>
        <div className='hidden md:flex w-full h-full items-center justify-between'>

          <div className='flex items-center justify-center gap-2'>
           <img src={Logo} alt="Logo" className='w-8 object-cover' />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </div>

          <div className='flex items-center justify-centers gap-10'>
            <ul  className="flex items-center gap-24 ">
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">

                Menu</li>
                <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
               About Us</li>
               <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Service</li>

            </ul>
            <IoMdBasket className='text-3xl hover:cursor-pointer'/>
            <div className='relative'>
            <img src={user1? user1.photoURL :avatar}  onClick={()=>{setMenu(!menu)}}
            alt="Avatar" className='w-10 cursor-pointer rounded-full' />
            {menu && (
              <div className='absolute z-50  h-20 flex-col items-center justify-center top-12 left-[-45px] gap-4'>
              {user1 && user1.email ==="alibentiba1995@gmail.com"&&(<button className=' hover:bg-slate-400 text-white flex w-32 rounded-[5px] bg-black text-lg font-bold items-center justify-center mt-2 gap-3'>New Item <IoMdAdd/></button>
             )}
 
              {user1? (<button className=' hover:bg-slate-400 text-white flex w-32 rounded-[5px] bg-black text-lg font-bold items-center justify-center mt-2 gap-4' onClick={LogOut} >Logout<IoMdLogOut/></button>)
 
               :(              <button className=' hover:bg-slate-400 text-white flex w-32 rounded-[5px] bg-black text-lg font-bold items-center justify-center mt-2 gap-4' onClick={Singin} >Login<IoMdLogIn/></button>
               )}
 
             </div>

            )}





            


            </div>
            <p className='absolute top-[30px] right-[140px] w-[18px] h-[18px] rounded-full text-xs flex items-center font-semibold justify-center bg-red-600 text-yellow-50'>3</p>
        



          </div>

            

        </div>




        <div className='md:hidden flex w-full h-full items-center justify-between'>
        <div className='flex items-center justify-center gap-2'>
           <img src={Logo} alt="Logo" className='w-8 object-cover' />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </div>

        <div className='relative'>
            <img src={user1? user1.photoURL :avatar}  onClick={()=>{setMenu(!menu)}}
            alt="Avatar" className='w-10 cursor-pointer rounded-full' />
            {menu && (
              <div className='absolute z-50  h-20 flex-col items-center justify-center top-12 left-[-45px] gap-4'>
              {user1 && user1.email ==="alibentiba1995@gmail.com"&&(<button className=' hover:bg-slate-400 text-white flex w-32 rounded-[5px] bg-black text-lg font-bold items-center justify-center mt-2 gap-3'>New Item <IoMdAdd/></button>
             )}
 
              {user1? (<button className=' hover:bg-slate-400 text-white flex w-32 rounded-[5px] bg-black text-lg font-bold items-center justify-center mt-2 gap-4' onClick={LogOut} >Logout<IoMdLogOut/></button>)
 
               :(              <button className=' hover:bg-slate-400 text-white flex w-32 rounded-[5px] bg-black text-lg font-bold items-center justify-center mt-2 gap-4' onClick={Singin} >Login<IoMdLogIn/></button>
               )}
 
             </div>

            )}





            


            </div>

          </div>





    </div>
  )
}

export default Haeder

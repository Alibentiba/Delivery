import React, { useState } from 'react'
import Logo from './img/logo.png'
import { IoMdBasket,IoMdAdd,IoMdLogOut,IoMdLogIn} from 'react-icons/io';
import avatar from './img/avatar.png'
import {provider} from '../firebase'
import { getAuth, signInWithPopup,signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import {Logout} from '../Redux/Slice'
import {Link} from 'react-router-dom'
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
    <div className='   md:w-screen  p-6 px-16 flex items-center justify-between '>
        <div className='hidden md:flex w-full h-full items-center justify-between'>

          <div className='flex items-center justify-center gap-2'>
          <Link to='/'><img src='https://seeklogo.com/images/F/free-delivery-logo-3F8F5B428D-seeklogo.com.png' alt="Logo" className='w-20 object-cover' /></Link>
            <p className='text-headingColor text-xl font-bold'>City</p>
          </div>

          <div className='flex items-center justify-centers gap-10'>
            <ul  className="flex items-center gap-12">
           <Link to='/Home'> <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
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
            <IoMdBasket className='text-3xl hover:cursor-pointer text-black'/>
            <div className='relative'>
            <img src={user1? user1.photoURL :avatar}  onClick={()=>{setMenu(!menu)}}
            alt="Avatar" className='w-10 cursor-pointer rounded-full' />

            {menu && (
              <div className='absolute z-50  h-auto flex-col items-start justify-start top-12 left-[-45px] gap-4 bg-slate-200 rounded-md pt-0'>
              {user1 && user1.email ==="alibentiba1995@gmail.com"&&(<button className="hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start px-1 mt-2 gap-4">New Item <IoMdAdd/></button>
             )}
 
              {user1? (<button className="hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start px-1 mt-2 gap-4" onClick={LogOut} >Logout<IoMdLogOut/></button>)
 
               :(              <button className="hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start px-1 mt-2 gap-4" onClick={Singin} >Login<IoMdLogIn/></button>
               )}
 
             </div>

            )}





            


            </div>
            <p className='absolute top-[30px] right-[140px] w-[18px] h-[18px] rounded-full text-xs flex items-center font-semibold justify-center bg-red-600 text-yellow-50'>3</p>
        



          </div>

            

        </div>



      {/* Mobile */}

       
        <div className='md:hidden flex w-full h-full items-center justify-between '>
        <IoMdBasket className='text-3xl hover:cursor-pointer text-black'/>
        <p className='absolute top-[30px] left-[80px] w-[18px] h-[18px] rounded-full text-xs flex items-center font-semibold justify-center bg-red-600 text-yellow-50'>3</p>


        <div className='flex items-center justify-center gap-2'>
        
        <Link to='/'> <img src='https://seeklogo.com/images/F/free-delivery-logo-3F8F5B428D-seeklogo.com.png' alt="Logo" className='w-20 object-cover' />
        </Link>
          </div>

        <div className='relative'>
        <img src={user1? user1.photoURL :avatar}  onClick={()=>{setMenu(!menu)}} alt="Avatar" className='w-10 cursor-pointer rounded-full' />
              
            {menu && (
              <div className='absolute z-50  h-auto flex-col items-center justify-center top-12 left-[-25px]  bg-slate-300 '>
              {
              user1 && user1.email ==="alibentiba1995@gmail.com"&&(<button className=' hover:bg-slate-400 text-black flex w-32   text-lg font-semibold items-center justify-start px-1 mt-2 gap-3'>New Item <IoMdAdd/></button>
        )}
             <ul  className="flex-col items-center gap-24 ">
             <Link to='/Home'> <li className="hover:bg-slate-400 text-black flex w-32  text-lg font-semibold items-center justify-start px-1 mt-2 gap-4">
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

import React, { useEffect} from 'react'
import Haeder from './Componnent/Haeder'
import { useDispatch, useSelector } from 'react-redux'
import {LoginA} from './Redux/Slice'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const App = () => {
  var user1=useSelector(state=>state.userstore.user)

  const dispatch=useDispatch()
  useEffect(() => {
    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
       if (user) {
     
      dispatch(LoginA(user))
      console.log('the user information is',user)
    
    } else {
      console.log('Makach')
    }
  });
  
  }, [dispatch]);
  
  return (
 
    <div className='w-screen h-60 flex flex-col  text-cyan-600'>
     <Haeder/>
 

    </div>
   
  )
}

export default App
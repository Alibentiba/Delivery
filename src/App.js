import React, { useEffect} from 'react'
import Haeder from './Componnent/Haeder'
import { useDispatch, useSelector } from 'react-redux'
import {LoginA} from './Redux/Slice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cantainer from './Componnent/Cantainer';
import Home from './Componnent/Home';

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
  });}, [dispatch]);
  
  return (
    <BrowserRouter>

    <div className='w-screen h-auto gap-5  flex-col items-start justify-start text-cyan-600'>
      
     <Haeder/>
     

     <div className='w-full'>
     <Routes>
      <Route path='/Cantainer' element={<Cantainer/>}/>
      <Route path='/' element={<Home/>}/>





     </Routes>
     </div>

     
     
     
 

    </div>

    </BrowserRouter>

  )
}

export default App
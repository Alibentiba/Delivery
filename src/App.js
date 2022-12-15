import React, { useEffect,useState} from 'react'
import Haeder from './Componnent/Haeder'
import { useDispatch, useSelector } from 'react-redux'
import {LoginA} from './Redux/Slice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cantainer from './Componnent/Cantainer';
import Home from './Componnent/Home';
import {db } from "./firebase";
import { collection, getDocs } from "firebase/firestore"; 
import {fetchTostat} from './Redux/Slice'
import SliderComponent from './Componnent/SliderComponent'
import ShopingCart from './Componnent/ShopingCart';

const App = () => {
  const [Products, setProducts] = useState(null);
  const dispatch =useDispatch()
  
  useEffect(()=>{
    const colRef= collection(db,'Products')
    getDocs(colRef).then((snap)=>{setProducts(snap.docs.map((doc)=>(
    {id:doc.id,
    data:doc.data()})))})

        if(Products){
          dispatch(fetchTostat(Products))
        }
        
    },[])






    






































  useEffect(() => {
    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
       if (user) {
        dispatch(LoginA({
        displayName:user.displayName,
        email:user.email,
        photoURL:user.photoURL}
      ))}});}, [dispatch]);
  





















  return (
    <BrowserRouter>
    <div className='w-screen gap-0  flex-col items-center justify-start bg-Primary'>
      
     <Haeder/>
     <ShopingCart/>
     <Routes>
      <Route path='/Cantainer' element={<Cantainer/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/ShopingCart' element={<ShopingCart/>}/>
     </Routes>
     </div>
    </BrowserRouter>

  )
}

export default App







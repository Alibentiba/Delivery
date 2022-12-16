import React, { useEffect,useState} from 'react'
import Haeder from './Componnent/Haeder'
import { useDispatch, useSelector } from 'react-redux'
import {LoginA} from './Redux/Slice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cantainer from './Componnent/Cantainer';
import Home from './Componnent/Home';
import {app, db } from "./firebase";
import { collection, getDocs } from "firebase/firestore"; 
import {fetchTostat} from './Redux/Slice'
import ShopingCart from './Componnent/ShopingCart';

const App = () => {
  const [Products, setProducts] = useState(null);

  const dispatch =useDispatch()
  // Getting Data {The List Product from firebase/fireStor}
  useEffect(()=>{
  
    const colRef= collection(db,'Products')
    getDocs(colRef).then((snap)=>{setProducts(snap.docs.map((doc)=>(
    {id:doc.id,
    data:doc.data()})))})

 setProducts(Products?.forEach((element) => {
    var {id,data:{qty,title,price,calories,imageURL}}=element
   var  X=parseInt(element.data.qty)
    element= {...element,qty:X}

    }))
  //  if(Products){
  //   console.log('Test',(typeof Products[0].data.qty))

  //  }





  
















        if(Products){
          localStorage.setItem('Products',JSON.stringify(Products));
          const ProductsLocal = JSON.parse(localStorage.getItem('Products'));



          dispatch(fetchTostat(ProductsLocal))
          // Products?.forEach((element) => {
          //   var {id,data:{qty,title,price,calories,imageURL}}=element
        
          //     console.log('type is is,',(typeof qty))
        
          //   });
        }
        
        
        
    },[Products])
















  // Getting User  {The User Info from firebase/Auth}
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







import React, { useEffect,useState} from 'react'
import Haeder from './Componnent/Haeder'
import { useDispatch, useSelector } from 'react-redux'
import {LoginA} from './Redux/Slice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cantainer from './Componnent/Cantainer';
import Home from './Componnent/Home';
import { storage,db } from "./firebase";
  import { collection, getDocs ,addDoc} from "firebase/firestore"; 
  import {fetchTostat} from './Redux/Slice'
import SliderComponent from './Componnent/SliderComponent'

const App = () => {
  const [Products, setProducts] = useState(null);
  const dispatch =useDispatch()


  var user1=useSelector(state=>state.userStore.user)

  useEffect(()=>{
    const colRef= collection(db,'Products')
    getDocs(colRef).then((snap)=>{setProducts(snap.docs.map((doc)=>(
    {id:doc.id,
    data:doc.data()})))
        })
    },[])



    if(Products){
      dispatch(fetchTostat(Products))
      console.log('The prodcts List are ',Products)}

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

    <div className='w-screen gap-1  flex-col items-start justify-start  bg-slate-50'>
      
     <Haeder/>
     

     <div className='w-full'>
     <Routes>
      <Route path='/Cantainer' element={<Cantainer/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/HH' element={<SliderComponent/>}/>

      






     </Routes>
     </div>

     
     
     
 

    </div>

    </BrowserRouter>

  )
}

export default App
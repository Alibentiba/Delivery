import React, {useState } from 'react'
import { categories } from '../Utils/Data';
import {RiUploadCloud2Line} from 'react-icons/ri';
import {deleteObject,getDownloadURL,ref,uploadBytesResumable,} from "firebase/storage";
import { storage,db } from "../firebase";
import { collection ,addDoc} from "firebase/firestore"; 


const Cantainer = () => {
    const [title, setTitle] = useState('');
    const [category, setcategorie] = useState();
    const [isLaoding, setisLaoding] = useState(false);
    const [imageAsset, setimageAsset] = useState(null);
    const [calories, setcalories] = useState('');
    const [price, setprice] = useState('');
  


  const PutNull =()=>{
    setTitle('')
    setcalories('')
    setimageAsset(null)
    setprice('')

  }


  
        
     const uploadImage = (e) => {
     const imageFile = e.target.files[0];
     const storageRef = ref(storage, `images/${Math.floor(Math.random() * 100)}-${imageFile.name}`);
     const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
    
        setTimeout(4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimageAsset(downloadURL);
          
          setTimeout(() => 4000);
          if(imageAsset){setisLaoding(false)
          console.log('The image Asset is',imageAsset)}
          
        });
      }
    );
  };





  const deleteImage = () => {
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setimageAsset(null);
      setTimeout(() =>4000);
    });
  };

      const saveDetails = (e) => {
        if(imageAsset){
            console.log('The sdsdqdfqsd',imageAsset)
            console.log('The Category is',category)


            if (title || calories || imageAsset || price || category) {
  
                const data = {
                  id: `${Math.floor(Math.random() * 100)}`,
                  title: title,
                  imageURL: imageAsset,
                  category: category,
                  calories: calories,
                  qty:1,
                  price: Number(price),
                }
                e.preventDefault();
                    addDoc(collection(db,"Products"),data)}



                  
                    setTimeout(() =>{
                    PutNull()},1000)

                    
                      
                }}

      






  
  return (
<div className='w-full mt-[5.5rem] flex  items-start justify-center h-auto p-2 bg-gray-100'>
    <div className='w-full h-screen flex flex-col items-center justify-start bg-gray-200  gap-6 rounded-lg p-10 md:w-1/2 md:h-full '>

    <div className='w-full flex flex-col items-start gap-3 justify-start md:flex md:flex-row'>
        
    <div className='w-full h-20 flex items-center justify-start  md:w-1/2 md:h-16 '>
        <input type="text" placeholder='Enter Food Names ...'
        className='w-full h-full outline-none border-[0.5px]  border-gray-300 text-2xl  text-gray-800 bg-slate-100 placeholder:text-gray-500 pl-4 rounded-sm '
        value={title}
        onChange={e=>{setTitle(e.target.value)}}/>
    </div>

    <div className='w-full  h-20 flex items-center justify-start px-1 py-0  bg-white  rounded-sm border-[0.5px]  border-gray-300 text-2xl md:w-1/2 md:h-16'>
        <select onChange={e=>{setcategorie(e.target.value)}} name="categories"      
           className='w-full flex gap-2/3 h-full outline-none   text-gray-800 bg-white md:20 cursor-pointer'>
            <option className='w-1/2' value="Other" disabled>Select Categories </option>
            {categories.map((item)=>{
                return(
                    <option className='w-1/2 relative z-40 cursor-pointer' onClick={()=>{setcategorie(item.name)}} key={item.id} value={item.urlParamName}> {item.name}</option>
                  )})}
        </select>
    </div>
</div>


    <div className='w-full h-420  flex items-center justify-center rounded-sm border-dotted border-2 border-gray-300 md:h-340'>
        {/* {isLaoding?<Laoder/>:( */}

                { !imageAsset? 
                

                <label className='w-full h-full ' onClick={()=>{setisLaoding(!isLaoding)}}>  
                   <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <RiUploadCloud2Line className='w-10 h-10 text-gray-600'/>
                    <p className='text-gray-600 text-xl'>Click To uplaod img</p>
                     </div>

                    <input type="file"
                    name='uplaodimg'
                    accept='image/*'
                    onChange={uploadImage}
                    className='w-0 h-0'/>
               </label>
                :

             <div  className='w-full h-full flex flex-col items-center justify-start gap-4 p-1 '>    
               <img  src={imageAsset} alt="profuct"  className='w-[150px] h-[150px] object-contain rounded-lg md:w-[400px] md:h-[230px]'/>

            <button onClick={deleteImage}
            className='w-36 h-10 border-[0.5px]  border-gray-300 bg-white rounded-lg text-xl font-medium text-red-500 hover:text-white hover:bg-red-500'>Delete
            </button>
         </div>
         
                }
         </div> 
         


         
        





    

    <div className='w-full  h-auto flex items-start justify-center  gap-2 '>
    <div className='w-1/2  h-auto flex items-center justify-start  gap-2 md:w-full '>
        {/* <IoFastFood className='w-14 h-14 '/> */}
        <input type="number" placeholder='Calories'
        className='w-full h-20 outline-none border-[0.5px]  border-gray-300 text-2xl  text-gray-800 bg-slate-100 placeholder:text-gray-500 pl-4 rounded-sm '
        value={calories}
        onChange={e=>{setcalories(e.target.value)}}/>
    </div>

     <div  className='w-1/2  h-auto flex items-center justify-start  gap-2 md:w-full '>
        {/* <IoFastFood className='w-14 h-14 '/> */}
        <input type="number" placeholder='Price'
         className='w-full h-20 outline-none border-[0.5px]  border-gray-300 text-2xl  text-gray-800 bg-slate-100 placeholder:text-gray-500 pl-4 rounded-sm '
         value={price}
         onChange={e=>{setprice(e.target.value)}}/>
      </div>
    </div>


    <div className='w-full  h-auto flex items-center justify-end p-1 gap-2 '>
        <button 
         className='w-full h-14 border-[0.5px]  border-gray-300 bg-green-500 rounded-md text-2xl font-medium text-gray-100 hover:text-white hover:bg-green-600 md:w-1/3'
         onClick={saveDetails}
         disabled={!imageAsset}
         >Save
        </button>
    </div>




 </div>
</div>

    
  )
}
export default Cantainer

import React, { useState } from 'react'
import {IoFastFood} from 'react-icons/io5';
import { categories } from '../Utils/Data';
import Laoder from './Laoder';
import {RiUploadCloud2Line,RiDeleteBin7Fill} from 'react-icons/ri';
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
  } from "firebase/storage";
  import { storage } from "../firebase";





const Cantainer = () => {
    const [Title, setTitle] = useState('');
    const [categorie, setcategorie] = useState('');
    const [isLaoding, setisLaoding] = useState(false);
    const [imageAsset, setimageAsset] = useState([]);


    const uploadImage =(e)=>{
        setisLaoding(true)
        if (e.target.files.length !== 0) {
            setimageAsset([...imageAsset, URL.createObjectURL(e.target.files[0])])
           
          }
        if(imageAsset){ console.log('The image is',imageAsset)}
        
        
        }
     

    // const uploadImage = (e) => {
    //     // setIsLoading(true);
    //     const imageFile = e.target.files[0];
    //     const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    //     const uploadTask = uploadBytesResumable(storageRef, imageFile);
    
    //     uploadTask.on(
    //       "state_changed",
    //       (snapshot) => {
    //         const uploadProgress =
    //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       },
       
    //       () => {
    //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //             setimageAsset(downloadURL);
    //         //   setIsLoading(false);
    //         //   setFields(true);
    //         //   setMsg("Image uploaded successfully 😊");
    //         //   setAlertStatus("success");
    //         //   setTimeout(() => {
    //         //     setFields(false);
    //         //   }, 4000);
    //         });
    //       }
    //     );
    //   };
























          

  return (
<div className='w-full  flex  items-start justify-center h-auto p-10 bg-gray-100'>
    <div className='w-full h-screen flex flex-col items-center justify-start bg-gray-200  gap-6 rounded-lg p-10 md:w-1/2 md:h-full '>



    <div className='w-full flex flex-col items-start gap-3 justify-start md:flex md:flex-row'>
        
    <div className='w-full h-20 flex items-center justify-start  md:w-1/2 md:h-16 '>
        <input type="text" placeholder='Enter Food Names ...'
        className='w-full h-full outline-none border-[0.5px]  border-gray-300 text-2xl  text-gray-800 bg-slate-100 placeholder:text-gray-500 pl-4 rounded-sm '
        value={Title}
        onChange={e=>{setTitle(e.target.value)}}/>
    </div>

    <div className='w-full  h-20 flex items-center justify-start px-1 py-0  bg-white  rounded-sm border-[0.5px]  border-gray-300 text-2xl md:w-1/2 md:h-16'>
        <select onChange={e=>{setcategorie(e.target.value)}} name="categories"      
           className='w-full flex gap-2/3 h-full outline-none   text-gray-800 bg-white md:20 '>
            <option className='w-1/2' value="Other" disabled>Select Categories </option>
            {categories.map((item)=>{
                return(
                    <option className='w-1/2' key={item.id} value={item.urlParamName}> {item.name}</option>
                  )})}
        </select>
    </div>
</div>


    <div className='w-full h-420  flex items-center justify-center rounded-sm border-dotted border-2 border-gray-300 md:h-340'>
        {/* {isLaoding?<Laoder/>:( */}
        {/* <> */}

                 {imageAsset.length ==0 ? 

                <label className='w-full h-full '>  
                   <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <RiUploadCloud2Line className='w-10 h-10 text-gray-600'/>
                    <p className='text-gray-600 text-xl'>Click To uplaod img</p>
                     </div>

                    <input type="file"
                    name='uplaodimg'
                    accept='image/*'
                    onChange={uploadImage}
                    className='w-0 h-0'/>
               </label>:(

         <div className='w-full h-full flex flex-col items-center justify-start gap-4 p-4'>

                    {imageAsset.map((elem) => {
                        return <img key={elem} src={elem} alt="profuct"  className='w-full h-3/4 object-cover rounded-lg'/>})}


            <button onClick={()=>{ setimageAsset([])}}
            className='w-36 h-10 border-[0.5px]  border-gray-300 bg-white rounded-lg text-xl font-medium text-red-500 hover:text-white hover:bg-red-500'>Delete
            </button>
         </div>


        ) }
        {/* </> */}
        {/* )} */}




    </div>
    

    <div className='w-full  h-auto flex items-start justify-center  gap-2 '>
    <div className='w-1/2  h-auto flex items-center justify-start  gap-2 md:w-full '>
        {/* <IoFastFood className='w-14 h-14 '/> */}
        <input type="text" placeholder='Calories'
        className='w-full h-20 outline-none border-[0.5px]  border-gray-300 text-2xl  text-gray-800 bg-slate-100 placeholder:text-gray-500 pl-4 rounded-sm '
        value={Title}
        onChange={e=>{setTitle(e.target.value)}}/>
    </div>

     <div  className='w-1/2  h-auto flex items-center justify-start  gap-2 md:w-full '>
        {/* <IoFastFood className='w-14 h-14 '/> */}
        <input type="text" placeholder='Price'
         className='w-full h-20 outline-none border-[0.5px]  border-gray-300 text-2xl  text-gray-800 bg-slate-100 placeholder:text-gray-500 pl-4 rounded-sm '
         value={Title}
         onChange={e=>{setTitle(e.target.value)}}/>
      </div>
    </div>


    <div className='w-full  h-auto flex items-center justify-end p-1 gap-2 '>
        <button 
         className='w-full h-14 border-[0.5px]  border-gray-300 bg-green-500 rounded-lg text-2xl font-medium text-gray-100 hover:text-white hover:bg-green-600 md:w-1/3'>Save
        </button>
    </div>




 </div>
</div>

    
  )
}
export default Cantainer

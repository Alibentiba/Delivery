import React, { useState } from 'react'
import {IoFastFood} from 'react-icons/io5';
import { categories } from '../Utils/Data';
import Laoder from './Laoder';
import {RiUploadCloud2Line,RiDeleteBin7Fill} from 'react-icons/ri';






const Cantainer = () => {
    const [Title, setTitle] = useState('');
    const [categorie, setcategorie] = useState('');
    const [isLaoding, setisLaoding] = useState(false);
    const [imageAsset, setimageAsset] = useState(null);


    const uploadImage =(e)=>{
        setisLaoding(true)
        const imgFile=e.target.file[0]
        setimageAsset(imgFile)
          }

  return (
<div className='w-full  flex  items-start justify-center h-auto p-10'>
    <div className='w-full h-screen flex flex-col items-center justify-start bg-gray-100  gap-6 rounded-lg p-10 md:w-1/2 md:h-800'>

    <div className='w-full  h-auto flex items-center justify-start p-1 gap-2 '>
        {/* <IoFastFood className='w-14 h-14 '/> */}
        <input type="text" placeholder='Enter Food Names ...'
        className='w-full h-20 outline-none border-[0.5px]  border-gray-300 text-2xl  text-gray-800 bg-slate-100 placeholder:text-gray-500 pl-4 rounded-sm '
        value={Title}
        onChange={e=>{setTitle(e.target.value)}}/>
    </div>

    <div className='w-full  h-auto flex items-center justify-start p-1 gap-2 bg-white pl-4 rounded-sm border-[0.5px]  border-gray-300 text-2xl'>
        <select onChange={e=>{setcategorie(e.target.value)}} name="categories"      
           className='w-full flex gap-2/3 h-20 outline-none   text-gray-800 bg-white   '
 >
            <option className='w-1/2' value="Other">Select Categories </option>
            {categories.map((item)=>{
                return(
                    <option className='w-1/2' key={item.id} value={item.urlParamName}> {item.name}</option>
                  )})}
        </select>
    </div>

    <div className='w-full h-420  flex items-center justify-center rounded-sm border-dotted border-2 border-gray-300'>
        {isLaoding?<Laoder/>:(<>

                 {!imageAsset ? 

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

         <div className='w-full h-full flex flex-col items-center justify-center'>
            <img src={imageAsset} alt="profuct"  className='w-full h-3/4 object-cover'/>
            <button className='w-36 h-10 border-[0.5px]  border-gray-300 bg-white rounded-lg text-xl font-medium text-red-500 hover:text-white hover:bg-red-500'>Delete</button>
         </div>


        ) }
        </>)}




    </div>
    

    <div className='w-full  h-auto flex items-start justify-center  gap-2 md:flex md:flex-col md:justify-start md:items-start '>
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

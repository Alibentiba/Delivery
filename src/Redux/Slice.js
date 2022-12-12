import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "userStore",
    initialState: {user:null,Products:null,ActiveCat:null},
   
    reducers: {
          LoginA: (state,action) => {
         state.user=action.payload
        
          },
          Logout:(state,action) => {
            state.user=null;
          
           
             },
             fetchTostat:(state,action) => {
              state.Products=action.payload
            
             
               }
               ,setActiveCat:(state,action)=>{
                state.ActiveCat=action.payload
               }
          

    }
})
export const {LoginA,Logout,fetchTostat,setActiveCat} = Slice.actions
export default Slice.reducer
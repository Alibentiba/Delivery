import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "userStore",
    initialState: {
      user:null,
      Products:null,
      ActiveCat:null,
      ActivShoping:false,
      basket:null},
   
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
               },
               setActivShoping :(state,action)=>{
                state.ActivShoping=action.payload

               },
               SetTobasket :(state,action) => {
                               
                state.basket= state.basket.push(action.payload)
                
                
            
               
                 },
          

    }
})
export const {LoginA,Logout,fetchTostat,setActiveCat,setActivShoping,SetTobasket} = Slice.actions
export default Slice.reducer
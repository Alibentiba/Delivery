import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "userStore",
    initialState: {
      basket:[],
      user:null,
      Products:null,
      ActiveCat:null,
      ActivShoping:false,
     },
   
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
                const newCart = [...state.basket, action.payload]
                  return { ...state, basket: newCart}
                },

                  SetbasketNull :(state,action) => {
                    state.basket=null}
       
              
                
            
               
                
          

    }
})
export const {LoginA,Logout,fetchTostat,setActiveCat,setActivShoping,SetTobasket,SetbasketNull} = Slice.actions
export default Slice.reducer
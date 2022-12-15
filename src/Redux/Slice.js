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
                
                const itemIndex =state.basket.findIndex((item)=>item.id===action.payload.item.id)
              if(itemIndex>=0){
                if(action.payload.Stuts===1)


          {    var D=  parseInt(state.basket[itemIndex].data.Qty)
              D+=1
              state.basket[itemIndex].data.Qty=D}


              else{
                
              var D=  parseInt(state.basket[itemIndex].data.Qty)
              D-=1
              state.basket[itemIndex].data.Qty=D

              }
              }else{
                const temP={...action.payload.item,Qty:1}
                state.basket.push(temP);
              }
                






















              
                },

                  SetbasketNull :(state,action) => {
                    state.basket=action.payload},
                    updatebasket:(state,action)=>{
                        state.basket=action.payload

                    },
                    

       
              
                
            
               
                
          

    }
})
export const {LoginA,Logout,fetchTostat,setActiveCat,setActivShoping,SetTobasket,SetbasketNull,setQty} = Slice.actions
export default Slice.reducer
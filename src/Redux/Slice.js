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
                console.log('The action py',action.payload)
                
                const itemIndex =state.basket.findIndex((item)=>item.id===action.payload.id)
              if(itemIndex>=0){
             var D= parseInt(state.basket[itemIndex].data.Qty)
              D++
              
              state.basket[itemIndex].data.Qty=D
            }
              
              else{
              var Tp ={...action.payload,Qty:parseInt(action.payload.data.Qty)}
                const temP={...Tp,Qty:1}
                state.basket.push(temP);
              }
                
        
                },

                Dirncer :(state,action) => {
                  console.log('The action py',action.payload)
                  
                  const itemIndex =state.basket.findIndex((item)=>item.id===action.payload.id)
                if(itemIndex>=0){
               var D= parseInt(state.basket[itemIndex].data.Qty)
                D--
                
                state.basket[itemIndex].data.Qty=D
              }
            },
                
  

                  SetbasketNull :(state,action) => {
                    state.basket=action.payload},
                    updatebasket:(state,action)=>{
                        state.basket=action.payload

                    },
                    

       
              
                
            
               
                
          

    }
})
export const {LoginA,Logout,fetchTostat,setActiveCat,setActivShoping,SetTobasket,SetbasketNull,Dirncer} = Slice.actions
export default Slice.reducer
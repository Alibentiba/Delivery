import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "userStore",
    initialState: {
      basket:[],
      user:null,
      Products:null,
      ActiveCat:null,
      ActivShoping:false,
      ProductListlenght:null,
      Total:0
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
        
                const itemIndex =state.basket.findIndex((item)=>item.id===action.payload.id)

              if(itemIndex>=0){
                state.basket[itemIndex].data.qty++
              
                }else{
                const temP={...action.payload,qty:1}
                state.basket.push(temP);
              }
               
              },
             
             
           getProductListlenght:(state,action) => {
            state.ProductListlenght=state.Products.lenght
              },
            
             
             







                Dirncer :(state,action) => {
                  console.log('The action py',action.payload)
                  var itemIndex =state.basket.findIndex((item)=>item.id===action.payload.id)

                  console.log('The itemIndex is',itemIndex)

                  if((action.payload.data.qty)===0){
                    state.basket.splice(itemIndex,1)
                  }else{
                    
                      var D=state.basket[itemIndex].data.qty
                       D--
                       state.basket[itemIndex].data.qty=D
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
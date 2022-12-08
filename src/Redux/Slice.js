import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "userStore",
    initialState: {user:null,Channels:null,activeChannel:null},
   
    reducers: {
          LoginA: (state,action) => {
         state.user=action.payload
        
          },
          Logout:(state,action) => {
            state.user=null;
          
           
             },
             getChannels:(state,action) => {
              state.Channels=action.payload
            
             
               }
               ,setactiveChannel:(state,action)=>{
                state.activeChannel=action.payload
               }
          

    }
})
export const {LoginA,Logout,getChannels,setactiveChannel} = Slice.actions
export default Slice.reducer
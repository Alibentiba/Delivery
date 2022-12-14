import { configureStore } from '@reduxjs/toolkit'

import Slice from './Slice'
// import CartSlice from './CartSlice'

const Store = configureStore({
  reducer: {userStore: Slice
  
                                },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
export default Store
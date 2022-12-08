import { configureStore } from '@reduxjs/toolkit'

import Slice from './Slice'

const Store = configureStore({
  reducer: {userstore: Slice},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
export default Store
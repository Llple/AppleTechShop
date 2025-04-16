import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AdminState {
  isAuth: boolean
}

// Define the initial state using that type
const initialState: AdminState = {
    isAuth: false,
}

export const adminSlice = createSlice({
  name: 'admin',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsAuth: (state,action:PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    
  },
})

export const {setIsAuth} = adminSlice.actions


export default adminSlice.reducer
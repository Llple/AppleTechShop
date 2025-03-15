import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"

const fetchTech = createAsyncThunk(
  'users/fetchTech',
  async () => {
    const {data}   = await axios.get<Products[]>("https://679223c9cf994cc68048dbd6.mockapi.io/AppleTech")
    return data
    
  },
)
export interface Products {
  id: string,
  imageUrl: string,
    title: string,
    colors: string[],
    storage: number[],
    price: number,
    category: number,
    rating: number,
    description: string
}
export interface ProductState {
  loading: "sucsess" | "loading" | "rejected",
  products: Products[],
  error:string
}

const initialState:ProductState  = {
  loading: "loading",
  products:[],
  error:""
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchTech.pending, (state) => {
        state.loading ="loading" 
        state.error = "";
        state.products =[];
      })
      .addCase(fetchTech.fulfilled, (state, action: PayloadAction<Products[]>) => {
        state.products = action.payload; // Заменяем массив продуктов
        state.loading = "sucsess" 
      })
      
    
  }
})

// Action creators are generated for each case reducer function
export const {  } = itemsSlice.actions

export default itemsSlice.reducer
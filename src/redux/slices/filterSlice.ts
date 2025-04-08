import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: number;
  inputValue: string;
  sortBy: number;
  //sortBy:number
}

const initialState: FilterState = {
  category: 0,
  inputValue: "",
  sortBy: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setSortBy: (state, action: PayloadAction<number>) => {
      state.sortBy = action.payload;
    },
  },
});

export const {setCategory, setInputValue, setSortBy} = filterSlice.actions;

export default filterSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import  itemsSlice  from './slices/itemsSlice'
import  filterSlice  from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    items : itemsSlice,  
    filter: filterSlice

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
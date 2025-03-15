import { configureStore } from '@reduxjs/toolkit'
import { itemsSlice } from './slices/itemsSlice'


export const store = configureStore({
  reducer: {
    items : itemsSlice.reducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
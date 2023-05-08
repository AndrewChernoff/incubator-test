import { cartSlice } from './slices/cartSlice';
import { combineReducers, compose, configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import appSlice from './slices/appSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const reducers = combineReducers({
  app: appSlice,
  productsSlice: productsSlice,
  cart: cartSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
},)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
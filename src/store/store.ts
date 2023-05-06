import { cartSlice } from './slices/cartSlice';
import { compose, configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import appSlice from './slices/appSlice';


/* declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 */
export const store = configureStore({
  reducer: {
    app: appSlice,
    productsSlice: productsSlice,
    cart: cartSlice.reducer,
  },
},)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addToCart, decrement, increment } from './cartSlice'

type ProductType = {
  id: string
  img: string
  name: string
  price: number
  isInCart: boolean
}

export interface ProductsState {
  products: ProductType[]
}

const initialState: ProductsState = {
    products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<{products: any[]}>) => {
      const arr = action.payload.products.map(el => ({...el, isInCart: false}))     
      state.products = arr
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, action) => {
      const index = state.products.findIndex(el => el.id === action.payload.id)
      if (index !== -1) {
       state.products[index].isInCart = true
      }
    })
  }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
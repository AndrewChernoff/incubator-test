import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addToCart, decrement, increment } from './cartSlice'

type ProductType = {
  [key: number] :
    {
    id: number
    img: string
    name: string
    price: number
  }
}

interface ProductsState {
  products: any[]
}

const initialState: ProductsState = {
    products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<{products: ProductType[]}>) => {
      const arr = action.payload.products.map(el => ({...el, isInCart: false}))     
      state.products = arr
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, action) => {
      const index = state.products.findIndex(el => el.id === action.payload.id)
      if (index !== -1) {
       //state.products[index].quantity++
       state.products[index].isInCart = true
      }
    })
    /* .addCase(increment, (state, action: PayloadAction<{id: string}>) => {
      const index = state.products.findIndex(el => el.id === action.payload.id)
      if (index !== -1) {
       state.products[index].quantity++
      }
    })
    .addCase(decrement, (state, action: PayloadAction<{id: string}>) => {
      const index = state.products.findIndex(el => el.id === action.payload.id)
      if (index !== -1) {
       state.products[index].quantity--
      }
    }) */
  }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
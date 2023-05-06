import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ProductType = {
    id: string
    img: string
    name: string
    price: number
    quantity: number
  }

interface CartState {
  products: ProductType[]
}

const initialState: CartState = {
    products: [],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{id: string, name: string, price: number, img: string, quantity: number}>) => {
        const itemInCart = state.products.find((item) => item.id === action.payload.id);

        if(itemInCart) {
            itemInCart.quantity++
            itemInCart.price = action.payload.price
        
        } else {
            const params = action.payload 
        
            const newItem = {
            id:  params.id,
            name: params.name,
            price: params.price,
            img: params.img,
            quantity: 1,
            }
            state.products.push(newItem)
        }
      },
    increment: (state, action: PayloadAction<{id: string/* , price: number, quantity: number */}>) => {
        const index = state.products.findIndex(item => item.id === action.payload.id)
        if (index !== -1) {
            state.products[index].quantity++
        }
    },
    decrement: (state, action: PayloadAction<{id: string/* , price: number, quantity: number */}>) => {
        const index = state.products.findIndex(item => item.id === action.payload.id)
        if (state.products[index].quantity === 1) {
            state.products[index].quantity = 1
            state.products.splice(index, 1)
            return
        }

        if (index !== -1) {
            state.products[index].quantity--
        }
    },
      
    /* removeItem: (state, action: PayloadAction<{id: number}>) => {
        state.products = state.products.filter((item) => item.id !== action.payload);
      }, */
  },
  
   
})

export const { addToCart, increment, decrement } = cartSlice.actions


export default cartSlice.reducer
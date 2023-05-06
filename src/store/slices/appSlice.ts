import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isInit: false as boolean,
}

export const appSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initialize: (state) => {
        state.isInit = true
    },
  },
})

export const { initialize } = appSlice.actions

export default appSlice.reducer
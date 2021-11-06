import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../common/Board'

const initialState: Card[] = []

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setup: (state, action: PayloadAction<Card[]>) => {
      return (state = action.payload)
    },
  },
})

console.log('cardsSlice', cardsSlice)

export const { setup } = cardsSlice.actions
export default cardsSlice.reducer

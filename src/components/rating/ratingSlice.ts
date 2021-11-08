import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RatingItemType = { date: number; result: number }
type RatingSlice = RatingItemType[]

const initialState: RatingSlice = []

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<number>) => {
      state.push({ date: Date.now(), result: action.payload })
    },
  },
})

export const { addResult } = ratingSlice.actions

export default ratingSlice.reducer

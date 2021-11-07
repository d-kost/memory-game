import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'
import { ICard } from '../../common/Board'

type SliceType = {
  cards: ICard[]
  flipped: [number, number]
}

const initialState: SliceType = {
  cards: [],
  flipped: [-1, -1],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setup: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload
      state.flipped = [-1, -1]
    },
    flip: (state, action: PayloadAction<number>) => {
      if (state.flipped[0] === -1) {
        state.flipped[0] = action.payload
        return
      }
      if (state.flipped[1] === -1) {
        state.flipped[1] = action.payload
      }
    },
    closeAll: (state) => {
      state.flipped = [-1, -1]
    },
  },
})

export const match = createAction<number>('game/match')

export const { setup, flip, closeAll } = gameSlice.actions

export default gameSlice.reducer

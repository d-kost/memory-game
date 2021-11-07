import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
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
    match: (state, action: PayloadAction<number>) => {
      // console.log('match', state.flipped[0], state.flipped[1])
      // if (state.flipped[0] < 0 || state.flipped[1] < 0) {
      //   return
      // }
      // const card1 = state.cards[state.flipped[0]]
      // const card2 = state.cards[state.flipped[1]]
      // if (card1.id === card2.id) {
      //   state.cards[state.flipped[0]].removed = true
      //   state.cards[state.flipped[1]].removed = true
      // }
      // state.flipped = [-1, -1]
    },
    closeAll: (state) => {
      state.flipped = [-1, -1]
    },
  },
})

console.log('gameSlice', gameSlice)

export const { setup, flip, match, closeAll } = gameSlice.actions

export default gameSlice.reducer

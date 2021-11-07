import {
  createSlice,
  PayloadAction,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { ICard } from '../../common/Board'
import IconApi from '../../common/IconApi'

type SliceType = {
  cards: ICard[]
  flipped: [number, number]
}

const initialState: SliceType = {
  cards: [],
  flipped: [-1, -1],
}

export const setupCardsData = createAsyncThunk<ICard[], ICard[]>(
  'game/setupCardsData',
  async (cards) => {
    try {
      let result = await IconApi.loadIcons(cards.length / 2)
      let icons = result.map((item) => item.default)

      return cards.map((card) => {
        return {
          ...card,
          icon: icons[card.id],
        }
      })
    } catch (e) {
      alert('Cannot fetch icons')
      return []
    }
  }
)

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    flip: (state, action: PayloadAction<number>) => {
      if (state.flipped[0] === -1) {
        state.flipped[0] = action.payload
        return
      }
      if (state.flipped[1] === -1) {
        state.flipped[1] = action.payload
      }
    },
    removeCards: (state) => {
      if (
        state.cards[state.flipped[0]].id === state.cards[state.flipped[1]].id
      ) {
        state.cards[state.flipped[0]].removed = true
        state.cards[state.flipped[1]].removed = true
      }
    },
    closeAll: (state) => {
      state.flipped = [-1, -1]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setupCardsData.fulfilled,
      (state, action: PayloadAction<ICard[]>) => {
        state.cards = action.payload
        state.flipped = [-1, -1]
      }
    )
  },
})

export const match = createAction<number>('game/match')

export const { flip, removeCards, closeAll } = gameSlice.actions

export default gameSlice.reducer

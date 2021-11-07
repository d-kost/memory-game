import { Middleware } from '@reduxjs/toolkit'
import { RootState } from './store'
import { match, closeAll } from '../components/game/gameSlice'

export const matchMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type !== match.type) {
      next(action)
      return
    }
    const state = store.getState()
    if (state.game.flipped[0] < 0 || state.game.flipped[1] < 0) {
      next(action)
      return
    }

    if (
      state.game.flipped[0] !== action.payload &&
      state.game.flipped[1] !== action.payload
    ) {
      next(action)
      return
    }

    setTimeout(() => {
      store.dispatch(closeAll())
    }, 1000)

    next(action)
  }

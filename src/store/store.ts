import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from '../components/game/gameSlice'
import { useDispatch } from 'react-redux'
import { matchMiddleware, setResultMiddleware } from './middleware'
import timerReducer from '../components/timer/timerSlice'
import ratingReducer from '../components/rating/ratingSlice'

const rootReducer = combineReducers({
  game: gameReducer,
  timer: timerReducer,
  rating: ratingReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([matchMiddleware, setResultMiddleware]),
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store

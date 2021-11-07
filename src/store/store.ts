import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from '../components/game/gameSlice'
import { useDispatch } from 'react-redux'
import { matchMiddleware } from './middleware'

const rootReducer = combineReducers({
  game: gameReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(matchMiddleware),
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store

import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from '../components/cards/cardsSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store

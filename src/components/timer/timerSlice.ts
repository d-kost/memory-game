import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TimerSliceType = {
  timer: number
  timerId: number
}

const initialState: TimerSliceType = {
  timer: 0,
  timerId: 0,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimerId: (state, action: PayloadAction<number>) => {
      state.timerId = action.payload
    },
    increase: (state) => {
      state.timer++
    },
    clearTimer: (state) => {
      state.timer = 0
    },
    stopTimer: (state) => {
      window.clearInterval(state.timerId)
    },
  },
})

export const { increase, setTimerId, clearTimer, stopTimer } =
  timerSlice.actions

export default timerSlice.reducer

import React from 'react'
import './App.css'
import { setupCardsData, closeAll } from './components/game/gameSlice'
import { useAppDispatch } from './store/store'
import Board from './common/Board'
import Game from './components/game/Game'
import {
  increase,
  setTimerId,
  clearTimer,
  stopTimer,
} from './components/timer/timerSlice'
import Timer from './components/timer/Timer'
import Button from './components/layout/Button'
import Header from './components/layout/Header'

const COL_COUNT = 6
const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const newGame = async () => {
    const board = new Board(COL_COUNT)
    const setupResult = await dispatch(setupCardsData(board.getCards()))
    dispatch(closeAll())
    dispatch(stopTimer())
    dispatch(clearTimer())

    if (setupCardsData.fulfilled.match(setupResult)) {
      const timerId: number = window.setInterval(() => {
        dispatch(increase())
      }, 1000)
      dispatch(setTimerId(timerId))
    } else {
      alert(setupResult.payload)
    }
  }

  return (
    <div>
      <Header>
        <Button onClick={newGame} title="Старт" />
        <Button onClick={() => console.log('results')} title="Результаты" />
        <Timer />
      </Header>
      <Game colCount={COL_COUNT} />
    </div>
  )
}

export default App

import React from 'react'
import { setup } from './components/game/gameSlice'
import { useAppDispatch, RootState } from './store/store'
import Board from './common/Board'
import Game from './components/game/Game'

const COL_COUNT = 6
const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const newGame = (): void => {
    const board = new Board(COL_COUNT)
    dispatch(setup(board.getCards()))
  }

  return (
    <div>
      <button onClick={newGame}>new game</button>
      <Game />
    </div>
  )
}

export default App

import React from 'react'
import { setupCardsData, closeAll } from './components/game/gameSlice'
import { useAppDispatch } from './store/store'
import Board from './common/Board'
import Game from './components/game/Game'

const COL_COUNT = 6
const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const newGame = (): void => {
    const board = new Board(COL_COUNT)
    dispatch(setupCardsData(board.getCards()))
    dispatch(closeAll())
  }

  return (
    <div>
      <button onClick={newGame}>new game</button>
      <Game colCount={COL_COUNT} />
    </div>
  )
}

export default App

import React from 'react'
import { setup } from './components/cards/cardsSlice'
import { useAppDispatch } from './store/store'
import Board from './common/Board'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const newGame = (): void => {
    const board = new Board()
    let cards = board.getCards()

    console.log(cards)
    dispatch(setup(cards))
  }

  return (
    <div>
      <button onClick={newGame}>new game</button>
    </div>
  )
}

export default App

import React from 'react'
import { setup } from './components/cards/cardsSlice'
import { useAppDispatch, RootState } from './store/store'
import Board from './common/Board'
import Grid from './components/layout/Grid'
import Card from './components/cards/Card'
import { useSelector } from 'react-redux'

const COL_COUNT = 6
const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const cards = useSelector((state: RootState) => state.cards)

  const newGame = (): void => {
    const board = new Board(COL_COUNT)
    dispatch(setup(board.getCards()))
  }

  console.log(cards)
  return (
    <div>
      <button onClick={newGame}>new game</button>
      <Grid colCount={COL_COUNT}>
        {cards.map((item, i) => (
          <Card key={i}>{item.key}</Card>
        ))}
      </Grid>
    </div>
  )
}

export default App

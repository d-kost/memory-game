import React, { useEffect, useState } from 'react'
import { RootState, useAppDispatch } from '../../store/store'
import Grid from '../layout/Grid'
import Card from '../cards/Card'
import { useSelector } from 'react-redux'
import { stopTimer } from '../timer/timerSlice'
import { addResult } from '../rating/ratingSlice'
import './style.css'
import Rating from '../rating/Rating'

type GameProps = {
  colCount: number
}

const Game: React.FC<GameProps> = ({ colCount }) => {
  const [won, setWon] = useState(false)
  const cards = useSelector((state: RootState) => state.game.cards)
  const flipped = useSelector((state: RootState) => state.game.flipped)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setWon(false)
  }, [cards])

  useEffect(() => {
    const checkWin = () => {
      return cards.every((card) => card.removed)
    }

    if (flipped[0] < 0 || flipped[1] < 0) {
      return
    }
    if (checkWin()) {
      setWon(true)
      dispatch(addResult(0))
      dispatch(stopTimer())
    }
  }, [cards, flipped])

  return (
    <div className="game">
      {won && (
        <>
          <div>Победа</div>
          <Rating />
        </>
      )}
      <Grid colCount={colCount}>
        {cards.map((item, i) => (
          <Card
            key={i}
            index={i}
            flipped={i === flipped[0] || i == flipped[1]}
            {...item}
          />
        ))}
      </Grid>
    </div>
  )
}

export default Game

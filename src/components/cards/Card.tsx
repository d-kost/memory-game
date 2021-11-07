import React from 'react'
import './style.css'
import { ICard } from '../../common/Board'
import { useAppDispatch } from '../../store/store'
import { flip, match } from '../game/gameSlice'

interface ICardProps extends ICard {
  index: number
  flipped: boolean
}

const Card: React.FC<ICardProps> = (props) => {
  const { index, id, removed, flipped } = props
  const dispatch = useAppDispatch()

  const flipCard = () => {
    dispatch(flip(index))
    dispatch(match(index))
  }

  if (removed) {
    return <div className="card card-removed"></div>
  }

  if (flipped) {
    return <div className="card">{id}</div>
  }

  return <div className="card card-back" onClick={flipCard}></div>
}

export default React.memo(Card)

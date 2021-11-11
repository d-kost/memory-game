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
  const { index, icon, removed, flipped } = props
  const dispatch = useAppDispatch()

  const flipCard = () => {
    if (flipped) {
      return
    }
    dispatch(flip(index))
    dispatch(match(index))
  }

  if (removed) {
    return <div className="card-empty"></div>
  }

  return (
    <div className={`card ${flipped ? 'card-flipped' : ''}`}>
      <div className="card-side card-back" onClick={flipCard}></div>
      <div className="card-side card-front">
        <img
          className="card-icon"
          src={icon}
          alt="card-icon"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  )
}

export default React.memo(Card)

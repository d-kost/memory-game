import React, { useEffect, useState } from 'react'
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
  const [logo, setLogo] = useState('')

  const flipCard = () => {
    dispatch(flip(index))
    dispatch(match(index))
  }

  useEffect(() => {
    import(`../../../assets/icons/${id}.svg`).then((obj) => {
      setLogo(obj.default)
    })
  }, [])

  if (removed) {
    return <div className="card card-removed"></div>
  }

  if (flipped) {
    return (
      <div className="card">
        <div className="card-content">
          <img
            className="card-icon"
            src={logo}
            alt="card-icon"
            width="50px"
            height="50px"
          />
        </div>
      </div>
    )
  }

  return <div className="card card-back" onClick={flipCard}></div>
}

export default React.memo(Card)

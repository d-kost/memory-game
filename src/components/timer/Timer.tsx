import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import './style.css'
import { getFormatSeconds } from '../../common/dateFunctions'

const Timer = () => {
  const timer = useSelector((state: RootState) => state.timer.timer)

  return <div className="timer">{getFormatSeconds(timer)}</div>
}

export default Timer

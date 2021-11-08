import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import './style.css'

const Timer = () => {
  const timer = useSelector((state: RootState) => state.timer.timer)

  var date = new Date(timer * 1000)
  var result = date.toISOString().substr(11, 8)

  return <div className="timer">{result}</div>
}

export default Timer

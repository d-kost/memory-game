import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Timer = () => {
  const timer = useSelector((state: RootState) => state.timer.timer)

  return <div>{timer}</div>
}

export default Timer

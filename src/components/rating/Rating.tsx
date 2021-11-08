import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Rating = () => {
  const rating = useSelector((state: RootState) => state.rating)

  return (
    <div>
      {rating.map((item) => {
        const date = new Date(item.date)
        return (
          <div key={item.date}>
            {date.toISOString()} - {item.result}
          </div>
        )
      })}
    </div>
  )
}

export default Rating

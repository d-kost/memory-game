import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getFormatDate, getFormatSeconds } from '../../common/dateFunctions'
import List from '../layout/List'

const Rating = () => {
  const rating = useSelector((state: RootState) => state.rating)

  return (
    <List
      items={rating
        .slice()
        .sort((a, b) => a.result - b.result)
        .map((item) => ({
          date: getFormatDate(item.date),
          result: getFormatSeconds(item.result),
        }))}
      minCount={7}
    />
  )
}

export default Rating

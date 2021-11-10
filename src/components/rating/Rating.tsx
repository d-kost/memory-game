import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getFormatDate, getFormatSeconds } from '../../common/dateFunctions'
import List from '../layout/List'

const Rating = () => {
  const rating = useSelector((state: RootState) => state.rating)

  return (
    <div>
      <List
        items={rating.map((item) => ({
          date: getFormatDate(item.date),
          result: getFormatSeconds(item.result),
        }))}
      />
      {/*{rating.map((item) => {*/}
      {/*  return (*/}
      {/*    <div key={item.date}>*/}
      {/*      <div>{getFormatDate(item.date)}</div>*/}
      {/*      <div>{getFormatSeconds(item.result)}</div>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*})}*/}
    </div>
  )
}

export default Rating

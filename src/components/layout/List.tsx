import React from 'react'

type ListType = {
  items: { [k: string]: string }[]
  minCount: number
}

const List: React.FC<ListType> = ({ items, minCount }) => {
  return (
    <div className="list">
      {items.map((item, i) => {
        return (
          <div key={i} className="list-row">
            {Object.keys(item).map((key, j) => {
              return <div key={j}>{item[key]}</div>
            })}
          </div>
        )
      })}
      {items.length < minCount &&
        [...Array(minCount - items.length)].map((e, i) => (
          <div key={i + items.length} className="list-row">
            {}
          </div>
        ))}
    </div>
  )
}

export default List

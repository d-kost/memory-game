import React from 'react'

type ListType = {
  items: { [k: string]: string }[]
}

const List: React.FC<ListType> = ({ items }) => {
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
    </div>
  )
}

export default List

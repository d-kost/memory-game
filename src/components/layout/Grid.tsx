import React from 'react'

type BoardProps = {
  colCount: number
}

const Grid: React.FC<BoardProps> = ({ colCount, children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: new Array(colCount).fill('100px').join(' '),
        gridGap: '15px',
      }}
    >
      {children}
    </div>
  )
}

export default Grid

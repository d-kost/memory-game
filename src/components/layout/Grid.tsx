import React from 'react'

type BoardProps = {
  colCount: number
}

const Grid: React.FC<BoardProps> = ({ colCount, children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${colCount}, 100px)`,
        gridGap: '15px',
      }}
    >
      {children}
    </div>
  )
}

export default Grid

import React from 'react'

type BoardProps = {
  colCount: number
}

const Grid: React.FC<BoardProps> = ({ colCount, children }) => {
  return (
    <div
      className="grid"
      style={{
        msGridColumns: new Array(colCount).fill('100px').join(' 15px '),
        gridTemplateColumns: `repeat(${colCount}, 100px)`,
        gridGap: '15px',
      }}
    >
      {children}
    </div>
  )
}

export default Grid

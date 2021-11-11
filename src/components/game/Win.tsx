import React from 'react'
import Rating from '../rating/Rating'
import Alert from '../layout/Alert'

const Win: React.FC = () => {
  return (
    <div className="win-container">
      <div className="win-alert">
        <Alert>Победа</Alert>
      </div>

      <Rating />
    </div>
  )
}

export default Win

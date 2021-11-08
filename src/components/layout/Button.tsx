import React from 'react'

type ButtonProps = {
  title: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="btn btn-orange" onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
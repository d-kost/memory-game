import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

type ButtonProps = {
  title: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  const context = useContext<string>(ThemeContext)

  return (
    <button className={`btn btn-${context}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button

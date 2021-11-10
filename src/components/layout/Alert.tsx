import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const Alert: React.FC = ({ children }) => {
  const context = useContext<string>(ThemeContext)
  return <div className={`alert alert-${context}`}>{children}</div>
}

export default Alert

import React from 'react'
import './style.css'

const Header: React.FC = ({ children }) => {
  return (
    <header className="header">
      <div className="header-content">{children}</div>
    </header>
  )
}

export default Header

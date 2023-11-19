import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FaHouse, FaUserLarge } from "react-icons/fa6"
import './BottomNavBar.css'

function BottomNavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const buttons = [
    { path: "/home", icon: <FaHouse className="resized-lg" /> },
    { path: "/employee", icon: <FaUserLarge className="resized-lg" /> },
  ]

  const handleButtonClick = (path) => {
    navigate(path, { replace: true })
  }

  function addButtonEffect(location, button) {
    if (location.pathname === button.path) {
      return (
        <div className="selected-container">
          <div className="selected-bg" />
          <button
            key={button.path}
            onClick={() => handleButtonClick(button.path)}
          >
            {button.icon}
          </button>
        </div>
      )
    } else {
      return (
        <button
          key={button.path}
          onClick={() => handleButtonClick(button.path)}
        >
          {button.icon}
        </button>
      )
    }
  }

  return (
    <div className="navbar-container">
      {buttons.map((button) => (
        addButtonEffect(location, button)
      ))}
    </div>
  )
}

export default BottomNavBar
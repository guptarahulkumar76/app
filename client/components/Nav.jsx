import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/space">Space</NavLink>
      </nav>
    </>
  )
}

export default Nav

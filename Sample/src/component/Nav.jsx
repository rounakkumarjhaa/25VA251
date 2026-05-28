import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul className='nav-links'>
            <li><NavLink to ="/home">Home</NavLink></li>
            <li><NavLink to ="/about">About</NavLink></li>
            <li><NavLink to ="/services">Services</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav

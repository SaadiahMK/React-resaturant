import React from 'react'

import {Link, NavLink}from 'react-router-dom'

import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../assests/logo.jpeg'

const Navbar = () => {
  return (
    <div className='header' > 
    <div className='container'>
      <div className='nav-bar'>
        <Link to="/">
        <img src={logo} alt="logo" width={50}/>
        </Link>

        <ul className='nav-menu'>
          <li>
            <NavLink className ="nav-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className ="nav-link" to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink className ="nav-link" to="/delivery">Delivery</NavLink>
          </li>
          <li>
            <NavLink className ="nav-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className ="nav-link" to="/contact">Contact</NavLink>
          </li>

          <li>
            <button>Order now</button>
          </li>

        </ul>
        <div className='hamburger'>
          //<FaTimes size={20} style={{color:"#fff"}}/>
          //<FaBars size={20} style={{color:"#fff"}}/>
        </div>
      </div>
    </div>
    </div>
    
  )
}


export default Navbar
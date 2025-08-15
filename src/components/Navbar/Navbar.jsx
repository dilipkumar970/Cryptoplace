import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="Usd">USD</option>
          <option value="Eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign in <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import search from '../assets/magnifying-glass-solid.svg'
import Avatar from './Avatar/Avatar'


export default function Navbar() {
    var user=null;
  return (
   <nav className='main-nav'>
    <div className='navbar'>
      <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt="logo"  />
      </Link>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For Terms</Link>
      <form action="">
        <input type="text" placeholder='search...' />
        <img src={search} alt="" width="18" className='search-icon' />
      </form>
        {user === null ? 
        <Link to="/Auth" className='nav-item nav-links'>Log In</Link> : <>
        <Avatar backgroundColor="#009dff" px="10px" py="5px" borderRadius="50%" cursor="pointer" fontSize="18px" ><Link to="/User" style={{color:"white", textDecoration:"none"}}>D</Link></Avatar>
        <button className='nav-item nav-links'>Log Out</button>
        </>
    }
    </div>
   </nav>
  )
}

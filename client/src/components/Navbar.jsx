import React,{useEffect} from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import {  useSelector, useDispatch } from "react-redux";
import logo from '../assets/logo.svg'
import search from '../assets/magnifying-glass-solid.svg'
import Avatar from './Avatar/Avatar'
import { setCurrentUser} from '../actions/currentUser'
import decode from 'jwt-decode'


export default function Navbar() {
  
  const navigate= useNavigate()
  const dispatch= useDispatch()
  var User=useSelector((state)=> (state.currentUserReducer));

  const handleLogout=()=>{
    dispatch({type: 'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null));
  }
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps
  const checkAuth =() => {
    navigate('/Subscription')
   
  }
  return (
   <nav className='main-nav'>
    <div className='navbar'>
         
             <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt="logo"/></Link>
            <button className='nav-toggle' aria-label="Toggle navigation">
      <span className="nav-toggle-icon"></span>
    </button>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For Terms</Link>
      <form action="">
        <input type="text" placeholder='search...' />
        <img src={search} alt="" width="18" className='search-icon' />
      </form>
        {User === null ? 
        <Link to="/Auth" className='nav-item nav-links'>Log In</Link> : <>
        <Avatar backgroundColor="#009dff" px="10px" py="5px" borderRadius="50%" cursor="pointer" fontSize="18px" ><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>

        </>
        
    }
    <button onClick={checkAuth} className='subscription-btn'>Subscribe</button>

    </div>
   </nav>
  )
}

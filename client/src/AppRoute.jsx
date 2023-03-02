import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

const AppRoute = () => {
  return (
    <Routes>
         <Route exact path='/Welcome' element={<Home/>}/>
         
         <Route exact path='/Auth'  element={<Auth/>}/>
        
    </Routes>
  )
}

export default AppRoute
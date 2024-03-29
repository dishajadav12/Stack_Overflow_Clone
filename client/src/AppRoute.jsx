import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/User/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Subscription from './pages/AskQuestion/Subscription/Subscription'
import SliverSubscription from './pages/AskQuestion/Subscription/SliverSubscription'
import GoldSubscription from './pages/AskQuestion/Subscription/GoldSubscription'




const AppRoute = () => {

  return (
    <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/Auth'  element={<Auth/>}/>
         <Route exact path='/Questions'  element={<Questions/>}/>
         <Route exact path='/AskQuestion'  element={<AskQuestion/>}/>
         <Route exact path='/Questions/:id'  element={<DisplayQuestion/>}/>
         <Route exact path='/Tags' element={<Tags/>}/>
         <Route exact path='/Users' element={<Users/>}/>
         <Route exact path='/Users/:id' element={<UserProfile/>}/>
         <Route exact path='/Subscription' element={<Subscription/>}/>
         <Route exact path='/SliverSubscription' element={<SliverSubscription/>}/>
         <Route exact path='/GoldSubscription' element={<GoldSubscription/>}/>





    </Routes>
  )
}

export default AppRoute
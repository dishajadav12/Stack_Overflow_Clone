import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import ChatBot from '../../components/chatBot/ChatBot'


const Questions = () => {
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
          <HomeMainbar/>
          
        </div>
        <RightSidebar/>
        <ChatBot/>
    </div>
  )
}

export default Questions
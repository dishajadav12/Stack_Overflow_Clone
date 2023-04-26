import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'


const Home = () => {
  return (
    <div className='home-container-1'>
      <div className="leftsidebar-container">
      <LeftSidebar/>

      </div>
        <div className='home-container-2'>
          <HomeMainbar/>
          <RightSidebar />

        </div>
       
     
    </div>
  )
}

export default Home
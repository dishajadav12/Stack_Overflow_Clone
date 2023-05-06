import React from 'react'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

import UsersList from './UsersList'

const Users = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
    
    <div className="home-container-2" style={{marginTop: "60px"}}>
          <h1 style={{fontWeight: "400"}}>Users</h1>
          <UsersList/> 
          <div className="rightsidebar-user">
          <RightSidebar/>

          </div>

    </div>
    </div>
  )
}

export default Users
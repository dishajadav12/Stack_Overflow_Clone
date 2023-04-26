import React from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

const User = ({user}) => {
  return (
<Link to={`/Users/${user._id}`} className="user-profile-link">
    <h5>{ user.name.charAt(0).toUpperCase()}</h5>
    <h6>{ user.name}</h6>
</Link>
    )
}

export default User
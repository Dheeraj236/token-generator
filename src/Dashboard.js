import React,{useContext} from 'react'
import LoginContext from './Context'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const context = useContext(LoginContext)
  return (

    <ul>
      <li><Link to='/Profile' >Profile</Link></li>
      <li>{context.loginDetails.name}</li>
    </ul>
  )
}

export default Dashboard
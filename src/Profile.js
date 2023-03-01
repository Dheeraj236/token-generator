import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Button, Input } from 'reactstrap'
import LoginContext from './Context'

const Profile = () => {
  const [name,setName] = useState('')
  const context = useContext(LoginContext)
  const navigate = useNavigate()
  const handleClick =()=>{
    context.setLogin({name : name})
    setName('')
    navigate('/Dashboard')
  }
  return (
    <div>
      <Input type = "text" placeholder="Change username" name="username" onChange={(e)=>setName(e.target.value)}></Input>
      <Button onClick={handleClick} >Change username</Button><br /><br /><br />
      <LoginContext.Consumer>
        {(context) => <h1>{context.count}</h1>}
      </LoginContext.Consumer>
      <Button onClick={context.increament} >Increament</Button>
    </div>
  )
}

export default Profile
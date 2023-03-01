import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Input, Container, Button} from 'reactstrap'
import LoginContext from './Context'


const Login = (props) => {
  const [loginForm,setLoginForm] = useState({
    UserName:"",
    Password:""
  })
  const navigate = useNavigate()
  const context = useContext(LoginContext)

  const handleChange =(e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }   

  const handleSubmit =() =>{
    if(loginForm.UserName==="Dheeraj" && loginForm.Password === "1234"){
      props.setIsLoggedIn(true);
      context.setLogin({name: "Dheeraj"})     
      navigate('/Dashboard')
    }
  }
  return (
    
    <div>
        <Container>
        <Input type="text" placeholder="UserName" name="UserName" value={loginForm.UserName} onChange={handleChange} className="mt-5 mb-3" />
        <Input type="Password" placeholder="Password" name="Password"  value={loginForm.Password}  onChange={handleChange} className="mb-3"/>
        <Button color="success" block  className="mb-3" onClick={handleSubmit}>Login</Button>
        </Container>
        
    
    </div>
    
  )
}

export default Login
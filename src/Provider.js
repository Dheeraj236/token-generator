import React, {useState} from 'react'
import LoginContext from './Context'

const Provider = (props) => {
    const [loginDetails,setLoginDetails] =useState(null)
    const [count,setCount] = useState(0)
  return (
    <LoginContext.Provider value={{
        loginDetails : loginDetails,
        setLogin : (details) =>{
            setLoginDetails(details)
        },
        count : count,
        increament : () => setCount(count+1)
    }}>{props.children}</LoginContext.Provider>
  )
}

export default Provider
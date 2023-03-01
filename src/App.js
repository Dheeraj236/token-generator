import React, { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Profile from './Profile';
import {ProtectedRoute} from './ProtectedRoute';
import Provider from './Provider';
// import './App.css'



const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const ref = useRef()

  
  
  return (
    
      <Provider>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path ="/Dashboard" element={ <ProtectedRoute isLoggedIn={isLoggedIn}> <Dashboard /></ProtectedRoute> } />
        <Route path ="/Profile" element={ <ProtectedRoute isLoggedIn={isLoggedIn}> <Profile /></ProtectedRoute> } />


      </Routes>
      </BrowserRouter>
      </Provider>
  
  )
}

export default App
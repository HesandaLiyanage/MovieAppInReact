import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'

const App = () => {

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
        if(user) {
          console.log("loggeed in")
        }else{
          
        }
    })
  },[])

  return (
    
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/player/:id" element={<Player />}/>
          
      </Routes>

    
  )
}

export default App
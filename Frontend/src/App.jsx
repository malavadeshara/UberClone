import './App.css'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from '../context/userContext'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path='/Captain-login' element={<CaptainLogin/>} />
        <Route path='/Captain-signup' element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App

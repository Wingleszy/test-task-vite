import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { DeviceList } from './components/DeviceList';

function App() {

  const [user, setUser] = useState(() => {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user')
    } else {
      return null
    }
  })



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Navigate to='/login' />}/>
        <Route path='/devices' element={user ? <DeviceList/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={!user ? <Login setUser={setUser} /> : <Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

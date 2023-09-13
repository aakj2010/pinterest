import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainBoard from './components/mainpage/MainBoard';
import { useSelector } from 'react-redux'
import Account from './components/mainpage/Account';
import LandindPage from './components/LandindPage';


function App() {

  const { user } = useSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandindPage />} />
        <Route path='/home' element={<MainBoard />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;




// ToDO:
// Login, SignUp PopUp
// Bottom Login Sign SWICTHOVER
// Bottomn page Login Button CLICK Bug
// Down arrow should not scroll
// User home page tinkering
// On search, include only the search keyword and not other default keywords

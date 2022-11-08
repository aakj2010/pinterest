import React, { useState, useEffect } from 'react';
// import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageHeader from './components/HomePageHeader';
import MainBoard from './components/mainpage/MainBoard';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux'
import Account from './components/mainpage/Account';


function App() {

  const { user } = useSelector((state) => state.auth)

  return (
    <BrowserRouter>
      {
        !user ? <HomePageHeader /> : null
      }

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<MainBoard />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;

import React from 'react'
import { IconButton } from '@mui/material';
import InitialsAvatar from 'react-initials-avatar';
// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import MainPageHeader from './MainPageHeader';
import './Account.css'
import MainBoard from './MainBoard';


function Account() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <MainPageHeader />
      <div className="header__container">
        <div className="avatar__wrapper">
          <div className="avatar"><InitialsAvatar name={user.name} /></div>
        </div>
        <h2>{user.name}</h2>
        <span className="user">@{user.name}</span>
        <span className='user'>0 following</span>
      </div>
    </>
  )
}

export default Account
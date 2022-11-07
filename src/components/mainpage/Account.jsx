import React from 'react'
import { IconButton } from '@mui/material';
import InitialsAvatar from 'react-initials-avatar';
// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Account() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <div className="header__container">
      <div className="avatar__wrapper">
        <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
      </div>
      <h1>{user.name}</h1>
      <span className="username">@{user.username}</span>
    </div>
    </>
  )
}

export default Account
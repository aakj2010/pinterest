import React from 'react'
import { IconButton } from '@mui/material';
import InitialsAvatar from 'react-initials-avatar';
// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Account() {

  const { user } = useSelector((state) => state.auth)
  // const navigate = useNavigate()

  return (
    <>
      <IconButton>
        <button to='/account' className='avatarlink'><InitialsAvatar name={user ? (user.name) : ("")} /></button>
        <span className='avatarhide'>Your profile</span>
      </IconButton>
    </>
  )
}

export default Account
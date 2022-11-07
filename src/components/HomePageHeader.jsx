import React from 'react'
import './HomePageHeader.css'
import PinterestIcon from '@mui/icons-material/Pinterest';
// import Login from '../pages/Login';
import { Link } from 'react-router-dom'


function HomePageHeader() {
    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <PinterestIcon />
                    <span className='logopinterest'>Pinterest</span>
                </div>
                <div className=''>
                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Business
                        </li>
                        <li>
                            Press
                        </li>
                        <li>
                            <a href="" className='login'><Link to='/login' id='login'>Log in</Link></a>   
                        </li>
                        <li id='signup'>
                            <Link to='/register' id='signup'>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default HomePageHeader
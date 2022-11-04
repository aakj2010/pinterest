import React, { useState, useEffect } from 'react'
import './MainPageHeader.css'
import PinterestIcon from '@mui/icons-material/Pinterest';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsIcon from '@mui/icons-material/Sms';
import { IconButton } from '@mui/material';
import Avatar from './Avatar';
import InitialsAvatar from 'react-initials-avatar';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Account from './Account';

function MainPageHeader(props) {

    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)

    const [input, setInput] = useState("");
    const [create, setCreate] = useState(false)
    const [avatar, setAvatar] = useState(false)


    const handleCreate = () => {
        setCreate(!create);
    }
    const handleAvatar = () => {
        setAvatar(!avatar);
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input)
        console.log("this is the input", input)
    }
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <header className='header'>
            <div className='logo'>
                <PinterestIcon />
            </div>
            <div className='homebutton'>
                <div className='homepagebutton homebutton'>
                    <a href="">Home</a>
                </div>
                <div className='todaybutton homebutton'>
                    <a href="">Today</a>
                </div>
                <div className='createbutton homebutton dropdown'>
                    <button href='' onClick={handleCreate} className='dropbtn'>Create
                        <KeyboardArrowDownIcon />
                        {
                            create ? (
                                <ul className='menu'>
                                    <li className='menu_item'>
                                        <button href="#">Create Idea Pin</button>
                                    </li>
                                    <li className='menu_item'>
                                        <button href="#">Create Pin</button>
                                    </li>
                                </ul>
                            ) : null
                        }
                    </button>
                </div>
            </div>
            <div className='searchbar searchbarwrapper'>
                <div className='searchlogo'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </div>
                <form>
                    <input type="text" onChange={(e) => setInput(e.target.value)} />
                    <button type="submit" onClick={onSearchSubmit}></button>
                </form>
            </div>
            <div className='iconswrapper'>
                <IconButton>
                    <button className='notificationlink'><NotificationsIcon /></button>
                    <span className='notificationhide'>Notifications</span>
                </IconButton>
                <IconButton>
                    <button className='smslink'><SmsIcon /></button>
                    <span className='smshide'>Messages</span>
                </IconButton>
                <IconButton>
                    <Account />
                </IconButton>
                {/* <IconButton>
                    <button to='/account' className='avatarlink'><InitialsAvatar name={user.name} /></button>
                    <span className='avatarhide'>Your profile</span>
                </IconButton> */}
                <IconButton>
                    <button onClick={handleAvatar} className='accountlink' style={{ background: "none", border: "none", color: "#767676" }}>
                        <KeyboardArrowDownIcon />
                        {
                            avatar ? (
                                <Avatar />
                            ) : null
                        }
                    </button>
                    <span className='accounthide'>Account and more options</span>
                </IconButton>
                {/* {
                    user ? (<IconButton><button>Logout</button></IconButton>) : (<>
                        <IconButton>
                            <button to='/account' className='avatarlink'><InitialsAvatar name="Ak" /></button>
                            <span className='avatarhide'>Your profile</span>
                        </IconButton>
                        <IconButton>
                            <button onClick={handleAvatar} className='accountlink' style={{ background: "none", border: "none", color: "#767676" }}>
                                <KeyboardArrowDownIcon />
                                {
                                    avatar ? (
                                        <Avatar />
                                    ) : null
                                }
                            </button>
                            <span className='accounthide'>Account and more options</span>
                        </IconButton>
                    </>)
                } */}
            </div>
        </header >
    )
}

export default MainPageHeader
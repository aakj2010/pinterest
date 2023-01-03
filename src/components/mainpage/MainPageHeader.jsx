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
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'


function MainPageHeader({ onSubmit }) {
    // console.log(onSubmit)

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

    // console.log(input);
    const onSearchSubmit = (e) => {
        e.preventDefault();
        // console.log(input)
        onSubmit(input)
        console.log("this is the input", input)
    }


    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])

    return (
        <>
            <Wrapper >
                <LogoWrapper className='logo'>
                    <IconButton>
                        <Link to='/'><PinterestIcon /></Link>
                    </IconButton>
                </LogoWrapper>
                <div className='homebutton'>
                    <HomePageButton className='homepagebutton homebutton'>
                        <Link to='/' href="">Home</Link>
                    </HomePageButton>
                    <TodayButton className='todaybutton homebutton'>
                        <Link to='/' href="">Today</Link>
                    </TodayButton>
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
                <SearchWrapper className='searchbar searchbarwrapper'>
                    <SearchBarWrapper className='searchlogo'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <form>
                            <input type="text" onChange={(e) => setInput(e.target.value)} />
                            <button type="submit" onClick={onSearchSubmit}></button>
                        </form>
                    </SearchBarWrapper>
                </SearchWrapper>
                <IconsWrapper className='iconswrapper'>
                    <IconButton>
                        <button className='notificationlink'><NotificationsIcon /></button>
                        <span className='notificationhide'>Notifications</span>
                    </IconButton>
                    <IconButton>
                        <button className='smslink'><SmsIcon /></button>
                        <span className='smshide'>Messages</span>
                    </IconButton>
                    <IconButton>
                        <Link to='/account'>
                            <button className='avatarlink'><InitialsAvatar name={user ? user.name : ""} /></button>
                            <span className='avatarhide'>Your profile</span>
                        </Link>
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
                </IconsWrapper>
            </Wrapper >
        </>
    )
}


MainPageHeader.propTypes = {

    onSubmit: PropTypes.func,
}

export default MainPageHeader





const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    width:100vw;
    aligncontent: center;
    padding: 4px 12px 4px 12px;
    background-color: white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 2rem;
        cursor: pointer;
    }
    padding: 4px 4px;
    border-radius: 1.5rem;
    :hover {
        background-color: #efefef;
    }
`

const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width:80px;
    align-items:center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomePageButton = styled(HomeButtons)`
    margin-left: 8px;
    background-color: rgb(17, 17, 17);

    a {
        text-decoration: none;
        color: white;
        font-weight: 500;
    }

`

const TodayButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 500;
    }

`

const CreateButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 500;
    }
`

const SearchWrapper = styled.div`
    flex: 1;
    align-items: center;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 46px;
    width: 100%;
    align-items:center;
    border-radius: 50px;
    border: none;
    padding-left: 4px;

    form {
        display: flex;
        align-items:center;
        flex: 1;
    }
    form > input {
        padding-top:8px;
        align-items:center;
        background-color: transparent;
        border: none;
        width: 98%;
        height: 44px;
        margin-left: 4px;
        font-size: 16px;
    }
    form > button {
        display: none;
    }
    input:focus {
        outline: none;
    }
`

const IconsWrapper = styled.div`
    padding-left: 12px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    button{
        font-size: 1.5rem;
        cursor: pointer;
        padding: 4px;
        height: 40px;
        width: 40px;
        margin: 3px;
    }
`
import React from 'react'
import './MainPageHeader.css'
import InitialsAvatar from 'react-initials-avatar';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

function Avatar() {

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div>
            <div className='menu_1'>
                <div className='' style={{ textAlign: "left", padding: "4px" }}>Currently in <br />
                    <div className='account' style={{ textAlign: "left", padding: "4px", display: "flex" }}>
                            
                        <br /><br />
                        <div className="initial-avatar" style={{ padding: "2px", color: "#000000" }} >
                            <span className='initial'><InitialsAvatar name={user.name} /></span>
                        </div>
                        <div style={{ textAlign: "left", padding: "4px" }}>
                            <span className='username'>{user.name}</span>
                            <span><br />Personel</span>
                            <span><br />{user.email}</span>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "left", padding: "4px" }}>Your Accounts
                    <li className='menu_item_1'>
                        <a href='' style={{ color: "#000000", fontweight: "bold" }}>Add Account</a>
                    </li>
                    <li className='menu_item_1' style={{ color: "#000000", fontweight: "bold" }}>
                        <a href="#">Convert to business</a>
                    </li>
                </div>

                <div style={{ textAlign: "left", padding: "4px" }}>More Options
                    <li className='menu_item_1' style={{ color: "#000000", fontweight: "bold" }}>
                        <a href='' >Settings</a>
                    </li>
                    <li className='menu_item_1' style={{ color: "#000000", fontweight: "bold" }}>
                        <a href="#">Tune your home feed</a>
                    </li>
                    <li className='menu_item_1' style={{ color: "#000000", fontweight: "bold" }}>
                        <a href="#">Install the windows app</a>
                    </li>
                    <li className='menu_item_1' style={{ color: "#000000", fontweight: "bold" }}>
                        <a href="#">Your privacy rights </a>
                    </li>
                    <li className='menu_item_1' style={{ color: "#000000", fontweight: "bold" }}>
                        <a href="#">Get help  </a>
                    </li>
                    <li className='menu_item_1' style={{ color: "#000000", fontweight: "bold" }}>
                        <a href="#">See term and privacy </a>
                    </li>
                    <li className='' >
                        <button className='logout'
                            onClick={onLogout}
                            style={{width:"14rem"}}>Log out</button>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Avatar
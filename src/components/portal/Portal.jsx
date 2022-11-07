import React from 'react'
import './Portal.css'
import { Outlet } from 'react-router-dom';
import MainPageHeader from '../mainpage/MainPageHeader'

function Portal() {
    return (
        <div id=".container">
            <MainPageHeader />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id='content'>

                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Portal
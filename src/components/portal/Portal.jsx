import React from 'react'
import { Outlet } from 'react-router-dom';
import MainPageHeader from '../mainpage/MainPageHeader'

function Portal() {
    return (
        <div id="wrapper">
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
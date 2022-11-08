import React from 'react'
import MainPageHeader from './mainpage/MainPageHeader'
import {Outlet} from 'react-router-dom';

function Portal() {
    return (
        <>

            <div id="wrapper">
                <MainPageHeader />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id='content'>
                      


                    </div>
                    <Outlet />
                </div>
            </div>

        </>

    )
}

export default Portal
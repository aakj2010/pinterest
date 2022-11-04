import React, { useEffect } from 'react'
import './MainBoard.css'
import MainPageHeader from './MainPageHeader';
import Pin from './Pin';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MainBoard(props) {
    let { pins } = props;
    console.log(pins)

    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <MainPageHeader />
            <div className='container'>
                <div className='item'>
                    {
                        pins.map((pin, index) => {
                            let { urls } = pin;
                            return <Pin key={index} urls={urls} />
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default MainBoard
import React, { useEffect } from 'react'
import './MainBoard.css'
import MainPageHeader from './MainPageHeader';
import Pin from './Pin';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Masonry from "react-masonry-css";
import styled from 'styled-components'

// function MainBoard({userId, photoUrls, savedPins}) {

// const breakpoints = { default: 4 };
// const baseWidth = 503;
// const increment = 252;
// for (let i = 0; i < 30; i++) {
//   breakpoints[baseWidth + increment * i] = i + 1;
// }


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
            <Wrapper>
                <Container className='mainboard_container'>
                    {
                        pins.map((pin, index) => {
                            let { urls } = pin;
                            return <Pin key={index} urls={urls} />
                        })
                    }
                </Container>
            </Wrapper>
        </>

        // <>
        //     <MainPageHeader />
        //     <div className='container'>
        //         <div className='item'>
        //             {
        //                 pins.map((pin, index) => {
        //                     let { urls } = pin;
        //                     return <Pin key={index} urls={urls} />
        //                 })
        //             }
        //         </div>
        //     </div>
        // </>
    )
}

export default MainBoard



const Wrapper = styled.div`
  background-color: white;    
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  justify-content: center;
`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: white; 
`
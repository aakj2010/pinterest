import React, { useEffect, useState } from 'react'
import './MainBoard.css'
import MainPageHeader from './MainPageHeader';
import Pin from './Pin';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import unsplash from '../../features/unsplash/unsplash'


function MainBoard() {

    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)

    const [pins, setNewPins] = useState([])


    const getImages = (term) => {
        return unsplash.get("https://api.unsplash.com/search/photos", {
            params: {
                query: term
            }
        });
    };


    const getNewPins = () => {
        let promises = [];
        let pinData = [];

        let pins = ['ocean', 'Toys', 'bali']

        pins.forEach((pinTerm) => {
            promises.push(
                getImages(pinTerm).then((res) => {
                    let results = res.data.results;

                    pinData = pinData.concat(results);

                    pinData.sort(function (a, b) {
                        return 0.5 - Math.random();
                    });
                })
            )
        })
        Promise.all(promises).then(() => {
            setNewPins(pinData)
        })
    }

    const onSearchSubmit = (term) => {
        console.log("on Searchsubmit", term);
        getImages(term).then((res) => {
            let results = res.data.results;

            let newPins = [
                ...results,
                ...pins,
            ]

            newPins.sort(function (a, b) {
                return 0.5 - Math.random()
            });
            setNewPins(newPins);
        })
    }



    useEffect(() => {
        if (!user) {
            navigate('/')
        }
        getNewPins()
    }, [user, navigate])

    return (
        <>
            <MainPageHeader onSubmit={onSearchSubmit} className='header' />
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
import React from 'react'
import './Pin.css'

function Pin(props) {

    let { urls } = props;

    return (
        <>
            <div className='container'>
                <div className='item'>
                    <img src={urls?.regular} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Pin
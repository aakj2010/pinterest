import React from 'react'
import TextCarousel from './mainpage/TextCarousel';
import HomePageHeader from './HomePageHeader';
import Login from '../pages/Login';

const LandindPage = () => {
    const Textitems = [
        { text: 'home décor idea', Color: '#0076D3' },
        { text: 'chai time snacks idea', Color: '#C28B00' },
        { text: 'Outfit idea', Color: '#B43C1C' },
        { text: 'DIY idea', Color: '#507A57' },
    ];

    return (
        <>
            <HomePageHeader />
            <div className="">
                <section className='section'>
                    <h2 className='title'>Get your next</h2>
                    <TextCarousel items={Textitems} />
                    <div className='img-wrapper'>
                        <div className='img-container'>
                            <div className='img-container-card'>
                                <img className='card-img' src="../images/1.svg" alt="" />
                                <img className='card-img' src="../images/2.svg" alt="" />
                            </div>
                            <div className='img-container-card'>
                                <img className='card-img' src="../images/3.svg" alt="" />
                                <img className='card-img' src="../images/4.svg" alt="" />
                            </div>
                            <div className='img-container-card'>
                                <img className='card-img' src="../images/5.svg" alt="" />
                                <img className='card-img' src="../images/6.svg" alt="" />
                            </div>
                            <div className='img-container-card'>
                                <img className='card-img' src="../images/7.svg" alt="" />
                            </div>
                            <div className='img-container-card'>
                                <img className='card-img' src="../images/8.svg" alt="" />
                                <img className='card-img' src="../images/9.svg" alt="" />
                            </div>
                            <div className='img-container-card'>
                                <img className='card-img' src="../images/10.svg" alt="" />
                                <img className='card-img' src="../images/11.svg" alt="" />
                            </div>
                            <div className='img-container-card'>
                                <img className='card-img' src="../images/12.svg" alt="" />
                                <img className='card-img' src="../images/13.svg" alt="" />
                            </div>
                        </div>
                        <div className='linear'></div>
                    </div>
                    <div className='down-btn'>
                        <a className="floating-icon" href='#idea'>
                            <img className='floating-icon-img' src="../images/keyboard_arrow_down_white.svg" alt="" />
                        </a>
                    </div>

                    <div className='yellow-banner yellow'>Here's how it works
                        <img className='icon-img' src="../images/keyboard_arrow_down.svg" alt="" />
                    </div>
                </section>
                <section className='section singlePage-section yellow' id='idea'>
                    <div className='img-section'>
                        <img src="../images/yellow1.svg" alt="" srcset="" />
                    </div>
                    <div className='content-section'>
                        <h2 className='lp-title'>Search for an idea</h2>
                        <p className='lp-para'>What do you want to try next? Think of something you’re into – such as 'easy chicken dinner' – and see what you find.</p>
                    </div>
                </section>
                <section className='section singlePage-section blue'>
                    <div className='img-section'>
                        <img src="../images/Group 2.svg" alt="" srcset="" />
                    </div>
                    <div className='content-section'>
                        <h2 className='lp-title green'>Save ideas You like</h2>
                        <p className='lp-para green'>Collect your favourites so you can get back to them later.</p>
                    </div>
                </section>
                <section className='section singlePage-section pink'>
                    <div className='img-section relative'>
                        <img className='img-section-image' src="../images/left.svg" alt="" srcset="" />
                        <img className='abs-img' src="../images/group 3.png" alt="" />
                    </div>
                    <div className='content-section'>
                        <h2 className='lp-title'>See it, make it, <br /> try it, do it</h2>
                        <p className='lp-para'>The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                    </div >
                </section >
                <section className='section login-section' id="login">
                    <div className='login-title-section'>
                        <h2 className='lp-title white'>Become a<br /> part of the <br /> world of <br /> ideas</h2>
                    </div>
                    <Login />
                </section>
            </div >

        </>
    )
}

export default LandindPage
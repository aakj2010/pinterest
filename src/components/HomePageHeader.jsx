// HomePageHeader.js
import React, { useState } from 'react';
import './HomePageHeader.css';
import LoginModal from './modal/LoginModal';
import SignUpModal from './modal/SignUpModal';

function HomePageHeader() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);


    // Function to open the Login modal
    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };
    const openSignupModal = () => {
        setIsSignupModalOpen(true);
    };

    // Function to close the Login modal
    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };
    const closeSignUpModal = () => {
        setIsSignupModalOpen(false);
    };

    return (
        <>
            <div className="full-screen-scroll">
                <header className='header'>
                    <div className='logo'>
                        <img src="../images/pinterest-1.svg" alt="pinterest" />
                        <span className='logopinterest'>Pinterest</span>
                    </div>
                    <div className='list-items'>
                        <ul className='about-list'>
                            <li className='list'>
                                About
                            </li>
                            <li className='list'>
                                Business
                            </li>
                            <li className='list'>
                                Press
                            </li>
                        </ul>
                        <ul className='log-btns'>
                            <li>
                                <button className='login' onClick={openLoginModal}>Log in</button>
                            </li>
                            <li>
                                <button className='signup' onClick={openSignupModal}>Sign up</button>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>

            {/* Render the Login modal conditionally */}
            {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
            {isSignupModalOpen && <SignUpModal closeModal={closeSignUpModal} />}
        </>
    );
}

export default HomePageHeader;

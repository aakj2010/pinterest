// LoginModal.js
import React from 'react';
import './Modal.css';
import Login from '../../pages/Login';
import CloseIcon from '@mui/icons-material/Close';

function LoginModal({ closeModal }) {
    return (
        <div className="modal open">
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                    <CloseIcon />
                </button>
                <Login />
            </div>
        </div>
    );
}
export default LoginModal;

// LoginModal.js
import React from 'react';
import './Modal.css';
import Register from '../../pages/Register';
import CloseIcon from '@mui/icons-material/Close';

function SignUpModal({ closeModal }) {
    return (
        <div className="modal open">
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                    <CloseIcon />
                </button>
                <Register />
            </div>
        </div>
    );
}
export default SignUpModal;
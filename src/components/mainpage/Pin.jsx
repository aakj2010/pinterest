import React from 'react'
// import './Pin.css'
import styled from 'styled-components'


function Pin(props) {

    let { urls } = props;

    return (

        <Wrapper>
            <Container>
                <img src={urls?.regular} alt="img" />
            </Container>
        </Wrapper>
        // <>
        //     <div className='container'>
        //         <div className='item'>
        //             <img src={urls?.regular} alt="img" />
        //         </div>
        //     </div>
        // </>
    )
}

export default Pin


const Wrapper = styled.div`
    display: inline-flex;
    padding: 0.5rem;
`

const Container = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
cursor: pointer;
width: 15rem;
padding: 0.5rem;

img {
    padding: 0.5rem;
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 1rem;
    object-fit: cover;
}
`











// import React, { useState } from "react";

// import ModalUnstyled from "@mui/coreui/ModalUnstyled";
// import { styled } from "@mui/system";
// import { useDispatch } from "react-redux";

// import "./Pin.css";
// import { savePin, deleteSavedPin } from "../actions/pin";

// const Dialog = styled("div")`
//   position: fixed;
//   z-index: 1300;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Backdrop = styled("div")`
//   z-index: -1;
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   -webkit-tap-highlight-color: transparent;
// `;

// const SaveButton = ({ userId, photoUrl, isSaved }) => {
//   const dispatch = useDispatch();
//   const handleOnClick = (event) => {
//     event.preventDefault();
//     isSaved
//       ? dispatch(deleteSavedPin({ userId, photoUrl }))
//       : dispatch(savePin({ userId, photoUrl }));
//   };

//   return (
//     <button
//       onClick={handleOnClick}
//       className={`save-btn ${
//         isSaved ? "save-btn--active" : "save-btn--inactive"
//       }`}
//     >
//       {isSaved ? "Saved" : "Save"}
//     </button>
//   );
// };




// const Pin = ({ userId, photoUrl, isSaved }) => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const handleOpenDialog = () => setOpenDialog(true);
//   const handleCloseDialog = () => setOpenDialog(false);

//   const [showButton, setShowButton] = useState(false);

//   return (
//     <div>
//       <div className="pin__wrapper">
//         <div
//           className="pin__container"
//           onMouseOver={() => setShowButton(true)}
//           onMouseLeave={() => setShowButton(false)}
//         >
//           <div onClick={handleOpenDialog}>
//             <img src={`${photoUrl}&w=236`} alt="" />
//           </div>
//           {/* {showButton && (
//             <SaveButton userId={userId} photoUrl={photoUrl} isSaved={isSaved} />
//           )} */}
//         </div>
//       </div>
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         BackdropComponent={Backdrop}
//       >
//         <div className="dialog__container">
//           <img src={`${photoUrl}&w=400`} alt="" />
//           {/* <SaveButton userId={userId} photoUrl={photoUrl} isSaved={isSaved} /> */}
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default Pin;

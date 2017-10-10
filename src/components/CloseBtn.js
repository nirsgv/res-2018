import React from 'react'


const CloseBtn = props => (
    <div className="close-btn" onClick={props.closePopup}>
        <span className="x">x</span>
    </div>
);
export default CloseBtn;
import React from 'react'
import PropTypes from 'prop-types';


const CloseBtn = props => (
    <div className="close-btn" onClick={props.closePopup}>
        <span className="x">x</span>
    </div>
);
export default CloseBtn;

CloseBtn.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};
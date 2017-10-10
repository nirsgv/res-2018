import React from 'react'
import PropTypes from 'prop-types';


const CloseMobileMenuHolder = props => (
    <div className="close-mobile-menu-btn" onClick={props.closeMobileMenu}>
        <div className="x-holder">
            <span className="x1"></span>
            <span className="x2"></span>
        </div>
    </div>
);
export default CloseMobileMenuHolder;

CloseMobileMenuHolder.propTypes = {
    onClick: PropTypes.func
};
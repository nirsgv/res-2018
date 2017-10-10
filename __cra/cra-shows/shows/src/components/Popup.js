import React, { Component } from 'react';
import CloseBtn from './CloseBtn';
import ContentBox from './ContentBox';
import PropTypes from 'prop-types';

class Popup extends Component {




    render() {
    let dat = this.props.data;
    let arrIndex = dat.pop_up_item_id-1;
    const chosenShow = dat.shows[arrIndex];
        return (
            <section className="pop-up" doit={this.go}>
                <ContentBox data={chosenShow}>
                    <CloseBtn closePopup={this.props.closePopup}/>
                </ContentBox>
            </section>
        )
    }
}

export default Popup;


// Specifies the default values for props:
Popup.defaultProps = {
};

Popup.propTypes = {
    closePopup: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};
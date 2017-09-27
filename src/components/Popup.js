import React, { Component } from 'react';
import CloseBtn from './CloseBtn';
import ContentBox from './ContentBox';

class Popup extends Component {
    render() {
    let dat = this.props.data;
    let arrIndex = dat.pop_up_item_id-1;

        const chosenShow = dat.shows[arrIndex];
        return (
/*
            <section className="pop-up" onClick={this.props.closePopup}>
*/
            <section className="pop-up">
                <ContentBox data={chosenShow}>
                    <CloseBtn closePopup={this.props.closePopup}/>
                </ContentBox>
            </section>
        )
    }
}
export default Popup;

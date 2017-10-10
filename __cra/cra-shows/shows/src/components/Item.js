import React, { Component } from 'react';
import Img from './Img';
import Label from './Label';
import PropTypes from 'prop-types';


class Items extends Component {

render() {
        return(
        <div className="thumb">
            <Img src={this.props.data.thumb_img} alt={this.props.data.label}/>
            <Label className="show-title">
                {this.props.data.label}
            </Label>
        </div>
        )
    }
}

export default Items;

Items.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    data: PropTypes.object
};

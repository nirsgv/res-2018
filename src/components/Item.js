import React, { Component } from 'react';
import Img from './Img';
import Label from './Label';


class Items extends Component {


render() {
    //console.log(this.props.data);
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



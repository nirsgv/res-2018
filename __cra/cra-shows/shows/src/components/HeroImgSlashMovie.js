import React, { Component } from 'react'




class ContentBoxeExpanded extends Component {




    render() {
        console.log(this);
        let dat = this.props.data;
        let arrIndex = dat.pop_up_item_id-1;
        const chosenShow = dat.shows[arrIndex];
        return (
            <div>

            </div>
        )
    }
}

export default ContentBoxeExpanded;
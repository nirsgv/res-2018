import React, { Component } from 'react';


class Filter extends Component {

render() {
   // console.log(this.props.data.filter_items);
    let filterItems;




    filterItems = this.props.data.filter_items.map((layer,index,array) => {
        let gop = this.props.data.filters[index];
        let i = index;
        let selectedClass;
        if (this.props.data.selected_filter_item_number===index){selectedClass='selected'}else{selectedClass=''}

        return(
        <li key={index}
            className={`filter-item ${selectedClass}`}

            //filterPurpose={this.props.data.filters[index]}
            onClick={this.props.setFilter.bind(this,gop,i)}
        >
            {layer}
        </li>
        )
    });
    //console.log(filterItems);
    return(
        <div className="filter-holder desktop-only">
            <ul className="filter">

                {filterItems}

            </ul>
        </div>
    )
}
}



export default Filter;



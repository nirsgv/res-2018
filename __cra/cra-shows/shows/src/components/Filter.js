import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filter extends Component {

render() {
    let filterItems;

    filterItems = this.props.data.filter_items.map((layer,index,array) => {
        let gop = this.props.data.filters[index];
        let i = index;
        let selectedClass;
        if (this.props.data.selected_filter_item_number===index){selectedClass='selected'}else{selectedClass=''}

        return(
        <li key={index}
            className={`filter-item ${selectedClass}`}
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

Filter.propTypes = {
    key: PropTypes.number,
    data: PropTypes.object
};

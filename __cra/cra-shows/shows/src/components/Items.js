import React, { Component } from 'react';
import Item from './Item';


class Items extends Component {

render() {



    //console.log(this.props.data.shows);
    let mainItems,
        filteredItems,
        selectedFilter;
    mainItems=this.props.data.shows;
    selectedFilter=this.props.data.filtered_by[0];


    filteredItems = mainItems.filter(
        show => show.tags.includes(selectedFilter) ||
        selectedFilter==='ALL_TAG'
    ).map((layer,index,array) => {
        const id = layer.id;
        return(
        <li className={`item ${this.props.data.cancelable_anima_class}`}
            key={index}
            onClick={this.props.openPopup.bind(this,id)}
            onAnimationEnd={this.props.emptyCancelableTmpClass}
        >
            <div className="inner-pad">
                <Item data={layer}/>
            </div>
        </li>
        )
    });


    //let pageSwitcher = (this.props.selected_menu_item===0) ? filteredItems : filteredItems;


    return(
        <div className="items-holder">
            <ul className="items c-hack">

                {filteredItems}

            </ul>
        </div>
    )
}
}



export default Items;



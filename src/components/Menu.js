import React, { Component } from 'react';




class Menu extends Component {

render() {
        let selectedClass, menuItems;
        menuItems = this.props.data.menu_items.map((layer,index,array) => {
        let i = index;
        if (this.props.data.selected_menu_item===index){selectedClass='selected'}else{selectedClass=''}
        return(
        <li key={index} 
            className={`menu-item ${selectedClass}`}
            onClick={this.props.setMenu.bind(this,i)}
        >
            {layer}
        </li>
        )
    });
    
    
    //console.log(menuItems);
    return(
        <div className="menu-holder desktop-only">
            <ul className="menu">

                {menuItems}

            </ul>
        </div>
    )
}
}



export default Menu;



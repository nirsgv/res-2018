import React, { Component } from 'react';
import Menu from './Menu';
import Filter from './Filter';
import CloseMobileMenuHolder from './CloseMobileMenuHolder';




class MobileMenuHolder extends Component {

render() {

    let mobMenuOpenedSwitch =  this.props.data.mobile_menu_opened ? 'opened' : 'closed';

    return (
        <div className={`mob-menu-holder mob-only ${mobMenuOpenedSwitch}`}>
            <Menu data={this.props.data} setMenu={this.props.setMenu.bind(this)} closeMobileMenu={this.props.closeMobileMenu}/>
            <Filter data={this.props.data} setFilter={this.props.setFilter.bind(this)} closeMobileMenu={this.props.closeMobileMenu}/>
            <CloseMobileMenuHolder data={this.props.data} closeMobileMenu={this.props.closeMobileMenu} />
        </div>
        )
    }
}



export default MobileMenuHolder;



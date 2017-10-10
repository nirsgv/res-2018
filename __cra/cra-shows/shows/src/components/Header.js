import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import Filter from './Filter';
import HamIcon from './HamIcon';

export default (props) => (
    <header className="header">
            <Logo />
            <Menu data={props.data} setMenu={props.setMenu.bind(this)} />
            <Filter data={props.data} setFilter={props.setFilter.bind(this)} />
            <div className="ham-icon-holder" onClick={props.openMobileMenu}>
                <HamIcon />
            </div>
    </header>
)
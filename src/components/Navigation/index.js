import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Wrapper from './Wrapper';
import HamIcon from './HamIcon';



const Navigation = (props) => (
    <Wrapper className={props.wrp_class_name}>
        <HamIcon />
        <Nav className={props.element_class_name}>
            {props.children}
        </Nav>
    </Wrapper>

);
export default Navigation;
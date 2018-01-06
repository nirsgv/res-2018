import React from 'react'
//import LogoImg from './log.png';
import LogoImg from './res.webp';
import styled from 'styled-components';

const StyledLogoImgWrp = styled.div`
  list-style: none;
  margin: 0;
  width: auto;
  max-height: 3em;
  overflow-y: auto;
  padding: 0;
  display: inline-block;
  float: right;
`;
const StyledLogoImg = styled.img`
  margin: 0;
  width: auto;
  max-height: 3em;
  background-image: url(${LogoImg});
`;


export default (props) => (
    <StyledLogoImgWrp className="logo">
        <StyledLogoImg src={LogoImg} alt='' />
    </StyledLogoImgWrp>
)
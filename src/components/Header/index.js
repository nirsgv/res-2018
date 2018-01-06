import React from 'react';

import A from './A';
import Img from './Img';
import NavBar from './Nav';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component {
  render() {
    return (
      <header>
        <A href="https://twitter.com">
          <Img src={Banner} alt="something" />
        </A>
        <NavBar>
          <HeaderLink to="/">
          </HeaderLink>
        </NavBar>
      </header>
    );
  }
}

export default Header;

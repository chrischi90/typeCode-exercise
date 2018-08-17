import React, { Component } from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 200px;
`
const navIcon = require('../../assets/logo_and_hamburger.svg');

class NavButton extends Component {
  render() {
    return (
      <NavWrapper>
        <img src={ navIcon } alt="nav-icon"/>
      </NavWrapper>
    )
  }
}

export default NavButton

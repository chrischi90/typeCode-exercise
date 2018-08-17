import React, { Component } from 'react';
import NavButton from './navbutton.jsx';
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  right: 70px;
  top: 70px;
`

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <NavButton />
      </Nav>
    )
  }
}

export default Navbar

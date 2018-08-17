import React, { Component } from 'react';
import styled from 'styled-components';
import { NavIcon } from './nav-icon'

const NavWrapper = styled.div`
  width: 200px;
`

class NavButton extends Component {
  render() {
    return (
      <NavWrapper>
        <NavIcon />
      </NavWrapper>
    )
  }
}

export default NavButton

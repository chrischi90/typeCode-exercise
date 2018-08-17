import React, { Component } from 'react';
import styled from 'styled-components';

const StyledArticleLocation = styled.span`
  color: #c2c2c2;
  font-family: Futura, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  padding-right: 8px;
`

class ArticleLocation extends Component {
  render() {
    const { location } = this.props

    return(
      <StyledArticleLocation>
        { location }
      </StyledArticleLocation>
    )
  }
}

export default ArticleLocation

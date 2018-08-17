import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPullQuote = styled.div`
  grid-column: article-text;
  margin-left: -50px;
  max-width: 650px;
`

const Quote = styled.p`
  color: #8d97a4;
  font-size: 2.25rem;
  font-family: 'Copernicus';
  font-weight: 900;
`

class PullQuote extends Component {
  render() {
    const { text } = this.props

    return(
      <StyledPullQuote>
        <Quote>
          { text }
        </Quote>
      </StyledPullQuote>
    )
  }
}

export default PullQuote

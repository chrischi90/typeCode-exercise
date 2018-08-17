import React, { Component } from 'react';
import styled from 'styled-components';

const StyledArticleMeta = styled.div`
  color: #c2c2c2;
  font-family: Futura, sans-serif;
  font-size: 0.8rem;
  grid-column: left-rail;
  letter-spacing: 1px;
  width: 200px;

  > div {
    border-top: 1px solid #c2c2c2;
    padding: 1rem 0 3rem;
  }
`
const AuthorLink = styled.span`
  font-family: 'Copernicus';
  font-size: 1rem;
  color: #685135;
  font-weight: 700;
`

const TagList = styled.ul`
  list-style: none;
  padding: 0;
`

class ArticleMeta extends Component {
  render() {
    const {
      author,
      date,
      tags,
    } = this.props

    const tagItems = tags.map((tag, i) =>
      <li key={ i }>#{ tag.toUpperCase() }</li>
    )

    return (
      <StyledArticleMeta>
        <div>
          BY <AuthorLink>{ author }</AuthorLink>
        </div>
        <div>
          { date }
        </div>
        <div>
          <TagList>{ tagItems }</TagList>
        </div>
      </StyledArticleMeta>
    )
  }
}

export default ArticleMeta

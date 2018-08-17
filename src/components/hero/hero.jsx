import React, { Component } from 'react';
import { StyledHero } from './styled-hero';
import ArticleTitle from '../article-title'

const DEFAULT_TITLE = 'Are we out of the woods yet?'

class Hero extends Component {
  render() {
    const { background } = this.props

    return (
      <StyledHero background={ background }>
        <ArticleTitle text={ DEFAULT_TITLE } />
      </StyledHero>
    )
  }
}

export default Hero

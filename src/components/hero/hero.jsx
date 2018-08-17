import React, { Component } from 'react';
import { StyledHero } from './styled-hero';
// import { contentEditable } from '../content-editable'
import ArticleTitle from '../article-title'

const DEFAULT_TITLE = 'Are we out of the woods yet?'

// const EditableTitle = contentEditable('h1')

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

// <EditableTitle value={ DEFAULT_TITLE } />

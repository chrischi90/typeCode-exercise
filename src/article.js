import React, { Component } from 'react';
import ArticleBody from './components/article-body'
import Hero from './components/hero'
import Navbar from './components/navbar'
import styled from 'styled-components';

const image = require('./assets/Ji9qebSpSlSbnsWRZnDX__MG_9520.jpg');

const StyledArticle = styled.div`
  display: grid;
  grid-template-columns: [full-start] 70px [main-start left-rail-start] 1fr 1fr [left-rail-end body-start] 1fr 1fr 1fr 1fr 1fr 1fr [body-end main-end] 70px [full-end]
`

class Article extends Component {

  render() {
    return (
      <StyledArticle>
        <Navbar />
        <Hero background={ image } />
        <ArticleBody />
      </StyledArticle>
    );
  }
}

export default Article;

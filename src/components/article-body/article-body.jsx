import React, { Component } from 'react';
import { StyledArticleBody, StyledArticleText } from './styled-article-body';
import ArticleLocation from './article-location.jsx'
import ArticleMeta from './article-meta.jsx';
import PullQuote from '../pull-quote'

const AUTHOR_CONST = 'Bob Loblaw'
const DATE_CONST = 'AUGUST 6, 2015'
const LOCATION_CONST = 'New York, NY.'
const PULL_QUOTE_CONST = 'Looking at it now, last December. We were built to fall apart. Then fall back together.'
const TAGS_CONST = [ 'environment', 'swift', 'fungus' ]

class ArticleBody extends Component {
  render() {
    return (
      <StyledArticleBody>
        <ArticleMeta author={ AUTHOR_CONST } date={ DATE_CONST } tags={ TAGS_CONST } />
        <StyledArticleText>
          <ArticleLocation location={ LOCATION_CONST } /> Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere.
        </StyledArticleText>
        <StyledArticleText>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Proin vel ante a orci tempus eleifend ut et magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.In condimentum facilisis porta.Sed nec diam eu diam mattis viverra.Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero.Vestibulum mollis mauris enim.
        </StyledArticleText>
        <PullQuote text={ PULL_QUOTE_CONST } />
        <StyledArticleText>
          Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor lobortis. Pellentesque eu est a nulla placerat dignissim. Morbi a enim in magna semper bibendum. Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus. Quisque lacus quam, egestas ac tincidunt a, lacinia vel velit. Aenean facilisis nulla vitae urna tincidunt.
        </StyledArticleText>
        <StyledArticleText>
          Nam vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh.Donec semper quam scelerisque tortor.Mauris vel neque sit amet nunc gravida congue.
        </StyledArticleText>
      </StyledArticleBody>
    )
  }
}

export default ArticleBody

import styled from 'styled-components';

export const StyledArticleBody = styled.section`
  display: grid;
  grid-column: main;
  grid-template-columns: 1fr [left-rail-start] 1fr 1fr [left-rail-end article-text-start] repeat(5, 1fr) [article-text-end];
  margin: 120px 0;
`
export const StyledArticleText = styled.p`
  font-family: Palatino, serif;
  font-size: 1.2rem;
  grid-column: article-text;
  line-height: 2rem;
  margin: 0;
`

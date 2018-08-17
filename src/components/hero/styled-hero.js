import styled from 'styled-components'

export const StyledHero = styled.div`
  background: ${ props => `url(${props.background})` };
  background-size: cover;
  grid-column: full;
  height: 70vh;
  display:grid;
  grid-template-columns:  70px repeat(8, 1fr) 70px ;
`

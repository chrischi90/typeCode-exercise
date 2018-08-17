import styled from 'styled-components'

export const StyledTitle = styled.h1`
  color: black;
  font-family: 'Copernicus', serif;
  font-size: 5rem;
  font-weight: 100;
  margin: 0;
  min-width: 750px;
  mix-blend-mode: lighten;

  > span {
    background: white;
    padding: 12px;
  }
`

export const ButtonWrapper = styled.div`
  max-width: 50px;
  margin: 0 0 -3px -30px;
`

export const EditButton = styled.button`
  background-color: #f8df2e;
  border:0;
  margin: 0 0 12px -30px;
  padding: 0;
`

export const ExitEditButton = styled.button`
  background-color: #ff4949;
  border: 0;
  padding: 0;
`

export const SaveButton = styled.button`
  background-color: #60c360;
  border: 0;
  padding: 0;
`

export const TitleWrapper = styled.div`
  align-self: end;
  grid-column-start: 5;
`

export const StyledTitleInput = styled.input`
  border: 1px solid gray;
  font-family: 'Copernicus', serif;
  font-size: 3.5rem;
  padding: 8px;
`
export const InputWrapper = styled.div`
  background-color: white;
  padding: 20px;
`

export const StlyedSlugPreview = styled.div`
  color: #c2c2c2;
  font-family: Futura, sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  background-color: white;
  padding: 0 20px 20px 20px;

  > p {
      margin: 0
  }

  > span {
    color: #6c6c6c;
  }
`

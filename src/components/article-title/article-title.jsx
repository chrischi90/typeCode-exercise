import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
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

const ButtonWrapper = styled.div`
  width: 60px;
  margin: 0 0 0 -50px;
`

const EditButton = styled.button`
  margin: 0 0 15px -50px;
`

const ExitEditButton = styled.button`
`

const SaveButton = styled.button`
`

const TitleWrapper = styled.div`
  align-self: end;
  grid-column-start: 4;
`

const StyledTitleInput = styled.input`
  border: 1px solid gray;
  font-family: 'Copernicus', serif;
  font-size: 3.5rem;
  padding: 8px;
`
const InputWrapper = styled.div`
  background-color: white;
  padding: 20px;
`

const StlyedSlugPreview = styled.div`
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

const EditableTitle = ({ text, handleRef, onInput, preventEnter }) => {
  return(
    <InputWrapper>
      <StyledTitleInput
      ref={ handleRef }
      value={ text }
      onChange={ onInput }
      onKeyDown={ preventEnter }
      type="text" />
    </InputWrapper>
  )
}

const ViewTitle = ({ title }) => {
  return <StyledTitle><span>{ title }</span></StyledTitle>
}

const SlugPreview = ({ slug }) => {
  const slugNoSymbols = slug.replace(/[^a-zA-Z ]/g, "");
  const hyphenatedSlug = slugNoSymbols.replace(/\s+/g, '-').toLowerCase();

  return(
    <StlyedSlugPreview>
      <p>slug: <span>{ hyphenatedSlug }</span></p>
    </StlyedSlugPreview>
  )
}

class ArticleTitle extends Component {
  urlInput = null

  state = {
    editable: false,
    text: this.props.text
  }

  handleUrlRef = input => {
    this.urlInput = input
  }

  handleUrl = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    console.log(event.target.value)
    this.setState()
  }

  preventSubmitonEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  exitEditable = (prevText) => {
    this.setState({
      editable: !this.state.editable,
      text: this.props.text /* TODO: This should be initial state of text. Maybe w/ redux */
    })
  }

  toggleEditable = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  saveEditable = () => {
    this.setState({
      editable: !this.state.editable,
    })
  }

  render() {
    const { text } = this.state

    return(
      <React.Fragment>
        { !this.state.editable ?
          <TitleWrapper>
            <EditButton onClick={ this.toggleEditable }>
              Edit
            </EditButton>
            <ViewTitle title={ text } />
          </TitleWrapper>
          :
          <TitleWrapper>
            <ButtonWrapper>
              <ExitEditButton onClick={ this.exitEditable }>
                Cancel
              </ExitEditButton>
              <SaveButton onClick={ this.saveEditable }>Save</SaveButton>
            </ButtonWrapper>
            <EditableTitle
              text={ text }
              handleRef={ this.handleUrlRef }
              onInput={ this.handleUrl }
              preventEnter={ this.preventSubmitonEnter } />
            <SlugPreview slug={ text }/>
          </TitleWrapper>
        }
      </React.Fragment>
      )
    }
  }

export default ArticleTitle

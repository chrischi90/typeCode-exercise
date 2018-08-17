import React, { Component } from 'react';
import {
  StyledTitle,
  ButtonWrapper,
  EditButton,
  TitleWrapper,
  ExitEditButton,
  SaveButton,
  StyledTitleInput,
  InputWrapper,
  StlyedSlugPreview,
} from './styled-article-title'
import { PencilIcon } from './pencil-icon'
import { ExitIcon } from './x-icon'
import { CheckmarkIcon } from './checkmark-icon'

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
              <PencilIcon height={ "30px" } width={ "30px" }/>
            </EditButton>
            <ViewTitle title={ text } />
          </TitleWrapper>
          :
          <TitleWrapper>
            <ButtonWrapper>
              <ExitEditButton onClick={ this.exitEditable }>
                <ExitIcon height={ "30px" } width={ "30px" } />
              </ExitEditButton>
              <SaveButton onClick={ this.saveEditable }>
                <CheckmarkIcon height={ "30px" } width={ "30px" } />
              </SaveButton>
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

import React, { Component } from 'react'

export const contentEditable = WrappedComponent => {
  return class extends Component {
    state = {
      editable: false
    }

    toggleEdit = event => {
      event.preventDefault();
      if (this.state.editable) {
        this.cancel();
      } else {
        this.edit();
      }
    };

    edit = () => {
      this.setState({
        editable: true
      }, () => {
        this.domElm.focus();
      });
    };

    save = () => {
      this.setState({
        editable: false
      }, () => {
        if (this.props.onSave && this.isValueChanged()) {
          console.log('Value is changed', this.domElm.textContent);
        }
      });
    };

    cancel = () => {
      this.setState({
        editable: false
      });
    };

    isValueChanged = () => {
      return this.props.value !== this.domElm.textContent
    };

    handleKeyDown = event => {
      const { key } = event;
      switch (key) {
        case 'Enter':
        case 'Escape':
          this.save();
          break;
        default:
      }
    };

    render() {
      let editOnClick = true;
      const { editable } = this.state;
      if (this.props.editOnClick !== undefined) {
        editOnClick = this.props.editOnClick;
      }
      return (
        <WrappedComponent
          className={ editable ? 'editable' : '' }
          onClick={ editOnClick ? this.toggleEdit : undefined }
          contentEditable={ editable }
          ref={ domNode => {
              this.domElm = domNode;
            }
          }
          onBlur={ this.save }
          onKeyDown={ this.handleKeyDown }
          { ...this.props }
      >
        { this.props.value }
      </WrappedComponent>
      )
    }
  }
}

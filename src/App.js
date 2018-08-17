import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    );
  }
}

export default App;

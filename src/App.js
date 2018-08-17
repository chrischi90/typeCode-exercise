import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Copernicus';
    src: url('fonts/copernicus_webfont/Copernicus-Heavy.eot'); /* IE9 Compat Modes */
    src: url('Copernicus-Heavy.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/copernicus_webfont/Copernicus-Heavy.woff') format('woff'), /* Modern Browsers */
        url('fonts/copernicus_webfont/Copernicus-Heavy.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/copernicus_webfont/Copernicus-Heavy.svg#53d86533bbd20bc075f6ce29028572cc') format('svg'); /* Legacy iOS */

    font-style:   normal;
    font-weight:  400;
  }

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

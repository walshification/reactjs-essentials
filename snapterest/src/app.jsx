import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import template from './index.html';

class ReactClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }
  render() {
    if (this.state.isHidden) {
      return null;
    }

    return React.createElement('h1', { className: 'header' }, 'React Component');
  }
};

const reactComponentElement = React.createElement(ReactClass);
const reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

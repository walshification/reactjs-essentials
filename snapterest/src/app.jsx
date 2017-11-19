import React from 'react';
import ReactDOM from 'react-dom';

import template from './index.html';

class Heading extends React.Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <h1 className='title' key='title'>React Component</h1>
    );
  }
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Stateful React Component'
    };
  }


  render() {
    return (
      <button className='btn btn-default'
              onClick={() => this.props.onClick()}>
        {this.state.title}
      </button>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHeaderHidden: false };
  }

  renderHeading() {
    if (this.state.isHeaderHidden) {
      return null;
    }
    return (
      <Heading />
    );
  }

  handleClick() {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  }

  render() {
    return (
      <div>
        {this.renderHeading()}
        <Button onClick={() => this.handleClick()} />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('react-application'));

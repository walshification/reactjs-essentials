import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className='header'>{this.props.text}</h1>
  }
}

module.exports = Header;

import React from 'react';

const headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2 style={headerStyle}>{this.props.text}</h2>
  }
}

Header.defaultProps = {
 text: 'Default header'
};

module.exports = Header;

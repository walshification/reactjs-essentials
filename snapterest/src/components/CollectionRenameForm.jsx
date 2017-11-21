import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button.jsx';
import Header from './Header.jsx';

const inputStyle = {
  marginRight: '5px'
}

class CollectionRenameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.name
    };
  }

  setInputValue(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  }

  handleInputValueChange(event) {
    const inputVale = event.target.value;
    this.setInputValue(inputValue);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const colectionName = this.state.inputValue;
    this.props.onChangeCollectionName(collectionName);
  }

  handleFormCancel(event) {
    event.preventDefault();

    const collectionName = this.props.name;
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  }

  componentDidMount() {
    this.refs.collectionName.focus();
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <Header text="Collection name:" />

        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange}
            value={this.state.inputValue}
            ref="collectionName" />
        </div>

        <Button label="Change" handleClick={this.handleFormSubmit} />
        <Button label="Cancel" handleClick={this.handleFormCancel} />
      </form>
    );
  }
}

module.exports = CollectionRenameForm;

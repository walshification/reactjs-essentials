import 'raf/polyfill';

jest.dontMock('../Header.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Header from '../Header.jsx';

describe('Header component', () => {
  it('renders provided header text', () => {
    const header = TestUtils.renderIntoDocument(
      <Header text="Testing..." />
    );
    const actualHeaderText = ReactDOM.findDOMNode(header).textContent;
    expect(actualHeaderText).toBe('Testing...');
  });

  it('renders a default header if none is provided', () => {
    const defaultHeader = TestUtils.renderIntoDocument(
      <Header />
    );
    const actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;
    expect(actualDefaultHeaderText).toBe('Default header');
  });
});

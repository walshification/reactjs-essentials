jest.dontMock('../Button.jsx');

import React from 'react';
import TestUtils from 'react-dom/test-utils';

import Button from '../Button.jsx';

describe('Button component', () => {
  const handleClick = jest.genMockFunction();

  it('calls handler function on click', () => {
    const button = TestUtils.renderIntoDocument(
      <Button handleClick={handleClick} />
    );
    const buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    TestUtils.Simulate.click(buttonInstance);
    expect(handleClick).toBeCalled();
    const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
    expect(numberOfCallsMadeIntoMockFunction).toBe(1);
  });
});

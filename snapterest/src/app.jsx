import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement('h1', { className: 'header', key: 'header' }, 'This is React');
const p = React.createElement('p', { className: 'content', key: 'content' }, "And that's how it works.");

const listOfItems = <ul className="list-of-items">
                      <li className="item-1">Item 1</li>
                      <li className="item-2">Item 2</li>
                      <li className="item-3">Item 3</li>
                    </ul>;

const reactFragment = [ h1, p, listOfItems ];
const section = React.createElement('section', { className: 'container' }, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'));

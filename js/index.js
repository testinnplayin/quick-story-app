require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Hello />, document.getElementById('app'));
});
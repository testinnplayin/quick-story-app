require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';


import MainContainer from './components/main-container';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<MainContainer />, document.getElementById('app'));
});
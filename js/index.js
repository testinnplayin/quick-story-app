require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import MainContainer from './components/main-container';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<MainContainer />
		</Provider>,
		document.getElementById('app'));
});
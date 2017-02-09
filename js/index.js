require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import MainContainer from './components/main-container';
import MainArea from '../components/main-area';
import StoryArea from '../components/story-area';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path='/' component={MainContainer}>
					<IndexRoute component={MainArea} />
					<Route path='story/new' component={StoryArea} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
});
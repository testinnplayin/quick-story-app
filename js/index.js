require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import MainContainer from './components/main-container';
import InitialMainArea from './components/initial-main-area';
import StoryMainArea from './components/story-main-area';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path='/' component={MainContainer}>
					<IndexRoute component={InitialMainArea} />
					<Route path='story-new' component={StoryMainArea} />
				</Route>
				
			</Router>
		</Provider>,
		document.getElementById('app'));
});
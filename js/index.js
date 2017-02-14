require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';

import MainContainer from './components/main-container';
import GeneralContainer from './components/general-container';
import StoryContainer from './components/story-container';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path='/' component={MainContainer}>
					<IndexRoute component={GeneralContainer} />
					<Route path='/story' component={StoryContainer}>
						<Route path='/story/new' component={StoryContainer} />
					</Route>
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
});
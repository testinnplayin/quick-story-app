require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';

import MainContainer from './components/main-container';

// <Route path='/story' component={StoryContainer}>
						// <Route path='/new' component={TextArea} />
					// </Route>

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path='/' component={MainContainer}>
					<IndexRoute component={IntroComponent} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
});
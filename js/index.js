require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';

import MainContainer from './components/main-container';
import GeneralContainer from './components/general-container';
import StoryContainer from './components/story-container';
import TextAreaContainer from './components/text-area-container';
import StoriesContainer from './components/stories-container';
import StoryAreaContainer from './components/story-area-container';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path='/' component={MainContainer}>
					<IndexRoute component={GeneralContainer} />
					<Route path='/story' component={StoryContainer}>
						<Route path='/story/new' component={TextAreaContainer} />
						<Route path='/story/edit' component={TextAreaContainer} />
						<Route path='/story/:id' component={StoryAreaContainer} />
					</Route>
					<Route path='/stories' component={StoriesContainer} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
});
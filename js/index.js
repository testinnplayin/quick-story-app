require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';

import MainContainer from './containers/main-container';
import GeneralContainer from './containers/general-container';
import StoryContainer from './containers/story-container';
import TextAreaContainer from './containers/text-area-container';
import StoriesContainer from './containers/stories-container';
import StoryAreaContainer from './containers/story-area-container';
import DeleteAreaContainer from './containers/delete-area-container';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path='/' component={MainContainer}>
					<IndexRoute component={GeneralContainer} />
					<Route path='/story' component={StoryContainer}>
						<Route path='/story/new' component={TextAreaContainer} />
						<Route path='/story/edit/:id' component={TextAreaContainer} />
						<Route path='/story/:id' component={StoryAreaContainer} />
						<Route path='/story/delete/:id' component={DeleteAreaContainer} />
					</Route>
					<Route path='/stories' component={StoriesContainer} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
});

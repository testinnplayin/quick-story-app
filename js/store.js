'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';

// reducers.storyReducer, 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(composeEnhancers(applyMiddleware(thunk))); 
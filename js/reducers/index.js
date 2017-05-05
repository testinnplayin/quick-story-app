'use strict';

import {combineReducers} from 'redux';

import syncReducer from './syncReducer';
import crudReducer from './crudReducer';
import toggleReducer from './toggle-reducers';

const rootReducer = combineReducers({
	syncReducer,
	crudReducer,
	toggleReducer
});

export default rootReducer;

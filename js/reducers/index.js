'use strict';

import {combineReducers} from 'redux';

import syncReducer from './syncReducer';
import crudReducer from './crudReducer';

const rootReducer = combineReducers({
	syncReducer,
	crudReducer
});

export default rootReducer;

'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
	photo: ''
};

export const storyReducer = (state=initialState, action) => {
	switch(action.type) {
		case type.GET_PHOTO_SUCCESS:
			let photoSucc = action.photoSucc;

			const newState_1 = update(state, {
				photo: {
					$set: photoSucc
				}
			});

			console.log(newState_1);
			return newState_1;
		case type.GET_PHOTO_ERROR:
			let photoErr = action.photoErr;

			const newState_2 = update(state, {
				photo: {
					$set: photoErr
				}
			});

			console.log(newState_2);

			return newState_2;
		default:
			return state;
	}
};
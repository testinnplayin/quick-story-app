'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
	title: 'Quick Story',
	buttonName: ['Get Random Photo'],
	photoArea: 'Click on Get Random Photo button to begin!',
	photo: ''
};

export const storyReducer = (state=initialState, action) => {
	switch(action.type) {
		case types.CHANGE_TITLE:
			let title = action.title;

			const newState_1 = update(state, {
				title: {
					$set: title
				}
			});

			console.log(newState_1);

			return newState_1;
		case types.GET_PHOTO_SUCCESS:
			let photoSucc = action.photoSucc;

			const newState_2 = update(state, {
				photo: {
					$set: photoSucc
				}
			});

			console.log(newState_2);
			return newState_2;
		case types.GET_PHOTO_ERROR:
			let photoErr = action.photoErr;

			const newState_3 = update(state, {
				photo: {
					$set: photoErr
				}
			});

			console.log(newState_3);

			return newState_3;
		default:
			return state;
	}
};


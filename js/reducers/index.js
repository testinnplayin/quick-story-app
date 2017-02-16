'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
	title : 'Quick Story',
	leftBtn: 'Back',
	photoArea : 'Click on Get Random Photo button to begin!',
	rightBtn: 'Write',
	photo : '',
	photoBtn: 'Get Random Photo',
	submitBtnName: 'Save',
	userTitle: ''
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
		case types.CHANGE_PHOTO_AREA:
			let photoArea = action.photoArea;

			const newState_4 = update(state, {
				photoArea: {
					$set: photoArea
				}
			});

			console.log(newState_4);

			return newState_4;
		case types.CHANGE_RIGHT_BTN_NAME:
			let rightBtn = action.rightBtn;

			const newState_5 = update(state, {
				rightBtn: {
					$set: rightBtn
				} 
			});

			console.log(newState_5);

			return newState_5;
		case types.GET_TITLE_INPUT:
			let userTitle = action.userTitle;

			const newState_6 = update(state, {
				userTitle: {
					$set: userTitle
				}
			});

			console.log(newState_6);

			return newState_6;
		default:
			return state;
	}
};


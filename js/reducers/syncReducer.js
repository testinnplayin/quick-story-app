'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
	title : 'Quick Story',
	leftBtn: 'Back',
	leftBtnAddr: '/',
	photoArea : 'Click on Get Random Photo button to begin!',
	rightBtn: 'Write',
	rightBtnAddr: '/story/new',
	photoBtn: 'Get Random Photo',
	submitBtnName: 'Save',
	userTitle: '',
	userStory: '',
	author: {
		firstName: '',
		lastName: ''
	},
	newAuthor: '',
	id: ''
};

export default function syncReducer(state=initialState, action) {
	switch(action.type) {
		case types.CHANGE_TITLE:
			const newState_1 = update(state, {
				title: {
					$set: action.title
				}
			});
			return newState_1;
		case types.CHANGE_PHOTO_AREA:
			const newState_2 = update(state, {
				photoArea: {
					$set: action.photoArea
				}
			});
			return newState_2;
		case types.CHANGE_RIGHT_BTN_NAME:
			const newState_3 = update(state, {
				rightBtn: {
					$set: action.rightBtn
				}
			});
			return newState_3;
		case types.GET_TITLE_INPUT:
			const newState_4 = update(state, {
				userTitle: {
					$set: action.userTitle
				}
			});
			return newState_4;
		case types.GET_STORY_INPUT:
			const newState_5 = update(state, {
				userStory: {
					$set: action.userStory
				}
			});
			return newState_5;
		case types.GET_USER_NAME:
			let author = action.author;

			const newState_6 = update(state, {
				author: {
					firstName: {
						$set: author.firstName
					},
					lastName: {
						$set: author.lastName
					}
				}
			});
			return newState_6;
		case types.CHANGE_LEFT_BTN_NAME:
			const newState_7 = update(state, {
				leftBtn: {
					$set: action.leftBtn
				}
			});
			return newState_7;
		case types.CHANGE_BTN_ADDR:
			const newState_8 = update(state, {
				rightBtnAddr: {
					$set: action.rightBtnAddr
				},
				leftBtnAddr: {
					$set: action.leftBtnAddr
				}
			});
			return newState_8;
		case types.CHANGE_ID:
			const newState_9 = update(state, {
				id: {
					$set: action.id
				}
			});
			return newState_9;
		default:
			return state;
	}
};

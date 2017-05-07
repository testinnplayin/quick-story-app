'use strict';

import update from 'immutability-helper';

import * as types from '../actions/index';

const initialState = {
	author: {
		firstName: '',
		lastName: ''
	},
	newAuthor: '',
	stuff : {
		id: '',
		leftBtn: 'Back',
		leftBtnAddr: '/',
		photoArea : 'Click on Get Random Photo button to begin!',
		photoBtn: 'Get Random Photo',
		rightBtn: 'Write',
		rightBtnAddr: '/story/new',
		submitBtnName: 'Save',
		title : 'Quick Story',
	},
	userStory: '',
	userTitle: '',
};

export default function syncReducer(state=initialState, action) {
	switch(action.type) {
		case types.GET_TITLE_INPUT:
			const newState_1 = update(state, {
				userTitle: {
					$set: action.userTitle
				}
			});
			return newState_1;
		case types.GET_STORY_INPUT:
			const newState_2 = update(state, {
				userStory: {
					$set: action.userStory
				}
			});
			return newState_2;
		case types.GET_USER_NAME:
			let author = action.author;

			const newState_3 = update(state, {
				author: {
					firstName: {
						$set: author.firstName
					},
					lastName: {
						$set: author.lastName
					}
				}
			});
			return newState_3;
		case types.CHANGE_STUFF:
			const stuff = action.stuff,
				newState_4 = update(state, {
					stuff : {
						id : {
							$set : stuff.id
						},
						leftBtn : {
							$set : stuff.leftBtn
						},
						leftBtnAddr : {
							$set : stuff.leftBtnAddr
						},
						photoArea : {
							$set : stuff.photoArea
						},
						photoBtn : {
							$set : stuff.photoBtn
						},
						rightBtn : {
							$set : stuff.rightBtn
						},
						rightBtnAddr : {
							$set : stuff.rightBtnAddr
						},
						submitBtnName : {
							$set : stuff.submitBtnName
						},
						title : {
							$set : stuff.title
						}
					}
				});
				return newState_4;
		default:
			return state;
	}
};

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
		case types.CHANGE_STUFF:
			const stuff = action.stuff;
			console.log(stuff);

			const newState_10 = update(state, {
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
				console.log(newState_10);
				return newState_10;
		default:
			return state;
	}
};

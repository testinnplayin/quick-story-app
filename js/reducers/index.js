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
	photo : '',
	photoBtn: 'Get Random Photo',
	submitBtnName: 'Save',
	userTitle: '',
	userStory: '',
	author: {
		firstName: '',
		lastName: ''
	},
	newAuthor: '',
	stories: [],
	story: {},
	id: ''
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
		case types.GET_STORY_INPUT:
			let userStory = action.userStory;

			const newState_7 = update(state, {
				userStory: {
					$set: userStory
				}
			});

			console.log(newState_7);

			return newState_7;
		case types.GET_USER_NAME:
			let author = action.author;

			const newState_8 = update(state, {
				author: {
					firstName: {
						$set: author.firstName
					},
					lastName: {
						$set: author.lastName
					}
				}
			});

			console.log(newState_8);

			return newState_8;
		case types.CHANGE_LEFT_BTN_NAME:
			let leftBtn = action.leftBtn;

			const newState_9 = update(state, {
				leftBtn: {
					$set: leftBtn
				}
			});

			console.log(newState_9);

			return newState_9;
		case types.FETCH_STORIES_SUCCESS:
			let storiesSucc = action.storiesSucc,
				storiesLng = storiesSucc.length;

			if (storiesLng < 1) {
				throw new Error('Couldn\'t find stories');
			}

			const newState_10 = update(state, {
				stories: {
					$set: storiesSucc
				}
			});

			console.log(newState_10);

			return newState_10;
		case types.FETCH_STORIES_ERROR:
			let storiesErr = action.storiesErr;

			const newState_11 = update(state, {
				stories: {
					$set: storiesErr
				}
			});

			console.log(newState_11);

			return newState_11;
		case types.SAVE_STORY_SUCCESS:
			let storySucc = action.storySucc;

			const newState_12 = update(state, {
				story: {
					$set: storySucc
				}
			});

			console.log(newState_12);

			return newState_12;
		case types.SAVE_STORY_ERROR:
			let storyErr = action.storyErr;

			const newState_13 = update(state, {
				story: {
					$set: storyErr
				}
			});

			console.log(newState_13);

			return newState_13;
		case types.FETCH_STORY_SUCCESS:
			let storySucc2 = action.storySucc2,
				redoAuthor = storySucc2.author.split(', '),
				firstName = redoAuthor[1],
				lastName = redoAuthor[0];

			const newState_14 = update(state, {
				userTitle: {
					$set: storySucc2.userTitle
				},
				photo: {
					$set: storySucc2.photo
				},
				userStory: {
					$set: storySucc2.userStory
				},
				author: {
					firstName: {
						$set: firstName,
					},
					lastName: {
						$set: lastName
					}
				},
				newAuthor: {
					$set: storySucc2.author
				}
			});

			console.log(newState_14);

			return newState_14;
		case types.FETCH_STORY_ERROR:
			let storyErr2 = action.storyErr2;

			const newState_15 = update(state, {
				story: {
					$set: storyErr2
				}
			});

			console.log(newState_15);

			return newState_15;
		case types.CHANGE_BTN_ADDR:
			let rightBtnAddr = action.rightBtnAddr,
				leftBtnAddr = action.leftBtnAddr;

			const newState_16 = update(state, {
				rightBtnAddr: {
					$set: rightBtnAddr
				},
				leftBtnAddr: {
					$set: leftBtnAddr
				}
			});

			console.log(newState_16);

			return newState_16;
		case types.UPDATE_STORY_SUCCESS:
			let updateSucc = action.updateSucc;

			const newState_17 = update(state, {
				story: {
					$set: updateSucc
				}
			});

			console.log(newState_17);

			return newState_17;
		case types.UPDATE_STORY_ERROR:
			let updateErr = action.updateErr;

			const newState_18 = update(state, {
				story: {
					$set: updateErr
				}
			});

			console.log(newState_18);

			return newState_18;
		case types.CHANGE_ID:
			let id = action.id;

			const newState_19 = update(state, {
				id: {
					$set: id
				}
			});

			console.log(newState_19);

			return newState_19;
		default:
			return state;
	}
};


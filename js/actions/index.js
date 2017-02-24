'use strict';

import 'isomorphic-fetch';

//sync actions

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const changeTitle = (title) => ({
	type: CHANGE_TITLE,
	title
});


export const CHANGE_PHOTO_AREA = 'CHANGE_PHOTO_AREA';
export const changePhotoArea = (photoArea) => ({
	type: CHANGE_PHOTO_AREA,
	photoArea
});

export const CHANGE_RIGHT_BTN_NAME = 'CHANGE_RIGHT_BTN_NAME';
export const changeRightBtnName = (rightBtn) => ({
	type: CHANGE_RIGHT_BTN_NAME,
	rightBtn
});

export const CHANGE_LEFT_BTN_NAME = 'CHANGE_LEFT_BTN_NAME';
export const changeLeftBtnName = (leftBtn) => ({
	type: CHANGE_LEFT_BTN_NAME,
	leftBtn
});

export const GET_TITLE_INPUT = 'GET_TITLE_INPUT';
export const getTitleInput = (userTitle) => ({
	type: GET_TITLE_INPUT,
	userTitle
});

export const GET_STORY_INPUT = 'GET_STORY_INPUT';
export const getStoryInput = (userStory) => ({
	type: GET_STORY_INPUT,
	userStory
});

export const GET_USER_NAME = 'GET_USER_NAME';
export const getUserName = (author) => ({
	type: GET_USER_NAME,
	author
});

export const CHANGE_BTN_ADDR = 'CHANGE_BTN_ADDR';
export const changeBtnAddr = (rightBtnAddr, leftBtnAddr) => ({
	type: CHANGE_BTN_ADDR,
	rightBtnAddr,
	leftBtnAddr
});



//async actions

//get actions

export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const getPhotoSuccess = (photoSucc) => ({
	type: GET_PHOTO_SUCCESS,
	photoSucc
});

export const GET_PHOTO_ERROR = 'GET_PHOTO_ERROR';
export const getPhotoError = (photoErr) => ({
	type: GET_PHOTO_ERROR,
	photoErr
});

export const getPhoto = photo => dispatch => {
	let endpnt = '/random-photo',
		reqOptions = {
			method: 'GET'
		},
		getReq = new Request(endpnt, reqOptions);
	fetch(getReq)
	.then(response => {
		if (!response.ok) {
			let error = new Error(response.statusText);
			error.response;
			throw error;
		}

		return response;
	})
	.then(response => response.json())
	.then(data => dispatch(getPhotoSuccess(data.photo)));
};

export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS';
export const fetchStoriesSuccess = (storiesSucc) => ({
	type: FETCH_STORIES_SUCCESS,
	storiesSucc
});

export const FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR';
export const fetchStoriesError = (storiesErr) => ({
	type: FETCH_STORIES_ERROR,
	storiesErr
});

export const fetchStories = stories => dispatch => {
	let endpnt = '/stories',
		reqOptions = {
			method: 'GET'
		},
		getReq = new Request(endpnt, reqOptions);

		fetch(getReq)
		.then(response => {
			if (!response.ok) {
				const error = new Error(response.statusText);
				error.response = response;

				throw error;
			}

			return response;
		})
		.then(response => response.json())
		.then(data => dispatch(fetchStoriesSuccess(data.stories)))
		.catch(storiesErr => dispatch(fetchStoriesError(storiesErr)));
};

export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const fetchStorySuccess = (storySucc2) => ({
	type: FETCH_STORY_SUCCESS,
	storySucc2
});

export const FETCH_STORY_ERROR = 'FETCH_STORY_ERROR';
export const fetchStoryError = (storyErr2) => ({
	type: FETCH_STORY_ERROR,
	storyErr2
});

export const fetchStory = (storyId) => (dispatch) => {
	let endpnt = `/story/${storyId}`,
		reqOptions = {
			method: 'GET'
		},
		getReq = new Request(endpnt, reqOptions);

		fetch(getReq)
		.then(response => {
			if (!response.ok) {
				const error = new Error(response.statusText);
				error.response = response;

				throw error;
			}

			return response;
		})
		.then(response => response.json())
		.then(data => {console.log(data); dispatch(fetchStorySuccess(data))})
		.catch(storyErr2 => dispatch(fetchStoryError(storyErr2)));
};

//POST actions

export const SAVE_STORY_SUCCESS = 'SAVE_STORY_SUCCESS';
export const saveStorySuccess = (storySucc) => ({
	type: SAVE_STORY_SUCCESS,
	storySucc
});

export const SAVE_STORY_ERROR = 'SAVE_STORY_ERROR';
export const saveStoryError = (storyErr) => ({
	type: SAVE_STORY_ERROR,
	storyErr
});

export const saveStory = story => dispatch => {
	let endpnt = '/story/new',
		reqOptions = {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				userTitle: story.userTitle,
				photo: story.photo,
				userStory: story.userStory,
				author: {
					firstName: story.author.firstName,
					lastName: story.author.lastName
				}
			})
		},
		postReq = new Request(endpnt, reqOptions);

	fetch(postReq)
	.then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText);
			error.response = response;

			throw error;
		}

		return response;
	})
	.then(response => response.json())
	.then(data => dispatch(saveStorySuccess(data.story)))
	.catch(storyErr => dispatch(saveStoryError(storyErr)));
};

//PUT actions

export const UPDATE_STORY_SUCCESS = 'UPDATE_STORY_SUCCESS';
export const updateStorySuccess = (updateSucc) => ({
	type: UPDATE_STORY_SUCCESS,
	updateSucc
});

export const UPDATE_STORY_ERROR = 'UPDATE_STORY_ERROR';
export const updateStoryError = (updateErr) => ({
	type: UPDATE_STORY_ERROR,
	updateErr
});

export const updateStory = (updateStory) => dispatch => {
	let endpnt = `/story/${updateStory.id}`,
		reqOptions = {
			method: 'PUT',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				userTitle: updateStory.userTitle,
				userStory: updateStory.userStory,
				author: {
					firstName: updateStory.author.firstName,
					lastName: updateStory.author.lastName
				}
			})
		},
		postReq = new Request(endpnt, reqOptions);

	fetch(postReq)
	.then(response => {
		if(!response.ok) {
			const error = new Error(response.statusText);
			error.response = response;

			throw error;
		}

		return response;
	})
	.then(response => response.json())
	.then(data => {console.log(data); dispatch(updateStorySuccess(data.story))})
	.catch(updateErr => dispatch(updateStoryError(updateErr)));

};
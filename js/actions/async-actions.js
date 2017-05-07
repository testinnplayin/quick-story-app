'use strict';

import 'isomorphic-fetch';

//GET actions

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

export const getPhoto = () => dispatch => {
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
	let endpnt = '/api/stories',
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
export const fetchStorySuccess = (storySucc) => ({
	type: FETCH_STORY_SUCCESS,
	storySucc
});

export const FETCH_STORY_ERROR = 'FETCH_STORY_ERROR';
export const fetchStoryError = (storyErr) => ({
	type: FETCH_STORY_ERROR,
	storyErr
});

export const fetchStory = (storyId) => (dispatch) => {
	let endpnt = `/api/story/${storyId}`,
		reqOptions = {
			method: 'GET'
		},
		getReq = new Request(endpnt, reqOptions);

		fetch(getReq)
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText)
			}

			return response;
		})
		.then(response => response.json())
		.then(data => {console.log(data, 'success branch'); dispatch(fetchStorySuccess(data))})
		.catch(err => {
			console.error(err, 'error branch');
			dispatch(fetchStoryError(err));
		});
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
	let endpnt = '/api/story/new',
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
			throw Error(response.statusText)
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

export const updateStory = (updateStory, id) => dispatch => {
	let endpnt = `/api/story/${id}`,
		reqOptions = {
			method: 'PUT',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				id: id,
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
		if (!response.ok) {
			throw Error(response.statusText)
		}

		return response;
	})
	.then(response => response.json())
	.then(data => dispatch(updateStorySuccess(data.story)))
	.catch(updateErr => dispatch(updateStoryError(updateErr)));

};

export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS';
export const deleteStorySuccess = (deleteSucc, deleteId) => ({
	type: DELETE_STORY_SUCCESS,
	deleteSucc,
	deleteId
});

export const DELETE_STORY_ERR = 'DELETE_STORY_ERR';
export const deleteStoryErr = (deleteErr) => ({
	type: DELETE_STORY_ERR,
	deleteErr
});

export const deleteStory = (deleteStory, deleteId) => dispatch => {
	let endpnt = `api/story/${deleteId}`,
		reqOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				id: deleteId
			})
		},
		postReq = new Request(endpnt, reqOptions);

	fetch(postReq)
	.then(response => {
		if (!response.ok) {
			throw Error(response.statusText)
		}

		return response;
	})
	.then(response => response.json())
	.then(data => { console.log(data); dispatch(deleteStorySuccess(data)) })
	.catch(deleteErr => dispatch(deleteStoryErr(deleteErr)));
};

'use strict';

import 'isomorphic-fetch';

const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
const getPhotoSuccess = (photoSucc) => ({
	type: GET_PHOTO_SUCCESS,
	photoSucc
});

const GET_PHOTO_ERROR = 'GET_PHOTO_ERROR';
const getPhotoError = (photoErr) => ({
	type: GET_PHOTO_ERROR,
	photoErr
});

const getPhoto = photoSucc => dispatch => {
	let endpnt = '',
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
	.then(data => dispatch(getPhotoSuccess(data.photoSucc)));
};
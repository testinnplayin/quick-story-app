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

export const GET_TITLE_INPUT = 'GET_TITLE_INPUT';
export const getTitleInput = (userTitle) => ({
	type: GET_TITLE_INPUT,
	userTitle
});

//async actions

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

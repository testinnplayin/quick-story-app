'use strict';

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
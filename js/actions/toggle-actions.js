'use strict';

import 'isomorphic-fetch';


export const TOGGLE_PHOTO_LOADING = 'TOGGLE_PHOTO_LOADING';
export const TOGGLE_SHOW_INIT_TEXT_CONT = 'TOGGLE_SHOW_INIT_TEXT_CONT';


export const togglePhotoLoading = (photoIsLoading) => ({
	type : TOGGLE_PHOTO_LOADING,
	photoIsLoading
});

export const toggleShowInitTextCont = showInitTextCont => ({
	type : TOGGLE_SHOW_INIT_TEXT_CONT,
	showInitTextCont
});

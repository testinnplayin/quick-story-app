'use strict';

import 'isomorphic-fetch';

export const CHANGE_BTN_ADDR = 'CHANGE_BTN_ADDR';
export const CHANGE_ID = 'CHANGE_ID';
export const CHANGE_LEFT_BTN_NAME = 'CHANGE_LEFT_BTN_NAME';
export const CHANGE_PHOTO_AREA = 'CHANGE_PHOTO_AREA';
export const CHANGE_RIGHT_BTN_NAME = 'CHANGE_RIGHT_BTN_NAME';
export const GET_STORY_INPUT = 'GET_STORY_INPUT';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const GET_TITLE_INPUT = 'GET_TITLE_INPUT';
export const GET_USER_NAME = 'GET_USER_NAME';

export const changeBtnAddr = (rightBtnAddr, leftBtnAddr) => ({
	type: CHANGE_BTN_ADDR,
	rightBtnAddr,
	leftBtnAddr
});

export const changeId = (id) => ({
	type: CHANGE_ID,
	id
});

export const changeLeftBtnName = (leftBtn) => ({
	type: CHANGE_LEFT_BTN_NAME,
	leftBtn
});

export const changePhotoArea = (photoArea) => ({
	type: CHANGE_PHOTO_AREA,
	photoArea
});

export const changeRightBtnName = (rightBtn) => ({
	type: CHANGE_RIGHT_BTN_NAME,
	rightBtn
});

export const getStoryInput = (userStory) => ({
	type: GET_STORY_INPUT,
	userStory
});

export const changeTitle = (title) => ({
	type: CHANGE_TITLE,
	title
});

export const getTitleInput = (userTitle) => ({
	type: GET_TITLE_INPUT,
	userTitle
});

export const getUserName = (author) => ({
	type: GET_USER_NAME,
	author
});

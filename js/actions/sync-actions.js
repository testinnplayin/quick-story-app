'use strict';

import 'isomorphic-fetch';

export const CHANGE_STUFF = 'CHANGE_STUFF';

export const GET_STORY_INPUT = 'GET_STORY_INPUT';
export const GET_TITLE_INPUT = 'GET_TITLE_INPUT';
export const GET_USER_NAME = 'GET_USER_NAME';

export const changeStuff = stuff => ({
	type : CHANGE_STUFF,
	stuff
});

export const getStoryInput = (userStory) => ({
	type: GET_STORY_INPUT,
	userStory
});

export const getTitleInput = (userTitle) => ({
	type: GET_TITLE_INPUT,
	userTitle
});

export const getUserName = (author) => ({
	type: GET_USER_NAME,
	author
});

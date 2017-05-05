'use strict';

import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import chai from 'chai';
import chaiHTTP from 'chai-http';

const should = chai.should();
chai.use(chaiHTTP);

import * as actions from '../js/actions/index';
import {app, runServer, closeServer} from '../server';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('sync actions', function() {
	it('should create an action to change the main title', function() {
		let title = 'This is the Uberest Title Evar!',
			expectedAction = {
				type: actions.CHANGE_TITLE,
				title
			};

		actions.changeTitle(title).should.be.eql(expectedAction);
	});

	it('should create an action to change the photo area', function() {
		let photoArea = 'Omg! I\'m a photo area!',
			whatExp = {
				type: actions.CHANGE_PHOTO_AREA,
				photoArea
			};

		actions.changePhotoArea(photoArea).should.be.eql(whatExp);
	});

	it('should create an action to change the name on the righthand button', function() {
		let rightBtn = 'Click Me',
			whatExp = {
				type: actions.CHANGE_RIGHT_BTN_NAME,
				rightBtn
			};

		actions.changeRightBtnName(rightBtn).should.be.eql(whatExp);
	});

	it('should create an action to change the name on the lefthand button', function() {
		let leftBtn = 'Click Me',
			whatExp = {
				type: actions.CHANGE_LEFT_BTN_NAME,
				leftBtn
			};

		actions.changeLeftBtnName(leftBtn).should.be.eql(whatExp);
	});

	it('should create an action to change the title of the story based on user input', function() {
		let userTitle = 'Fun is Fun!',
			whatExp = {
				type: actions.GET_TITLE_INPUT,
				userTitle
			};

		actions.getTitleInput(userTitle).should.be.eql(whatExp);
	});

	it('should create an action to store the user\'s story input', function() {
		let userStory = 'Yabba dabba do! Trop de blah blah! Yippity yap, don\'t come back! Yippy skippy!',
			whatExp = {
				type: actions.GET_STORY_INPUT,
				userStory
			};
		actions.getStoryInput(userStory).should.be.eql(whatExp);
	});

	it('should create an action to store the user\'s name', function() {
		let author = {
			firstName : "John",
			lastName : 'Smith'
		},
			whatExp = {
				type: actions.GET_USER_NAME,
				author
			};

		actions.getUserName(author).should.be.eql(whatExp);
	});

	it('should create an action to change the address on a link button', function() {
		let rightBtnAddr = '/',
			leftBtnAddr = '/story/new',
			whatExp = {
				type: actions.CHANGE_BTN_ADDR,
				rightBtnAddr,
				leftBtnAddr
			};

		actions.changeBtnAddr(rightBtnAddr, leftBtnAddr).should.be.eql(whatExp);
	});

	it('should create an action to toggle loading for photos', function() {
		const photoIsLoading = true,
			expectedAction = {
				type : actions.TOGGLE_PHOTO_LOADING,
				photoIsLoading
			};

		actions.togglePhotoLoading(photoIsLoading).should.eql(expectedAction);
	});

	it('should create an action to toggle showing the initial text container', function() {
		const showInitTextCont = true,
			expectedAction = {
				type : actions.TOGGLE_SHOW_INIT_TEXT_CONT,
				showInitTextCont
			};
		actions.toggleShowInitTextCont(showInitTextCont).should.eql(expectedAction);
	});

	it('should create an action to toggle showing the text area form', function() {
		const showTextAreaForm = false,
			expectedAction = {
				type : actions.TOGGLE_SHOW_TEXT_AREA_FORM,
				showTextAreaForm
			};
		actions.toggleShowTextAreaForm(showTextAreaForm).should.eql(expectedAction);
	});
});

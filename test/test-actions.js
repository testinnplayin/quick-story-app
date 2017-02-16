'use strict';

import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import chai from 'chai';
import chaiHTTP from 'chai-http';
import nock from 'nock';

const should = chai.should();
chai.use(chaiHTTP);

import * as actions from '../js/actions/index';
import {app, runServer, closeServer} from '../server';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

// describe('async actions', function() {
// 	afterEach(function() {
// 		nock.cleanAll();
// 	});

// 	it('creates a getPhoto and GET_PHOTO_SUCCESS action when getting photo has been completed', function() {
// 		const photo = "http://www.freedigitalphotos.net/images/img/homepage/394230.jpg";
// 		const expectedActions = [
// 			{ type: actions.GET_PHOTO_SUCCESS, body : { photo : photo }}
// 		];

// 		const store = mockStore({ photo : '' });

// 		nock('localhost:8080')
// 		.get('localhost:8080/random-photo')
// 		.reply(200, { body : { photo : photo } });

		

// 		return store.dispatch(actions.getPhoto(photo))
// 			.then(function() {
// 				let storeActions = store.getActions();

// 				expect(store.getActions()).toEqual(expectedActions);
// 			});
// 	});
// });

describe('Node async actions', function() {
	before(function() {
		return runServer();
	})

	after(function() {
		return closeServer();
	})

	describe('should create an action to save a user\'s story', function() {
		let storyObj = {
			title: 'This is Cool',
			photo: 'http://www.example.com/photo.jpg',
			story: 'Stuff stuff stuff',
			author: {
				firstName: 'John',
				lastName: 'Doe'
			}
		},
		whatExp = [
			{ type : actions.SAVE_STORY_SUCCESS, storySucc },
			{ type: actions.SAVE_STORY, story }
		],
		store = mockStore({
			title: '',
			photo: '',
			story: '',
			author: {
				firstName: '',
				lastName: ''
			}
		});

		return chai.request(app)
			.post('/story/new')
			.send(storyObj)
			.then(function(res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.title.should.equal('')
			});
	});
});


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
		let user = "John Smith",
			whatExp = {
				type: actions.GET_USER_NAME,
				user
			};

		actions.getUserName(user).should.be.eql(whatExp);
	});
});
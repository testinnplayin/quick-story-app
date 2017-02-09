'use strict';

import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
// import chai from 'chai';
import nock from 'nock';

// const should = chai.should();

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


describe('sync actions', function() {
	// it('should create an action to show photo area', function() {
	// 	let photoArea = true,
	// 		expectedAction = {
	// 			type: actions.SHOW_PHOTO_AREA,
	// 			photoArea
	// 		};

	// 	actions.showPhotoArea(photoArea).should.be.eql(expectedAction);
	// });
});
'use strict';

import React from 'react';
import chai from 'chai';

const should = chai.should();

import * as reducers from '../js/reducers/index';
import * as actions from '../js/actions/index';

describe('story reducer', function() {
	// it('should return the initial state if undefined', function() {
	// 	let fakeState = {
	// 		photo: ''
	// 	},
	// 		noAction = { type : 'unknown' };

	// 	reducers.storyReducer(fakeState, noAction).should.eql({ photo : '' });
	// });

	it('should switch titles', function() {
		let fakeState = {
			title: 'Quick Story'
		},
			changeAreaAction = {
				type: actions.CHANGE_TITLE,
				title: 'Thingamajiggy'
			};

		reducers.storyReducer(fakeState, changeAreaAction).should.eql({ title : 'Thingamajiggy' });
	});
});
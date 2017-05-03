import React from 'react';
import chai from 'chai';

const should = chai.should();

import syncReducer from '../js/reducers/syncReducer';
import * as actions from '../js/actions/index';

describe('syncReducer', function() {
  it('should return the initial state if undefined', function() {
		let fakeState = {
				photo : '',
				photoArea : 'Click on Get Random Photo button to begin!',
				buttonName : ['Get Random Photo'],
				title : 'Quick Story'
			},
			noAction = { type : 'unknown' };

		syncReducer(fakeState, noAction).should.eql({
			photo : '',
			photoArea : 'Click on Get Random Photo button to begin!',
			buttonName : ['Get Random Photo'],
			title : 'Quick Story'
		});
	});

  it('should switch titles', function() {
		let fakeState = {
				title: 'Quick Story'
			},
			changeAreaAction = {
				type: actions.CHANGE_TITLE,
				title: 'Thingamajiggy'
			};

		syncReducer(fakeState, changeAreaAction).should.eql({ title : 'Thingamajiggy' });
	});

	it('should switch photo area strings', function() {
		let fakeState = {
			photoArea: 'Click on Get Random Photo button to begin!'
		},
			changePhotoArActn = {
				type: actions.CHANGE_PHOTO_AREA,
				photoArea: 'Stuff stuff stuff'
			};

		syncReducer(fakeState, changePhotoArActn).should.eql({ photoArea: 'Stuff stuff stuff' });
	});

	it('should switch right button strings', function() {
		let fakeState = {
				rightBtn: 'Write'
			},
			changeRightBtnActn = {
				type: actions.CHANGE_RIGHT_BTN_NAME,
				rightBtn: 'Click Me'
			};

		syncReducer(fakeState, changeRightBtnActn).should.eql({ rightBtn : 'Click Me' });
	});

	it('should switch left button strings', function() {
		let fakeState = {
			leftBtn: 'Back'
		},
		changeLeftBtnActn = {
			type: actions.CHANGE_LEFT_BTN_NAME,
			leftBtn: 'Click Me'
		};

		syncReducer(fakeState, changeLeftBtnActn).should.eql({ leftBtn : 'Click Me' });
	});

	it('should set story title to user\'s input', function() {
		let fakeState = {
			userTitle: ''
		},
		getTitleInputActn = {
			type: actions.GET_TITLE_INPUT,
			userTitle: 'I Like Pie'
		};

		syncReducer(fakeState, getTitleInputActn).should.eql({ userTitle : 'I Like Pie' });
	});

	it('should set story to user\'s input', function() {
		let fakeState = {
			userStory: ''
		},
		getStoryInputActn = {
			type: actions.GET_STORY_INPUT,
			userStory: 'Blah blah blah blah'
		};

		syncReducer(fakeState, getStoryInputActn).should.eql({ userStory : 'Blah blah blah blah' });
	});

	it('should set user to user\'s input', function() {
		let fakeState = {
			author: {
				firstName : '',
				lastName : ''
			}
		},
		getUserNameActn = {
			type: actions.GET_USER_NAME,
			author : {
				firstName : 'Stephen',
				lastName : 'King'
			}
		};

		syncReducer(fakeState, getUserNameActn).should.eql({ author : { firstName : 'Stephen', lastName : 'King'} });
	});

	it('should set the address for link buttons', function() {
		let fakeState = {
			rightBtnAddr: '/',
			leftBtnAddr: '/story/new'
		},
		changeBtnAddrActn = {
			type: actions.CHANGE_BTN_ADDR,
			rightBtnAddr: '/nowhere',
			leftBtnAddr: '/nowhere/else'
		};

		syncReducer(fakeState, changeBtnAddrActn).should.eql({ rightBtnAddr : '/nowhere', leftBtnAddr : '/nowhere/else' });
	});
});

'use strict';

import {mount} from 'enzyme';
import React from 'react';
import chai from 'chai';

const should = chai.should();

import {TextAreaContainer} from '../js/containers/text-area-container';

describe('TextAreaContainer component', function() {
	it('should draw a component that will contain the actual text area', function() {
		const fakeProps = {
			submitBtnName : 'Submit',
			userTitle : 'Amazing Story',
			userStory : 'Blah blah blah',
			author : {
				firstName : 'John',
				lastName : 'Smith'
			},
			photo : 'www.example.com/photo.jpg',
			newAuthor : 'John Smith',
			id : '123456'
		},
			wrapper = mount(<TextAreaContainer props={fakeProps} />);
		console.log(wrapper);
	});
});

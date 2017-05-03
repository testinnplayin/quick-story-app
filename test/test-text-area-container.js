'use strict';

import {shallow} from 'enzyme';
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
			wrapper = shallow(<TextAreaContainer props={fakeProps} />),
			div = wrapper.find('div');

		div.node.type.should.equal('div');
		div.node.props.className.should.equal('textAreaContainer');

		const textArea = div.node.props.children;
		textArea.props.props.should.equal(fakeProps);
	});
});

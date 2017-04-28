'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const should = chai.should();
chai.use(sinonChai);

import {TextArea} from '../js/components/text-area';
import * as actions from '../js/actions/index';

describe('TextArea component', function() {
	it('should render a form with divs, labels and a button', function() {
		const fakeProps = {
			submitBtnName : 'Save'
		},
			wrapper = shallow(<TextArea submitBtnName={fakeProps.submitBtnName} />),
			form = wrapper.find('form');

		form.node.type.should.equal('form');
		form.hasClass('textArea');

		const formArr = form.node.props.children;
		formArr.should.be.a('array');
		formArr.should.have.lengthOf(4);

		const button = formArr[3];
		button.props.children.should.equal(fakeProps.submitBtnName);
	});

	it('should have a submit event', function() {
		const storyObj = {
			userTitle : 'The Never Ending Story',
			photo : 'www.example.com/photo.jpg',
			userStory : 'Blah blah blah',
			author : 'John Smith'
		},
			handleSubmitEvent = sinon.spy(),
			dispatch = sinon.spy(),
			wrapper = shallow(
				<TextArea
					props={storyObj}
					dispatch={dispatch}
					handleSubmitEvent={handleSubmitEvent} />
		);

		wrapper.find('button').simulate('submit', function() {
			handleSubmitEvent.should.have.been.called;
			dispatch.should.have.been.calledWith(actions.saveStory, actions.updateStory);
		});
	});
});

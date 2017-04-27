'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const should = chai.should();
chai.use(sinonChai);

import {DeleteAreaButtons} from '../js/components/delete-area-buttons';
import * as actions from '../js/actions/index';

describe('DeleteAreaButtons component', function() {
	it('should render an area with two buttons', function() {
		const wrapper = shallow(<DeleteAreaButtons />);
		const ul = wrapper.find('ul');
		ul.node.type.should.equal('ul');
		ul.node.props.className.should.equal('deleteAreaButtons');

		const ulArr = ul.node.props.children;
		ulArr.should.be.a('array');
		ulArr.should.have.lengthOf(2);
	});

	it('should have a button that allows user to cancel their delete action', function() {
		const fakeProps = {
			title : 'The Best Story Evah',
			photoArea : 'www.example.com/photo.jpg',
			leftBtn : 'Delete',
			id : '12345678',
			rightBtn : 'Edit',
			leftBtnAddr : `story/delete/12345678`,
			rightBtn : `story/edit/12345678`
		},
			handleCancelClick = sinon.spy(),
			dispatch = sinon.spy();

		const wrapper = shallow(
			<DeleteAreaButtons
				props={fakeProps}
				onClick={this.handleCancelClick}
				dispatch={dispatch} />
		);

		wrapper.find('#deleteAreaCancelBtn').simulate('click', function() {
			handleCancelClick.should.have.been.called;
			dispatch.should.have.been.calledWith(
				actions.changeTitle,
				actions.changePhotoArea,
				actions.changeLeftBtnName,
				actions.changeRightBtnName,
				actions.changeBtnAddr,
				actions.changeId
			);
		});
	});
});

'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const should = chai.should();
chai.use(sinonChai);

import {ButtonArea} from '../js/components/button-area';
import * as actions from '../js/actions/index';

describe('ButtonArea component', function() {
	it('should have an area in which other components are rendered', function() {
		const fakeProps = {
			leftBtn : 'Edit',
			leftBtnAddr : '/www.example.com/123',
			photoBtn : 'get photo',
			rightBtn : 'Write',
			rightBtnAddr : '/www.example.com/456'
		};

		const wrapper = shallow(
			<ButtonArea
				leftBtn={fakeProps.leftBtn}
				leftBtnAddr={fakeProps.leftBtnAddr}
				photoBtn={fakeProps.photoBtn}
				rightBtn={fakeProps.rightBtn}
				rightBtnAddr={fakeProps.rightBtnAddr} />
		);

		const section = wrapper.find('section');
		section.node.type.should.equal('section');
		section.node.props.className.should.equal('buttonArea');

		const ul = section.node.props.children;
		const ulArr = ul.props.children;

		const li1 = ulArr[0];
		li1.props.href.should.equal(fakeProps.leftBtnAddr);
		li1.props.children.should.equal(fakeProps.leftBtn);

		const li2 = ulArr[1];
		li2.props.children.should.equal(fakeProps.photoBtn);

		const li3 = ulArr[2];
		li3.props.href.should.equal(fakeProps.rightBtnAddr);
		li3.props.children.should.equal(fakeProps.rightBtn);
	});

	it('should have a leftButton click event', function() {
		const fakeProps = {
			title : 'Write A Story',
			rightBtn : 'Write',
			photoArea : 'www.example.com/photo.jpg',
			leftBtn : 'Back'
		},
			handleLeftClick = sinon.spy(),
			dispatch = sinon.spy();

		const wrapper = shallow(
			<ButtonArea
				props={fakeProps}
				onClick={handleLeftClick}
				dispatch={dispatch} />
		);

		if (fakeProps.title === 'Write A Story') {
			wrapper.find('#leftBtnButtonArea').simulate('click', function() {
				handleLeftClick.should.have.been.called;
				dispatch.should.have.been.calledWith(actions.changeTitle, actions.changePhotoArea);
			});
		}
	});

	it('should have a middle button click event', function() {
		const fakeProps = {
			rightBtn : ''
		},
			handleMiddleClick = sinon.spy(),
			dispatch = sinon.spy();

		const wrapper = shallow(
			<ButtonArea
				props={fakeProps}
				onClick={handleMiddleClick}
				dispatch={dispatch} />
		);

		wrapper.find('#middleBtnButtonArea').simulate('click', function() {
			handleMiddleClick.should.be.called;
			dispatch.should.be.calledWith(actions.changeRightBtnName);
		});
	});

	it('should have a right button click event', function() {
		const fakeProps = {
			rightBtn : '',
			title : 'Your Story'
		},
			handleWriteClick = sinon.spy(),
			dispatch = sinon.spy();

		const wrapper = shallow(
			<ButtonArea
				props={fakeProps}
				onClick={handleWriteClick}
				dispatch={dispatch} />
		);

		if (fakeProps.rightBtn === '' && fakeProps.title === 'Your Story') {
			wrapper.find('#rightBtnButtonArea').simulate('click', function() {
				handleWriteClick.should.be.called;
				dispatch.should.be.calledWith(
					actions.changeLeftBtnName,
					actions.changeTitle,
					actions.changePhotoArea,
					actions.changeBtnAddr
				);
			});
		}
	});
});

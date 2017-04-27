'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const should = chai.should();
chai.use(sinonChai);

import {ButtonArea} from '../js/components/button-area';
import * as actions from '../js/actions/index';

describe('ButtonArea component', function() {
	function iterator(funk, relUrl) {
		funk.type.should.be.a('function');
		funk.type.displayName.should.equal('Link');
		funk.props.to.should.equal(relUrl);
	}

	it('should have an area in which other components are rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<ButtonArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('buttonArea');

		const ul = result.props.children;
		ul.type.should.equal('ul');

		const liArr = ul.props.children;
		liArr.should.be.a('array');
		liArr.should.have.lengthOf(3);
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
});

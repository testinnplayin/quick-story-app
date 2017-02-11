'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {IntroContainer} from '../js/components/intro-container';

describe('IntroContainer component', function() {
	it('should draw a component that contains a section', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<IntroContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('introContainer');

		let childrenArr = result.props.children;
		childrenArr.should.be.a('array');
		childrenArr.should.have.lengthOf(2);
	});
});
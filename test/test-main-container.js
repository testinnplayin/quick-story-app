'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {MainContainer} from '../js/components/main-container';

describe('MainContainer component', function() {
	it('should render an element that contains a navbar and a div', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MainContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('mainContainer');

		let mainArr = result.props.children;
		mainArr.should.be.a('array');
		mainArr.should.have.lengthOf(2);

	});
});
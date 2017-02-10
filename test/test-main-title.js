'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {MainTitle} from '../js/components/main-title';

describe('MainTitle component', function() {
	it('should render a title that fits the appropriate view', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MainTitle />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('mainTitle');

		let h1 = result.props.children;
		h1.type.should.equal('h1');
		// h1.props.children.should.be.a('string');

	});
});
'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {MainArea} from '../js/components/main-area';

describe('MainArea component', function() {
	it('should render an element with the appropriate elements', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MainArea />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('mainArea');
		result.type.should.equal('section');
		// result.props.children[0].should.be.a('object');
	});
});
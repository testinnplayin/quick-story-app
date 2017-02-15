'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {TextAreaContainer} from '../js/components/text-area-container';

describe('TextAreaContainer component', function() {
	it('should draw a component that will contain the actual text area', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TextAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('textAreaContainer');

		result.props.children.should.be.a('object');
		result.props.children.type.should.be.a('function');
	});
});
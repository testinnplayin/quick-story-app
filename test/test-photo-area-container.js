'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {PhotoAreaContainer} from '../js/components/photo-area-container';

describe('PhotoAreaContainer component', function() {
	it('should have an area in which PhotoArea component is rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<PhotoAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('photoAreaContainer');

		console.log(result);

		result.props.children.should.be.a('object');
		
	});
});
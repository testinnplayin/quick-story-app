'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {PhotoAreaContainer} from '../js/components/photo-area-container';

describe('PhotoAreaContainer component', function() {
	it('should render a component with a div', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<PhotoAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('photoAreaContainer');

		
	});
});
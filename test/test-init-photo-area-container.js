'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {InitPhotoAreaContainer} from '../js/components/init-photo-area-container';

describe('InitPhotoAreaContainer component', function() {
	it('should render a component with a div', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<InitPhotoAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('initPhotoAreaContainer');

		
	});
});
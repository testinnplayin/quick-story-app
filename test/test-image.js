'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {Image} from '../js/components/image';

describe('Image component', function() {
	it('should render an image', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Image />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('img');
		result.props.className.should.equal('image');

		console.log(result);
	});
});
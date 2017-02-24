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

		result.type.should.equal('div');
		result.props.className.should.equal('image');

		const img = result.props.children;
		img.type.should.equal('img');

		let keys = Object.keys(img.props);
		keys.should.have.lengthOf(3);

		let expectedKeys = ['src', 'className', 'alt'];

		for (let i = 0; i < keys.length; i++) {
			keys[i].should.equal(expectedKeys[i]);
		}

	});
});
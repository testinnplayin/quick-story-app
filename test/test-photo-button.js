'use strict';

import React from 'react';
import chai from 'chai';
import TestUtils from 'react-addons-test-utils';

const should = chai.should();

import {PhotoButton} from '../js/components/photo-button';

describe('PhotoButton component', function() {
	it('should have the appropriate fields', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<PhotoButton />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('button');

		result.props.className.should.equal('photoButton');

		let onClick = result.props.onClick;

		onClick.should.be.a('function');
		
		result.props.children.should.equal('Get New Photo');
	});
});
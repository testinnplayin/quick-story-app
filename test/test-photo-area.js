'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {PhotoArea} from '../js/components/photo-area';

describe('PhotoArea component', function() {
	it('should render a component with all necessary elements', function() {
		const fakePhoto = 'http://example.com/photo.jpg';

		const renderer = TestUtils.createRenderer();
		renderer.render(<PhotoArea photo={fakePhoto} />);

		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('photoArea');

		let img = result.props.children;
		img.type.should.equal('img');
		img.props.src.should.equal(fakePhoto);
		img.props.src.should.be.a('string');
		img.props.alt.should.be.a('string');
	})
});
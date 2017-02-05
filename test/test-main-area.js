'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import MainArea from '../js/components/main-area';

describe('MainArea component', function() {
	it('should render an element with the appropriate elements', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MainArea />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('mainArea');

		const button = result.props.children;
		button.type.should.equal('button');
		button.props.className.should.equal('get-photo-btn');
		button.props.children.should.equal('Get New Photo');
	});
});
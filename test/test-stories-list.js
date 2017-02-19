'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import StoriesList from '../js/components/stories-list';

describe('StoriesList component', function() {
	it('should render a component that lists stories', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<StoriesList />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('ul');
		result.props.className.should.equal('storiesList');
	})
});
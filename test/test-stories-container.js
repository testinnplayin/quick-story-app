'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {StoriesContainer} from '../js/components/stories-container';

describe('StoriesContainer component', function() {
	it('should draw a container that will hold a list of storiess', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<StoriesContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('main');
		result.props.className.should.equal('storiesContainer');

	});
});
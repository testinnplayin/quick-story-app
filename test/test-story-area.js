'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {StoryArea} from '../js/components/story-area';

describe('StoryArea component', function() {
	it('should render a component with all necessary elements', function() {
		const fakePhoto = 'http://example.com/photo.jpg';

		const renderer = TestUtils.createRenderer();
		renderer.render(<StoryArea photo={fakePhoto} />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('storyArea');
	})
});
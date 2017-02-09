'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {StoryMainArea} from '../js/components/story-main-area';

describe('StoryMainArea component', function() {
	it('should render a component with all necessary elements', function() {
		const fakePhoto = 'http://example.com/photo.jpg';

		const renderer = TestUtils.createRenderer();
		renderer.render(<StoryMainArea photo={fakePhoto} />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('storyMainArea');
	})
});
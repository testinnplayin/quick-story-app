'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {StoryAreaContainer} from '../js/components/story-area-container';

describe('StoryAreaContainer component', function() {
	it('should draw a story area container which contains the story', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<StoryAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('storyAreaContainer container-fluid');

		const obj = result.props.children;
		obj.should.be.a('object');
	});

});
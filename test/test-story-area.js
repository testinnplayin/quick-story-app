'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {StoryArea} from '../js/components/story-area';

describe('StoryArea component', function() {
	it('should draw a story area which renders the story', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<StoryArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('storyArea');

		const divArr = result.props.children;
		divArr.should.be.a('array');
		divArr.should.have.lengthOf(3);
	});

});
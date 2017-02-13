'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {StoryContainer} from '../js/components/story-container';

describe('StoryContainer component', function() {
	it('should have an area in which other components are rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<StoryContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('main');
		result.props.className.should.equal('storyContainer');

		const mainArr = result.props.children;
		mainArr.should.be.a('array');
		mainArr.should.have.lengthOf(2);

		const section = mainArr[1];
		section.type.should.equal('section');
		section.props.className.should.equal('storyAreaSection');

		// const sectionArr = section.props.children;
		// sectionArr.should.be.a('array');
		// sectionArr.should.have.lengthOf(2);
	});
});
'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {StoryContainer} from '../js/components/story-container';

describe('StoryContainer component', function() {

	function iterator(funk, expectedKeys) {
		let keys = Object.keys(funk.props),
			lng = keys.length;

		funk.type.should.be.a('function');
		funk.should.be.a('object');

		for (let i = 0; i < lng; i++) {
			keys[i].should.equal(expectedKeys[i]);
		}
	}

	it('should have an area in which other components are rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<StoryContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('main');
		result.props.className.should.equal('storyContainer container-fluid');

		const mainArr = result.props.children;
		mainArr.should.be.a('array');
		mainArr.should.have.lengthOf(2);

		const section = mainArr[1];
		section.type.should.equal('section');
		section.props.className.should.equal('storyAreaSection');

		const sectionArr = section.props.children;
		sectionArr.should.be.a('array');
		sectionArr.should.have.lengthOf(3);

		const funk1 = sectionArr[0],
			expectedKeys1 = ['photo', 'photoArea'];
			
		iterator(funk1, expectedKeys1);
		
		const funk2 = sectionArr[2],
			expectedKeys2 = ['photoBtn', 'leftBtn', 'leftBtnAddr', 'rightBtn', 'rightBtnAddr', 'handleWriteClick', 'handleLeftClick', 'handleMiddleClick', 'title', 'photoArea'];

		iterator(funk2, expectedKeys2);
	});
});
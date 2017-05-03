'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';

const should = chai.should();

import {StoryContainer} from '../js/containers/story-container';

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
		const fakeProps = {
			id : '123456789',
			leftBtn : 'Hai',
			leftBtnAddr : '/somewhere',
			photo : 'www.example.com/photo.jpg',
			photoArea : 'blah blah blah',
			photoBtn : 'Press Here',
			rightBtn : 'Bai',
			rightBtnAddr : '/elsewhere',
			title : 'Supercallafradgulisticespyallagoshiss'
		},
			wrapper = shallow(
				<StoryContainer
					photo={fakeProps.photo}
					photoArea={fakeProps.photoArea}
					props={fakeProps}
					title={fakeProps.title} />
			),
			main = wrapper.find('main');

		main.node.type.should.equal('main');
		main.node.props.className.should.equal('storyContainer container-fluid');

		const mainArr = main.node.props.children;
		mainArr.should.be.a('array');
		mainArr.should.have.lengthOf(2);

		const mainTitle = mainArr[0];
		mainTitle.props.title.should.equal(fakeProps.title);

		const section = mainArr[1];
		section.type.should.equal('section');
		section.props.className.should.equal('storyAreaSection');

		const sectionArr = section.props.children;
		sectionArr.should.be.a('array');
		sectionArr.should.have.lengthOf(3);

		const photoAreaContainer = sectionArr[0];
		photoAreaContainer.props.photo.should.equal(fakeProps.photo);
		photoAreaContainer.props.photoArea.should.equal(fakeProps.photoArea);

		const buttonArea = sectionArr[2];
		buttonArea.props.props.should.equal(fakeProps);
	});
});

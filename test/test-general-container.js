'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';

const should = chai.should();

import {GeneralContainer} from '../js/containers/general-container';

describe('GeneralContainer component', function() {
	it('should draw a component that contains a main with a section', function() {
		const fakeProps = {
			title : 'Amazing Story',
			buttonNames : ['Edit', 'Write'],
			photo : 'www.example.com/photo.jpg',
			photoArea : 'Blah blah blah',
			photoBtn : 'Get Photo'
		},
			wrapper = shallow(
				<GeneralContainer
					title={fakeProps.title}
					buttonNames={fakeProps.buttonNames}
					photo={fakeProps.photo}
					photoArea={fakeProps.photoArea}
					photoBtn={fakeProps.photoBtn} />
			);

		const main = wrapper.find('main');
		main.hasClass('generalContainer container-fluid');

		const mainArr = main.node.props.children;
		mainArr.should.be.a('array');
		mainArr.should.have.lengthOf(2);

		const mainTitle = mainArr[0];
		mainTitle.props.title.should.equal(fakeProps.title);

		const photoAreaContainer = mainArr[1];
		photoAreaContainer.props.photo.should.equal(fakeProps.photo);
		photoAreaContainer.props.photoArea.should.equal(fakeProps.photoArea);
		photoAreaContainer.props.photoBtn.should.equal(fakeProps.photoBtn);
	});
});

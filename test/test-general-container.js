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
			photoArea : 'www.example.com/photo.jpg',
			photoBtn : 'Get Photo'
		},
			wrapper = shallow(
				<GeneralContainer
					title={fakeProps.title}
					buttonNames={fakeProps.buttonNames}
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

		const section = wrapper.find('.generalArea');
		section.hasClass('generalArea');

		const sectionArr = section.node.props.children;
		sectionArr.should.be.a('array');
		sectionArr.should.have.lengthOf(2);

		const initPhotoAreaContainer = sectionArr[0];
		initPhotoAreaContainer.props.photoArea.should.equal(fakeProps.photoArea);

		const initTextAreaContainer = sectionArr[1];
		initTextAreaContainer.props.photoBtn.should.equal(fakeProps.photoBtn);
	});
});

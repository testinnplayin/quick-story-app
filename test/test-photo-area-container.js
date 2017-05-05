'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';

const should = chai.should();

import {PhotoAreaContainer} from '../js/containers/photo-area-container';

describe('PhotoAreaContainer component', function() {
	it('should have an area in which the ImageContainer component is shown as loading if photoIsLoading is true', function() {
		const fakeProps = {
			photoIsLoading : true
		},
			wrapper = shallow(<PhotoAreaContainer photoIsLoading={fakeProps.photoIsLoading} />),
			section = wrapper.find('section');
		section.node.props.className.should.equal('photoAreaContainer');

		if (fakeProps.photoIsLoading) {
			const h3 = section.node.props.children;
			h3.type.should.equal('h3');
		}
	});

	it('should have an area in which the image component is shown is photoIsLoading is false', function() {
		const fakeProps = {
			photoIsLoading : false,
			photo : 'www.example.com/photo.jpg',
			photoBtn : 'Click Me'
		},
			wrapper = shallow(<PhotoAreaContainer
				photo={fakeProps.photo}
				photoBtn={fakeProps.photoBtn}
				photoIsLoading={fakeProps.photoIsLoading} />),
			section = wrapper.find('section');

		if (!fakeProps.photoIsLoading) {
			const sectionArr = section.node.props.children;
			sectionArr.should.be.a('array');
			sectionArr.should.have.lengthOf(2);

			const image = sectionArr[1];
			image.props.photo.should.equal(fakeProps.photo);
			image.props.photoBtn.should.equal(fakeProps.photoBtn);
		}
	});
});

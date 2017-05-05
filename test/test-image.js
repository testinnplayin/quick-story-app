'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';

const should = chai.should();

import {ImageContainer} from '../js/components/image';

describe('ImageContainer component', function() {
	it('should render an image', function() {
		const fakeProps = {
			photo : 'www.example.com/photo.jpg',
			photoBtn : "Click Me"
		},
			wrapper = shallow(
				<ImageContainer
					photo={fakeProps.photo}
					photoBtn={fakeProps.photoBtn} />
			),
			div = wrapper.find('div');

		div.node.type.should.equal('div');
		div.node.props.className.should.equal('image');
		const style = div.node.props.style;
		style.backgroundImageContainer.should.equal(`url('${fakeProps.photo}')`);

		const initTextAreaContainer = div.node.props.children;
		initTextAreaContainer.props.photoBtn.should.equal(fakeProps.photoBtn);
	});
});

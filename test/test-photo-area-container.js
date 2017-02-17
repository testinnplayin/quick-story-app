'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {PhotoAreaContainer} from '../js/components/photo-area-container';

describe('PhotoAreaContainer component', function() {
	it('should have an area in which PhotoArea component is rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<PhotoAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('photoAreaContainer');
		
		let sectionArr = result.props.children;
		sectionArr.should.be.a('array');
		sectionArr.should.have.lengthOf(2);

		const p = sectionArr[0];
		p.type.should.equal('p');

		const funkObj = sectionArr[1];
		funkObj.type.should.be.a('function');

		let key = 'photo';
		let funkKey = Object.keys(funkObj.props);

		funkKey[0].should.equal(key);
		
	});
});
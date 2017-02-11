'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {GeneralContainer} from '../js/components/general-container';

describe('GeneralContainer component', function() {
	it('should draw a component that contains a main with a section', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<GeneralContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('main');
		result.props.className.should.equal('generalContainer');
		
		const mainArr = result.props.children;
		mainArr.should.be.a('array');
		mainArr.should.have.lengthOf(2);

		const section = mainArr[1];
		section.type.should.equal('section');
		section.props.className.should.equal('generalArea');

		const sectionArr = section.props.children;
		sectionArr.should.be.a('array');
		sectionArr.should.have.lengthOf(2);
	});
});
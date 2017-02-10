'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {MainContainer} from '../js/components/main-container';

describe('MainContainer component', function() {
	it('should render an element that contains a navbar and a main section', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MainContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('mainContainer');

		let funk = result.props.children[0];
		funk.type.should.be.a('function');

		let main = result.props.children[1];
		main.type.should.equal('main');
		
	});
});
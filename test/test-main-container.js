'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {MainContainer} from '../js/components/main-container';

describe('MainContainer component', function() {
	it('should render an element that contains a navbar', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MainContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('mainContainer');

		console.log(result.props.children);

		let funk = result.props.children[0];
		funk.type.should.be.a('function');

		let main = result.props.children[1];
		main.type.should.equal('main');
		

		// let section = main.props.children;
		// section.type.should.equal('section');
		// section.props.className.should.equal('main-title');

		// let instructionArr = section.props.children;
		// instructionArr.should.be.a('array');
		// instructionArr.should.have.lengthOf(2);

		// let h1 = instructionArr[0];
		// h1.type.should.equal('h1');
		// h1.props.children.should.be.a('string');

		// let p = instructionArr[1];
		// p.type.should.equal('p');
		// p.props.children.should.be.a('string');
	});
});
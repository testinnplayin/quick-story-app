'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {NavBar} from '../js/components/navbar';

describe('Navbar component', function() {
	it('should draw a navbar with two links', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<NavBar />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('header');
		result.props.className.should.equal('navBar');

		let nav = result.props.children;
		nav.type.should.equal('nav');

		let ul = nav.props.children;
		ul.type.should.equal('ul');

		let liArr = ul.props.children;
		liArr.should.be.a('array');
		liArr.should.have.lengthOf(2);

		liArr[0].type.should.equal('li');
		liArr[0].props.className.should.equal('homeButton');

		liArr[1].type.should.equal('li');
		liArr[1].props.className.should.equal('storiesButton');
	});
});
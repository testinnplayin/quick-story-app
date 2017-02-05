'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Navbar from '../js/components/navbar';

describe('Navbar component', function() {
	it('should render the appropriate compomnent', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Navbar />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('header');

		const nav = result.props.children;
		nav.type.should.equal('nav');
		nav.props.className.should.equal('navbar navbar-default');

		const ul = nav.props.children;
		ul.type.should.equal('ul');

		for (let i = 0; i < 1; i++) {
			const li = ul.props.children[i];
			li.type.should.equal('li');
			li.props.children.type.should.equal('a');
		}
		

	});
});
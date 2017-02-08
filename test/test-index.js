'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {MainContainer} from '../js/components/main-container';

describe('MainContainer component', function() {
	it('should render the overarching container', function() {
		

		const renderer = TestUtils.createRenderer();
		renderer.render(<MainContainer />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('mainContainer');

		const main = result.props.children[1];
		main.type.should.equal('main');

		const section = main.props.children[0]
		section.props.className.should.equal('introductory-section');
		section.type.should.equal('section');

		const h1 = section.props.children[0];
		h1.type.should.equal('h1');
		h1.props.children.should.equal('Quick Story!');

		const span = section.props.children[1];
		span.type.should.equal('span');
		
		const strong = span.props.children;
		strong.type.should.equal('strong');
		strong.props.children.should.be.a('string');
		strong.props.children.should.equal('The random photo story app');

		const p = section.props.children[2];
		p.type.should.equal('p');
	});
});
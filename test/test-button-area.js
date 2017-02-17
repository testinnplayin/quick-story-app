'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {ButtonArea} from '../js/components/button-area';

describe('ButtonArea component', function() {
	function iterator(funk, relUrl) {
		funk.type.should.be.a('function');
		funk.type.displayName.should.equal('Link');
		funk.props.to.should.equal(relUrl);
	}

	it('should have an area in which other components are rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<ButtonArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('buttonArea');

		const ul = result.props.children;
		ul.type.should.equal('ul');

		const liArr = ul.props.children;
		liArr.should.be.a('array');
		liArr.should.have.lengthOf(3);

		let lng = liArr.length,
			expectedVals = ['/', '/story', '/story/new'];

		for (let i = 0; i < lng; i++) {
			liArr[i].type.should.equal('li');
			liArr[i].props.children.type.should.be.a('function');
			liArr[i].props.children.props.to.should.equal(expectedVals[i]);
		}
	});
});
'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {DeleteAreaButtons} from '../js/components/delete-area-buttons';

describe('DeleteAreaButtons component', function() {
	it('should render an area with two buttons', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<DeleteAreaButtons />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('ul');

		result.props.className.should.equal('deleteAreaButtons');
		result.props.children.should.be.a('array');
		result.props.children.should.have.lengthOf(2);

		let li = result.props.children[0];
		li.type.should.equal('li');
		li.props.className.should.equal('back-btn');

		let button = result.props.children[1];
		button.type.should.equal('button');
		button.props.className.should.equal('delete-btn');
	})
});
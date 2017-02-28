'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {DeleteAreaContainer} from '../js/components/delete-area-container';

describe('DeleteAreaContainer component', function() {
	it('should render a component that contains two buttons and some text', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<DeleteAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('deleteAreaContainer');
		result.props.children.should.be.a('array');
		result.props.children.should.have.lengthOf(2);
	});
});
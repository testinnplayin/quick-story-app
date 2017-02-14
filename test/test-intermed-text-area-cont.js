'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {IntermedTextAreaCont} from '../js/components/intermed-text-area-cont';

describe('IntermedTextAreaCont component', function() {
	it('should have an area in which other components are rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<IntermedTextAreaCont />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('intermedTextAreaCont');

		const aFunk = result.props.children;
		aFunk.type.should.be.a('function');
		aFunk.type.displayName.should.equal('Link');
		aFunk.props.to.should.equal('/story/new');

	});
});
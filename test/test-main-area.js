'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {MainArea} from '../js/components/main-area';

describe('MainArea component', function() {
	it('should render an element with the appropriate elements', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<MainArea />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('mainArea');
		result.type.should.equal('section');

		let div = result.props.children[1];
		div.type.should.equal('div');
		div.props.className.should.equal('photo');
		console.log(div);
	});
});
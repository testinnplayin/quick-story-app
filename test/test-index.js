'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Hello from '../js/components/hello';

describe('Hello component', function() {
	it('should render a greeting', function() {
		let str = 'Hello World!';

		const renderer = TestUtils.createRenderer();
		renderer.render(<Hello />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('hello');

		let p = result.props.children;
		p.type.should.equal('p');
		p.props.children.should.equal(str);
	});
});
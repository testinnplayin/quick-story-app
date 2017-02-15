'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {TextArea} from '../js/components/text-area';

describe('TextArea component', function() {
	it('should render a form with a text area', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TextArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('form');
		result.props.className.should.equal('textArea');

		const input = result.props.children;
		input.type.should.equal('input');
		input.props.type.should.equal('textarea');
		
	});
});
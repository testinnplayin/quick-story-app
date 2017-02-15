'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {TextArea} from '../js/components/text-area';

describe('TextArea component', function() {
	it('should render a form with a label, text area and button', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TextArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('form');
		result.props.className.should.equal('textArea');

		const formArr = result.props.children;
		formArr.should.be.a('array');
		formArr.should.have.lengthOf(3);

		const label = formArr[0];
		label.type.should.equal('label');

		const input = formArr[1];
		input.type.should.equal('input');
		input.props.type.should.equal('textarea');

		const button = formArr[2];
		button.type.should.equal('button');
		button.props.type.should.equal('submit');

	});
});
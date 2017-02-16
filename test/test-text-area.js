'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {TextArea} from '../js/components/text-area';

describe('TextArea component', function() {
	it('should render a form with labels, two text inputs, one text area input and a button', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TextArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('form');
		result.props.className.should.equal('textArea');

		const formArr = result.props.children;
		formArr.should.be.a('array');
		formArr.should.have.lengthOf(7);

		const label1 = formArr[0];
		label1.type.should.equal('label');
		label1.props.htmlFor.should.equal('title-input')
		label1.props.children.should.equal('Title:');

		const input1 = formArr[1];
		input1.type.should.equal('input');
		input1.props.type.should.equal('text');
		input1.props.id.should.equal('title-input');
		input1.props.onChange.should.be.a('function');

		const label2 = formArr[2];
		label2.type.should.equal('label');
		label2.props.htmlFor.should.equal('story-area');
		label2.props.children.should.equal('Write story below:');

		const input2 = formArr[3];
		input2.type.should.equal('input');
		input2.props.type.should.equal('textarea');
		input2.props.id.should.equal('story-area');

		const label3 = formArr[4];
		label3.type.should.equal('label');
		label3.props.htmlFor.should.equal('author-input');
		label3.props.children.should.equal('By:')

		const input3 = formArr[5];
		input3.type.should.equal('input');
		input3.props.type.should.equal('text');
		input3.props.id.should.equal('author-input');

		const button = formArr[6];
		button.type.should.equal('button');
		button.props.type.should.equal('submit');

	});
});
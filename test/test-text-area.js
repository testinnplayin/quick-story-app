'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const should = chai.should();
chai.use(sinonChai);

import {TextArea} from '../js/components/text-area';

describe('TextArea component', function() {
	it('should render a form with labels and a button', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TextArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('form');
		result.props.className.should.equal('textArea');
		result.props.onSubmit.should.be.a('function');

		const formArr = result.props.children;
		formArr.should.be.a('array');
		formArr.should.have.lengthOf(7);

		const label1 = formArr[0];
		label1.type.should.equal('label');
		label1.props.htmlFor.should.equal('title-input')
		label1.props.children.should.equal('Title:');

		const label2 = formArr[2];
		label2.type.should.equal('label');
		label2.props.htmlFor.should.equal('story-area');
		label2.props.children.should.equal('Write story below:');

		const label3 = formArr[4];
		label3.type.should.equal('label');
		label3.props.htmlFor.should.equal('author-input');
		label3.props.children.should.equal('By:')

		const button = formArr[6];
		button.type.should.equal('button');
		button.props.type.should.equal('submit');

	});
});
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
	it('should render a form with divs, labels and a button', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TextArea />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('form');
		result.props.className.should.equal('textArea');
		result.props.onSubmit.should.be.a('function');

		const formArr = result.props.children;
		formArr.should.be.a('array');
		formArr.should.have.lengthOf(4);

		let lng = formArr.length;

		for (let i = 0; i < lng -1; i++) {
			let div = formArr[i];

			div.type.should.equal('div');
			div.props.className.should.equal('form-group');

			let divArr = div.props.children;
			divArr.should.be.a('array');
			divArr.should.have.lengthOf(2);
			divArr[0].type.should.equal('label');

		}

		const button = formArr[3];
		button.type.should.equal('button');
		button.props.type.should.equal('submit');

	});
});
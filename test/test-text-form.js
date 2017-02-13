'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {TextForm} from '../js/components/text-form';

describe('TextForm component', function() {
	it('should draw a text form with textarea input and a button', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TextForm />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('form');
		result.props.className.should.equal('textForm');

		
	});
});
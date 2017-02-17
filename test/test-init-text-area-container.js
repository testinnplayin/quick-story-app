'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {InitTextAreaContainer} from '../js/components/init-text-area-container';

describe('InitTextAreaContainer component', function() {
	it('should be a div', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<InitTextAreaContainer />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('initTextAreaContainer');
	});
});
'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {IntermedTextAreaCont} from '../js/components/intermed-text-area-cont';

describe('IntermedTextAreaCont component', function() {
	function iterator(funk, relUrl) {
		funk.type.should.be.a('function');
		funk.type.displayName.should.equal('Link');
		funk.props.to.should.equal(relUrl);
	}

	it('should have an area in which other components are rendered', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<IntermedTextAreaCont />);

		const result = renderer.getRenderOutput();
		result.type.should.equal('section');
		result.props.className.should.equal('intermedTextAreaCont');

		const funkArr = result.props.children;
		funkArr.should.be.a('array');
		funkArr.should.have.lengthOf(3);

		let lng = funkArr.length,
			expectedUrls = ['/', '/story', '/story/new'];

		for (let i = 0; i < lng; i++) {
			let relUrl = expectedUrls[i];

			iterator(funkArr[i], relUrl);
		}
	});
});
'use strict';

import {shallow} from 'enzyme';
import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const should = chai.should();
chai.use(sinonChai);

import {NavBar} from '../js/components/navbar';
import * as actions from '../js/actions/index';

describe('Navbar component', function() {
	it('should draw a navbar with two links', function() {
		const wrapper = shallow(<NavBar />);

		const header = wrapper.find('header');
		header.node.type.should.equal('header');
		header.node.props.className.should.equal('navBar');

		const nav = header.node.props.children;
		// nav.type.should.equal('nav');

		const ulArr = nav.props.children.props.children.props.children;
		ulArr.should.be.a('array');
		ulArr.should.have.lengthOf(2)
	});

	it('should have a home click that takes the user back to the index page', function() {
		const handleHomeClick = sinon.spy(),
			dispatch = sinon.spy();

		const wrapper = shallow(<NavBar onClick={handleHomeClick} dispatch={dispatch} />);
		wrapper.find('#navbarHomeClick').simulate('click', function() {
			handleHomeClick.should.be.called;
			dispatch.should.be.calledWith(actions.changeTitle, actions.changePhotoArea);
		});
	});
});

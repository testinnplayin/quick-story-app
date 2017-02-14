'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class TextForm extends React.Component {
	constructor(props) {
		super(props);

		// this.handleOnChangeEvent = this.handleOnChangeEvent.bind(this);
	}

	render() {
		return (
			<form className="textForm">
				<Link to="/story">{this.props.buttonName}</Link>
			</form>
		);
	}
};

export default connect()(TextForm);
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions/index';

export class TextForm extends React.Component {
	constructor(props) {
		super(props);

		// this.handleGetPhoto = this.handleGetPhoto.bind(this);
		// this.handleOnChangeEvent = this.handleOnChangeEvent.bind(this);
	}

	// handleGetPhoto(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();

	// 	console.log('submit triggered');

	// 	let title = 'Write A Story';

	// 	this.props.dispatch(actions.getPhoto());
	// 	this.props.dispatch(actions.changeTitle(title));

	// 	return false;
	// }

	// handleOnChangeEvent() {

	// }

	// <input type="textarea" onChange={handleOnChangeEvent} />
					// <button type="submit">Submit</button>


	render() {
		return (
			<form className="textForm">
				<Link to="/story">{this.props.buttonName}</Link>
			</form>
		);
	}
};

export default connect()(TextForm);
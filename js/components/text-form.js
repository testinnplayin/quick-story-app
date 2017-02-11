'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class TextForm extends React.Component {
	constructor(props) {
		super(props);

		// this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
		// this.handleOnChangeEvent = this.handleOnChangeEvent.bind(this);
	}

	// handleSubmitEvent(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();



	// 	return false;
	// }

	// handleOnChangeEvent() {

	// }

	// <input type="textarea" onChange={handleOnChangeEvent} />
					// <button type="submit">Submit</button>


	render() {
		return (
			<form className="textForm">
				<button type="button">{this.props.buttonName}</button>
			</form>
		);
	}
};

export default connect()(TextForm);
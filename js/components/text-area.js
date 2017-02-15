'use strict';

import React from 'react';
import {connect} from 'react-redux';

export class TextArea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="textArea">
				<label htmlFor="story-area">Write story below:</label>
				<input type="textarea" id="story-area" name="story-area" />
				<button type="submit">{this.props.submitBtnName}</button>
			</form>
		);
	}
};

export default connect()(TextArea);
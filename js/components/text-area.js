'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class TextArea extends React.Component {
	constructor(props) {
		super(props);

		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	handleTitleChange(e) {
		let userTitle = e.target.value;

		this.props.dispatch(actions.getTitleInput(userTitle));
	}

	render() {
		return (
			<form className="textArea">
				<label htmlFor="title-input">Title:</label>
				<input type="text" id="title-input" name="title-input" onChange={this.handleTitleChange} />
				<label htmlFor="story-area">Write story below:</label>
				<input type="textarea" id="story-area" name="story-area" />
				<label htmlFor="author-input">By:</label>
				<input type="text" id="author-input" name="author-input" />
				<button type="submit">{this.props.submitBtnName}</button>
			</form>
		);
	}
};

export default connect()(TextArea);
'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class TextArea extends React.Component {
	constructor(props) {
		super(props);

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleStoryChange = this.handleStoryChange.bind(this);
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
	}

	handleTitleChange(e) {
		let userTitle = e.target.value;

		this.props.dispatch(actions.getTitleInput(userTitle));
	}

	handleStoryChange(e) {
		let userStory = e.target.value;

		this.props.dispatch(actions.getStoryInput(userStory));
	}

	handleAuthorChange(e) {
		let user = e.target.value,
			userArr = user.split(' '),
			firstName = userArr[0],
			lastName = userArr[1],
			author = {
				firstName : firstName,
				lastName : lastName
			};

		this.props.dispatch(actions.getUserName(author));
	}

	handleSubmitEvent(e) {
		e.preventDefault();
		e.stopPropagation();

		// let userTitle = this.props.userTitle;

		let story = {
			userTitle : this.props.userTitle,
			photo : this.props.photo,
			userStory : this.props.userStory,
			author : this.props.author,
		};

		console.log(story);

		this.props.dispatch(actions.saveStory(story));
	}

	render() {
		return (
			<form className="textArea" onSubmit={this.handleSubmitEvent}>
				<label htmlFor="title-input">Title:</label>
				<input type="text" id="title-input" name="title-input" onChange={this.handleTitleChange} />
				<label htmlFor="story-area">Write story below:</label>
				<input type="textarea" id="story-area" name="story-area" onChange={this.handleStoryChange} />
				<label htmlFor="author-input">By:</label>
				<input type="text" id="author-input" name="author-input" onChange={this.handleAuthorChange} />
				<button type="submit">{this.props.submitBtnName}</button>
			</form>
		);
	}
};

export default connect()(TextArea);
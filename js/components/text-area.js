'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

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

		let story = {
			userTitle : this.props.userTitle,
			photo : this.props.photo,
			userStory : this.props.userStory,
			author : this.props.author
		},
			title = this.props.title;

		(title === 'Write A Story') ? this.props.dispatch(actions.saveStory(story)) : this.props.dispatch(actions.updateStory(story));			

		browserHistory.push('/stories');
	}

	render() {
		return (
			<form className="textArea" onSubmit={this.handleSubmitEvent}>
				<div className="form-group">
					<label htmlFor="title-input">Title:</label>
					<input type="text" id="title-input" name="title-input" onChange={this.handleTitleChange} className="form-control" placeholder={this.props.userTitle} />
				</div>
				<div className="form-group">
					<label htmlFor="story-area">Write story below:</label>
					<textarea className="form-control" rows="3" onChange={this.handleStoryChange} placeholder={this.props.userStory}></textarea>
				</div>
				<div className="form-group">
					<label htmlFor="author-input">By:</label>
					<input type="text" id="author-input" name="author-input" onChange={this.handleAuthorChange} className="form-control" placeholder={this.props.newAuthor} />
				</div>
				<button type="submit">{this.props.submitBtnName}</button>
			</form>
		);
	}
};

export default connect()(TextArea);